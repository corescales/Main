import { useEffect, useMemo, useState } from "react";
import { DemoResponse } from "@shared/api";
import { Button } from "@/components/ui/button";
import {
  Check,
  Clock3,
  Gauge,
  Layers3,
  Puzzle,
  Sparkles,
  SplitSquareHorizontal,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    fetchDemo();
  }, []);
  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      // silent
    }
  };

  return (
    <div className="relative">
      <Hero />
      <LogosMarquee />
      <Features />
      <EditorShowcase />
      <Interactives />
      <Testimonials />
      <CTA />
      <span className="hidden" aria-hidden>
        {exampleFromServer}
      </span>
    </div>
  );
}

function GradientBG({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute -top-40 left-1/2 h-[60rem] w-[80rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,theme(colors.primary.DEFAULT)/20%,transparent_60%)] blur-2xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GradientBG />
      <div className="container mx-auto px-4 py-24 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs text-foreground/70 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Brand-scaling made visual
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Launch high‑converting pages 10× faster
          </h1>
          <p className="mt-4 text-lg text-foreground/70 sm:text-xl">
            Builder‑style visual editing tailored for growth teams. Compose blocks, test ideas, and scale your brand without engineering bottlenecks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="px-6"
              onClick={() => toast.success("We’ll reach out to schedule your strategy call.")}
            >
              Book a strategy call
            </Button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-90"
            >
              See how it works
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 w-full max-w-5xl rounded-xl border border-border/60 bg-card p-3 shadow-xl">
          <div className="rounded-lg bg-gradient-to-tr from-primary/15 via-emerald-400/10 to-transparent p-6">
            <EditorMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogosMarquee() {
  const items = ["Acme", "Northstar", "Lumina", "Vertex", "Nimbus", "Horizon"];
  return (
    <section className="border-t border-b border-border/60 bg-muted/30 py-6">
      <div className="container mx-auto overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] gap-12 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          {items.concat(items).map((name, i) => (
            <span
              key={i}
              className="text-sm font-semibold tracking-wider text-foreground/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative rounded-xl border border-border/60 bg-card p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary/15">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-foreground/70">{desc}</p>
    </div>
  );
}

function Features() {
  const items = [
    {
      icon: Layers3,
      title: "Modular blocks",
      desc: "Compose reusable, brand-safe sections to build pages in minutes.",
    },
    {
      icon: SplitSquareHorizontal,
      title: "A/B testing",
      desc: "Experiment with variants, roll out winners, and keep momentum.",
    },
    {
      icon: Puzzle,
      title: "Integrations",
      desc: "Connect analytics, forms, and your CMS. No fragile glue code.",
    },
    {
      icon: Gauge,
      title: "Performance",
      desc: "Lean, accessible pages optimized for Core Web Vitals and SEO.",
    },
    {
      icon: Clock3,
      title: "Faster workflows",
      desc: "Cut cycles with a visual editor that reflects your brand system.",
    },
    {
      icon: TrendingUp,
      title: "Measurable growth",
      desc: "Dashboards that tie experiments to pipeline and revenue.",
    },
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Everything you need to scale
        </h2>
        <p className="mt-3 text-foreground/70">
          Ship bold ideas without waiting on sprint cycles.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <FeatureCard
            key={it.title}
            icon={it.icon}
            title={it.title}
            desc={it.desc}
          />
        ))}
      </div>
    </section>
  );
}

function EditorMock() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 hidden rounded-lg border border-border/60 bg-background p-3 sm:block">
        <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">
          Blocks
        </p>
        <div className="mt-3 grid gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-9 rounded-md border border-dashed border-border/70"
            ></div>
          ))}
        </div>
      </div>
      <div className="col-span-12 rounded-lg border border-border/60 bg-background p-4 sm:col-span-9">
        <div className="h-8 rounded-md bg-muted" />
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="h-28 rounded-md bg-muted" />
          <div className="h-28 rounded-md bg-muted" />
          <div className="h-28 rounded-md bg-muted" />
        </div>
        <div className="mt-3 h-32 rounded-md bg-muted" />
      </div>
    </div>
  );
}

function EditorShowcase() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mx-auto max-w-4xl rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <div className="text-xs text-foreground/60">Editor Preview</div>
        </div>
        <div className="mt-4">
          <EditorMock />
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Drag & drop blocks", "Instant responsive", "Publish with guardrails"].map(
            (t) => (
              <div
                key={t}
                className="flex items-start gap-3 rounded-lg border border-border/60 bg-background p-3 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 text-primary" />
                <span>{t}</span>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Interactives() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Try it live
            </h2>
            <p className="mt-2 text-foreground/70">
              Explore personas, estimate ROI, and personalize the accent color.
            </p>
          </div>
          <AccentSwitcher />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <PersonaTabs />
          <ROICalculator />
        </div>
      </div>
    </section>
  );
}

