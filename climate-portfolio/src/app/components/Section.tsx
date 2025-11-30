'use client';

import React from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};
export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-lg font-semibold tracking-tight text-slate-100">{title}</h2>
      <div className="h-px w-12 bg-emerald-500/60" />
      <div className="space-y-3 text-sm text-slate-300">{children}</div>
    </section>
  );
}
