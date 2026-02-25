import mongoose, { Document, Model, Schema } from "mongoose";

export type JLPTLevel = "N5" | "N4" | "N3" | "N2" | "N1";
export type JLPTSection = "vocabulary" | "grammar" | "reading" | "listening";

export interface TestQuestion {
  passage?: string;
  audioUrl?: string;
  imageUrl?: string;
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

const LEVELS = ["N5", "N4", "N3", "N2", "N1"];
const SECTIONS = ["vocabulary", "grammar", "reading", "listening"];

const TestSchema = new Schema<TestDocument>(
  {
    level: { type: String, enum: LEVELS, required: true, index: true },
    section: { type: String, enum: SECTIONS, required: true, index: true },
    testNumber: { type: Number, required: true },
    questions: [
      {
        passage: String,
        audioUrl: String,
        imageUrl: String,
        question: { type: String, required: true },
        options: { type: [String], required: true },
        correctIndex: { type: Number, required: true },
        explanation: String,
      },
    ],
  },
  { timestamps: true },
);

export const Test: Model<TestDocument> =
  mongoose.models.Test || mongoose.model<TestDocument>("Test", TestSchema);
