"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Search } from "lucide-react";

type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  image?: string;
  github?: string;
};

const TAGS = ["All", "Product", "Engineering", "Design", "Research", "Leadership", "AI", "Data"];

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: "CIP Strategy",
      description:
        "A planning and execution platform for public agencies, unifying stakeholders, action tracking, and service plans.",
      href: "/projects/cip-strategy",
      tags: ["Product", "Engineering", "Data"],
      image: "/projects/cip-strategy.jpg",
      github: "https://github.com/ariyagowda/cip-strategy",
    },
    {
      title: "AudioBuddy (for Kids)",
      description:
        "A context-aware support app for children with noise sensitivity, grounded in HCI research and real user needs.",
      href: "/projects/audiobuddy-for-kids",
      tags: ["Product", "Engineering", "Research", "Design", "AI"],
      image: "/projects/audiobuddy.jpg",
      github: "https://github.com/ariyagowda/audiobuddy-demo",
    },
    {
      title: "Walmart Global Tech – RAG Chatbot",
      description:
        "A retrieval-augmented internal chatbot to improve knowledge discovery, shared as a case study.",
      href: "/projects/walmart-rag-chatbot",
      tags: ["Engineering", "AI", "Data"],
      image: "/projects/walmart-rag.jpg",
      github: "https://github.com/ariyagowda/walmart-rag-chatbot-case-study",
    },
    {
      title: "Cartello",
      description:
        "Co-founded a B2B marketplace from idea to MVP, owning product decisions and engineering execution end-to-end.",
      href: "/projects/cartello",
      tags: ["Product", "Leadership", "Engineering"],
      image: "/projects/cartello.jpg",
      github: "https://github.com/ariyagowda/cartello-case-study",
    },
    {
      title: "Enchanted Forest",
      description:
        "A gamified self-regulation experience for noisy and overstimulating settings, designed for children.",
      href: "/projects/enchanted-forest",
      tags: ["Product", "Design", "Research"],
      image: "/projects/enchanted-forest.jpg",
    },
    {
      title: "Founder’s Education",
      description:
        "Designed and delivered a structured program to help student founders go from ideas to validated MVPs.",
      href: "/projects/founders-education",
      tags: ["Leadership", "Product"],
      image: "/projects/founders-education.jpg",
      github: "https://github.com/ariyagowda/founders-education",
    },
    {
      title: "SEP Accelerator & Hackathons",
      description:
        "Led programs and workshops that help student teams build, ship, and present products under real constraints.",
      href: "/projects/sep-accelerator",
      tags: ["Leadership", "Product"],
      image: "/projects/sep.jpg",
      github: "https://github.com/ariyagowda/sep-accelerator",
    },
    {
      title: "High-Performance WordSet & Graph Search",
      description:
        "Custom hashing and BFS graph search optimized for correctness and performance.",
      href: "/projects/wordset-graph-search",
      tags: ["Engineering"],
      image: "/projects/wordset.jpg",
      github: "https://github.com/ariyagowda/wordset-graph-search",
    },
    {
      title: "SleepTracker",
      description:
        "A mobile app exploring behavior tracking and reflection through clean flows and UI polish.",
      href: "/projects/sleeptracker",
      tags: ["Product", "Design", "Engineering"],
      image: "/projects/sleeptracker.jpg",
      github: "https://github.com/ariyagowda/sleeptracker",
    },
    {
      title: "ZotStreaming",
      description:
        "A SQL-backed command-line platform with schema design, data import, and query workflows.",
      href: "/projects/zotstreaming",
      tags: ["Engineering", "Data"],
      image: "/projects/zotstreaming.jpg",
      github: "https://github.com/ariyagowda/zotstreaming",
    },
  ];

  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter((p) => {
      const matchesTag = activeTag === "All" || p.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <motion.header variants={fadeUp} initial="hidden" animate="visible" className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-lg text-slate-600">
          Selected work across product, engineering, research, and leadership.
        </p>
      </motion.header>

      <div className="mt-8 flex flex-wrap gap-2">
        {TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-3 py-1 text-xs font-medium border ${
              activeTag === tag
                ? "bg-primary text-white border-transparent"
                : "border-border bg-white/70 text-slate-700 hover:bg-primary-soft"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="relative mt-4 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects…"
          className="w-full rounded-xl border border-border bg-white/70 py-2 pl-9 pr-3 text-sm"
        />
      </div>

      <motion.section
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.06 }}
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-border bg-white/70 hover:bg-primary-soft transition"
          >
            <Link href={p.href} className="block">
              <div className="relative h-44 w-full">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </Link>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <Link href={p.href} className="font-semibold hover:underline">
                  {p.title}
                </Link>

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="text-slate-500 hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>

              <p className="mt-2 text-sm text-slate-600">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href={p.href}
                  className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
