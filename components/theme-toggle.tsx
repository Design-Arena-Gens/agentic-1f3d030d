"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const iconVariants = {
  initial: { rotate: -10, scale: 0.9, opacity: 0 },
  animate: { rotate: 0, scale: 1, opacity: 1 }
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={clsx(
        "group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border transition",
        "border-slate-200 bg-white text-slate-600 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
      )}
    >
      <motion.span
        variants={iconVariants}
        initial="initial"
        animate="animate"
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </motion.span>
    </button>
  );
}
