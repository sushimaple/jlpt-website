import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Test } from "@/models/Test";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ level: string; category: string }> },
) {
  try {
    const { level, category } = await params;
    await connectDB();

    const tests = await Test.find({
      level: level.toUpperCase(),
      section: category.toLowerCase(),
    })
      .sort({ testNumber: 1 })
      .select("_id")
      .lean();

    const testIds = tests.map((t) => t._id.toString());
    return NextResponse.json({ testIds });
  } catch (err) {
    console.error("Error fetching test IDs:", err);
    return NextResponse.json({ error: "Failed to fetch tests" }, { status: 500 });
  }
}
