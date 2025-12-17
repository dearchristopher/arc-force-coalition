import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">About</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Mission: document real electric builds</h1>
        <p className="text-muted-foreground text-lg">
          This site exists to share usable builds without hype or spec-sheet racing. The focus is controllability,
          reliability, and honest cost tradeoffs.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Why this exists</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Real, rideable electric builds—no hype, no influencer nonsense. The lens is yard, trail, and grass riding
            where torque, control, and durability matter more than bragging rights.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Principles</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Voltage, current, gearing, motor choice, controller tuning, and battery limits are framed by outcomes:
            how the bike feels, whether it stays safe, and whether the money spent is worth it.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Method</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Information stays structured and repeatable. Comparisons use the same motor and gearing when possible so
            voltage and current differences mean something. Claims tie back to real builds and tuning outcomes.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Tone</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Calm, confident, and practical. No “game changer” language. If a cheaper option works just as well, that is
            what gets recommended. The goal is to help riders avoid wasted money, unsafe setups, and disappointment.
          </p>
        </div>
      </div>
    </div>
  );
}
