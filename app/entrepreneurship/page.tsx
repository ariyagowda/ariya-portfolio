export default function EntrepreneurshipPage() {
    const sections = [
      {
        title: "Leadership",
        items: [
          {
            headline: "President, Sigma Eta Pi at UC Irvine",
            detail:
              "Led programming and events for an entrepreneurship and technology community, including workshops, mentorship, and founder support.",
          },
        ],
      },
      {
        title: "Startup",
        items: [
          {
            headline: "Cartello, Co founder",
            detail:
              "Built and shipped an MVP and validated the idea through iteration, customer feedback, and pitching.",
          },
        ],
      },
      {
        title: "Programs and competitions",
        items: [
          {
            headline: "UC Launch",
            detail: "Startup accelerator experience focused on customer discovery and MVP building.",
          },
          {
            headline: "Butterworth Competition",
            detail: "Pitched and competed with a startup concept and product progress.",
          },
          {
            headline: "South Summit Brazil",
            detail: "Attended and engaged with the startup ecosystem and founders.",
          },
          {
            headline: "NVC Stella Zhang",
            detail: "New Venture Competition participation and pitch development.",
          },
        ],
      },
    ];
  
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Entrepreneurship
          </h1>
          <p className="text-lg text-slate-600">
            Building and leading early stage products through iteration, community, and execution.
          </p>
        </header>
  
        <section className="mt-10 grid gap-4">
          {sections.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border bg-white/70 p-6"
            >
              <h2 className="text-base font-semibold text-foreground">
                {s.title}
              </h2>
  
              <ul className="mt-4 space-y-4">
                {s.items.map((item) => (
                  <li key={item.headline}>
                    <div className="text-sm font-semibold text-foreground">
                      {item.headline}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    );
  }
  