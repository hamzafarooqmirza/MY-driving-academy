"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/nav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href.split("#")[0];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-sm transition-shadow duration-200 ${
        scrolled
          ? "shadow-[0_2px_16px_rgba(11,31,58,0.08)]"
          : "border-b border-outline-variant/20"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-3 max-w-[1200px] mx-auto">
        <Link
          href="/"
          className="flex items-center hover:opacity-85 transition-opacity"
        >
          <Image
            src="/logo.webp"
            alt="MY Driving Academy"
            width={1303}
            height={434}
            priority
            className="h-9 md:h-10 w-auto"
          />
        </Link>

        <nav
          aria-label="Main Navigation"
          className="hidden md:flex gap-8 items-center"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative text-sm font-medium py-1 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-secondary after:transition-all after:duration-200 ${
                isActive(item.href)
                  ? "text-primary after:w-full"
                  : "text-on-surface-variant hover:text-primary after:w-0 hover:after:w-full"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden md:inline-flex items-center bg-primary-container text-on-primary font-semibold text-sm px-6 py-2.5 rounded-lg shadow-sm hover:bg-primary hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
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
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`font-medium py-3 px-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-surface-container text-primary"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-secondary"
              }`}
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
