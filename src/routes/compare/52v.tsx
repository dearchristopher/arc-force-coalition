import { createFileRoute } from "@tanstack/react-router";

import { VoltageDetail } from "./voltage-template";

export const Route = createFileRoute("/compare/52v")({
  component: Page,
});

function Page() {
  return (
    <VoltageDetail
      title="52V"
      feel="Sharpened launch over 48v without huge pack cost jumps. Still manageable heat."
      pricing={[
        { label: "Budget", notes: "Base 52v packs, 60–90A BMS, careful current limits." },
        { label: "Mid", notes: "100–140A BMS, stronger cells, FarDriver 72150-72xxx range." },
        { label: "Premium", notes: "High-cont cells for repeated launches and regen headroom." },
      ]}
      packSpecs={[
        "14s: 20–30Ah typical, 70–120A continuous, 150–180A peak.",
        "Noticeable torque bump vs 48v; watch chain alignment as grip improves.",
        "Controller current should track BMS limits; throttle map matters.",
        "Regen: step up gradually; verify BMS accepts it.",
      ]}
      useCases={[
        "Riders wanting more snap than 48v without the 60/72v wiring demands.",
        "Mixed on/off-road where traction varies.",
        "Mid-weight riders with moderate hills.",
        "Learning FarDriver tuning while keeping pack stress reasonable.",
      ]}
      buildsLink="/builds?voltage=52v"
    />
  );
}
