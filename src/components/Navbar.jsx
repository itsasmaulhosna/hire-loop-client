
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  BriefcaseBusiness,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "Recruiters", href: "/recruiters" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* LEFT SIDE LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
            <BriefcaseBusiness size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-black dark:text-white">
              HireHub
            </h1>
          </div>
        </Link>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-8 md:flex">

          {/* NAV LINKS */}
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* VERTICAL DIVIDER */}
          <div className="h-6 w-px bg-black/10 dark:bg-white/10" />

          {/* AUTH BUTTONS */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-white/10 md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-black/10 bg-white/95 px-4 py-5 dark:border-white/10 dark:bg-black/95 md:hidden">
          
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE AUTH */}
          <div className="mt-5 flex flex-col gap-3 border-t border-black/10 pt-5 dark:border-white/10">
            <Link
              href="/login"
              className="rounded-xl border border-black/10 px-4 py-2 text-center text-sm font-medium transition hover:bg-gray-100 dark:border-white/10 dark:hover:bg-white/10"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-xl bg-black px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

