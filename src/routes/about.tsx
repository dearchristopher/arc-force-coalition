import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">About</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Mission: Verified torque-first EV builds</h1>
        <p className="text-muted-foreground text-lg">
          What “Verified” means, how sources are chosen, and the disclaimer that keeps expectations honest.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">What “Verified” means</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Recommendations lean on build logs, repeatable tests, and conservative settings—not hype.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Sources</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Documentation, ride data, and real-world abuse tests. Claims stay linked to evidence.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Disclaimer</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Torque builds carry risk. Validate settings, respect limits, and gear down before you turn up current.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Community</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Community/Discord later. GitHub may host calculators and data when ready.
          </p>
        </div>
      </div>
    </div>
  );
}