function PersonaTabs() {
  const personas: Record<string, { headline: string; bullets: string[] }> = {
    marketer: {
      headline: "Ship campaigns without tickets",
      bullets: [
        "Build and publish pages instantly",
        "Run A/B tests and measure lift",
        "Re-use blocks to stay on brand",
      ],
    },
    founder: {
      headline: "Prove impact faster",
      bullets: [
        "Cut time-to-market by 10×",
        "See what’s working in one dashboard",
        "Scale content without scaling headcount",
      ],
    },
    designer: {
      headline: "Design systems meet speed",
      bullets: [
        "Your tokens, components, and spacing",
        "Pixel-perfect responsive out of the box",
        "Ship variations without handoff loops",
      ],
    },
  };

  return (
    <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
      <Tabs defaultValue="marketer">
        <TabsList>
          <TabsTrigger value="marketer">Marketer</TabsTrigger>
          <TabsTrigger value="founder">Founder</TabsTrigger>
          <TabsTrigger value="designer">Designer</TabsTrigger>
        </TabsList>
        {Object.entries(personas).map(([key, value]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <h3 className="text-xl font-semibold">{value.headline}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {value.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ROICalculator() {
  const [trafficK, setTrafficK] = useState(100); // thousands per month
  const [cr, setCr] = useState(2); // %
  const [lift, setLift] = useState(15); // %
  const [aov, setAov] = useState(120); // $

  const fmt = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    [],
  );

  const incrementalRevenue = useMemo(() => {
    const t = trafficK * 1000;
    const baseConv = cr / 100;
    const liftPct = lift / 100;
    const upliftConversions = t * baseConv * liftPct;
    return upliftConversions * aov;
  }, [trafficK, cr, lift, aov]);

  return (
    <div id="roi" className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">ROI calculator</h3>
        <span className="text-xs text-foreground/60">Estimates only</span>
      </div>
      <div className="mt-6 grid gap-5">
        <SliderRow
          label="Monthly traffic"
          value={`${trafficK}k visitors`}
          onChange={(v) => setTrafficK(v[0])}
          min={10}
          max={1000}
          step={10}
          defaultValue={[trafficK]}
        />
        <SliderRow
          label="Current conversion rate"
          value={`${cr}%`}
          onChange={(v) => setCr(v[0])}
          min={0.5}
          max={10}
          step={0.1}
          defaultValue={[cr]}
        />
        <SliderRow
          label="Expected lift with Corescales"
          value={`${lift}%`}
          onChange={(v) => setLift(v[0])}
          min={1}
          max={50}
          step={1}
          defaultValue={[lift]}
        />
        <SliderRow
          label="Average order value"
          value={fmt.format(aov)}
          onChange={(v) => setAov(v[0])}
          min={25}
          max={500}
          step={5}
          defaultValue={[aov]}
        />
      </div>
      <div className="mt-6 rounded-lg border border-border/60 bg-background p-4">
        <div className="text-sm text-foreground/70">Estimated monthly incremental revenue</div>
        <div className="mt-1 text-3xl font-extrabold tracking-tight">
          {fmt.format(incrementalRevenue)}
        </div>
      </div>
    </div>
  );
}

function SliderRow({
  label,
  value,
  onChange,
  min,
  max,
  step,
  defaultValue,
}: {
  label: string;
  value: string;
  onChange: (v: number[]) => void;
  min: number;
  max: number;
  step: number;
  defaultValue: number[];
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-foreground/80">{label}</span>
        <span className="tabular-nums text-foreground/70">{value}</span>
      </div>
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onValueChange={onChange}
      />
    </div>
  );
}

function AccentSwitcher() {
  const swatches: { name: string; hsl: string }[] = [
    { name: "Violet", hsl: "262 83% 66%" },
    { name: "Emerald", hsl: "153 53% 49%" },
    { name: "Sky", hsl: "204 94% 68%" },
  ];
  const apply = (hsl: string) => {
    const root = document.documentElement;
    root.style.setProperty("--primary", hsl);
    root.style.setProperty("--ring", hsl);
  };

  return (
    <div className="flex items-center gap-3">
      {swatches.map((s) => (
        <button
          key={s.name}
          onClick={() => apply(s.hsl)}
          className="h-8 w-8 rounded-full border border-border/60"
          aria-label={`Set accent ${s.name}`}
          style={{ backgroundColor: `hsl(${s.hsl})` }}
        />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Results that compound
          </h2>
          <p className="mt-3 text-foreground/70">
            We partner with marketing and product teams to build a system — not one-off pages — so every launch is faster than the last.
          </p>
          <div className="mt-6 grid gap-3">
            {["+38% lift in signup rate", "2x faster campaign velocity", "<200ms First Input Delay"].map(
              (t) => (
                <div key={t} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{t}</span>
                </div>
              ),
            )}
          </div>
        </div>
        <blockquote className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
          <p className="text-lg leading-relaxed">
            “Corescales gave us a Builder‑quality editor, but tailored to our stack and brand system. Our team ships without waiting — and our numbers show it.”
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-emerald-400 text-white font-semibold">
              A
            </div>
            <div>
              <div className="font-semibold">Alex Rivera</div>
              <div className="text-sm text-foreground/60">VP Growth, Lumina</div>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact-cta" className="relative overflow-hidden py-16">
      <GradientBG className="opacity-60" />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-gradient-to-tr from-primary/15 via-emerald-400/10 to-transparent p-8 text-center shadow-xl">
          <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ready to scale your brand?
          </h3>
          <p className="mt-2 text-foreground/70">
            Book a strategy call and we’ll design a plan tailored to your goals.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="px-6"
              onClick={() => toast("We’ll reach out shortly to confirm a time.")}
            >
              Book a strategy call
            </Button>
            <a
              href="/pricing"
              className="text-sm font-semibold text-primary hover:opacity-90"
            >
              See pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
