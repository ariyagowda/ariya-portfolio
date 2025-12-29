import Link from "next/link";
import { ExternalLink } from "lucide-react";
import RevealSection from "@/components/RevealSection";

export default function ResearchPage() {
  const publications = [
    {
      title:
        "Enchanted Forest: A Gamified Approach for Children’s Self Regulation in Noisy and Overstimulating Settings",
      venue: "IDC",
      year: "2025",
      href: "https://dl.acm.org/doi/10.1145/3713043.3731554",
    },
    {
      title: "AudioBuddy: Supporting People with Noise Sensitivity and Their Care Networks",
      venue: "UbiComp Companion",
      year: "2025",
      href: "https://dl.acm.org/doi/10.1145/3675094.3678365",
    },
  ];

  return (
    <main className="relative mx-auto min-h-screen max-w-4xl px-6 py-16">
      {/* Clean, full-page background */}
      <div aria-hidden className="research-bg">
        <div className="research-wash" />
        <div className="research-blob research-blob-1" />
        <div className="research-blob research-blob-2" />
        <div className="research-grid" />
      </div>

      <RevealSection>
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Research
          </h1>
          <p className="text-lg text-slate-600">
            Human centered systems at the intersection of AI, digital health, and inclusive design.
          </p>
        </header>
      </RevealSection>

      <RevealSection>
        <section className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-600">
          <p>
            I’ve been working in the Social &amp; Technological Action Research Group (STAR Lab) at
            UC Irvine under Professor Gillian R. Hayes for about two years now. My research focuses on
            building supportive, human-centered technology for people with sensory sensitivities,
            especially children and their care networks. I work at the boundary between research and
            practice, turning insights from qualitative studies and fieldwork into real, testable
            prototypes by combining user feedback with sensing and adaptive, AI-powered guidance, then
            iterating until it’s usable in real-world settings.
          </p>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="mt-8 rounded-xl border border-border bg-white/70 p-6 backdrop-blur">
          <h2 className="text-base font-semibold text-foreground">Affiliation</h2>
          <p className="mt-2 text-sm text-slate-600">
            STAR Lab at UC Irvine, advised by Professor Gillian R. Hayes and Emani Hicks.
          </p>
        </section>
      </RevealSection>

      {/* MOVED: Publications now between Affiliation and Awards */}
      <RevealSection>
        <section className="mt-10 rounded-xl border border-border bg-white/70 p-6 backdrop-blur">
          <h2 className="text-base font-semibold text-foreground">Publications</h2>
          <ul className="mt-4 space-y-4">
            {publications.map((p) => (
              <li key={p.title} className="text-sm text-slate-600">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium text-foreground">{p.title}</div>
                    <div className="text-slate-500">
                      {p.venue} {p.year}
                    </div>
                  </div>

                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg px-2 py-1 text-slate-600 hover:text-foreground"
                    aria-label={`Open publication link for ${p.title}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="mt-4 rounded-xl border border-border bg-white/70 p-6 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-foreground">
                Awards/Fellowships
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>SUROP Research Fellow — April 2025</li>
                <li>UROP Research Fellow — September 2025</li>
              </ul>
            </div>

            <a
              href="https://urop.uci.edu/urop-opportunities/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm text-slate-600 hover:text-foreground"
              aria-label="Open UROP opportunities page"
            >
              <span className="hidden sm:inline"> </span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </section>
      </RevealSection>

      <section className="mt-6 grid gap-4">
        <RevealSection>
          <div className="rounded-xl border border-border bg-white/70 p-6 backdrop-blur">
            <h2 className="text-base font-semibold text-foreground">What I do</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>
                <strong>Design, build, and iterate research prototypes</strong> for children with
                sensory sensitivities, informed by interviews, field observations, and co-design
                sessions.
              </li>
              <li>
                <strong>Plan and conduct usability testing</strong> with children and caregivers,
                synthesizing findings into concrete design and system changes.
              </li>
              <li>
                <strong>Work with multimodal study data</strong>, including sensory signals,
                interaction logs, and eye-tracking, to support evaluation and guide design decisions.
              </li>
              <li>
                <strong>Develop adaptive and AI-supported features</strong> that provide context-aware
                guidance while prioritizing accessibility, privacy, and trust.
              </li>
              <li>
                <strong>Translate research findings into deployable features</strong> that balance
                qualitative insight, technical constraints, and real-world use.
              </li>
              <li>
                <strong>Contribute to research writing and dissemination</strong> through
                peer-reviewed publications, demos, and conference presentations.
              </li>
            </ul>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="rounded-xl border border-border bg-white/70 p-6 backdrop-blur">
            <h2 className="text-base font-semibold text-foreground">AudioBuddy for Kids</h2>
            <p className="mt-2 text-sm text-slate-600">
              A research-backed mobile app for children with noise sensitivity that supports
              self-regulation in overstimulating settings through sensing, accessible design, and
              adaptive guidance.
            </p>
            <div className="mt-4">
              <Link
                href="/projects/audiobuddy-demo"
                className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                View technical demo
              </Link>
            </div>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="rounded-xl border border-border bg-white/70 p-6 backdrop-blur">
            <h2 className="text-base font-semibold text-foreground">Enchanted Forest</h2>
            <p className="mt-2 text-sm text-slate-600">
              A gamified research prototype that helps children practice self-regulation in noisy and
              overstimulating environments through playful interactions, sensory-aware design, and
              evidence-based coping strategies.
            </p>
            <div className="mt-4">
              <Link
                href="/projects/enchanted-forest"
                className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
              >
                View Prototype
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>

      <RevealSection>
        <section className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <figure className="group overflow-hidden rounded-xl border border-border bg-white/70 backdrop-blur">
              <div className="aspect-[4/5] w-full">
                <img
                  src="/research/poster.jpg"
                  alt="Poster presentation at IDC 2025"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-slate-500">
                Interaction Design and Children Conference 2025 (IDC 2025), Reykjavík University,
                Iceland.
              </figcaption>
            </figure>

            <figure className="group overflow-hidden rounded-xl border border-border bg-white/70 backdrop-blur">
              <div className="aspect-[4/5] w-full">
                <img
                  src="/research/talk.jpg"
                  alt="Research talk"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-4 py-3 text-xs text-slate-500">
                Poster Presentation at IDC 2025.
              </figcaption>
            </figure>
          </div>
        </section>
      </RevealSection>
    </main>
  );
}
