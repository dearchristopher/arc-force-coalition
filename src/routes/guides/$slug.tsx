import { createFileRoute } from "@tanstack/react-router";

const guideMap: Record<string, { title: string; outline: string[] }> = {
  "tuning-fardriver-for-torque": {
    title: "Tuning your FarDriver for controllable torque",
    outline: [
      "Line vs phase current and why torque needs both in balance.",
      "Throttle mapping that avoids wheel spin while keeping snap.",
      "Thermal and protection settings that prevent silent rollbacks.",
    ],
  },
  "regen-setup-dont-kill-pack": {
    title: "Regen setup and how not to kill a pack",
    outline: [
      "BMS acceptance checks before you turn up regen.",
      "Ramp rates and throttle-based regen vs brake lever.",
      "Connector heat checks and when to back off.",
    ],
  },
  "troubleshooting-delayed-throttle": {
    title: "Troubleshooting: delayed throttle / cutouts / throttle fail",
    outline: [
      "Signal path checks: throttle → controller → motor sensors.",
      "Common protection triggers and how to read logs.",
      "Safe test loop to confirm fixes before full pulls.",
    ],
  },
  "first-ride-checklist": {
    title: "First ride checklist",
    outline: [
      "Fastener, chain, and connector checks before rolling out.",
      "Throttle calibration and brake cutoffs verified.",
      "First mile routine to spot heat or noise early.",
    ],
  },
};

export const Route = createFileRoute("/guides/$slug")({
  component: GuidePage,
});

function GuidePage() {
  const { slug } = Route.useParams();
  const guide = guideMap[slug];

  if (!guide) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Guide not found</h1>
        <p className="text-muted-foreground">Pick a guide from the library to view details.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Guide</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{guide.title}</h1>
        <p className="text-muted-foreground">Outline preview. Full content coming next.</p>
      </header>
      <ul className="space-y-2">
        {guide.outline.map((item) => (
          <li key={item} className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
