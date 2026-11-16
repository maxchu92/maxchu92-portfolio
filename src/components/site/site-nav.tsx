'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteNav() {
  const [past, setPast] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > window.innerHeight * 2.1);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-4 pb-10 md:hidden">
          <ul id="mobile-menu" className="flex flex-col gap-2 text-5xl tracking-tight text-paper">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    <header className="fixed inset-x-0 top-0 z-50 text-paper mix-blend-difference">
      <nav className="flex items-center justify-between px-4 py-5 text-sm md:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Max Chu, back to top">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-current text-[0.65rem] font-semibold tracking-tight">
            MC
          </span>
          <span className={cn('transition-opacity', past ? 'opacity-0 md:opacity-100' : 'opacity-100')}>
            max chu
          </span>
        </a>

        <ul
          className={cn(
            'hidden gap-8 transition-opacity duration-500 md:flex',
            past ? 'opacity-100' : 'pointer-events-none opacity-0'
          )}
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:opacity-60">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <span className={cn('transition-opacity', past ? 'hidden' : 'opacity-100')}>Portfolio 2026</span>
          <a
            href="#contact"
            className={cn(
              'hidden rounded-full border border-current px-4 py-2 transition-opacity duration-500 hover:bg-paper hover:text-ink md:inline-flex',
              past ? 'opacity-100' : 'pointer-events-none opacity-0'
            )}
          >
            Get in touch&nbsp;↗
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={cn('md:hidden', past ? 'inline-flex' : 'hidden')}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>
    </header>
    </>
  );
}
