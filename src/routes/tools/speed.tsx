import { createFileRoute } from "@tanstack/react-router";

const steps = [
  "Set RPM, wheel size, and gearing to estimate top speed.",
  "Use the torque/speed slider to see how sprocket changes trade acceleration vs top speed.",
  "Reminder: gear down first for torque and controller headroom; add speed only if temps stay happy.",
];

export const Route = createFileRoute("/tools/speed")({
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Tools</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Speed estimator</h1>
        <p className="text-muted-foreground text-lg">
          A gearing-first calculator to predict speed without sacrificing launch and thermal headroom.
        </p>
      </header>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step} className="rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm">
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
