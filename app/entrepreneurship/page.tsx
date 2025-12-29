"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

function Section({
  title,
  children,
  images,
}: {
  title: string;
  children: React.ReactNode;
  images?: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-14"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>

      <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
        {children}
      </div>

      {images && images.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {images.slice(0, 2).map((img) => (
            <figure
              key={img.src}
              className="group overflow-hidden rounded-2xl border border-border bg-white/70"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {img.caption ? (
                <figcaption className="px-4 py-3 text-sm text-slate-600">
                  {img.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      )}
    </motion.section>
  );
}

function AwardList({
  title,
  items,
}: {
  title: string;
  items: { name: string; href?: string; result: string; meta?: string }[];
}) {
  return (
    <div className="mt-6 max-w-3xl">
      <h3 className="text-sm font-semibold tracking-wide text-slate-500">
        {title}
      </h3>

      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li
            key={`${it.name}-${it.result}`}
            className="rounded-xl border border-border bg-white/70 px-4 py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              {it.href ? (
                <a
                  href={it.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-foreground underline decoration-border underline-offset-4 transition hover:decoration-primary"
                >
                  {it.name}
                </a>
              ) : (
                <span className="font-semibold text-foreground">{it.name}</span>
              )}

              <span className="text-sm font-medium text-primary">
                {it.result}
              </span>
            </div>

            {it.meta ? (
              <div className="mt-1 text-sm text-slate-600">{it.meta}</div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EntrepreneurshipPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Entrepreneurship + Leadership
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Entrepreneurship, to me, has always been about{" "}
          <strong className="font-semibold text-foreground">
            building in uncertainty
          </strong>
          . I am drawn to early-stage problems where the path is not clear yet and
          progress comes from{" "}
          <strong className="font-semibold text-foreground">
            talking to people, testing ideas quickly, and learning through execution
          </strong>
          . Whether I am co-founding a startup, leading a student accelerator, or
          mentoring teams through their first prototypes, I approach entrepreneurship
          as a way to explore how technology can solve real problems while bringing
          people together around a shared vision.
        </p>
      </motion.header>

      {/* Section 2: Cartello */}
      <Section
        title="Cartello (Co-Founder)"
        images={[
          {
            src: "/entrepreneurship/cartello-1.png",
            alt: "Cartello at UC Launch Demo Day",
            caption:
              "UC Launch Demo Day at UC Berkeley Haas (Nov 2023).",
          },
          {
            src: "/entrepreneurship/cartello-2.png",
            alt: "Cartello at UCI New Venture Competition semifinals pitch",
            caption: "UCI New Venture Competition Semifinals Pitch (May 2023).",
          },
        ]}
      >
        <p>
          Cartello began as an attempt to solve a practical problem:{" "}
          <strong className="font-semibold text-foreground">
            inefficiencies and opacity in the corrugated pallet supply chain
          </strong>
          . Through early conversations with suppliers and buyers, we identified
          pain points around sourcing, pricing, and logistics that disproportionately
          affected smaller operators. Our goal was to create a marketplace that{" "}
          <strong className="font-semibold text-foreground">
            simplified discovery and streamlined transactions
          </strong>{" "}
          while maintaining flexibility for both sides.
        </p>

        <p>
          As a co-founder, I worked across{" "}
          <strong className="font-semibold text-foreground">
            product, engineering, and operations
          </strong>
          . I helped define the initial product scope, supported early prototyping,
          and helped run customer discovery to validate assumptions. Beyond building,
          I spent time refining our pitch, incorporating feedback from mentors, and
          iterating on our business model through programs and competitions.
        </p>

        <p>
          Cartello gained traction through several startup competitions and accelerator
          programs, where it was recognized for both{" "}
          <strong className="font-semibold text-foreground">
            the clarity of the problem
          </strong>{" "}
          and{" "}
          <strong className="font-semibold text-foreground">
            the strength of the proposed solution
          </strong>
          . These experiences helped validate the market need and pushed us to refine
          our product, pitch, and execution strategy.
        </p>

        <AwardList
          title="Accelerators and Competitions (Cartello)"
          items={[
            {
              name: "Beall & Butterworth Competition",
              href: "https://bbcomp.tech.uci.edu/past/past-2024/",
              result: "Winner",
              meta: "Cartello",
            },
            {
              name: "UCI Stella Zhang New Venture Competition",
              href: "https://merage.uci.edu/research-faculty/centers/innovation-entrepreneurship/new-venture-competiton.html",
              result: "Semifinalist",
              meta: "Cartello",
            },
            {
              name: "UC Launch",
              href: "https://www.uclaunch.com",
              result: "Finalist",
              meta: "Cartello",
            },
          ]}
        />
      </Section>

      {/* Section 3: SEP */}
      <Section
        title="UC Irvine Entreprenurial Organization, Sigma Eta Pi - President"
        images={[
          {
            src: "/entrepreneurship/sep-1.png",
            alt: "Sigma Eta Pi photo 1",
            caption: "",
          },
          {
            src: "/entrepreneurship/sep-2.png",
            alt: "Sigma Eta Pi photo 2",
            caption: "Demo Day Fall 2025",
          },
        ]}
      >
        <p>
          Sigma Eta Pi has been one of my most formative leadership experiences. SEP
          is a student organization that fosters{" "}
          <strong className="font-semibold text-foreground">
            building and entrepreneurship
          </strong>{" "}
          at UC Irvine. I joined SEP as a member interested in entrepreneurship and
          later became President with the goal of strengthening how the organization
          supported early-stage builders.
        </p>

        <p>
          During my time as President, I focused on creating structure around{" "}
          <strong className="font-semibold text-foreground">
            ideation, execution, and mentorship
          </strong>
          . I led workshops, coordinated an accelerator-style program for student
          teams, organized Demo Day events, and worked closely with members to help
          them move from idea to prototype.
        </p>
      </Section>

      {/* Section 4: Experiments */}
      <Section
        title="Experiments and Early Builds"
        images={[
          {
            src: "/entrepreneurship/early-builds-1.png",
            alt: "UCI Butterworth Competition demo day",
            caption: "UCI Butterworth Competition Demo Day (May 2025). My team presented Neocut - an AI-powered video editing software.",
          },
          {
            src: "/entrepreneurship/early-builds-2.png",
            alt: "Brazil South Summit",
            caption: "Brazil South Summit (Apr 2025). My team and I were flown to South Summit in Brazil - a major internationaltech and entrepreneurship event - for winning the Beall & Butterworth Competition in 2024.",
          },
        ]}
      >
        <p>
          Not every idea I have worked on became a full startup, and I see that as a
          natural part of the process. Alongside larger ventures, I have explored{" "}
          <strong className="font-semibold text-foreground">
            smaller experiments, side projects, and early MVPs
          </strong>{" "}
          as ways to learn quickly and test assumptions with minimal overhead.
        </p>

        <p>
          These builds helped me practice{" "}
          <strong className="font-semibold text-foreground">
            rapid prototyping, feedback loops, and pragmatic technical decision-making
          </strong>{" "}
          without committing to long timelines. Staying consistent with building has
          created opportunities to{" "}
          <strong className="font-semibold text-foreground">
            meet founders and mentors
          </strong>
          , learn from other teams, and see how ideas evolve in real environments. It
          has also taken me{" "}
          <strong className="font-semibold text-foreground">to Brazil</strong> through
          startup programming and competitions.
        </p>
      </Section>

      {/* Small teal footer accent */}
      <div className="mt-20 h-1 w-16 rounded-full bg-primary" />
    </main>
  );
}
