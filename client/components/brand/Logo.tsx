import { useEffect } from "react";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F36b17fe2710b476d92dae292ec65d57a%2F4798ebfdaf864b70b1b930c918009e44?format=webp&width=256";

export default function Logo({ className = "h-8 w-8", title = "Corescales" }: { className?: string; title?: string }) {
  useEffect(() => {
    // ensure theme class is respected on first paint
    document.documentElement.classList.contains("dark");
  }, []);

  return (
    <span className={cn("inline-flex", className)} role="img" aria-label={title}>
      <span className="relative inline-grid size-full place-items-center rounded-md bg-gradient-to-br from-primary to-emerald-400 p-[2px] [transition:transform_.2s] hover:rotate-3 active:scale-95">
        <span className="size-full rounded-md bg-transparent">
          <img
            src={LOGO_URL}
            alt={title}
            className={cn(
              "size-full select-none object-contain",
              // visually remove solid bg while preserving logo fill
              "dark:mix-blend-screen mix-blend-multiply",
              "brightness-110 contrast-125 saturate-125",
            )}
            loading="eager"
            decoding="async"
          />
        </span>
      </span>
    </span>
  );
}
