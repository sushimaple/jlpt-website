import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Test } from "@/models/Test";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ testId: string }> },
) {
  try {
    const { testId } = await params;
    await connectDB();
    const test = await Test.findById(testId).lean();
    if (!test) {
      return NextResponse.json({ error: "Test not found" }, { status: 404 });
    }
    return NextResponse.json(test);
  } catch (err) {
    console.error("Error fetching test:", err);
    return NextResponse.json({ error: "Failed to fetch test" }, { status: 500 });
  }
}
