'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Reveal from './reveal';
import { cn } from '@/lib/utils';

export type WorkItem = {
  key: string;
  name: string;
  description: string;
  years: string;
  kind: string;
  preview: string;
  stack: string[];
  appStore?: string;
  playStore?: string;
};

const INITIAL = 8;

export default function SelectedWork({ items }: { items: WorkItem[] }) {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  // smooth-follow the cursor with the preview card
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.18;
      p.y += (p.ty - p.y) * 0.18;
      if (floatRef.current) {
        floatRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    // hide the preview when scrolling carries the list out from under a still cursor
    const onScroll = () => {
      const el = document.elementFromPoint(pos.current.tx, pos.current.ty);
      if (!listRef.current?.contains(el)) setActive(null);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onMove = (e: React.MouseEvent) => {
    pos.current.tx = e.clientX;
    pos.current.ty = e.clientY;
  };

  const list = showAll ? items : items.slice(0, INITIAL);
  const hovered = active !== null ? list[active] : null;

  return (
    <section id="work" className="bg-paper px-4 pb-24 pt-28 text-ink md:px-8 md:pb-32 md:pt-40">
      <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-6 text-ink/50">01 · Selected work</p>
          <h2 className="display text-[clamp(3rem,7vw,6.5rem)]">Scoped, then shipped.</h2>
        </Reveal>
        <Reveal delay={120} className="self-end md:col-span-4 md:col-start-9">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">
            Inventory systems, e-commerce, warehouse kiosks and store apps. Most of them I analysed,
            designed, built and maintained end to end.<span className="hidden md:inline"> Point at a name to see it.</span>
          </p>
        </Reveal>
      </div>

      <ul ref={listRef} className="border-t border-paper-line" onMouseMove={onMove} onMouseLeave={() => setActive(null)}>
        {list.map((item, i) => (
          <li
            key={item.key}
            onMouseEnter={() => setActive(i)}
            className="group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-paper-line py-6 md:grid-cols-[4rem_1fr_minmax(16rem,22rem)] md:items-center md:py-8"
          >
            <span className="pt-2 text-xs tabular-nums text-ink/50 md:pt-0">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3
              className={cn(
                'display text-[clamp(2.2rem,6vw,5.5rem)] transition-colors duration-300',
                active === null ? 'text-ink' : active === i ? 'text-ink' : 'text-ink/25'
              )}
            >
              {item.name}
            </h3>
            <div className="col-start-2 mt-3 text-sm md:col-start-3 md:mt-0 md:text-right">
              <p className="text-ink/50">
                {item.kind} · {item.years}
              </p>
              <p className="mt-1 text-ink/80">{item.description}</p>
              <p className="mt-2 text-xs text-ink/45">{item.stack.join(' · ')}</p>
              {(item.appStore || item.playStore) && (
                <p className="mt-3 flex gap-4 md:justify-end">
                  {item.appStore && (
                    <a href={item.appStore} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                      App Store ↗
                    </a>
                  )}
                  {item.playStore && (
                    <a href={item.playStore} target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">
                      Google Play ↗
                    </a>
                  )}
                </p>
              )}
              {/* inline preview for touch screens */}
              <div className="relative mt-4 aspect-[3/2] overflow-hidden rounded-md bg-paper-2 md:hidden">
                <Image src={item.preview} alt={`${item.name} screenshot`} fill sizes="90vw" className="object-cover" />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex items-center justify-between text-sm">
        <p className="text-ink/60">
          {items.length} projects since {items.reduce((m, i) => Math.min(m, Number(i.years.slice(0, 4))), 9999)}
        </p>
        {items.length > INITIAL && (
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            className="border-b border-ink pb-1 hover:text-flame hover:border-flame"
          >
            {showAll ? 'Show fewer ↑' : `See all ${items.length} ↓`}
          </button>
        )}
      </div>

      {/* floating preview (desktop) */}
      <div
        ref={floatRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      >
        <div
          className={cn(
            'relative aspect-[3/2] w-[26rem] overflow-hidden rounded-lg bg-paper-2 shadow-2xl transition-[opacity,transform] duration-300',
            hovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          )}
        >
          {list.map((item, i) => (
            <Image
              key={item.key}
              src={item.preview}
              alt=""
              fill
              sizes="26rem"
              className={cn('object-cover transition-opacity duration-300', active === i ? 'opacity-100' : 'opacity-0')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
