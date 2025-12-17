import { Link, createFileRoute } from "@tanstack/react-router";

const voltages = [
  {
    slug: "48v",
    title: "48V",
    feel: "Balanced torque, cooler temps, friendliest to budget packs.",
    pricing: "Budget to mid packs and controllers.",
  },
  {
    slug: "52v",
    title: "52V",
    feel: "Noticeably sharper launch than 48v without big pack costs.",
    pricing: "Mid-tier packs with better BMS limits.",
  },
  {
    slug: "60v",
    title: "60V",
    feel: "Punchy torque with room for regen and tuning headroom.",
    pricing: "Mid to premium; controller and pack need to be aligned.",
  },
  {
    slug: "72v",
    title: "72V",
    feel: "Max torque-first potential; unforgiving to weak packs.",
    pricing: "Premium packs and controllers only; gear down smartly.",
  },
];

export const Route = createFileRoute("/compare/")({ component: ComparePage });

function ComparePage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Compare</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Choose a voltage path</h1>
        <p className="text-muted-foreground text-lg">
          Voltage changes torque feel, gearing needs, pack cost, and regen behavior. Pick a tier and see real builds using it.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {voltages.map((item) => (
          <Link
            key={item.slug}
            to={`/compare/${item.slug}`}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <span className="text-sm text-secondary">View details</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{item.feel}</p>
            <p className="mt-3 rounded-lg bg-muted/40 px-4 py-2 text-sm font-semibold text-foreground">
              {item.pricing}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
