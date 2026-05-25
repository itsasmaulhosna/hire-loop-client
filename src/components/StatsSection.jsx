"use client";

import {
  BriefcaseBusiness,
  Building2,
  Star,
  Users,
} from "lucide-react";

const stats = [
  {
    id: 1,
    title: "50K",
    subtitle: "Active Jobs",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: "12K",
    subtitle: "Companies",
    icon: Building2,
  },
  {
    id: 3,
    title: "2M",
    subtitle: "Job Seekers",
    icon: Users,
  },
  {
    id: 4,
    title: "97%",
    subtitle: "Satisfaction Rate",
    icon: Star,
  },
];

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-black py-24"
      style={{
        backgroundImage: "url('/images/globe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Assisting over{" "}
            <span className="text-violet-400">15,000</span> job seekers
            <br />
            find their dream positions.
          </h2>

          <p className="mt-6 text-base text-gray-400 md:text-lg">
            Connecting talented professionals with world-class companies
            through smart hiring solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/[0.06]"
              >
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Number */}
                <h3 className="mb-2 text-5xl font-bold tracking-tight text-white">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-base text-gray-400">
                  {item.subtitle}
                </p>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white/[0.03] to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}