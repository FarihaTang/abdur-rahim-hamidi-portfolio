'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="
        px-3 py-1.5 
        rounded-md 
        border border-slate-600/40 
        dark:border-slate-700/60
        bg-white/40 dark:bg-black/20 
        transition-all
        hover:bg-white/70 dark:hover:bg-black/40
      "
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
