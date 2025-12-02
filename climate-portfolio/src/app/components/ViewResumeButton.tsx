'use client';

import Magnetic from '@/app/components/Magnetic';
import Link from 'next/link';

export default function ViewResumeButton() {
  return (
    <Magnetic>
      <Link
        href="/resume"
        target="_blank"
        className="
          px-5 py-2.5 
          rounded-md 
          border border-slate-700/70 
          text-text-secondary
          bg-slate-900/30 
          hover:bg-slate-900/60
          hover:text-accent
          hover-glow
          transition-all 
          duration-300
          text-sm
        "
      >
        View Full Resume
      </Link>
    </Magnetic>
  );
}
