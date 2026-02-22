import { NextResponse } from "next/server";
import { seedJLPTTests } from "@/lib/seedTests";

export async function GET() {
  try {
    await seedJLPTTests();
    return NextResponse.json({
      ok: true,
      message: "JLPT tests seeded successfully.",
    });
  } catch (error) {
    console.error("Seed failed:", error);
    const message = error instanceof Error ? error.message : "Seed failed.";
    const isAuthError =
      message.toLowerCase().includes("auth") ||
      message.toLowerCase().includes("authentication failed");

    return NextResponse.json(
      {
        ok: false,
        message: isAuthError
          ? "MongoDB authentication failed. In .env, check: (1) Username and password are correct. (2) If the password has special characters (@ # : / % etc.), URL-encode them (e.g. @ → %40). (3) In Atlas: Database Access → user has correct password; Network Access allows your IP or 0.0.0.0/0."
          : message,
      },
      { status: 500 }
    );
  }
}
