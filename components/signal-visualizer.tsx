"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type SignalPoint = {
  time: number;
  stability: number;
  volatility: number;
};

const points: SignalPoint[] = Array.from({ length: 24 }, (_, index) => {
  const t = index / 2;
  const stability = 70 + 15 * Math.sin(t / 1.6) + 5 * Math.cos(t / 0.9);
  const volatility = 30 + 20 * Math.cos(t / 1.3) + 7 * Math.sin(t / 0.6);
  return { time: t, stability, volatility };
});

const chartHeight = 220;
const chartWidth = 420;

const toPath = (data: SignalPoint[], selector: (point: SignalPoint) => number) =>
  data
    .map((point, index) => {
      const x = (chartWidth / (data.length - 1)) * index;
      const y = chartHeight - (selector(point) / 100) * chartHeight;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

export function SignalVisualizer() {
  const stabilityPath = useMemo(() => toPath(points, (point) => point.stability), []);
  const volatilityPath = useMemo(() => toPath(points, (point) => point.volatility), []);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-white/90 via-white/60 to-slate-100/60 p-8 shadow-xl shadow-slate-900/5 dark:border-slate-800/80 dark:from-slate-950/80 dark:via-slate-950/40 dark:to-slate-900/40">
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_minmax(0,0.9fr)]">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Signal Observatory</p>
          <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">Stability vs. volatility</h2>
          <p className="max-w-xl text-base text-slate-600 dark:text-slate-300">
            Observe how your system breathes. When stability holds while volatility spikes, you are resilient. When both drop, the lab
            needs a pause and recalibration.
          </p>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-primary-500" />
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-50">Stability coefficient</span> tracks healthy signal
                retention.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <p>
                <span className="font-semibold text-slate-900 dark:text-slate-50">Volatility drift</span> exposes emergent risks and worthy
                probes.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate flex items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-inner dark:border-slate-800 dark:bg-slate-950/70"
        >
          <div className="absolute -left-20 top-12 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl dark:bg-primary-400/10" />
          <div className="absolute -right-16 bottom-16 h-32 w-32 rounded-full bg-rose-500/10 blur-3xl dark:bg-rose-400/10" />
          <div className="relative w-full max-w-xl">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="h-full w-full">
              <defs>
                <linearGradient id="stabilityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="volatilityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(244 63 94)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="rgb(244 63 94)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g>
                <rect width={chartWidth} height={chartHeight} rx={18} className="fill-slate-100/80 dark:fill-slate-900/50" />
                <g className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                  {[0, 25, 50, 75, 100].map((value) => (
                    <g key={value}>
                      <text x={8} y={chartHeight - (value / 100) * chartHeight - 6}>
                        {value}
                      </text>
                      <line
                        x1={0}
                        x2={chartWidth}
                        y1={chartHeight - (value / 100) * chartHeight}
                        y2={chartHeight - (value / 100) * chartHeight}
                        className="stroke-slate-200/60 dark:stroke-slate-800/60"
                        strokeDasharray="4 6"
                      />
                    </g>
                  ))}
                </g>
                <path d={stabilityPath} fill="none" stroke="url(#stabilityGradient)" strokeWidth={3} strokeLinecap="round" />
                <path
                  d={`${stabilityPath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
                  fill="url(#stabilityGradient)"
                  opacity={0.35}
                />
                <path d={volatilityPath} fill="none" stroke="url(#volatilityGradient)" strokeWidth={3} strokeLinecap="round" />
                <path
                  d={`${volatilityPath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`}
                  fill="url(#volatilityGradient)"
                  opacity={0.3}
                />
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
