"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quickLinks = [
  { title: "About", href: "/about", desc: "Who I am and what I care about." },
  { title: "Projects", href: "/projects", desc: "End-to-end builds and write-ups." },
  { title: "Work Experience", href: "/work", desc: "Internships and experiences." },
  { title: "Contact", href: "/contact", desc: "Reach out to me!" },
];

const workCards = [
  {
    title: "Walmart Enterprise Search",
    subtitle: "RAG and internal knowledge retrieval",
    href: "/projects",
    image: "/work/walmart.png",
    tags: ["develop", "ai"],
    date: "JUN 2025 - AUG 2025",
  },
  {
    title: "ProcureSpark CRM Platform",
    subtitle: "Workflows and backend performance",
    href: "/projects",
    image: "/work/procurespark.png",
    tags: ["develop", "product"],
    date: "JAN 2025 - PRESENT",
  },
  {
    title: "AudioBuddy for Kids",
    subtitle: "Adaptive digital health research",
    href: "/research",
    image: "/work/audiobuddy.png",
    tags: ["research", "design"],
    date: "JAN 2025 - PRESENT",
  },
  {
    title: "Entrepreneurship & Leadership",
    subtitle: "SEP President and startup work",
    href: "/entrepreneurship",
    image: "/work/entrepreneurship.png",
    tags: ["leadership", "design"],
    date: "AUG 2023 - PRESENT",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function Tag({ label }: { label: string }) {
  const styles: Record<string, string> = {
    develop: "text-primary",
    design: "text-violet-600",
    leadership: "text-rose-600",
    research: "text-sky-600",
    ai: "text-amber-600",
    product: "text-teal-600",
  };

  return (
    <span className={`text-xs font-medium ${styles[label] ?? "text-slate-500"}`}>
      {label}
    </span>
  );
}

function WorkCard({
  title,
  subtitle,
  href,
  image,
  tags,
  date,
}: {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  tags: string[];
  date: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-border bg-white/70
      transition-all duration-300 hover:-translate-y-0.5
      hover:shadow-md hover:ring-1 hover:ring-primary/30"
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm font-semibold leading-tight text-foreground">
          {title}
        </div>

        <p className="mt-1 text-sm leading-snug text-slate-600">{subtitle}</p>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        <div className="mt-3 text-xs tracking-wide text-slate-400">{date}</div>
      </div>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Ariya Gowda
        </h1>

        <p className="text-xl font-semibold text-slate-700">
          engineer, builder, leader
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Hi! My name is Ariya, and I’m a software engineering and business student at UC Irvine
          who likes building things where technology, people, and real-world impact
          overlap.
        </p>
      </motion.section>

      {/* BIG STATEMENT + LINKS (NO BOX) */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-16"
      >
        <p className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          I <span className="text-primary">code</span>,{" "}
          <span className="text-violet-700">design</span>, and{" "}
          <span className="text-rose-700">lead</span> products end-to-end,
          guided by <span className="text-slate-700">impact</span>.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {quickLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="rounded-xl border border-border bg-white/70 p-4
              transition-all duration-300 hover:-translate-y-0.5
              hover:bg-primary-soft hover:shadow-sm"
            >
              <div className="text-sm font-semibold text-foreground">
                {item.title}
              </div>
              <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
            </a>
          ))}
        </div>
      </motion.section>

      {/* MY WORK */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20"
      >
        <h2 className="inline-block text-3xl font-semibold tracking-tight text-foreground">
          my work!
          <span className="mt-2 block h-1 w-10 rounded-full bg-primary" />
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workCards.map((card) => (
            <WorkCard key={card.title} {...card} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
