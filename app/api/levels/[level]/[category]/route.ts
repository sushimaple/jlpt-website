import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Test } from "@/models/Test";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ level: string; category: string }> },
) {
  try {
    const { level, category } = await params;
    const levelParam = level.toLowerCase();
    const categoryParam = category.toLowerCase();

    await connectDB();

    const tests = await Test.find({
      level: levelParam.toUpperCase(),
      section: categoryParam,
    })
      .sort({ testNumber: 1 })
      .select("_id")
      .lean();

    const testIds = tests.map((t) => t._id.toString());

    return NextResponse.json({ testIds });
  } catch (error) {
    console.error("Error fetching test IDs:", error);
    return NextResponse.json(
      { error: "Failed to fetch tests" },
      { status: 500 },
    );
  }
}
