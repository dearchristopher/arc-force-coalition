import { createFileRoute } from "@tanstack/react-router";

const bullets = [
  "Battery basics and how to read a listing: continuous vs peak, and why BMS limits matter.",
  "Vendor notes: MomentumWatts, HotPaxx, Amorge, and more as data comes in.",
  "Regen compatibility: what to ask for, how to verify acceptance, and ramp suggestions.",
];

export const Route = createFileRoute("/components/batteries")({
  component: Page,
});

function Page() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Components</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Batteries</h1>
        <p className="text-muted-foreground text-lg">
          Choosing packs that can actually deliver controller current and accept regen without tripping protection.
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
