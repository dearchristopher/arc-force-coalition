import { Link, createFileRoute } from "@tanstack/react-router";

const tools = [
  {
    title: "Speed estimator",
    to: "/tools/speed",
    body: "RPM + wheel size + gearing to predict speed and remind you to gear down for control and headroom.",
  },
  {
    title: "Range estimator",
    to: "/tools/range",
    body: "Simple watts × time with riding style presets to sanity check pack choice.",
  },
  {
    title: "Current sanity check",
    to: "/tools/current-check",
    body: "Can your battery handle this controller setting? Quickly check line vs pack limits.",
  },
];

export const Route = createFileRoute("/tools/")({
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Tools</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Calculators built for real-world outcomes</h1>
        <p className="text-muted-foreground text-lg">
          Estimators that favor controllable gearing, realistic range, and honest controller current limits.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            to={tool.to}
            className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{tool.title}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{tool.body}</p>
            <span className="text-primary mt-3 text-sm font-semibold">Open →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
