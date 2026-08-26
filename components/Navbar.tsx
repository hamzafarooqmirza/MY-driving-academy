"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/lib/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-10 py-4 max-w-[1200px] mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          MY Driving Academy
        </Link>

        <nav
          aria-label="Main Navigation"
          className="hidden md:flex gap-6 items-center"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-surface-variant font-medium hover:text-secondary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden md:inline-flex bg-primary-container text-on-primary font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary transition-colors"
        >
          Book Lessons
        </Link>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-primary p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-secondary rounded-full"
        >
          <span className="material-symbols-outlined text-3xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-surface border-t border-outline-variant/30 px-4 py-4 flex flex-col gap-1"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-on-surface-variant font-medium py-3 px-2 rounded-lg hover:bg-surface-container hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center bg-primary-container text-on-primary font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary transition-colors"
          >
            Book Lessons
          </Link>
        </nav>
      )}
    </header>
  );
}
