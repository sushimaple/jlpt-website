"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { label: "N1", href: "#N1" },
    { label: "N2", href: "#N2" },
    { label: "N3", href: "#N3" },
    { label: "N4", href: "#N4" },
    { label: "N5", href: "#N5" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 right-0 transition-all border border-amber-700 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">Home</Link>
        <div className="hidden md:flex items-center gap-5 px-2 py-1">
          {links.map((link, key) => (
            <a href={link.href} key={key}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((link, key) => (
              <Link
                href={link.href}
                key={key}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg py-2 border-amber-500 text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
