import { createFileRoute } from "@tanstack/react-router";

const steps = [
  "Enter pack voltage, amp-hours, and an honest average watts draw.",
  "Pick a riding style preset (cruise, mixed, aggressive) to sanity check.",
  "Output: estimated range and suggested buffer so you do not over-discharge high-output packs.",
];

export const Route = createFileRoute("/tools/range")({
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Tools</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Range estimator</h1>
        <p className="text-muted-foreground text-lg">
          Quick watts × time math with presets to keep expectations realistic and packs safe.
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
