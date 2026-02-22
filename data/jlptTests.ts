import type { JLPTLevel, JLPTSection, TestQuestion } from "@/models/Test";

export interface JLPTTestDefinition {
  level: JLPTLevel;
  section: JLPTSection;
  title: string;
  questions: TestQuestion[];
}

export const jlptTests: JLPTTestDefinition[] = [
  {
    level: "N5",
    section: "vocabulary",
    title: "N5 Basic Vocabulary 1",
    questions: [
      {
        question: "「水」 means:",
        options: ["water", "fire", "tree", "mountain"],
        correctIndex: 0,
        explanation: "「水」（みず） means water.",
      },
      {
        question: "「大きい」 is closest to:",
        options: ["small", "big", "fast", "slow"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N4",
    section: "grammar",
    title: "N4 〜ている Form",
    questions: [
      {
        question: "Choose the correct 〜ている form of 「食べる」.",
        options: ["食べます", "食べている", "食べたい", "食べられる"],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N3",
    section: "reading",
    title: "N3 Short Passage 1",
    questions: [
      {
        question: "What is the main topic of the passage?",
        options: ["Weather", "Work", "Travel", "Food"],
        correctIndex: 2,
      },
    ],
  },
  {
    level: "N2",
    section: "listening",
    title: "N2 Conversation 1",
    questions: [
      {
        question: "What is the man's problem?",
        options: [
          "He lost his wallet",
          "He missed the train",
          "He is late for work",
          "He forgot an appointment",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    level: "N1",
    section: "reading",
    title: "N1 Complex Text 1",
    questions: [
      {
        question: "The author mainly criticizes:",
        options: [
          "Modern technology",
          "Traditional values",
          "Globalization",
          "Environmental policies",
        ],
        correctIndex: 2,
      },
    ],
  },
];
