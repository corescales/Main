import { useEffect } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function AccentOnScroll() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const start = { h: 262, s: 83, l: 66 }; // Violet
    const end = { h: 153, s: 53, l: 49 };   // Emerald

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const raw = window.scrollY / max;
      // Use only the first 60% of scroll to complete the shift
      const t = clamp(raw / 0.6, 0, 1);
      const h = lerp(start.h, end.h, t);
      const s = lerp(start.s, end.s, t);
      const l = lerp(start.l, end.l, t);
      const hsl = `${h.toFixed(1)} ${s.toFixed(1)}% ${l.toFixed(1)}%`;
      doc.style.setProperty("--primary", hsl);
      doc.style.setProperty("--ring", hsl);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
