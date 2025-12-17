import { createFileRoute } from "@tanstack/react-router";

const changelog = [
  { title: "MVP sitemap in place", detail: "Routes for compare, components, builds, tools, guides, about, and updates created." },
  { title: "Palette update", detail: "Applied Coal Black, Bone/Parchment, Arc Blue, and Rust Orange across the theme." },
  { title: "Build library stubs", detail: "Added early cards for MY1020 + FarDriver pairings with gearing notes." },
];

export const Route = createFileRoute("/updates")({
  component: UpdatesPage,
});

function UpdatesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-secondary">Changelog</p>
        <h1 className="text-3xl font-bold sm:text-4xl">Updates</h1>
        <p className="text-muted-foreground">
          Lightweight changelog to show the project is alive and evolving.
        </p>
      </header>
      <div className="space-y-3">
        {changelog.map((entry) => (
          <div key={entry.title} className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <p className="text-sm font-semibold">{entry.title}</p>
            <p className="text-muted-foreground text-sm">{entry.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
