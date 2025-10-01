import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F36b17fe2710b476d92dae292ec65d57a%2F4798ebfdaf864b70b1b930c918009e44?format=webp&width=256";

export default function Logo({ className = "h-8 w-8", title = "Corescales" }: { className?: string; title?: string }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return (
    <span className={cn("inline-flex items-center justify-center", className)} aria-label={title} role="img">
      <img
        src={LOGO_URL}
        alt={title}
        className={cn(
          "h-full w-full select-none object-contain",
          // Try to visually remove the solid background of the source image in both themes
          // On dark: screen/lighten to knock out dark bg; On light: multiply to suppress light fringing
          "dark:mix-blend-screen mix-blend-multiply",
          "brightness-110 contrast-125 saturate-125",
        )}
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
