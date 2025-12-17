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
    <div className="space-y-16">
      <section className="flex flex-col items-center gap-10">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">
            Real, usable builds
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            #1 DIY E-Moto Resource
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Arc Force Coalition exists to serve one purpose: real, usable e-moto builds that are reliable, durable, and fun. Let us answer the questions; you just enjoy the ride.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/compare"
              className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition"
            >
              Browse Power Options
            </Link>
            {/* <Link
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
            </Link> */}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-secondary/30" />
          <img
            src="/bike-hero-placeholder.png"
            alt="Electric bike build in the wild"
            className="h-full w-full object-cover mix-blend-luminosity brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <img src="/arc-force-logo.png" alt="Arc Force Coalition" className="h-12 md:h-48 w-auto drop-shadow-sm relative left-[-4px] md:left-[-18px]" />
            <p className="text-sm text-muted-foreground">
              Spec the parts. Build the bike. Rule the neighborhood.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">What this is</p>
          <h3 className="mt-2 text-xl font-semibold">Documented, rideable builds</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            No spec-sheet racing. Voltage, current, gearing, motor, controller, and battery limits are explained by ride
            feel, safety, and whether the spend is worth it.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">Why it matters</p>
          <h3 className="mt-2 text-xl font-semibold">Outcome first</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Builds should be rideable, predictable, and durable—not violent wheelie machines unless that is the goal. If
            a cheaper option works just as well, that is what gets recommended.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-secondary">How to use it</p>
          <h3 className="mt-2 text-xl font-semibold">Structured and repeatable</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Information is grounded and repeatable. Comparisons keep the same motor and gearing when possible so voltage
            and current differences are meaningful.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary">Today&apos;s highlights</p>
              <h2 className="text-2xl font-semibold">Quick picks</h2>
            </div>
            <Link to="/updates" className="text-sm text-muted-foreground hover:text-foreground">
              Updates
            </Link>
          </div>
          <dl className="space-y-3 text-sm">
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
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">Start here</p>
          <h2 className="text-2xl font-semibold">Guides and quick links</h2>
          <div className="grid gap-4 md:grid-cols-2">
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
        </div>
      </section>
    </div>
  );
}
