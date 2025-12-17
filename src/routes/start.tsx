import { Link, createFileRoute } from "@tanstack/react-router";

const basics = [
  "Voltage vs current vs gearing: framed by ride feel, heat, and control—not spec-sheet bragging.",
  "Safety and reliability: wiring, fusing, connectors, and chain alignment that hold up in grass, yards, and trails.",
  "Common mistakes: controller current set above pack limits, sloppy throttle/regen setup, ignoring BMS acceptance.",
];

const deeperLinks = [
  { title: "Compare Power Systems", to: "/compare", note: "Voltage tiers by feel and cost" },
  { title: "Controllers", to: "/components/controllers", note: "FarDriver-first settings for controllable torque" },
  { title: "Motors", to: "/components/motors", note: "MY1020 focus with mounting + cooling notes" },
  { title: "Gearing", to: "/components/gearing", note: "Sprocket swaps and chain choices" },
];

export const Route = createFileRoute("/start")({ component: StartPage });

function StartPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Start Here</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Real-world build orientation</h1>
        <p className="text-muted-foreground text-lg">
          Before you spend, learn what actually changes control and reliability—and what breaks first—so every dollar
          moves you toward a predictable, durable ride.
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
