import { createFileRoute } from "@tanstack/react-router";

import { VoltageDetail } from "./voltage-template";

export const Route = createFileRoute("/compare/48v")({
  component: Page,
});

function Page() {
  return (
    <VoltageDetail
      title="48V"
      feel="Balanced torque and heat. Easy on drivetrains and beginner-friendly packs."
      pricing={[
        { label: "Budget", notes: "Entry 18650/21700 packs, 50–80A BMS, smaller controllers." },
        { label: "Mid", notes: "90–120A BMS, FarDriver 96120/96180 class controllers." },
        { label: "Premium", notes: "High-cont packs for long pulls, upgraded wiring and connectors." },
      ]}
      packSpecs={[
        "13s: 20–30Ah typical, 50–90A continuous, 120–150A peak.",
        "Friendly regen limits; BMS protection usually tolerant.",
        "Best with stout wiring and conservative controller phase current.",
        "Great for street pace or light off-road without overheating.",
      ]}
      useCases={[
        "Daily commuter builds where reliability outranks top speed.",
        "Riders new to tuning who want easier thermal management.",
        "Smaller frames where chain/sprocket size is constrained.",
        "Longer range riding with modest bursts of torque.",
      ]}
      buildsLink="/builds?voltage=48v"
    />
  );
}
