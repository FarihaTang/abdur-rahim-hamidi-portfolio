'use client';

import { motion } from 'framer-motion';
import Reveal from '@/app/components/Reveal';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  immediate?: boolean; // ★ 新增
}

export default function Section({ id, title, children, immediate }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 w-full space-y-8">
      {/* Title + underline (motion) */}
      {immediate ? (
        <div className="flex flex-col items-start gap-2">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="
              text-2xl md:text-[26px] 
              font-semibold tracking-tight 
              text-text-secondary
            "
          >
            {title}
          </motion.h2>

          {/* Underline animation: expands from center → outward */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0.5 }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              },
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="
              origin-center 
              h-0.5 w-14 
              bg-emerald-400/80 
              rounded-full
            "
          />
        </div>
      ) : (
        <Reveal>
          <div className="flex flex-col items-start gap-2">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="
              text-2xl md:text-[26px] 
              font-semibold tracking-tight 
              text-text-secondary
            "
            >
              {title}
            </motion.h2>

            {/* Underline animation: expands from center → outward */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0.5 }}
              whileInView={{
                scaleX: 1,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                },
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="
              origin-center 
              h-0.5 w-14 
              bg-emerald-400/80 
              rounded-full
            "
            />
          </div>
        </Reveal>
      )}

      {/* Content */}
      <div className="space-y-4 text-text-body">{children}</div>
    </section>
  );
}
