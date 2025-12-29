import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, FileText } from "lucide-react";
import RevealSection from "@/components/RevealSection";

type ProjectWriteup = {
  title: string;
  subtitle: string;
  tags: string[];
  overview: string;
  highlights: string[];
  tech: string;
  links?: {
    github?: string;
    live?: string;
    paper?: string;
  };
};

const PROJECTS: Record<string, ProjectWriteup> = {
  "cip-strategy": {
    title: "CIP Strategy",
    subtitle:
      "A strategic planning and execution platform for public agencies, focused on stakeholder tracking, action management, and service planning workflows.",
    tags: ["Product", "Engineering", "Data"],
    overview:
      "CIP Strategy is an internal web platform built to help teams plan, track, and execute long-term initiatives more effectively. It centralizes planning artifacts that are usually scattered across docs and spreadsheets by organizing agencies, projects, stakeholders, and action items into a single workflow.\n\nI worked across product definition and engineering to design the core data model, prioritize an MVP scope, and build the foundation with an emphasis on clarity for non-technical users and flexibility for evolving agency needs.",
    highlights: [
      "Designed a multi-entity relational model connecting agencies, projects, stakeholders, and actions to reflect real planning workflows.",
      "Prioritized an MVP around execution, focusing on project tasks and action tracking before expanding into broader planning features.",
      "Built editable workflows that support iteration over time while keeping ownership and accountability clear.",
      "Made tradeoffs to keep the system maintainable and extensible as requirements evolved.",
    ],
    tech:
      "TypeScript, Next.js, Supabase (Postgres), relational modeling, CRUD workflows, internal dashboard design",
    links: {
      github: "https://github.com/ariyagowda/cip-strategy",
    },
  },

  "audiobuddy-for-kids": {
    title: "AudioBuddy (for Kids)",
    subtitle:
      "A research-backed support app for children with noise sensitivity, exploring sensing and adaptive guidance in real-world settings.",
    tags: ["Product", "Engineering", "Research", "Design", "AI"],
    overview:
      "AudioBuddy (for Kids) is a child-centered experience designed to support self-regulation during auditory overload. The goal is to help children recognize early signals, practice coping strategies, and reflect in the moment without making the experience feel clinical or disruptive.\n\nI work at the boundary of research and engineering, translating insights from interviews and fieldwork into concrete flows and prototypes, then iterating based on usability feedback and feasibility constraints.",
    highlights: [
      "Translated qualitative research insights into product requirements and supportive interaction flows for kids and caregivers.",
      "Explored what adaptive support should feel like in-the-moment, balancing helpfulness with minimal interruption.",
      "Considered privacy and trust throughout the design, especially when evaluating context signals and AI-driven guidance.",
      "Iterated on prototyping and UI patterns to keep the experience lightweight, understandable, and usable under stress.",
    ],
    tech:
      "Swift/SwiftUI prototyping, HCI methods, user-centered iteration, adaptive feature exploration",
    links: {
      github: "https://github.com/ariyagowda/audiobuddy-demo",
    },
  },

  "walmart-rag-chatbot": {
    title: "Walmart Global Tech – RAG Chatbot",
    subtitle:
      "A retrieval-augmented internal chatbot built for reliable knowledge discovery, shared as a non-confidential case study.",
    tags: ["Engineering", "AI", "Data"],
    overview:
      "Built a retrieval-augmented chatbot to help internal teams find accurate answers across enterprise knowledge sources. The work emphasized retrieval quality, grounding, and reliability under real constraints like document freshness, ambiguity, and practical evaluation needs.\n\nBecause parts of the work are confidential, this write-up focuses on architecture, tradeoffs, and what I learned from iterating on retrieval quality rather than proprietary details.",
    highlights: [
      "Designed a pragmatic RAG pipeline with retrieval quality as the success metric, not just model output.",
      "Iterated on retrieval and prompting to improve relevance and reduce unsupported responses.",
      "Built an evaluation mindset into the workflow with repeatable tests to measure improvements over time.",
      "Documented architecture and tradeoffs in a way that can be shared safely without exposing confidential data.",
    ],
    tech: "Python, RAG, embeddings, vector search, evaluation-driven iteration",
    links: {
      github: "https://github.com/ariyagowda/walmart-rag-chatbot-case-study",
    },
  },

  cartello: {
    title: "Cartello",
    subtitle:
      "A B2B marketplace built from idea to MVP, combining product discovery with engineering execution to validate demand.",
    tags: ["Product", "Leadership", "Engineering"],
    overview:
      "Cartello started as a founder-led exploration of a real operational pain point in B2B supply chains. I drove early product discovery and translated that learning into an MVP with a clear scope designed to validate the core demand signal.\n\nThe emphasis was building the smallest credible product, learning quickly, and making product tradeoffs that supported speed without sacrificing usability.",
    highlights: [
      "Led early customer discovery and turned insights into an MVP roadmap with clear assumptions to validate.",
      "Owned the build loop end-to-end: define scope, implement, test, and iterate based on feedback.",
      "Made product tradeoffs to keep the experience simple while focusing on the highest-signal workflows.",
      "Strengthened the product narrative by tying features back to user pain points and measurable learning goals.",
    ],
    tech: "TypeScript, Next.js, product prototyping, iterative MVP development",
    links: {
      github: "https://github.com/ariyagowda/cartello-case-study",
    },
  },

  "enchanted-forest": {
    title: "Enchanted Forest",
    subtitle:
      "A gamified self-regulation experience for children in noisy settings, designed through child-centered research and iteration.",
    tags: ["Product", "Design", "Research"],
    overview:
      "Enchanted Forest explores how playful interaction and narrative can support self-regulation in noisy or overstimulating environments. The work sits at the intersection of HCI research and practical design, focusing on emotional safety, clarity, and engagement.\n\nI contributed to turning co-design insights into a cohesive product direction and research-ready artifacts that could be evaluated in real settings.",
    highlights: [
      "Translated co-design insights into interaction goals and child-friendly UX decisions.",
      "Focused on emotional safety and usability, making the experience supportive rather than clinical.",
      "Iterated on flows and content to keep the experience engaging while still grounded in evidence-based strategies.",
      "Connected design decisions back to evaluation goals for meaningful study outcomes.",
    ],
    tech: "HCI methods, prototyping, child-centered UX, qualitative synthesis",
    links: {
      // paper: "https://...",
    },
  },

  "founders-education": {
    title: "Founder’s Education",
    subtitle:
      "A fall program I designed and delivered to help student founders go from ideas to validated MVPs through structured weekly execution.",
    tags: ["Leadership", "Product"],
    overview:
      "Founder’s Education is a program I led to teach practical startup execution: problem discovery, customer discovery, MVP scoping, and pitching. The goal was to move teams from vague ideas to concrete weekly outputs through structure, feedback, and accountability.\n\nI built the curriculum, facilitated sessions, and coached teams on scoping, validation, and storytelling so they could ship faster and learn more effectively.",
    highlights: [
      "Designed a structured curriculum that converted broad ambition into weekly deliverables and measurable progress.",
      "Coached teams on MVP scoping and validation, emphasizing learning and iteration over overbuilding.",
      "Created repeatable templates for discovery, experiments, and pitch feedback to improve consistency across teams.",
      "Helped founders strengthen product narratives by tying demos to user needs, evidence, and outcomes.",
    ],
    tech: "Curriculum design, workshops, product strategy, founder coaching",
    links: {
      github: "https://github.com/ariyagowda/founders-education",
    },
  },

  "sep-accelerator": {
    title: "SEP Accelerator & Hackathons",
    subtitle:
      "Programs and workshops that help student teams build and ship products, focusing on execution, feedback loops, and demo readiness.",
    tags: ["Leadership", "Product"],
    overview:
      "Through SEP programs and hackathons, I helped create environments where teams could build quickly, get feedback, and present clearly. The emphasis was on execution under real constraints and strengthening product thinking alongside building.\n\nI worked on programming, workshop delivery, and playbooks that made events more structured, repeatable, and useful for first-time founders.",
    highlights: [
      "Led workshops and programming that supported teams from ideation to MVP to demo readiness.",
      "Created repeatable playbooks so teams could move faster with clearer expectations and better feedback loops.",
      "Supported product thinking by helping teams connect features to users, outcomes, and credibility signals.",
      "Improved iteration speed by encouraging small, testable increments instead of large, risky builds.",
    ],
    tech: "Program leadership, community building, product coaching",
    links: {
      github: "https://github.com/ariyagowda/sep-accelerator",
    },
  },

  "wordset-graph-search": {
    title: "High-Performance WordSet & Graph Search",
    subtitle:
      "A performance-focused implementation of hashing and BFS graph search to solve word-ladder style problems efficiently.",
    tags: ["Engineering"],
    overview:
      "This project focused on implementing high-performance data structures and applying them to solve a word-ladder style graph search problem. The goal was correctness, speed, and clean abstractions under constraints.\n\nI emphasized algorithmic tradeoffs, test-driven iteration, and practical performance considerations that show up when moving beyond toy inputs.",
    highlights: [
      "Implemented a custom hash-based set for fast membership checks under heavy query load.",
      "Used BFS graph search to find shortest transformation paths with careful attention to time and space tradeoffs.",
      "Validated correctness with targeted tests and edge-case handling for real input behavior.",
      "Optimized bottlenecks by focusing on the operations that dominated runtime at scale.",
    ],
    tech: "C++, hashing, BFS, performance testing, correctness-focused debugging",
    links: {
      github: "https://github.com/ariyagowda/wordset-graph-search",
    },
  },

  sleeptracker: {
    title: "SleepTracker",
    subtitle:
      "A mobile experience for behavior tracking and reflection, focused on clean flows, state management, and UI polish.",
    tags: ["Product", "Design", "Engineering"],
    overview:
      "SleepTracker is a mobile app exploring how design can support tracking and reflection without creating friction. The work emphasized clear flows, sensible defaults, and an interface that feels lightweight enough to use consistently.\n\nI focused on building a usable end-to-end experience and iterating on details that improve clarity and repeat use.",
    highlights: [
      "Designed simple tracking flows that minimize friction and reduce abandoned input.",
      "Implemented core screens with attention to state, validation, and predictable user feedback.",
      "Iterated on UI details to improve clarity, reduce cognitive load, and keep the experience consistent.",
      "Balanced feature ideas with what actually improves daily usability and repeat use.",
    ],
    tech: "Modern mobile UI patterns, state management, UI implementation and iteration",
    links: {
      github: "https://github.com/ariyagowda/sleeptracker",
    },
  },

  zotstreaming: {
    title: "ZotStreaming",
    subtitle:
      "A SQL-backed command-line platform with schema design, data import, and query workflows across entities.",
    tags: ["Engineering", "Data"],
    overview:
      "ZotStreaming is a command-line application backed by a relational database that supports importing data, running queries, and managing workflows across key entities. The goal was to design a coherent schema and build reliable query operations that reflect real product requirements.\n\nI focused on translating requirements into a normalized model, implementing query logic cleanly, and handling edge cases that show up in real datasets.",
    highlights: [
      "Designed a relational schema that connects core entities cleanly and supports real query needs.",
      "Implemented reliable import and query workflows with clear command interfaces.",
      "Handled constraints and edge cases so operations stay correct and predictable.",
      "Translated product questions into efficient SQL queries.",
    ],
    tech: "Python, MySQL, relational schema design, SQL queries, CLI workflows",
    links: {
      github: "https://github.com/ariyagowda/zotstreaming",
    },
  },
};

function LinkButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-primary-soft"
    >
      {icon}
      {label}
      <ExternalLink className="h-4 w-4 text-slate-500" />
    </a>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PROJECTS[slug];

  if (!p) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <RevealSection>
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-foreground"
        >
          ← Back to Projects
        </Link>
      </RevealSection>

      <RevealSection>
        <header className="mt-6 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{p.title}</h1>
          <p className="text-lg text-slate-600">{p.subtitle}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {p.links ? (
            <div className="flex flex-wrap gap-2 pt-2">
              {p.links.github ? (
                <LinkButton href={p.links.github} label="GitHub" icon={<Github className="h-4 w-4" />} />
              ) : null}
              {p.links.live ? (
                <LinkButton href={p.links.live} label="Live" icon={<ExternalLink className="h-4 w-4" />} />
              ) : null}
              {p.links.paper ? (
                <LinkButton href={p.links.paper} label="Paper" icon={<FileText className="h-4 w-4" />} />
              ) : null}
            </div>
          ) : null}
        </header>
      </RevealSection>

      <section className="mt-10 grid gap-4">
        <RevealSection>
          <div className="rounded-2xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">Overview</h2>
            <p className="mt-2 whitespace-pre-line text-sm text-slate-600">{p.overview}</p>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="rounded-2xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">Highlights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection>
          <div className="rounded-2xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">Tech</h2>
            <p className="mt-2 text-sm text-slate-600">{p.tech}</p>
          </div>
        </RevealSection>
      </section>
    </main>
  );
}
