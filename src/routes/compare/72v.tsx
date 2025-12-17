import { createFileRoute } from "@tanstack/react-router";

import { VoltageDetail } from "./voltage-template";

export const Route = createFileRoute("/compare/72v")({
  component: Page,
});

function Page() {
  return (
    <VoltageDetail
      title="72V"
      feel="Maximum torque-first potential. Unforgiving to weak packs and sloppy gearing."
      pricing={[
        { label: "Budget", notes: "Not recommended; risk of BMS trips and pack damage." },
        { label: "Mid", notes: "Only if BMS continuous is honest 150A+ with solid cooling." },
        { label: "Premium", notes: "High-cont cells, stout bus bars, quality connectors, FarDriver 72260 class." },
      ]}
      packSpecs={[
        "20s: 20–30Ah typical, 150–200A continuous, 250A+ peak if built right.",
        "Gear down: smaller front / larger rear sprocket to control temps and traction.",
        "Throttle mapping and phase current limits matter more than ever.",
        "Regen: start conservative; confirm pack and BMS accept it.",
      ]}
      useCases={[
        "Torque-focused builds chasing brutal launch with proper traction setup.",
        "Heavier riders or steep terrain where lower voltages sag.",
        "Testing controller headroom for future race or stunt builds.",
        "When you already budgeted for premium pack + connectors + cooling.",
      ]}
      buildsLink="/builds?voltage=72v"
    />
  );
}
