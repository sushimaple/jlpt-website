import { notFound } from "next/navigation";
import Link from "next/link";
import connectDB from "@/lib/db";
import { Test } from "@/models/Test";

const VALID_LEVELS = ["n5", "n4", "n3", "n2", "n1"] as const;
const VALID_SECTIONS = ["vocabulary", "grammar", "reading", "listening"] as const;

export default async function LevelCategoryPage({
  params,
}: { params: Promise<{ level: string; category: string }> }) {
  const { level, category } = await params;
  const levelParam = level.toLowerCase();
  const categoryParam = category.toLowerCase();

  if (!VALID_LEVELS.includes(levelParam as (typeof VALID_LEVELS)[number])) {
    notFound();
  }
  if (!VALID_SECTIONS.includes(categoryParam as (typeof VALID_SECTIONS)[number])) {
    notFound();
  }

  await connectDB();
  const tests = await Test.find({
    level: levelParam.toUpperCase(),
    section: categoryParam,
  }).lean();

  const levelLabel = levelParam.toUpperCase();
  const sectionLabel = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);

  return (
    <section className="mx-auto max-w-4xl space-y-6 rounded-lg bg-[#CAE9F5] p-10 shadow-2xl">
      <header>
        <h2 className="border-b-2 border-[#A8D8E8] pb-2 text-center text-3xl font-medium tracking-wide text-[#5D6D7E]">
          JLPT {levelLabel} {sectionLabel} tests
        </h2>
      </header>

      {tests.length === 0 ? (
        <p className="text-[#5D6D7E]">
          No tests here yet. Visit <code className="rounded bg-white/60 px-1">/api/seed</code> to seed the database.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test, i) => (
            <Link
              key={test._id.toString()}
              href={`/levels/${levelParam}/${categoryParam}/${test._id}`}
              className="block rounded-xl border-2 border-[#A8D8E8] bg-white p-6 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:border-[#7EC8E3] hover:bg-[#CAE9F5]/40 hover:shadow-xl group"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#34495E]">
                Test {i + 1}
              </p>
              <p className="mb-3 text-sm font-medium text-[#5D6D7E]">
                {test.questions.length} questions
              </p>
              <p className="font-semibold text-[#2C3E50] group-hover:text-[#1a5276]">
                Start practice →
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
