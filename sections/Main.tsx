"use client";

import Link from "next/link";

export default function Main() {
  const SECTIONS = [
    "Grammar Test",
    "Vocabulary Test",
    "Listening Test",
    "Reading Test",
  ] as const;
  const LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16">
      {LEVELS.map((level) => (
        <div key={level} className="mb-8">
          <div className="bg-gray-700 text-white text-center py-4 text-2xl font-semibold mb-8">
            JLPT {level} RESOURCES
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {SECTIONS.map((item) => (
              <Link
                key={item}
                href={`/levels/${level.toLowerCase()}/${item.toLowerCase().split(" ")[0]}`}
                className="text-center py-4 text-orange-500 font-semibold hover:text-orange-600 transition"
              >
                {level} {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
