import Link from "next/link";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug ?? "";

  const title = slug
    ? slug
        .split("-")
        .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
        .join(" ")
    : "Project";

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-foreground"
      >
        ← Back to Projects
      </Link>

      <header className="mt-6 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        <p className="text-lg text-slate-600">
          This page is a template for project write ups.
        </p>

        <p className="text-sm text-slate-500">
          Slug: <span className="font-mono">{slug || "(missing)"}</span>
        </p>
      </header>

      <section className="mt-10 grid gap-4">
        <div className="rounded-xl border border-border bg-white/70 p-6">
          <h2 className="text-base font-semibold text-foreground">Overview</h2>
          <p className="mt-2 text-sm text-slate-600">
            Add a short summary here. What it is, who it helps, and what you built.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-white/70 p-6">
          <h2 className="text-base font-semibold text-foreground">Highlights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
            <li>One measurable outcome or impact.</li>
            <li>One technical decision and why it mattered.</li>
            <li>One thing you owned end to end.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-white/70 p-6">
          <h2 className="text-base font-semibold text-foreground">Tech</h2>
          <p className="mt-2 text-sm text-slate-600">
            Add the stack here. Example: TypeScript, Next.js, Python, SQL, Supabase.
          </p>
        </div>
      </section>
    </main>
  );
}
