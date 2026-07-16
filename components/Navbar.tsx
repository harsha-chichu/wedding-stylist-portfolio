"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#journey", label: "Journey" },
  { href: "#services", label: "Services" },
  { href: "#moodboards", label: "Moodboards" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#packages", label: "Packages" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-gold/35 bg-ivory/95 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-8 px-5 py-4 sm:px-10">
        <a
          href="#home"
          className={`font-serif text-xl no-underline transition-colors duration-300 ${
            solid ? "text-kumkum" : "text-ivory"
          }`}
        >
          Ushaswini{" "}
          <span className={`italic ${solid ? "text-gold" : "text-champagne"}`}>
            Munupaly
          </span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`py-1 text-[0.72rem] font-medium uppercase tracking-[0.2em] no-underline transition-colors duration-300 ${
                solid ? "text-ink-soft hover:text-kumkum" : "text-ivory/90 hover:text-haldi"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`border border-gold px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.2em] no-underline transition-colors duration-300 hover:bg-gold hover:text-ivory ${
              solid ? "text-gold" : "text-champagne"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-[26px] transition-transform duration-300 ${
              solid ? "bg-kumkum" : "bg-ivory"
            } ${open ? "translate-y-[3.75px] rotate-45" : ""}`}
          />
          <span
            className={`h-[1.5px] w-[26px] transition-transform duration-300 ${
              solid ? "bg-kumkum" : "bg-ivory"
            } ${open ? "-translate-y-[3.75px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="flex flex-col border-b border-gold/35 bg-ivory pb-4 pt-2 md:hidden"
        >
          {[...LINKS, { href: "#contact", label: "Contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-5 py-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-ink no-underline sm:px-10"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
