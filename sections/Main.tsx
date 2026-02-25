"use client";

import Link from "next/link";

export default function Main() {
  const SECTIONS = [
    { name: "Grammar", key: "grammar" },
    { name: "Vocabulary", key: "vocabulary" },
    { name: "Listening", key: "listening" },
    { name: "Reading", key: "reading" },
  ] as const;
  const LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;
  const LEVEL_BG_CLASSES: Record<(typeof LEVELS)[number], string> = {
    N5: "bg-[#F39C12]",
    N4: "bg-[#34495E]",
    N3: "bg-[#27AE60]",
    N2: "bg-[#D35400]",
    N1: "bg-[#C0392B]",
  };
  return (
    <div className="max-w-4xl mx-auto px-6 pt-20 ">
      {LEVELS.map((level) => (
        <div
          key={level}
          className=" bg-[#3F4254] rounded-xl shadow-2xl overflow-hidden mb-8"
        >
          <h2 className={`text-white text-center py-4 text-2xl  font-semibold ${LEVEL_BG_CLASSES[level]}`}>
            JLPT {level} RESOURCES
          </h2>
          <div className="grid grid-cols-2 gap-6 p-8 bg-white">
            {SECTIONS.map(({ name, key }) => (
              <Link
                key={key}
                href={`/levels/${level.toLowerCase()}/${key}`}
                className="text-center py-4 text-black font-semibold hover:scale-105 transition"
              >
                {level} {name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
