'use client';

import { useEffect, useRef } from 'react';

export default function SpotlightCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const move = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return (
    <div
      ref={cursorRef}
      className="
  pointer-events-none fixed z-50
    h-[460px] w-[460px]
    -translate-x-1/2 -translate-y-1/2
    rounded-full 
    bg-white/20
    blur-[160px]
    mix-blend-screen
    transition-transform duration-300
    "
    ></div>
  );
}
