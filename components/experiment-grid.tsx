"use client";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useState } from "react";

type Experiment = {
  id: string;
  title: string;
  summary: string;
  hypothesis: string;
  metric: string;
  cadence: "foundation" | "exploration" | "stress";
};

const experiments: Experiment[] = [
  {
    id: "foundational-baseline",
    title: "Baseline Signal Capture",
    summary: "Verify the health of core signals before introducing variations.",
    hypothesis: "Stable baselines reduce regression noise by 25%.",
    metric: "Signal-to-noise ≥ 0.85",
    cadence: "foundation"
  },
  {
    id: "onboarding-friction",
    title: "Frictionless Onboarding",
    summary: "A guided checklist can accelerate time-to-value for new testers.",
    hypothesis: "New contributors ship verified tests within 48 hours.",
    metric: "Median onboarding duration",
    cadence: "exploration"
  },
  {
    id: "resilience",
    title: "Resilience Fire Drill",
    summary: "Practising rollback playbooks increases recovery confidence.",
    hypothesis: "Teams can reverse faulty deploys in < 7 min.",
    metric: "Mean time to recover",
    cadence: "stress"
  },
  {
    id: "coverage-expansion",
    title: "Coverage Expansion",
    summary: "Mapping unknown behaviours reveals blind spots.",
    hypothesis: "Structured audits surface 3+ high-impact gaps monthly.",
    metric: "Critical gaps found",
    cadence: "exploration"
  },
  {
    id: "perf-telemetry",
    title: "Performance Telemetry",
    summary: "Instrumenting slow paths maintains flow-state velocity.",
    hypothesis: "Latency regressions detected within 24 hours.",
    metric: "Detection latency",
    cadence: "foundation"
  },
  {
    id: "incident-sims",
    title: "Incident Simulation",
    summary: "Live chaos sessions surface coordination bottlenecks.",
    hypothesis: "Collaboration latency decreases by 40%.",
    metric: "Response choreography",
    cadence: "stress"
  }
];

const cadenceLabels: Record<Experiment["cadence"], string> = {
  foundation: "Foundational",
  exploration: "Exploratory",
  stress: "Stress Test"
};

const cadencePalette: Record<Experiment["cadence"], string> = {
  foundation: "from-green-400/20 via-teal-400/20 to-cyan-400/20 border-green-400/40 text-green-500 dark:text-green-300",
  exploration: "from-blue-400/20 via-indigo-400/20 to-purple-400/20 border-indigo-400/40 text-indigo-500 dark:text-indigo-300",
  stress: "from-rose-400/20 via-amber-400/20 to-orange-400/20 border-rose-400/40 text-rose-500 dark:text-rose-300"
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export function ExperimentGrid() {
  const [activeCadence, setActiveCadence] = useState<Experiment["cadence"] | "all">("all");

  const filtered = experiments.filter((experiment) => activeCadence === "all" || experiment.cadence === activeCadence);

  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-xl shadow-slate-900/5 transition dark:border-slate-800/80 dark:bg-slate-950/60">
      <div className="absolute -top-24 left-12 h-64 w-64 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-500/20" />
      <div className="absolute -bottom-32 right-16 h-56 w-56 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-500/20" />
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Experiment Backlog</p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">Curate the next meaningful probe</h2>
            <p className="mt-2 max-w-2xl text-base text-slate-600 dark:text-slate-300">
              Rotate through purposeful experiments. Each cadence strengthens a different muscle—foundational stability, discovery flow,
              and crisis readiness.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(["all", "foundation", "exploration", "stress"] as const).map((cadence) => (
              <button
                key={cadence}
                type="button"
                onClick={() => setActiveCadence(cadence)}
                className={clsx(
                  "rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  "border-slate-200 bg-white/80 text-slate-600 hover:border-primary-200 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-primary-500/50 dark:hover:text-primary-200",
                  activeCadence === cadence &&
                    "border-primary-400/60 bg-primary-500/10 text-primary-700 shadow-sm shadow-primary-500/20 dark:border-primary-500/60 dark:bg-primary-500/15 dark:text-primary-100"
                )}
              >
                {cadence === "all" ? "All Cadences" : cadenceLabels[cadence]}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-6 md:grid-cols-2">
            {filtered.map((experiment) => (
              <motion.article
                key={experiment.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.8 }}
                className={clsx(
                  "group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-[1px] transition",
                  cadencePalette[experiment.cadence]
                )}
              >
                <div className="relative h-full rounded-[1.05rem] bg-white/95 p-6 shadow-inner shadow-slate-900/5 transition group-hover:-translate-y-1 group-hover:shadow-xl dark:bg-slate-950/90 dark:shadow-black/40">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                    <span>{cadenceLabels[experiment.cadence]}</span>
                    <span>{experiment.metric}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-50">{experiment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{experiment.summary}</p>
                  <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50/70 p-4 text-sm text-slate-500 transition group-hover:bg-white group-hover:text-slate-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300 dark:group-hover:bg-slate-900/40 dark:group-hover:text-slate-100">
                    <p className="font-medium uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">Hypothesis</p>
                    <p className="mt-2 leading-relaxed">{experiment.hypothesis}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
