import connectDB from "@/lib/db";
import { Test } from "@/models/Test";
import { jlptTests } from "@/data/jlptTests";

export async function seedJLPTTests() {
  await connectDB();

  const operations = jlptTests.map((test) => ({
    updateOne: {
      filter: {
        level: test.level,
        section: test.section,
        title: test.title,
      },
      update: {
        $set: test,
      },
      upsert: true,
    },
  }));

  await Test.bulkWrite(operations);
}

