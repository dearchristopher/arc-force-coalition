import { Link, createFileRoute } from "@tanstack/react-router";

const basics = [
  "Voltage vs amps vs gearing: how they trade torque, heat, and top speed.",
  "Safety first: wiring, fusing, connectors, and chain alignment that stays put.",
  "Common mistakes: controller current set higher than the pack, sloppy throttle calibration, ignored regen limits.",
];

const deeperLinks = [
  { title: "Compare Power Systems", to: "/compare", note: "Voltage tiers by feel and cost" },
  { title: "Controllers", to: "/components/controllers", note: "FarDriver-first, torque-safe settings" },
  { title: "Motors", to: "/components/motors", note: "MY1020 focus with mounting + cooling notes" },
  { title: "Gearing", to: "/components/gearing", note: "Sprocket swaps and chain choices" },
];

export const Route = createFileRoute("/start")({ component: StartPage });

function StartPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Start Here</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Torque-first orientation</h1>
        <p className="text-muted-foreground text-lg">
          Before you spend, know what actually changes torque, what breaks first, and how to keep a build repeatable.
        </p>
      </header>

      <section className="grid gap-4">
        {basics.map((item) => (
          <div key={item} className="rounded-lg border border-border bg-card/70 px-5 py-4 shadow-sm">
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Read these next</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {deeperLinks.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group flex flex-col rounded-lg border border-border bg-card p-4 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
            >
              <span className="text-sm uppercase tracking-[0.25em] text-secondary">Next</span>
              <span className="mt-2 text-lg font-semibold">{item.title}</span>
              <span className="text-muted-foreground mt-2 text-sm">{item.note}</span>
              <span className="text-primary mt-3 text-sm font-semibold">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
