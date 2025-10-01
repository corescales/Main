import { cn } from "@/lib/utils";

export default function Logo({ className = "h-8 w-8", title = "Corescales" }: { className?: string; title?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-emerald-400 text-white shadow-sm transition-transform duration-300 motion-safe:animate-pulse",
        "hover:rotate-3 active:scale-95",
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" role="img" aria-label={title}>
        <defs>
          <linearGradient id="core-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path fill="url(#core-g)" d="M12 2l3.5 6h-7L12 2zm0 20l-3.5-6h7L12 22zM2 12l6-3.5v7L2 12zm20 0l-6 3.5v-7L22 12z" />
      </svg>
    </span>
  );
}
