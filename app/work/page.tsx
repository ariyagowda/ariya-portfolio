import Link from "next/link";
import {
  Bot,
  Boxes,
  Microscope,
  GraduationCap,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import RevealSection from "@/components/RevealSection";

type Experience = {
  company: string;
  role: string;
  dates: string;
  icon: React.ReactNode;
  bullets: React.ReactNode[];
  tags: string[];
  link?: { href: string; label: string };
};

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700 ring-1 ring-inset ring-teal-200">
      {children}
    </span>
  );
}

export default function WorkPage() {
  const experiences: Experience[] = [
    {
      company: "Walmart Global Tech",
      role: "Software Engineering Intern (AI / RAG)",
      dates: "Summer 2025",
      icon: <Bot className="h-7 w-7 text-slate-400" />,
      bullets: [
        <>
          Built a <strong>Retrieval-Augmented Generation (RAG) chatbot</strong> to help internal
          teams quickly find answers across <strong>distributed enterprise documentation</strong>.
        </>,
        <>
          Designed and implemented the full retrieval pipeline, including{" "}
          <strong>chunking, embeddings, indexing, indexing, and ranking</strong>, improving response
          relevance and answer quality.
        </>,
        <>
          Collaborated with engineers to integrate the system into internal workflows and validate
          performance with real use cases.
        </>,
      ],
      tags: ["Python", "LangChain", "Azure OpenAI", "RAG", "SQL", "C++"],
    },
    {
      company: "ProcureSpark",
      role: "Product, Design, and Engineering Intern",
      dates: "Spring 2025",
      icon: <Boxes className="h-7 w-7 text-slate-400" />,
      bullets: [
        <>
          Worked on a contractor-facing <strong>CRM platform</strong>, translating workflow and user
          needs into concrete backend and UI improvements.
        </>,
        <>
          Built and optimized <strong>backend data workflows</strong> using Python, SQL, and Supabase
          to support scalable, real-time use.
        </>,
        <>
          Developed <strong>React front-end components</strong> to improve usability, clarity, and
          data flow across the product.
        </>,
        <>
          Refactored schemas and queries to improve maintainability and make the system easier to
          extend.
        </>,
      ],
      tags: ["Product", "Design", "Python", "SQL", "Supabase", "React", "C++"],
    },
    {
      company: "Social & Technological Action Research Group (STAR Lab), UC Irvine",
      role: "Research Engineering Assistant",
      dates: "September 2024 – Present",
      icon: <Microscope className="h-7 w-7 text-slate-400" />,
      bullets: [
        <>
          Built and iterated on <strong>research prototypes</strong> for neurodivergent children,
          incorporating direct user feedback into design decisions.
        </>,
        <>
          Supported studies using <strong>eye-tracking and sensory data</strong> tto inform interface
          design and adaptive behaviors.
        </>,
        <>
          Planned and ran <strong>usability testing and prototyping</strong>, leading to measurable
          improvements in engagement.
        </>,
        <>
          Contributed to <strong>peer-reviewed publications and conference presentations</strong> in
          HCI and inclusive technology.
        </>,
      ],
      tags: [
        "HCI",
        "Research",
        "Eye Tracking",
        "Sensor Data",
        "Prototyping",
        "Usability Testing",
        "Inclusive Tech",
        "AI",
      ],
      link: { href: "/research", label: "Learn more here" },
    },
    {
      company: "University of Wyoming College of Engineering",
      role: "Machine Learning Engineering Intern",
      dates: "Summer 2024",
      icon: <GraduationCap className="h-7 w-7 text-slate-400" />,
      bullets: [
        <>
          Built <strong>ML-driven tools for educators</strong>, including dashboards and early risk
          signals to support student engagement.
        </>,
        <>
          Trained and evaluated models using <strong>Python and TensorFlow</strong>, iterating on
          features and performance.
        </>,
        <>Worked with data pipelines and analysis workflows to support deployment and experimentation.</>,
      ],
      tags: ["Python", "TensorFlow", "Machine Learning", "Jupyter", "SQL", "C++"],
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <RevealSection>
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Work Experiences
          </h1>
          <p className="text-lg text-slate-600">
            Experience building end-to-end systems across engineering, product, and research.
          </p>
        </header>
      </RevealSection>

      <section className="mt-10 grid gap-4">
        {experiences.map((exp) => (
          <RevealSection key={`${exp.company}-${exp.role}`}>
            <div className="rounded-xl border border-border bg-white/70 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">{exp.icon}</div>
                  <div>
                    <h2 className="text-base font-semibold text-foreground">
                      {exp.company}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">{exp.role}</p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <Calendar className="h-4 w-4" />
                  {exp.dates}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-300" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {exp.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}

                {exp.link ? (
                  <Link
                    href={exp.link.href}
                    className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-foreground"
                  >
                    {exp.link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </div>
          </RevealSection>
        ))}
      </section>
    </main>
  );
}
