import { createFileRoute } from "@tanstack/react-router";

const checks = [
  "Input: pack continuous/peak rating, controller line current, and planned phase current.",
  "Output: warning if controller draw exceeds what the pack/BMS can safely supply.",
  "Bonus: regen acceptance check so you do not cook a pack with aggressive braking.",
];

export const Route = createFileRoute("/tools/current-check")({
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Tools</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Current sanity checker</h1>
        <p className="text-muted-foreground text-lg">
          Quickly see if your controller settings outrun what the battery and BMS can handle.
        </p>
      </header>
      <div className="space-y-3">
        {checks.map((step) => (
          <div key={step} className="rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm">
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
