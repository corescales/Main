import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  offset?: string; // rootMargin like "0px 0px -10% 0px"
  delayMs?: number;
  durationMs?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export default function Reveal({
  children,
  className,
  as = "div",
  offset = "0px 0px -10% 0px",
  delayMs = 0,
  durationMs = 700,
  once = true,
  direction = "up",
}: RevealProps) {
  const Comp: any = as;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { root: null, rootMargin: offset, threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [offset, once, reduced]);

  const dirClass =
    direction === "up"
      ? "translate-y-6"
      : direction === "down"
        ? "-translate-y-6"
        : direction === "left"
          ? "translate-x-6"
          : direction === "right"
            ? "-translate-x-6"
            : "";

  return (
    <Comp
      ref={ref}
      className={cn(
        "will-change-transform transition-all ease-out",
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : cn("opacity-0", dirClass),
        className,
      )}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </Comp>
  );
}
