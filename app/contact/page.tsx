export default function ContactPage() {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Contact
          </h1>
          <p className="text-lg text-slate-600">
            Feel free to reach out! I am open to software engineering, product, and research opportunities.
          </p>
        </header>
  
        <section className="mt-10 grid gap-4">
          <div className="rounded-xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">
              Email
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              <a
                href="mailto:ariyagowda@gmail.com"
                className="font-medium text-primary hover:underline"
              >
                ariyagowda@gmail.com
              </a>
            </p>
          </div>
  
          <div className="rounded-xl border border-border bg-white/70 p-6">
            <h2 className="text-base font-semibold text-foreground">
              Links
            </h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/ariyagowda"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arigow"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
  
          
        </section>
      </main>
    );
  }
  