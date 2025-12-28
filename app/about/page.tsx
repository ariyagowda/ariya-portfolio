export default function AboutPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            About
          </h1>
          <p className="text-lg text-slate-600">
            I like building things that are useful, well designed, and grounded in real user needs.
          </p>
        </header>
  
        <section className="mt-10 grid gap-4">
          <div className="rounded-xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">
              What I work on
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              I am a Software Engineering student at UC Irvine. I build AI powered tools and human centered systems across product engineering, research, and startups.
              I have worked on enterprise search and retrieval, CRM platforms, and digital health prototypes for children.
            </p>
          </div>
  
          <div className="rounded-xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">
              What I care about
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              I care about systems that feel supportive in real life, not just impressive in demos. That usually means shipping, testing with users, and iterating quickly
              while staying thoughtful about privacy, accessibility, and reliability.
            </p>
          </div>
  
          <div className="rounded-xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">
              Outside of school and work
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              I spend a lot of time around startups and student founders through Sigma Eta Pi. I also enjoy traveling, planning events, and working on projects that combine
              technology with community and creativity.
            </p>
          </div>
        </section>
      </main>
    );
  }
  