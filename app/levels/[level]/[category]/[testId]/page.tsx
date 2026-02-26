"use client";

import { ArrowBigLeftDash, ArrowLeft, ArrowRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { TestQuestion } from "@/models/Test";

interface TestData {
  _id: string;
  title: string;
  level: string;
  section: string;
  questions: TestQuestion[];
}

export default function TestPage() {
  const params = useParams();
  const router = useRouter();
  const level = params.level as string;
  const category = params.category as string;
  const testId = params.testId as string;
  const [test, setTest] = useState<TestData | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [testIds, setTestIds] = useState<string[]>([]);

  useEffect(() => {
    if (!testId) return;
    const loadTest = async () => {
      try {
        const res = await fetch(`/api/tests/${testId}`);
        const data = await res.json();
        if (data) {
          setTest(data);
          setUserAnswers(new Array(data.questions.length).fill(-1));
        }
      } finally {
        setLoading(false);
      }
    };
    loadTest();
  }, [testId]);

  useEffect(() => {
    if (!level || !category) return;
    const loadTestIds = async () => {
      try {
        const res = await fetch(`/api/levels/${level}/${category}`);
        const data = await res.json();
        if (data?.testIds) setTestIds(data.testIds);
      } catch {
        // ignore
      }
    };
    loadTestIds();
  }, [level, category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        Loading test...
      </div>
    );
  }

  if (!test) {
    return (
      <div className="p-8 text-center">
        Test not found. Hit <code>/api/seed</code> to seed the database.
      </div>
    );
  }

  const total = test.questions.length;
  const score = submitted
    ? userAnswers.reduce(
        (acc, ans, i) =>
          ans === test.questions[i].correctIndex ? acc + 1 : acc,
        0,
      )
    : 0;

  const handleAnswerChange = (qIndex: number, selected: number) => {
    if (submitted) return;
    setUserAnswers((prev) => {
      const updated = [...prev];
      // Clicking the already-selected option deselects it
      updated[qIndex] = prev[qIndex] === selected ? -1 : selected;
      return updated;
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSubmitted(false);
    setUserAnswers((prev) => prev.map(() => -1));
  };

  const currentIndex = testIds.indexOf(testId);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex >= 0 && currentIndex < testIds.length - 1;

  const handlePrevTest = () => {
    if (hasPrev)
      router.push(`/levels/${level}/${category}/${testIds[currentIndex - 1]}`);
  };

  const handleNextTest = () => {
    if (hasNext)
      router.push(`/levels/${level}/${category}/${testIds[currentIndex + 1]}`);
  };

  function optionClass(selected: boolean, correct: boolean) {
    const base =
      "flex items-center gap-3 rounded-lg border p-3 transition-colors cursor-pointer hover:bg-muted " +
      (selected
        ? "border-2 border-blue-600 bg-white font-medium shadow-md "
        : "");
    if (!submitted) return base;
    if (selected && correct)
      return base + " bg-green-100 border-green-500 text-green-900";
    if (selected && !correct)
      return base + " bg-red-200 border-red-500 text-red-900";
    if (correct && !selected)
      return base + " bg-green-50 border-green-500 text-green-800";
    return base + " bg-muted/30";
  }

  const sectionLabel =
    test.section.charAt(0).toUpperCase() + test.section.slice(1);

  return (
    <section className="mx-auto max-w-4xl space-y-6">
      <header className="border-b-2 border-[#A8D8E8] pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-[#2C3E50]">
          {test.title}
        </h1>
        <p className="text-center text-2xl font-medium uppercase tracking-wide text-[#5D6D7E]">
          JLPT {test.level} · {sectionLabel}
        </p>
      </header>

      <form className="space-y-6">
        {test.questions.map((q, index) => {
          const userSelected = userAnswers[index];
          const isListening = test.section === "listening";
          return (
            <div
              key={index}
              className="space-y-4 rounded-lg bg-[#CAE9F5] p-6 shadow-xl"
            >
              {isListening && q.imageUrl && (
                <div className="mb-4 flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={q.imageUrl}
                    alt={`Question ${index + 1}`}
                    className="max-w-md rounded-lg border shadow-sm object-fit w-full h-full"
                  />
                </div>
              )}

              {isListening && q.audioUrl && (
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg flex items-center justify-center">
                  <audio
                    controls
                    className="w-full max-w-sm h-10"
                    style={{ accentColor: "hsl(var(--primary))" }}
                  >
                    <source src={q.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}

              {q.passage?.trim() && (
                <div className="mb-4 rounded border border-slate-200 bg-slate-100 p-4 text-xl leading-relaxed whitespace-pre-wrap dark:border-slate-700 dark:bg-slate-800">
                  {q.passage}
                </div>
              )}

              <div className="font-bold text-xl">
                <span>{index + 1}. </span>
                {q.question}
              </div>

              <div
                className={isListening ? "grid grid-cols-2 gap-3" : "space-y-3"}
              >
                {q.options.map((option, optIndex) => {
                  const selected = userSelected === optIndex;
                  const correct = optIndex === q.correctIndex;
                  return (
                    <label
                      key={optIndex}
                      className={optionClass(selected, correct)}
                      onClick={(e) => {
                        if (submitted) return;
                        e.preventDefault();
                        handleAnswerChange(index, optIndex);
                      }}
                    >
                      <input
                        type="radio"
                        name={`q${index}`}
                        className="mr-3 h-5 w-5 focus:ring-primary pointer-events-none"
                        checked={selected}
                        readOnly
                        disabled={submitted}
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>

              {submitted && q.explanation && (
                <div className="pt-2 pb-2 px-3 bg-muted/50 rounded text-sm italic">
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={handlePrevTest}
            disabled={!hasPrev}
            className="rounded-lg bg-gray-200 px-3 py-2 sm:px-4 sm:py-2 text-base sm:text-lg font-semibold text-gray-800 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200 touch-manipulation"
          >
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-lg bg-sky-400 px-4 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-lg font-semibold text-white transition-colors hover:scale-[1.02] hover:bg-sky-500 touch-manipulation min-w-0"
            >
              <span className="">Check </span>
              {userAnswers.filter((a) => a !== -1).length}/{total}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRetry}
              className="rounded-lg bg-sky-400 px-4 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-lg font-semibold text-white shadow-sm transition-colors hover:scale-[1.02] hover:bg-sky-500 touch-manipulation"
            >
              Retry{" "}
              <span className="text-sm sm:text-lg">
                {score}/{total}
              </span>
            </button>
          )}
          <button
            type="button"
            onClick={handleNextTest}
            disabled={!hasNext}
            className="rounded-lg bg-gray-200 px-3 py-2 sm:px-4 sm:py-2 text-base sm:text-lg font-semibold text-gray-800 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200 touch-manipulation"
          >
            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </form>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => router.push(`/levels/${level}/${category}`)}
          className="flex h-12 w-40 items-center justify-center gap-2 rounded-lg border border-gray-300/60 bg-[#f2f2f2] shadow-lg transition-transform hover:scale-105"
        >
          <ArrowBigLeftDash className="h-5 w-5" />
          Back to tests
        </button>
      </div>
    </section>
  );
}
