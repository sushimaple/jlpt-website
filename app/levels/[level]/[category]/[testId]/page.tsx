"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import type { TestQuestion } from "@/models/Test";
import Image from "next/image";
import { ArrowBigLeftDash, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

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
      <div className="text-center p-8">
        Test not found. Seed DB first: GET /api/seed
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
  const percentage = Math.round((score / total) * 100);

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

  const getOptionClassName = (selected: boolean, correct: boolean): string => {
    const base = `flex items-center p-3 rounded-lg cursor-pointer hover:bg-muted transition-colors border ${selected ? "scale-102 border-2 border-blue-600 shadow-xl " : "scale-100"}`;
    if (!submitted) {
      return (
        base +
        (selected
          ? " bg-white text-primary font-medium"
          : "")
      );
    }
    if (selected && correct)
      return base + " bg-green-100 border-green-500 text-green-900 font-medium";
    if (selected && !correct)
      return base + " bg-red-200 border-red-500 text-red-900 font-medium";
    if (correct && !selected)
      return base + " bg-green-50 border-green-500 text-green-800 font-medium";
    return base + " bg-muted/30";
  };

  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <header className="space-y-2 pb-4 border-b-2 border-[#A8D8E8] font-sans">
        <h1 className="text-3xl font-bold text-[#2C3E50] tracking-tight">
          {test.title}
        </h1>
        <p className="text-sm font-medium text-[#5D6D7E] uppercase tracking-wide">
          JLPT {test.level} &middot;{" "}
          {test.section.charAt(0).toUpperCase() + test.section.slice(1)}
        </p>
      </header>

      <form className="space-y-6">
        {test.questions.map((q, index) => {
          const userSelected = userAnswers[index];
          const isListening = test.section === "listening";
          return (
            <div
              key={index}
              className="p-6 shadow-xl rounded-lg space-y-4 bg-card bg-[#CAE9F5]"
            >
              {isListening && q.imageUrl && (
                <div className="flex justify-center mb-4">
                  <img
                    src={q.imageUrl}
                    alt={`Question ${index + 1}`}
                    className="max-w-md rounded-lg border shadow-sm"
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

              {q.passage && q.passage.trim() && (
                <div className="bg-slate-100 p-4 rounded border border-slate-200 dark:border-slate-700 whitespace-pre-wrap text-xl leading-relaxed mb-4">
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
                      className={getOptionClassName(selected, correct)}
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
          <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={handlePrevTest}
                disabled={!hasPrev}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors text-lg"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>
              
            {!submitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-3 bg-sky-400 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors text-lg hover:scale-101"
              >
                Check Answers ({userAnswers.filter((a) => a !== -1).length}/
                {total} answered)
              </button>
            ) : (
              <div className="flex justify-center items-center">
                <div className="flex text-center px-8 py-3 gap-2 rounded-xl shadow-xl border border-sky-200/60 bg-gradient-to-br from-[#CAE9F5] to-sky-100">
                <button
                    onClick={handleRetry}
                    className="px-6 py-2.5 bg-sky-400 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors shadow-sm hover:scale-[1.02]"
                  >
                    Retry
                  </button>
                  <h2 className="text-3xl font-bold text-sky-800 mb-1 self-center">
                    {score}/{total}
                  </h2>
                  
                </div>
              </div>
            )}
            <button
                type="button"
                onClick={handleNextTest}
                disabled={!hasNext}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors text-lg"
              >
                <ArrowRightIcon className="w-6 h-6" />
              </button>
          </div>
      </form>
      <div className="flex justify-center items-center">
      <button
        onClick={() => router.push(`/levels/${level}/${category}`)}
        className="flex items-center justify-center border border-gray-300/60 rounded-lg w-40 h-12 shadow-2xl hover:scale-105 transition-all gap-2 bg-[#f2f2f2]"
      >
        <ArrowBigLeftDash />Back to Tests
      </button>
      </div>
    </section>
  );
}
