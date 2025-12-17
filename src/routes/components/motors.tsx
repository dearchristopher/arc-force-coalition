import { createFileRoute } from "@tanstack/react-router";

const bullets = [
  "MY1020 hub of info with pole pairs, hall/angle detect basics, and common issues.",
  "Cooling, mounting, and chain alignment notes to keep torque without throwing chains.",
  "Reference settings for reliable detection and launch behavior.",
];

export const Route = createFileRoute("/components/motors")({
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Components</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Motors</h1>
        <p className="text-muted-foreground text-lg">
          Focused on MY1020 and similar setups tuned for controllable torque.
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
