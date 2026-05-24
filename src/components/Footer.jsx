
"use client";

import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      
      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-between">
          
          {/* LOGO */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600">
                <BriefcaseBusiness size={24} />
              </div>

              <div>
                <h1 className="text-3xl font-bold leading-none">
                  HireHub
                </h1>

                <p className="text-sm text-gray-400">
                  Hiring Platform
                </p>
              </div>
            </Link>

            <p className="mt-8 max-w-sm text-lg leading-8 text-gray-400">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex items-center gap-3">
            
            <Link
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 transition hover:bg-violet-600"
            >
              <FaFacebookF size={18} />
            </Link>

            <Link
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 transition hover:opacity-90"
            >
              <FaPinterestP size={18} />
            </Link>

            <Link
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 transition hover:bg-violet-600"
            >
              <FaLinkedinIn size={18} />
            </Link>
          </div>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-violet-500">
            Product
          </h3>

          <ul className="space-y-5 text-lg text-gray-400">
            <li>
              <Link href="/jobs" className="transition hover:text-white">
                Job Discovery
              </Link>
            </li>

            <li>
              <Link href="/ai-tools" className="transition hover:text-white">
                Worker AI
              </Link>
            </li>

            <li>
              <Link href="/companies" className="transition hover:text-white">
                Companies
              </Link>
            </li>

            <li>
              <Link href="/salary-data" className="transition hover:text-white">
                Salary Data
              </Link>
            </li>
          </ul>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-violet-500">
            Navigations
          </h3>

          <ul className="space-y-5 text-lg text-gray-400">
            <li>
              <Link href="/help-center" className="transition hover:text-white">
                Help Center
              </Link>
            </li>

            <li>
              <Link href="/career-library" className="transition hover:text-white">
                Career Library
              </Link>
            </li>

            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="mb-6 text-xl font-semibold text-violet-500">
            Resources
          </h3>

          <ul className="space-y-5 text-lg text-gray-400">
            <li>
              <Link href="/brand-guideline" className="transition hover:text-white">
                Brand Guideline
              </Link>
            </li>

            <li>
              <Link href="/newsroom" className="transition hover:text-white">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-center text-base text-gray-500 md:flex-row">
          
          <p>
            Copyright 2026 — HireHub
          </p>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Policy
            </Link>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

