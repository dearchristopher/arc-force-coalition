import { Link } from "@tanstack/react-router";

type PricingTier = {
  label: string;
  notes: string;
};

type VoltageProps = {
  title: string;
  feel: string;
  pricing: PricingTier[];
  packSpecs: string[];
  useCases: string[];
  buildsLink?: string;
};

export function VoltageDetail({
  title,
  feel,
  pricing,
  packSpecs,
  useCases,
  buildsLink,
}: VoltageProps) {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Compare</p>
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <p className="text-muted-foreground text-lg">{feel}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Pricing tiers</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.label}
              className="rounded-lg border border-border bg-card p-4 shadow-sm"
            >
              <p className="text-sm uppercase tracking-wide text-secondary">
                {tier.label}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{tier.notes}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Common pack specs</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          {packSpecs.map((spec) => (
            <li
              key={spec}
              className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm"
            >
              {spec}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Good use cases</h2>
        <ul className="grid gap-2 md:grid-cols-2">
          {useCases.map((useCase) => (
            <li
              key={useCase}
              className="rounded-md border border-border bg-muted/30 px-4 py-3 text-sm"
            >
              {useCase}
            </li>
          ))}
        </ul>
      </section>

      {buildsLink ? (
        <Link
          to={buildsLink}
          className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
        >
          See real builds using {title} →
        </Link>
      ) : null}
    </div>
  );
}
