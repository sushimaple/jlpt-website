import mongoose, { Schema, Document, Model } from "mongoose";

export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";

export type JLPTSection = "vocabulary" | "grammar" | "reading" | "listening";

export interface TestQuestion {
  passage?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface TestDocument extends Document {
  level: JLPTLevel;
  section: JLPTSection;
  testNumber: number;
  questions: TestQuestion[];
}

const TestSchema = new Schema<TestDocument>(
  {
    level: {
      type: String,
      enum: ["N5", "N4", "N3", "N2", "N1"],
      required: true,
      index: true,
    },
    section: {
      type: String,
      enum: ["vocabulary", "grammar", "reading", "listening"],
      required: true,
      index: true,
    },
    testNumber: {
      type: Number,
      required: true,
    },
    questions: [
      {
        passage: {
          type: String,
        },
        question: {
          type: String,
          required: true,
        },
        options: {
          type: [String],
          required: true,
          validate: {
            validator: (v: string[]) => Array.isArray(v) && v.length >= 2,
            message: "Each question must have at least two options.",
          },
        },
        correctIndex: {
          type: Number,
          required: true,
        },
        explanation: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Test: Model<TestDocument> =
  mongoose.models.Test || mongoose.model<TestDocument>("Test", TestSchema);
