import { Link, createFileRoute } from "@tanstack/react-router";

const featuredCards = [
  {
    title: "Start Here",
    body: "Voltage vs amps vs gearing, safety basics, and the mistakes to avoid on day one.",
    to: "/start",
  },
  {
    title: "Latest comparisons",
    body: "48 vs 52 vs 60 vs 72 — what changes in torque feel, pack cost, and setup.",
    to: "/compare",
  },
  {
    title: "Known-good combos",
    body: "MY1020 + 72260 + 72v 20Ah and other pairings that have proven repeatable.",
    to: "/components",
  },
];

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">
            Verified, not vibes
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Torque-first EV builds. Verified, not vibes.
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Real-world data, conservative settings, and components that survive
            torque-heavy riding. No hype, just repeatable results.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/compare"
              className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition"
            >
              Browse Power Options
            </Link>
            <Link
              to="/builds"
              className="border-border hover:bg-muted text-foreground rounded-md border px-4 py-2 text-sm font-semibold transition"
            >
              Submit a Build
              <span className="ml-2 rounded-full bg-secondary/20 px-2 py-0.5 text-[11px] font-semibold text-secondary">
                coming soon
              </span>
            </Link>
            <Link
              to="/tools/current-check"
              className="text-primary hover:text-primary/80 text-sm font-semibold underline decoration-secondary decoration-2 underline-offset-4 transition"
            >
              Build Wizard
              <span className="ml-2 rounded-full bg-secondary/20 px-2 py-0.5 text-[11px] font-semibold text-secondary">
                beta soon
              </span>
            </Link>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="bg-primary/20 text-primary rounded-full px-3 py-1 font-semibold">
                Arc Blue signal
              </span>
              <span>Highlights torque-safe choices for batteries, controllers, and gearing.</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Today&apos;s highlights</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between rounded-lg bg-muted/50 px-4 py-3">
              <div>
                <dt className="text-muted-foreground">Voltage tiers</dt>
                <dd className="font-semibold">72v peak torque</dd>
              </div>
              <Link to="/compare/72v" className="text-primary hover:text-primary/80">
                View
              </Link>
            </div>
            <div className="flex justify-between rounded-lg bg-muted/50 px-4 py-3">
              <div>
                <dt className="text-muted-foreground">Controller baseline</dt>
                <dd className="font-semibold">FarDriver 72260</dd>
              </div>
              <Link to="/components/controllers" className="text-primary hover:text-primary/80">
                View
              </Link>
            </div>
            <div className="flex justify-between rounded-lg bg-muted/50 px-4 py-3">
              <div>
                <dt className="text-muted-foreground">Known-good combo</dt>
                <dd className="font-semibold">MY1020 + 72v 20Ah + 14/72T</dd>
              </div>
              <Link to="/builds" className="text-primary hover:text-primary/80">
                View
              </Link>
            </div>
          </dl>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <Link to="/updates" className="text-sm text-muted-foreground hover:text-foreground">
            Latest updates
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
            >
              <div className="bg-primary/10 absolute inset-0 rounded-xl opacity-0 blur-xl transition group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{card.body}</p>
              <span className="text-primary mt-3 text-sm font-semibold">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
