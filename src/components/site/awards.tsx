'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import awards from '@/data/awards.json';
import { cn } from '@/lib/utils';

const DURATION = 7000;

export default function Awards() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const a = awards[idx];

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => setIdx((i) => (i + 1) % awards.length), DURATION);
    return () => clearTimeout(id);
  }, [idx, paused]);

  return (
    <section
      id="awards"
      className="bg-paper px-4 pb-16 pt-28 text-ink md:px-8 md:pt-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="eyebrow mb-10 text-ink/50">03 · Awards & podiums</p>

      <div className="grid min-h-[30rem] gap-10 md:grid-cols-12" aria-live="polite">
        <div key={`h-${idx}`} className="animate-in fade-in slide-in-from-bottom-4 duration-700 md:col-span-7">
          <span className="display block text-[clamp(3rem,6vw,5rem)] text-flame">{a.year}</span>
          <h2 className="display mt-2 text-[clamp(3.5rem,9vw,8.5rem)]">{a.position}.</h2>
        </div>
        <div
          key={`b-${idx}`}
          className="animate-in fade-in slide-in-from-bottom-4 duration-700 md:col-span-4 md:col-start-9"
        >
          {a.image_url && (
            <div className="relative mb-6 aspect-[3/2] overflow-hidden rounded-md bg-paper-2">
              <Image src={a.image_url} alt={a.event} fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
            </div>
          )}
          <p className="text-lg leading-relaxed text-ink/80">{a.description}</p>
          <div className="mt-6 flex items-center gap-3 border-t border-paper-line pt-6">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm text-paper">
              {a.position[0]}
            </span>
            <span className="text-sm">{a.event}</span>
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
        {awards.map((w, i) => (
          <button
            key={w.event}
            type="button"
            onClick={() => setIdx(i)}
            className="group text-left"
            aria-label={`Show ${w.position}, ${w.event}`}
            aria-current={i === idx}
          >
            <span className="block h-0.5 w-full overflow-hidden bg-paper-line">
              <span
                key={i === idx ? `run-${idx}-${paused}` : 'idle'}
                className={cn('block h-full bg-flame', i < idx ? 'w-full' : 'w-0')}
                style={
                  i === idx
                    ? {
                        animation: paused ? 'none' : `award-progress ${DURATION}ms linear forwards`,
                        width: paused ? '100%' : undefined,
                      }
                    : undefined
                }
              />
            </span>
            <span className="mt-3 flex items-baseline gap-2 text-sm">
              <span className="text-xs tabular-nums text-ink/45">
                {String(i + 1).padStart(2, '0')} / {String(awards.length).padStart(2, '0')}
              </span>
              <span className={cn('truncate transition-colors', i === idx ? 'text-ink' : 'text-ink/45 group-hover:text-ink')}>
                {w.position}
              </span>
            </span>
          </button>
        ))}
      </div>
      <style>{`@keyframes award-progress { from { width: 0 } to { width: 100% } }`}</style>
    </section>
  );
}
