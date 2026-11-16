'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import activities from '@/data/activities.json';
import Reveal from './reveal';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(to);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / 1400);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix && <span className="text-flame">{suffix}</span>}
    </span>
  );
}

export default function Stats({
  years,
  projects,
  awards,
  languages,
}: {
  years: number;
  projects: number;
  awards: number;
  languages: string[];
}) {
  const stats = [
    { value: years, suffix: '+', label: 'Years building', note: 'Since 2014' },
    { value: projects, label: 'Projects shipped', note: 'Web, mobile & desktop' },
    { value: awards, label: 'Awards & podiums', note: 'Hackathons to team races' },
    { value: languages.length, label: 'Languages', note: languages.join(', ') },
  ];

  return (
    <section className="bg-paper px-4 pb-28 text-ink md:px-8 md:pb-40">
      <div className="grid grid-cols-2 border-t border-paper-line md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border-b border-paper-line py-8 pr-4 md:border-b-0 md:border-r md:px-6 md:py-12 md:first:pl-0 md:last:border-r-0"
          >
            <p className="display text-[clamp(3.5rem,8vw,7rem)]">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 text-sm">{s.label}</p>
            <p className="text-xs text-ink/50">{s.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-28 grid gap-10 md:mt-40 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow mb-6 text-ink/50">04 · Off the clock</p>
          <h2 className="display text-[clamp(2.75rem,5vw,4.5rem)]">
            Ropes, rallies
            <br />
            <span className="text-ink/35">and certificates.</span>
          </h2>
        </Reveal>
        <ul className="md:col-span-7 md:col-start-6">
          {activities.map((a, i) => (
            <Reveal
              as="li"
              key={a.event}
              delay={i * 50}
              className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-paper-line py-5 md:grid-cols-[4rem_1fr_7rem]"
            >
              <span className="text-sm tabular-nums text-ink/50">{a.year}</span>
              <div>
                <h3 className="text-lg leading-snug tracking-tight">{a.event}</h3>
                <p className="mt-1 text-sm text-ink/60">{a.description}</p>
              </div>
              <span className="col-start-2 mt-2 text-xs text-flame md:col-start-3 md:mt-1 md:text-right">
                {a.position}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
