"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const velocityStages = [
  {
    id: "reflect",
    label: "Reflect",
    description: "Capture what happened and why it matters.",
    impact: "Context density increases by 2×."
  },
  {
    id: "decide",
    label: "Decide",
    description: "Translate signal into the next deliberate move.",
    impact: "Decision half-life drops below 12 hours."
  },
  {
    id: "act",
    label: "Act",
    description: "Ship the change and re-measure immediately.",
    impact: "Regression window shrinks to minutes."
  }
];

export function FeedbackLoop() {
  const [velocity, setVelocity] = useState(6);

  const stageIndex = useMemo(() => Math.min(velocityStages.length - 1, Math.floor(velocity / 4)), [velocity]);
  const activeStage = velocityStages[stageIndex];

  return (
    <section className="relative space-y-6 overflow-hidden rounded-3xl border border-slate-200/60 bg-slate-50/70 p-8 shadow-inner dark:border-slate-800/80 dark:bg-slate-950/60">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-3"
      >
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
          Feedback Velocity
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-50">Calibrate your loop</h2>
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Move the slider to sense your current feedback velocity. We will recommend a ritual to keep momentum healthy.
        </p>
      </motion.div>
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={12}
            value={velocity}
            aria-label="Feedback velocity"
            onChange={(event) => setVelocity(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-primary-500 dark:bg-slate-800 dark:accent-primary-400"
          />
          <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">
            <span>Slow</span>
            <span>Steady</span>
            <span>Rapid</span>
          </div>
        </div>
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex max-w-sm flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 shadow dark:border-slate-800 dark:bg-slate-950/80"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/15 text-sm font-semibold text-primary-600 dark:bg-primary-400/10 dark:text-primary-200">
              {String(stageIndex + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-slate-500 dark:text-slate-400">Active Ritual</p>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{activeStage.label}</h3>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{activeStage.description}</p>
          <div className="rounded-xl border border-dashed border-primary-200 bg-primary-50/70 p-4 text-sm text-primary-700 dark:border-primary-500/50 dark:bg-primary-500/10 dark:text-primary-200">
            <p className="text-xs uppercase tracking-[0.24em]">Expected impact</p>
            <p className="mt-1 font-medium">{activeStage.impact}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
