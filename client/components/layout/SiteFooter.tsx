import { Link } from "react-router-dom";

const links = [
  { label: "Solutions", to: "/solutions" },
  { label: "Work", to: "/work" },
  { label: "Pricing", to: "/pricing" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="container mx-auto grid gap-8 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-emerald-400 text-white shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path fill="currentColor" d="M12 2l3.5 6h-7L12 2zm0 20l-3.5-6h7L12 22zM2 12l6-3.5v7L2 12zm20 0l-6 3.5v-7L22 12z" />
              </svg>
            </span>
            <span className="text-lg font-extrabold tracking-tight">corescales</span>
          </div>
          <p className="text-sm text-foreground/70 max-w-sm">
            Builder-style visual editing and experimentation tailored for brand-scaling teams.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-4 md:col-span-2 md:grid-cols-4">
          {links.map((l) => (
            <Link key={l.to} className="text-sm text-foreground/70 hover:text-foreground" to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/60 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-xs text-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} corescales. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-foreground">Privacy</Link>
            <Link to="#" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
