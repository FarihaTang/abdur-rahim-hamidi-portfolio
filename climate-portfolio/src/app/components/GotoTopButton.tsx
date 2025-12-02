'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GoToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="
        fixed
        bottom-8 right-8 
        z-50
        bg-slate-900/60
        hover:bg-slate-900/90
        border border-slate-700/50
        text-text-secondary
        w-11 h-11 
        rounded-full 
        flex items-center justify-center
        shadow-lg
        hover:text-accent
        hover-glow
        backdrop-blur-md
        transition-colors
      "
    >
      ↑
    </motion.button>
  );
}
