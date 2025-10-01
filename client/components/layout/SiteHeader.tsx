import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Logo from "@/components/brand/Logo";

const nav = [
  { to: "/solutions", label: "Solutions" },
  { to: "/work", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/resources", label: "Resources" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F36b17fe2710b476d92dae292ec65d57a%2F649e3190b5f54c1da388cbe822f4adf7?format=webp&width=128"
            alt="corescales logo"
            className="h-8 w-8 rounded-sm object-contain"
            loading="eager"
            decoding="async"
          />
          <span className="text-lg font-extrabold tracking-tight">corescales</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors",
                  isActive && "text-foreground",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="text-sm font-medium text-foreground/70 hover:text-foreground">
            Contact
          </Link>
          <Button asChild className="shadow-sm">
            <Link to="/contact">Book a strategy call</Link>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/70"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container mx-auto py-4">
            <nav className="grid gap-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      isActive && "bg-accent text-accent-foreground",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Contact
              </Link>
              <ThemeToggle className="mt-2" />
              <Button asChild className="mt-2">
                <Link to="/contact">Book a strategy call</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
