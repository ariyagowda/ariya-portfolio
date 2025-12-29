"use client";

import { Brain, Mail, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-3"
      >
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          About
        </h1>
        <p className="text-lg text-slate-600">
        I’m interested in building technology at the intersection of engineering, product, and entrepreneurship.
        </p>
      </motion.header>

      <hr className="my-8 border-border" />

      {/* Intro + photo */}
      <section className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl space-y-8 text-base leading-relaxed text-slate-600"
        >
          <p className="flex gap-4 text-lg text-foreground">
            <Sparkles className="mt-1 h-6 w-6 text-slate-400" />
            <span>
              Hi, I’m Ariya. I’m a Computer Science and Business student at UC Irvine
              focused on building systems where engineering, product, and
              real-world impact come together. I’m most interested in work that
              moves from understanding a problem deeply to shipping something
              real that people can actually use.
            </span>
          </p>
        </motion.div>

        {/* Photo placeholder (swap src when ready) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="lg:justify-self-end"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-white/70">
            <div className="aspect-[4/5] w-full">
              <img
                src="/about/me.jpg"
                alt="Ariya Gowda"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            
          </div>
        </motion.div>
      </section>

      {/* Body */}
      <section className="mt-10 max-w-3xl space-y-8 text-base leading-relaxed text-slate-600">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex gap-4"
        >
          <Search className="mt-1 h-6 w-6 text-slate-400" />
          <span>
            I enjoy building end to end. That means talking to users, designing
            thoughtfully, and implementing systems that hold up in real-world
            conditions. I care about clarity, iteration, and making technical
            decisions that support people rather than just complexity.
          </span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex gap-4"
        >
          <Search className="mt-1 h-6 w-6 text-slate-400" />
          <span>
            My experience includes AI-powered systems, backend and data-driven
            applications, and user-facing products. I’ve built an LLM-based
            knowledge retrieval system in an industry setting and developed
            applications that respond to real user needs rather than static
            assumptions.
          </span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex gap-4"
        >
          <Brain className="mt-1 h-6 w-6 text-slate-400" />
          <span>
            Alongside industry work, I also do research focused on building
            inclusive and supportive technology that has been evaluated in
            real-world contexts.
          </span>
        </motion.p>

        {/* Quick Snapshot */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-xl border border-border bg-white/70 p-6"
        >
          <h2 className="text-base font-semibold text-foreground">
            Quick Snapshot
          </h2>

          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-sm font-medium text-foreground">Currently</div>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Software Engineering student at UC Irvine</li>
                <li>Building AI-powered and product-focused systems</li>
                <li>Working across engineering, product, and research</li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-medium text-foreground">Interested in</div>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>AI and adaptive systems</li>
                <li>Human-centered and digital health technologies</li>
                <li>Product and engineering roles</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pt-2"
        >
          <p className="flex items-center gap-3 text-base">
            <Mail className="h-5 w-5 text-slate-400" />
            <a
              href="mailto:ariyagowda@gmail.com"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              ariyagowda@gmail.com
            </a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
