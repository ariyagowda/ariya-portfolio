import Link from "next/link";

export default function ResearchPage() {
  const publications = [
    {
      title: "Enchanted Forest: A Gamified Approach for Children’s Self Regulation in Noisy and Overstimulating Settings",
      venue: "IDC",
      year: "2025",
    },
    {
      title: "AudioBuddy: Supporting People with Noise Sensitivity and Their Care Networks",
      venue: "UbiComp Companion",
      year: "2025",
    },
  ];

  const presentations = [
    {
      title: "IDC 2025 Presentation",
      detail: "Presented research in Reykjavik, Iceland",
    },
    {
      title: "UC Launch",
      detail: "Pitched product work and prototypes",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Research
        </h1>
        <p className="text-lg text-slate-600">
          Human centered systems at the intersection of AI, digital health, and inclusive design.
        </p>
      </header>

      <section className="mt-10 rounded-xl border border-border bg-white/70 p-6">
        <h2 className="text-base font-semibold text-foreground">Affiliation</h2>
        <p className="mt-2 text-sm text-slate-600">
          Research with STAR Lab at UC Irvine under Professor Gillian R Hayes, focused on accessible and supportive technologies.
        </p>
      </section>

      <section className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-white/70 p-6">
          <h2 className="text-base font-semibold text-foreground">AudioBuddy</h2>
          <p className="mt-2 text-sm text-slate-600">
            A child friendly mobile app that supports self regulation in overstimulating environments through sensing and adaptive guidance.
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

        <div className="rounded-xl border border-border bg-white/70 p-6">
          <h2 className="text-base font-semibold text-foreground">Methods</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>Co design and iterative prototyping</li>
            <li>Usability testing and field feedback</li>
            <li>Qualitative coding and thematic analysis</li>
            <li>System design for real world constraints</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-white/70 p-6">
        <h2 className="text-base font-semibold text-foreground">Publications</h2>
        <ul className="mt-4 space-y-3">
          {publications.map((p) => (
            <li key={p.title} className="text-sm text-slate-600">
              <span className="font-medium text-foreground">{p.title}</span>
              <span className="text-slate-500">{" "}({p.venue}, {p.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-xl border border-border bg-white/70 p-6">
        <h2 className="text-base font-semibold text-foreground">Presentations</h2>
        <ul className="mt-4 space-y-3">
          {presentations.map((p) => (
            <li key={p.title} className="text-sm text-slate-600">
              <span className="font-medium text-foreground">{p.title}</span>
              <span className="text-slate-500">{" "}– {p.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4 rounded-xl border border-border bg-white/70 p-6">
        <h2 className="text-base font-semibold text-foreground">Conferences attended</h2>
        <p className="mt-2 text-sm text-slate-600">
          IDC 2025, CES 2026, and South Summit Brazil 2025.
        </p>
      </section>
    </main>
  );
}
