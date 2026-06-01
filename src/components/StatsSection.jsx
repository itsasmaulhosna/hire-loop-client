"use client";

import { motion } from "motion/react";
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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/images/globe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Animated Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl"
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-20 h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold leading-tight text-white md:text-5xl"
          >
            Assisting over{" "}
            <span className="text-violet-400">15,000</span> job seekers
            <br />
            find their dream positions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-6 text-base text-gray-400 md:text-lg"
          >
            Connecting talented professionals with world-class companies
            through smart hiring solutions.
          </motion.p>

          {/* Rotating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="mt-10 flex justify-center"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 text-sm font-medium text-violet-300 backdrop-blur-md"
            >
              Remote Job
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Animated Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="mb-12 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                >
                  <Icon className="h-7 w-7 text-white" />
                </motion.div>

                {/* Number */}
                <motion.h3
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="mb-2 text-5xl font-bold tracking-tight text-white"
                >
                  {item.title}
                </motion.h3>

                {/* Subtitle */}
                <p className="text-base text-gray-400">
                  {item.subtitle}
                </p>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white/[0.03] to-transparent" />

                {/* Animated Border */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 rounded-3xl border border-violet-500/10"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}