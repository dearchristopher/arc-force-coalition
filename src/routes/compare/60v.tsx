import { createFileRoute } from "@tanstack/react-router";

import { VoltageDetail } from "./voltage-template";

export const Route = createFileRoute("/compare/60v")({
  component: Page,
});

function Page() {
  return (
    <VoltageDetail
      title="60V"
      feel="Punchy torque with regen and tuning headroom; exposes weak packs quickly."
      pricing={[
        { label: "Budget", notes: "Sparse options; avoid unless BMS >100A continuous." },
        { label: "Mid", notes: "120–160A BMS packs, matched with 72xxx FarDriver controllers." },
        { label: "Premium", notes: "High-cont cells, robust cabling, and cooling attention." },
      ]}
      packSpecs={[
        "16s: 20–30Ah typical, 100–150A continuous, 180–220A peak.",
        "Heavier wiring/connectors recommended; check phase current vs line current.",
        "Gearing needs attention; drop teeth to keep temps manageable.",
        "Regen feels strong—validate pack acceptance and tune ramp rates.",
      ]}
      useCases={[
        "Aggressive trail or street torque where 52v feels soft.",
        "Heavier riders who still want manageable heat.",
        "Builds preparing for 72v later (wiring upgraded already).",
        "Testing higher regen levels with reliable packs.",
      ]}
      buildsLink="/builds?voltage=60v"
    />
  );
}
