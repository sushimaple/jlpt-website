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

  return (
    <div className="max-w-4xl mx-auto px-6 pt-16 ">
      {LEVELS.map((level) => (
        <div
          key={level}
          className=" bg-[#3F4254] rounded-xl shadow-2xl overflow-hidden mb-8"
        >
          <h2 className="bg-gray-600 text-white text-center py-4 text-2xl  font-semibold">
            JLPT {level} RESOURCES
          </h2>
          <div className="grid grid-cols-2 gap-6 p-8">
            {SECTIONS.map(({ name, key }) => (
              <Link
                key={key}
                href={`/levels/${level.toLowerCase()}/${key}`}
                className="text-center py-4 text-white font-semibold hover:text-orange-600 transition"
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
