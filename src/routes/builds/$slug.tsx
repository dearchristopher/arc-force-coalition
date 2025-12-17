import { createFileRoute } from "@tanstack/react-router";

type BuildDetails = {
  title: string;
  voltage: string;
  pack: string;
  controller: string;
  motor: string;
  gearing: string;
  rider: string;
  terrain: string;
  topSpeed: string;
  torqueFeel: string;
  notes: string[];
};

const buildMap: Record<string, BuildDetails> = {
  "my1020-72260-72v-20ah": {
    title: "MY1020 + 72260 + 72v 20Ah",
    voltage: "72v",
    pack: "72v 20Ah, 200A cont BMS",
    controller: "FarDriver 72260",
    motor: "MY1020",
    gearing: "14/72T",
    rider: "180 lb",
    terrain: "Mixed trail/street",
    topSpeed: "38 mph",
    torqueFeel: "Brutal launch; keep traction in check with gearing and throttle map.",
    notes: [
      "Phase current capped to keep motor temps in range on long pulls.",
      "Regen set conservative to avoid pack/BMS spikes; ramp up only after logs look clean.",
      "Chain alignment critical; upgraded to #219 for durability.",
    ],
  },
  "my1020-72150-52v-30ah": {
    title: "MY1020 + 72150 + 52v 30Ah",
    voltage: "52v",
    pack: "52v 30Ah, 120A cont BMS",
    controller: "FarDriver 72150",
    motor: "MY1020",
    gearing: "15/62T",
    rider: "165 lb",
    terrain: "Street with hills",
    topSpeed: "32 mph",
    torqueFeel: "Snappy but manageable; cooler temps than 60/72v for similar use.",
    notes: [
      "Throttle map softened off the line for wet conditions.",
      "Regen moderate; BMS verified to accept it without trips.",
      "Chain kept at T8F; inspect frequently under heavier regen.",
    ],
  },
  "my1020-96120-48v-25ah": {
    title: "MY1020 + 96120 + 48v 25Ah",
    voltage: "48v",
    pack: "48v 25Ah, 90A cont BMS",
    controller: "FarDriver 96120",
    motor: "MY1020",
    gearing: "13/60T",
    rider: "150 lb",
    terrain: "Urban hills",
    topSpeed: "28 mph",
    torqueFeel: "Predictable torque with low heat; great entry baseline.",
    notes: [
      "Phase current limited to keep pack happy; still launches harder than stock.",
      "Regen light to medium; verify connectors stay cool.",
      "Chain tension and alignment checked weekly; quieter than larger chains.",
    ],
  },
};

export const Route = createFileRoute("/builds/$slug")({
  component: BuildDetailPage,
});

function BuildDetailPage() {
  const { slug } = Route.useParams();
  const build = buildMap[slug];

  if (!build) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Build not found</h1>
        <p className="text-muted-foreground">Pick a build from the library to view its details.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Build</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{build.title}</h1>
        <p className="text-muted-foreground">{build.torqueFeel}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <Spec label="Voltage" value={build.voltage} />
        <Spec label="Pack" value={build.pack} />
        <Spec label="Controller" value={build.controller} />
        <Spec label="Motor" value={build.motor} />
        <Spec label="Gearing" value={build.gearing} />
        <Spec label="Rider" value={build.rider} />
        <Spec label="Terrain" value={build.terrain} />
        <Spec label="Top speed" value={build.topSpeed} />
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Notes & tuning</h2>
        <ul className="space-y-2">
          {build.notes.map((note) => (
            <li key={note} className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm">
              {note}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-secondary">{label}</p>
      <p className="mt-2 text-sm font-semibold">{value}</p>
    </div>
  );
}
