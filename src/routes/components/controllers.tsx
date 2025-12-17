import { createFileRoute } from "@tanstack/react-router";

const bullets = [
  "FarDriver overview focused on 72260 as the anchor controller.",
  "Line vs phase current, throttle mapping, protection limits, and regen setup.",
  "Known-good starting settings template to avoid over-stressing packs.",
];

export const Route = createFileRoute("/components/controllers")({
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Components</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Controllers</h1>
        <p className="text-muted-foreground text-lg">
          FarDriver-first guidance so torque stays controllable and packs stay alive.
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
