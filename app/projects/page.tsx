import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Walmart Enterprise Search",
      description:
        "Enterprise search and retrieval work, shared as a safe write up with architecture and tradeoffs.",
      href: "/projects/walmart-enterprise-search",
      tag: "Case study",
    },
    {
      title: "ProcureSpark CRM Platform",
      description:
        "Backend data models and workflow logic for a CRM platform, focused on performance and reliability.",
      href: "/projects/procurespark-crm",
      tag: "Case study",
    },
    {
      title: "Cartello",
      description:
        "Co founded marketplace project from idea to MVP, with product decisions and engineering execution.",
      href: "/projects/cartello",
      tag: "Startup",
    },
    {
      title: "AudioBuddy Technical Demo",
      description:
        "A simplified build showing AI powered, context aware behavior and human centered design decisions.",
      href: "/projects/audiobuddy-demo",
      tag: "AI and HCI",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="text-lg text-slate-600">
          Selected projects with write ups focused on impact, architecture, and tradeoffs.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="rounded-xl border border-border bg-white/70 p-5 transition hover:bg-primary-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-base font-semibold text-foreground">
                {p.title}
              </div>

              <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-foreground">
                {p.tag}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-600">{p.description}</p>
          </Link>
        ))}
      </section>

      <section className="mt-12 rounded-xl border border-border bg-white/70 p-6">
        <h2 className="text-base font-semibold text-foreground">GitHub</h2>
        <p className="mt-2 text-sm text-slate-600">
          Code and smaller experiments live on GitHub. Some work is confidential, so I share architecture and results instead.
        </p>

        <div className="mt-4">
          <a
            className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            href="https://github.com/ariyagowda"
            target="_blank"
            rel="noreferrer"
          >
            Visit GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
