import { Link, createFileRoute } from "@tanstack/react-router";

const componentAreas = [
  {
    title: "Batteries",
    to: "/components/batteries",
    points: [
      "Battery basics and how to read a listing.",
      "Vendors: MomentumWatts, HotPaxx, Amorge, and more.",
      "Regen compatibility and what the BMS actually allows.",
    ],
  },
  {
    title: "Controllers",
    to: "/components/controllers",
    points: [
      "FarDriver overview focused on 72260 as the anchor.",
      "Line vs phase current, throttle mapping, protection, regen.",
      "Known-good starting settings template.",
    ],
  },
  {
    title: "Motors",
    to: "/components/motors",
    points: [
      "MY1020-focused info and alternatives.",
      "Hall/angle detect basics, pole pairs, common issues.",
      "Cooling, mounting, and chain alignment notes.",
    ],
  },
  {
    title: "Drivetrain (Gearing)",
    to: "/components/gearing",
    points: [
      "Simple gearing explainer.",
      "Sprocket swap guidance (front vs rear changes).",
      "Chain types: T8F, #25H, #219 and where they fit.",
    ],
  },
];

export const Route = createFileRoute("/components/")({
  component: ComponentsPage,
});

function ComponentsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Components</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Torque-safe parts library</h1>
        <p className="text-muted-foreground text-lg">
          Batteries, controllers, motors, and gearing tuned for torque-first EV builds with repeatable results.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {componentAreas.map((area) => (
          <Link
            key={area.title}
            to={area.to}
            className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{area.title}</h2>
              <span className="text-sm text-primary">Open →</span>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {area.points.map((point) => (
                <li key={point} className="rounded-md bg-muted/40 px-3 py-2">
                  {point}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
