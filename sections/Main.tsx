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

  const resources = LEVELS.map((level) => ({
    level,
    items: SECTIONS,
  }));

  const getPath = (level: string, item: string) => {
    const levelLower = level.toLowerCase();
    const section = item.toLowerCase().split(" ")[0]; // "grammar", "vocabulary", "listening", "reading"
    return `/levels/${levelLower}/${section}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16">
      {resources.map((section) => (
        <div key={section.level} className="mb-8">
          <div className="bg-gray-700 text-white text-center py-4 text-2xl font-semibold mb-8">
            JLPT {section.level} RESOURCES
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            {section.items.map((item, index) => (
              <Link
                key={index}
                href={getPath(section.level, item)}
                className="text-center py-4 text-orange-500 font-semibold hover:text-orange-600 transition"
              >
                {section.level} {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
