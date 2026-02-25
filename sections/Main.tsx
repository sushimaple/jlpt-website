"use client";

import Link from "next/link";

const SECTIONS = [
  { name: "Grammar", key: "grammar" },
  { name: "Vocabulary", key: "vocabulary" },
  { name: "Listening", key: "listening" },
  { name: "Reading", key: "reading" },
] as const;

const LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;

const levelColors: Record<(typeof LEVELS)[number], string> = {
  N5: "bg-[#F39C12]",
  N4: "bg-[#34495E]",
  N3: "bg-[#27AE60]",
  N2: "bg-[#D35400]",
  N1: "bg-[#C0392B]",
};

export default function Main() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-20">
      {LEVELS.map((level) => (
        <div
          key={level}
          className="mb-8 overflow-hidden rounded-xl bg-[#3F4254] shadow-2xl"
        >
          <h2
            className={`py-4 text-center text-2xl font-semibold text-white ${levelColors[level]}`}
          >
            JLPT {level} resources
          </h2>
          <div className="grid grid-cols-2 gap-6 bg-white p-8">
            {SECTIONS.map(({ name, key }) => (
              <Link
                key={key}
                href={`/levels/${level.toLowerCase()}/${key}`}
                className="py-4 text-center font-semibold text-black transition hover:scale-105"
              >
                {level} {name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
