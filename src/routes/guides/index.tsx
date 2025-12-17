import { Link, createFileRoute } from "@tanstack/react-router";

const guides = [
  { slug: "tuning-fardriver-for-torque", title: "Tuning your FarDriver for torque first" },
  { slug: "regen-setup-dont-kill-pack", title: "Regen setup and how not to kill a pack" },
  { slug: "troubleshooting-delayed-throttle", title: "Troubleshooting: delayed throttle / cutouts / throttle fail" },
  { slug: "first-ride-checklist", title: "First ride checklist" },
];

export const Route = createFileRoute("/guides/")({
  component: GuidesPage,
});

function GuidesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Guides</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Guides that protect torque builds</h1>
        <p className="text-muted-foreground text-lg">
          Deep dives anchored in FarDriver tuning, regen safety, and real troubleshooting notes.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            to={`/guides/${guide.slug}`}
            className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{guide.title}</h2>
            <p className="text-primary mt-3 text-sm font-semibold">Read →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
