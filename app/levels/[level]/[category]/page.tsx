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
    <section className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">
          JLPT {levelLabel} {sectionLabel} Tests
        </h2>
        <p className="text-muted-foreground">
          Practice {sectionLabel.toLowerCase()} for JLPT {levelLabel}.
        </p>
      </header>

      {tests.length === 0 ? (
        <p className="text-muted-foreground">
          No tests found for this section yet. Run `npx tsx lib/seedTxtTests.ts`
          after setting MONGODB_URI.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <a
              key={test._id.toString()}
              href={`/${test._id.toString()}`}
              className="group block rounded-lg border p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-card hover:bg-accent text-card-foreground"
            >
              <h3 className="text-xl font-semibold group-hover:underline mb-1">
                {test.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {test.questions.length} questions
              </p>
              <p className="font-medium text-primary group-hover:text-primary/90">
                Start Practice →
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
