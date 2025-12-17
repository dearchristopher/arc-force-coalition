import { createFileRoute } from "@tanstack/react-router";

const bullets = [
  "Simple gearing explainer: what changes when you swap front vs rear sprockets.",
  "Torque vs top speed tradeoffs with examples for common wheel sizes.",
  "Chain types: T8F, #25H, #219, and when to step up for durability.",
];

export const Route = createFileRoute("/components/gearing")({
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Components</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Drivetrain / Gearing</h1>
        <p className="text-muted-foreground text-lg">
          Gear down for torque, protect chains, and keep controllers and packs inside their safe envelope.
        </p>
      </header>
      <div className="space-y-3">
        {bullets.map((line) => (
          <div key={line} className="rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
