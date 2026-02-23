import fs from "fs";
import path from "path";
import type { JLPTLevel, JLPTSection, TestQuestion } from "@/models/Test";

interface ParsedTest {
  level: JLPTLevel;
  section: JLPTSection;
  testNumber: number;
  questions: TestQuestion[];
}

const LEVELS: JLPTLevel[] = ["N5", "N4", "N3", "N2", "N1"];

function mapSectionName(dirName: string): JLPTSection | null {
  const key = dirName.trim().toLowerCase();
  if (key.startsWith("vocab")) return "vocabulary";
  if (key.startsWith("gram")) return "grammar";
  if (key.startsWith("read")) return "reading";
  if (key.startsWith("listen")) return "listening";
  return null;
}

function parseTestFile(filePath: string): TestQuestion[] | null {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");

    const questions: TestQuestion[] = [];
    let currentQuestion = "";
    let currentOptions: string[] = [];
    let currentNumber = 0;
    let answerKey: Record<number, number> = {};

    // First pass: extract answer key
    let inAnswerKey = false;
    for (const line of lines) {
      if (line.includes("Answer Key:") || line.includes("Answers:")) {
        inAnswerKey = true;
        continue;
      }
      if (inAnswerKey && line.match(/Question \d+:/)) {
        const match = line.match(/Question (\d+):\s*(\d+)/);
        if (match) {
          answerKey[parseInt(match[1])] = parseInt(match[2]) - 1; // Convert to 0-indexed
        }
      }
    }

    // Second pass: extract questions and options
    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();

      // Skip answer key section
      if (line.includes("Answer Key:") || line.includes("Answers:")) {
        break;
      }

      // Check if line starts with a number (question marker)
      const questionMatch = line.match(/^(\d+)\.\s+(.+)/);
      if (questionMatch) {
        // Save previous question if exists
        if (currentNumber > 0 && currentOptions.length > 0) {
          const correctIndex = answerKey[currentNumber] ?? 0;
          questions.push({
            question: currentQuestion,
            options: currentOptions,
            correctIndex: Math.min(correctIndex, currentOptions.length - 1),
          });
        }

        // Start new question
        currentNumber = parseInt(questionMatch[1]);
        currentQuestion = questionMatch[2];
        currentOptions = [];
      } else if (
        line &&
        !line.includes("Reading Passage") &&
        currentNumber > 0
      ) {
        // This is an option
        currentOptions.push(line);
      }

      i++;
    }

    // Save last question
    if (currentNumber > 0 && currentOptions.length > 0) {
      const correctIndex = answerKey[currentNumber] ?? 0;
      questions.push({
        question: currentQuestion,
        options: currentOptions,
        correctIndex: Math.min(correctIndex, currentOptions.length - 1),
      });
    }

    return questions.length > 0 ? questions : null;
  } catch (error) {
    console.error(`Error parsing ${filePath}:`, error);
    return null;
  }
}

function getTestNumber(filePath: string): number {
  const filename = path.basename(filePath);
  const nums = filename.match(/\d+/g);
  return nums && nums.length > 0 ? parseInt(nums[nums.length - 1], 10) : 1;
}

function generateTests(): ParsedTest[] {
  const testsDir = path.join(process.cwd(), "TestsData");
  const tests: ParsedTest[] = [];

  for (const level of LEVELS) {
    const levelDir = path.join(testsDir, level);
    if (!fs.existsSync(levelDir)) continue;

    const entries = fs.readdirSync(levelDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const sectionName = entry.name;
      const mapped = mapSectionName(sectionName);
      if (!mapped) continue;

      const sectionDir = path.join(levelDir, sectionName);
      const files = fs
        .readdirSync(sectionDir)
        .filter((f) => f.toLowerCase().endsWith(".txt"))
        .sort((a, b) => getTestNumber(a) - getTestNumber(b));

      for (const file of files) {
        const filePath = path.join(sectionDir, file);
        const questions = parseTestFile(filePath);

        if (questions && questions.length > 0) {
          const testNumber = getTestNumber(file);
          tests.push({
            level,
            section: mapped,
            testNumber,
            questions,
          });
        }
      }
    }
  }

  return tests.sort((a, b) => {
    const levelOrder = { N5: 0, N4: 1, N3: 2, N2: 3, N1: 4 };
    const sectionOrder: Record<JLPTSection, number> = {
      vocabulary: 0,
      grammar: 1,
      reading: 2,
      listening: 3,
    };

    const levelDiff = levelOrder[a.level] - levelOrder[b.level];
    if (levelDiff !== 0) return levelDiff;

    const sectionDiff = sectionOrder[a.section] - sectionOrder[b.section];
    if (sectionDiff !== 0) return sectionDiff;

    return a.testNumber - b.testNumber;
  });
}

function generateTypeScriptCode(tests: ParsedTest[]): string {
  let code = `import type { JLPTLevel, JLPTSection, TestQuestion } from "@/models/Test";

export interface JLPTTestDefinition {
  level: JLPTLevel;
  section: JLPTSection;
  testNumber: number;
  questions: TestQuestion[];
}

export const jlptTests: JLPTTestDefinition[] = [
`;

  for (const test of tests) {
    code += `  {
    level: "${test.level}",
    section: "${test.section}",
    testNumber: ${test.testNumber},
    questions: [
`;

    for (const q of test.questions) {
      code += `      {
        question: "${escapeString(q.question)}",
        options: [${q.options.map((o) => `"${escapeString(o)}"`).join(", ")}],
        correctIndex: ${q.correctIndex},
      },
`;
    }

    code += `    ],
  },
`;
  }

  code += `];
`;

  return code;
}

function escapeString(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\n/g, "\\n")
    .replace(/\r/g, "\\r")
    .replace(/\t/g, "\\t");
}

async function main() {
  console.log("Parsing test files...");
  const tests = generateTests();
  console.log(`Found ${tests.length} test files`);

  const code = generateTypeScriptCode(tests);
  const outputPath = path.join(process.cwd(), "data", "jlptTests.ts");

  fs.writeFileSync(outputPath, code);
  console.log(`Generated ${outputPath}`);
}

main().catch(console.error);
