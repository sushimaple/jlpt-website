import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import { Test } from "@/models/Test";

const VALID_LEVELS = ["n5", "n4", "n3", "n2", "n1"] as const;
const VALID_SECTIONS = [
  "vocabulary",
  "grammar",
  "reading",
  "listening",
] as const;

type LevelParam = (typeof VALID_LEVELS)[number];
type SectionParam = (typeof VALID_SECTIONS)[number];

export default async function LevelCategoryPage({
  params,
}: {
  params: Promise<{ level: string; category: string }>;
}) {
  const { level, category } = await params;
  const levelParam = level.toLowerCase();
  const categoryParam = category.toLowerCase();

  if (!VALID_LEVELS.includes(levelParam as LevelParam)) {
    notFound();
  }

  if (!VALID_SECTIONS.includes(categoryParam as SectionParam)) {
    notFound();
  }

  await connectDB();

  const tests = await Test.find({
    level: levelParam.toUpperCase(),
    section: categoryParam,
  }).lean();

  const levelLabel = levelParam.toUpperCase();
  const sectionLabel =
    categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);

  return (
    <section className="space-y-6 max-w-4xl mx-auto shadow-2xl p-10 rounded-lg bg-[#CAE9F5]">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">
          JLPT {levelLabel} {sectionLabel} Tests
        </h2>
      </header>

      {tests.length === 0 ? (
        <p className="text-muted-foreground">
          No tests found for this section yet. go to:
          http://localhost:3000/api/seed to seed your database
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {tests.map((test, i) => (
            <a
              key={test._id.toString()}
              href={`/levels/${levelParam}/${categoryParam}/${test._id}`}
              className="group block rounded-xl border-2 border-[#A8D8E8] p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] bg-white hover:bg-[#CAE9F5]/40 hover:border-[#7EC8E3] font-sans"
            >
              <p className="text-xs font-semibold text-[#34495E] mb-2 uppercase tracking-widest">
                Test {i + 1}
              </p>
              <p className="text-sm font-medium text-[#5D6D7E] mb-3">
                {test.questions.length} questions
              </p>
              <p className="font-semibold text-[#2C3E50] group-hover:text-[#1a5276]">
                Start Practice →
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
