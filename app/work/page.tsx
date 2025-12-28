export default function WorkPage() {
    const roles = [
      {
        company: "Walmart Global Tech",
        title: "Software Engineering Intern",
        timeframe: "Summer 2025",
        bullets: [
          "Built an internal search and knowledge retrieval tool to help teams find relevant information faster.",
          "Designed retrieval and ranking logic and documented architecture, tradeoffs, and evaluation approach.",
          "Collaborated with engineers and stakeholders to refine requirements and ship iteratively.",
        ],
        tech: ["Python", "TypeScript", "LLMs", "Retrieval", "Azure"],
      },
      {
        company: "ProcureSpark",
        title: "Product, Design, and Engineering",
        timeframe: "2025",
        bullets: [
          "Defined CRM data models and workflow logic to improve backend structure and system reliability.",
          "Optimized database queries and schemas to reduce latency and improve responsiveness.",
          "Worked closely with stakeholders to prioritize features and deliver an MVP.",
        ],
        tech: ["Python", "SQL", "Supabase", "APIs", "Data modeling"],
      },
      {
        company: "STAR Lab, UC Irvine",
        title: "Research Engineer",
        timeframe: "2025 to present",
        bullets: [
          "Built and iterated on child focused digital health prototypes with user centered design practices.",
          "Supported research workflows including prototyping, usability testing, and data analysis.",
          "Contributed to research artifacts including demos, posters, and publications.",
        ],
        tech: ["Swift", "Prototyping", "HCI", "Qualitative methods"],
      },
      {
        company: "University of Wyoming",
        title: "Machine Learning Engineer",
        timeframe: "2024",
        bullets: [
          "Developed machine learning experiments and data pipelines to support research goals.",
          "Improved model evaluation and reporting for clearer insights and iteration.",
        ],
        tech: ["Python", "ML", "Data analysis"],
      },
    ];
  
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Work
          </h1>
          <p className="text-lg text-slate-600">
            Selected experience across software engineering, product, research, and machine learning.
          </p>
        </header>
  
        <section className="mt-10 grid gap-4">
          {roles.map((r) => (
            <div
              key={`${r.company}-${r.title}`}
              className="rounded-xl border border-border bg-white/70 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="text-base font-semibold text-foreground">
                  {r.company}
                </div>
                <div className="text-sm text-slate-500">{r.timeframe}</div>
              </div>
  
              <div className="mt-1 text-sm font-medium text-slate-700">
                {r.title}
              </div>
  
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
  
              <div className="mt-4 flex flex-wrap gap-2">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }
  