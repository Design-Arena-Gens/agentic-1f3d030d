import { ExperimentGrid } from "@/components/experiment-grid";
import { FeedbackLoop } from "@/components/feedback-loop";
import { RitualTimeline } from "@/components/ritual-timeline";
import { SignalVisualizer } from "@/components/signal-visualizer";
import { Sparkles } from "lucide-react";

const principles = [
  {
    id: "precision",
    title: "Test with precision",
    description: "Name the behaviour, craft the measurement, and protect your baselines."
  },
  {
    id: "momentum",
    title: "Keep momentum alive",
    description: "Shorten loops. Every observation deserves a sequel experiment."
  },
  {
    id: "bravery",
    title: "Be bravely curious",
    description: "Invite surprise. Probe the edge-cases that feel a little uncomfortable."
  }
];

export default function Page() {
  return (
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-12 sm:px-6 lg:py-16">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-100/80 p-10 shadow-xl shadow-slate-900/10 dark:border-slate-800/80 dark:from-slate-950/90 dark:via-slate-950/40 dark:to-slate-900/50">
        <div className="absolute -top-40 left-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-500/20 blur-3xl dark:bg-primary-500/10" />
        <div className="absolute -bottom-48 right-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-400/10" />
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/50 bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.38em] text-primary-600 dark:border-primary-400/40 dark:text-primary-200">
              <Sparkles className="h-4 w-4" />
              Testing testing
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-50">
              The lab where every experiment earns its story.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Assemble measurement rituals, share learnings in real-time, and celebrate the art of intentional testing. This lab is a home
              for doers who prefer curiosity over certainty.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle.id}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm leading-relaxed text-slate-600 shadow-inner dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400 dark:text-slate-500">
                    {principle.title}
                  </p>
                  <p className="mt-2">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden flex-1 lg:flex lg:justify-end">
            <div className="relative isolate flex w-full max-w-md flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-950/80">
              <div className="absolute -top-20 right-2 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-400/15" />
              <div className="relative z-10 space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400 dark:text-slate-500">Today&apos;s probes</p>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900/60">
                    <p className="font-medium text-slate-900 dark:text-slate-50">Regression pulse check</p>
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400 dark:text-slate-500">Last run — 13m ago</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900/60">
                    <p className="font-medium text-slate-900 dark:text-slate-50">Onboarding walkthrough</p>
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400 dark:text-slate-500">Confidence — 83%</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-900/60">
                    <p className="font-medium text-slate-900 dark:text-slate-50">Resilience sparring</p>
                    <p className="text-xs uppercase tracking-[0.26em] text-slate-400 dark:text-slate-500">Next drill — 21:00</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 rounded-2xl border border-primary-400/50 bg-primary-500/10 p-4 text-sm text-primary-700 dark:border-primary-400/40 dark:bg-primary-400/10 dark:text-primary-200">
                <p className="text-xs uppercase tracking-[0.28em]">Lab mantra</p>
                <p className="mt-2 font-medium">
                  Measure what matters, and let playful rigour guide the next iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ExperimentGrid />
      <SignalVisualizer />
      <FeedbackLoop />
      <RitualTimeline />
    </div>
  );
}
