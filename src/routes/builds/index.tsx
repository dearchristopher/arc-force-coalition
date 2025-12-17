import { Link, createFileRoute } from "@tanstack/react-router";

const builds = [
  {
    slug: "my1020-72260-72v-20ah",
    title: "MY1020 + 72260 + 72v 20Ah",
    summary: "Baseline torque-first combo with gearing for grip.",
    voltage: "72v",
    pack: "72v 20Ah, 200A cont BMS",
    controller: "FarDriver 72260",
    gearing: "14/72T",
    rider: "180 lb, mixed trail/street",
    speed: "38 mph top, brutal launch",
  },
  {
    slug: "my1020-72150-52v-30ah",
    title: "MY1020 + 72150 + 52v 30Ah",
    summary: "Mid-voltage setup for manageable heat and range.",
    voltage: "52v",
    pack: "52v 30Ah, 120A cont BMS",
    controller: "FarDriver 72150",
    gearing: "15/62T",
    rider: "165 lb, street bias",
    speed: "32 mph top, strong mid pull",
  },
  {
    slug: "my1020-96120-48v-25ah",
    title: "MY1020 + 96120 + 48v 25Ah",
    summary: "Entry voltage with torque focus and cooler temps.",
    voltage: "48v",
    pack: "48v 25Ah, 90A cont BMS",
    controller: "FarDriver 96120",
    gearing: "13/60T",
    rider: "150 lb, urban hills",
    speed: "28 mph top, predictable torque",
  },
];

export const Route = createFileRoute("/builds/")({
  component: BuildsPage,
});

function BuildsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Build Library</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Repeatable builds</h1>
        <p className="text-muted-foreground text-lg">
          Early library of torque-first builds. Filterable list comes later; for now, browse curated examples.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {builds.map((build) => (
          <Link
            key={build.slug}
            to={`/builds/${build.slug}`}
            className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{build.title}</h2>
              <span className="text-sm text-secondary uppercase">{build.voltage}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{build.summary}</p>
            <dl className="mt-3 grid gap-2 text-sm">
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Pack</dt>
                <dd className="font-semibold">{build.pack}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Controller</dt>
                <dd className="font-semibold">{build.controller}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Gearing</dt>
                <dd className="font-semibold">{build.gearing}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-muted-foreground">Notes</dt>
                <dd className="font-semibold">{build.rider} — {build.speed}</dd>
              </div>
            </dl>
          </Link>
        ))}
      </div>
    </div>
  );
}
