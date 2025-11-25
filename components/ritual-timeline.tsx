import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const rituals = [
  {
    id: "morning-scan",
    title: "Morning Signal Scan",
    description: "Review overnight anomalies, classify by impact, and assign rapid probes.",
    window: "09:00 — 09:20",
    outcome: "Shared awareness & prioritised probes",
    link: "https://testingmanifesto.com/"
  },
  {
    id: "lab-review",
    title: "Lab Review",
    description: "Pair-review the most interesting experiment and annotate learnings together.",
    window: "13:00 — 13:45",
    outcome: "Documented insights & updated backlog"
  },
  {
    id: "twilight-retro",
    title: "Twilight Retro",
    description: "Capture surprises, celebrate stability, and queue the next deliberate test.",
    window: "17:30 — 18:00",
    outcome: "Reset focus for tomorrow’s runs"
  }
];

export function RitualTimeline() {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-lg shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-950/70">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Daily Cadence</p>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">
          Rituals that keep the lab curious
        </h2>
        <p className="mt-2 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          Anchor experimentation with intentional routines. Lightweight, energising, and focused on learning velocity.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-300/0 via-primary-500/50 to-primary-300/0 dark:via-primary-400/70" />
        <div className="space-y-6">
          {rituals.map((ritual) => (
            <article
              key={ritual.id}
              className="relative flex gap-6 rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-inner shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/70 dark:shadow-black/40"
            >
              <div className="flex items-center">
                <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/40 bg-primary-500/10 text-sm font-semibold text-primary-600 dark:border-primary-400/40 dark:bg-primary-400/15 dark:text-primary-200">
                  {ritual.window.slice(0, 2)}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{ritual.title}</h3>
                  <p className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
                    {ritual.window}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{ritual.description}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
                  Outcome — <span className="text-slate-600 dark:text-slate-300">{ritual.outcome}</span>
                </p>
                {ritual.link ? (
                  <Link
                    href={ritual.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ritual inspiration
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
