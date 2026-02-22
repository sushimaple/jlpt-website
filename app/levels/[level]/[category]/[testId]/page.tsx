"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

interface TestQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

interface TestData {
  _id: string;
  title: string;
  level: string;
  section: string;
  questions: TestQuestion[];
}

export default function TestPage() {
  const params = useParams();
  const testId = params.testId as string;
  const [test, setTest] = useState<TestData | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!testId) return;
    fetch(`/api/tests/${testId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setTest(data);
          setUserAnswers(new Array(data.questions.length).fill(-1));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [testId]);

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
    const newAnswers = [...userAnswers];
    newAnswers[qIndex] = selected;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRetry = () => {
    setSubmitted(false);
    setUserAnswers(userAnswers.map(() => -1));
  };

  return (
    <section className="space-y-6 max-w-4xl mx-auto">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">{test.title}</h1>
        <p className="text-sm text-muted-foreground">
          JLPT {test.level} &middot;{" "}
          {test.section.charAt(0).toUpperCase() + test.section.slice(1)}
        </p>
      </header>

      <form className="space-y-6">
        {test.questions.map((q, index) => {
          const userSelected = userAnswers[index];
          const isCorrect = q.correctIndex === userSelected;
          const correctOpt = q.correctIndex;
          return (
            <div
              key={index}
              className="p-6 border rounded-lg space-y-4 bg-card"
            >
              <div className="font-medium text-lg">{q.question}</div>
              <div className="space-y-3">
                {q.options.map((option, optIndex) => {
                  const selected = userSelected === optIndex;
                  const correct = optIndex === q.correctIndex;
                  let labelClass =
                    "flex items-center p-3 rounded-lg cursor-pointer hover:bg-muted transition-colors border";
                  if (submitted) {
                    if (selected && correct) {
                      labelClass +=
                        " bg-green-100 border-green-300 text-green-900 font-medium";
                    } else if (selected && !correct) {
                      labelClass += " bg-red-100 border-red-300 text-red-900";
                    } else if (correct && !selected) {
                      labelClass +=
                        " bg-green-50 border-green-200 text-green-800 font-medium";
                    } else {
                      labelClass += " bg-muted/30";
                    }
                  } else {
                    labelClass += selected
                      ? " bg-primary/10 border-primary/30 text-primary font-medium"
                      : "";
                  }
                  return (
                    <label key={optIndex} className={labelClass}>
                      <input
                        type="radio"
                        name={`q${index}`}
                        className="mr-3 h-5 w-5 text-primary focus:ring-primary"
                        checked={selected}
                        onChange={() => handleAnswerChange(index, optIndex)}
                        disabled={submitted}
                      />
                      {option}
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
        <div className="pt-6 border-t">
          {!submitted ? (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              Check Answers ({userAnswers.filter((a) => a !== -1).length}/
              {total} answered)
            </button>
          ) : (
            <div className="text-center p-8 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {score}/{total} ({percentage}%)
              </h2>
              <div className="space-x-4">
                <button
                  onClick={handleRetry}
                  className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
}
