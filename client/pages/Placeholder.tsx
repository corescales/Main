import { Link, useLocation } from "react-router-dom";

export default function Placeholder() {
  const { pathname } = useLocation();
  const title =
    pathname.replace("/", "").replace(/\b\w/g, (m) => m.toUpperCase()) ||
    "Page";

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-foreground/70">
          This page is a placeholder. Tell me what you want here and I’ll build
          it next.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:opacity-90"
          >
            Back to Home
          </Link>
          <a
            href="#contact-cta"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
