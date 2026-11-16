'use client';

import { useEffect, useRef, useState } from 'react';
import LocalTime from './local-time';

/* Outline of an angular "M", in a 100 x 100 box (y grows downward). */
const OUTLINE: [number, number][] = [
  [0, 0],
  [24, 0],
  [50, 38],
  [76, 0],
  [100, 0],
  [100, 100],
  [76, 100],
  [76, 42],
  [50, 80],
  [24, 42],
  [24, 100],
  [0, 100],
];
const DEPTH = 24;
const FOCAL = 300;

type V3 = [number, number, number];

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = (t: number) => 1 - Math.pow(1 - t, 3);
const smooth = (t: number) => t * t * (3 - 2 * t);

function buildMesh() {
  const front: V3[] = OUTLINE.map(([x, y]) => [x - 50, 50 - y, -DEPTH / 2]);
  const back: V3[] = OUTLINE.map(([x, y]) => [x - 50, 50 - y, DEPTH / 2]);
  const n = OUTLINE.length;
  const faces: { idx: number[]; kind: 'cap' | 'side' }[] = [
    { idx: front.map((_, i) => i), kind: 'cap' },
    { idx: back.map((_, i) => i + n), kind: 'cap' },
  ];
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    faces.push({ idx: [i, j, j + n, i + n], kind: 'side' });
  }
  return { verts: [...front, ...back], faces, n };
}
const MESH = buildMesh();

function transform(v: V3, ry: number, rx: number): V3 {
  const [x, y, z] = v;
  const cy = Math.cos(ry);
  const sy = Math.sin(ry);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const cx = Math.cos(rx);
  const sx = Math.sin(rx);
  const y2 = y * cx - z1 * sx;
  const z2 = y * sx + z1 * cx;
  return [x1, y2, z2];
}

function project([x, y, z]: V3): [number, number] {
  const k = FOCAL / (FOCAL + z);
  return [x * k, -y * k];
}

function Mark({ spin, solid, ghost }: { spin: number; solid: number; ghost: number }) {
  const render = (deg: number, tiltDeg: number) => {
    const ry = (deg * Math.PI) / 180;
    const rx = (tiltDeg * Math.PI) / 180;
    const world = MESH.verts.map((v) => transform(v, ry, rx));
    const screen = world.map(project);
    const faces = MESH.faces
      .map((f) => {
        const pts = f.idx.map((i) => world[i]);
        const depth = pts.reduce((s, p) => s + p[2], 0) / pts.length;
        // normal from first three points
        const a = pts[0];
        const b = pts[1];
        const c = pts[2];
        const u: V3 = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
        const w: V3 = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
        const nrm: V3 = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]];
        const len = Math.hypot(...nrm) || 1;
        const light: V3 = [-0.35, 0.45, -0.82];
        const lum = Math.abs((nrm[0] * light[0] + nrm[1] * light[1] + nrm[2] * light[2]) / len);
        const d = f.idx.map((i) => screen[i].map((n) => n.toFixed(2)).join(',')).join(' ');
        return { d, depth, lum, kind: f.kind };
      })
      .sort((p, q) => q.depth - p.depth);
    return faces;
  };

  // settle into a 3/4 resting pose as the mark turns solid
  const yaw = spin - 24 * solid;
  const tilt = -14 * Math.sin(Math.min(1, spin / 360) * Math.PI) - 12 * solid;
  const faces = render(yaw, tilt);
  const ghosts = ghost > 0.01 ? [render(yaw - 14, tilt), render(yaw - 28, tilt)] : [];

  return (
    <svg viewBox="-82 -82 164 164" className="h-full w-full overflow-visible" aria-hidden>
      {ghosts.map((g, gi) =>
        g.map((f, i) => (
          <polygon
            key={`g${gi}-${i}`}
            points={f.d}
            fill="none"
            stroke="#e9e6df"
            strokeOpacity={ghost * (gi === 0 ? 0.18 : 0.08)}
            strokeWidth={0.35}
            vectorEffect="non-scaling-stroke"
          />
        ))
      )}
      {faces.map((f, i) => {
        const shade = Math.round(70 + f.lum * 175);
        return (
          <polygon
            key={i}
            points={f.d}
            fill={`rgb(${shade},${shade - 3},${shade - 9})`}
            fillOpacity={solid}
            stroke={solid > 0.9 ? `rgba(13,13,12,${0.35 * solid})` : '#e9e6df'}
            strokeOpacity={solid > 0.9 ? 1 : 0.9 - solid * 0.5}
            strokeWidth={1}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}

const TAGLINE = 'Turning ideas into products';

export default function IntroHero({ projectCount, since }: { projectCount: number; since: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [p, setP] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      setP(clamp(-el.getBoundingClientRect().top / Math.max(1, total)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const spinT = smooth(clamp(p / 0.6));
  const deg = Math.round(spinT * 360);
  const solid = ease(clamp((p - 0.5) / 0.22));
  const hero = ease(clamp((p - 0.66) / 0.22));
  const ghost = clamp(spinT * 4) * (1 - solid);
  const typed = Math.round(clamp(p / 0.45) * TAGLINE.length);
  const scale = 0.82 + 0.18 * ease(clamp((p - 0.55) / 0.3));
  const years = new Date().getFullYear() - since;

  return (
    <section
      ref={sectionRef}
      id="top"
      className={reduced ? 'relative h-dvh bg-ink' : 'relative h-[340vh] bg-ink'}
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        {/* soft glow behind the mark */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(242,96,28,0.16), transparent 62%)',
            opacity: solid,
          }}
        />

        {/* the mark */}
        <div
          className="absolute left-1/2 top-1/2 aspect-square w-[min(64vw,40vh)] md:w-[min(34vw,54vh)]"
          style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
        >
          <Mark spin={deg} solid={solid} ghost={ghost} />
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm tabular-nums text-flame"
            style={{ opacity: hero }}
          >
            {deg}° · scroll on
          </div>
        </div>

        {/* intro chrome: counter + tagline */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-6 md:px-8 md:pb-8"
          style={{ opacity: 1 - hero }}
        >
          <div
            className="display text-[clamp(4.5rem,13vw,11rem)] font-light tabular-nums"
            style={{ color: deg === 360 ? '#f2601c' : undefined }}
          >
            {String(deg).padStart(3, '0')}°
          </div>
          <div className="mb-3 text-right text-xs text-paper/80 md:text-sm">
            {TAGLINE.slice(0, typed)}
            <span className="text-paper/25">{TAGLINE.slice(typed)}</span>
          </div>
        </div>

        {/* hero copy */}
        <div
          className="absolute inset-0 flex flex-col justify-between px-4 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28"
          style={{
            opacity: hero,
            transform: `translateY(${(1 - hero) * 30}px)`,
            pointerEvents: hero > 0.6 ? 'auto' : 'none',
          }}
        >
          <div className="flex items-start justify-between text-xs text-paper/70 md:text-sm">
            <div>
              <h1 className="text-paper">Max Chu, Chief Technology Officer.</h1>
              <p>FatHopes Energy</p>
            </div>
            <p className="text-right">
              Malaysia · <LocalTime />
            </p>
          </div>

          <div className="flex flex-col justify-between gap-[44vh] md:flex-row md:items-center md:gap-0">
            <p className="display text-[clamp(3rem,8.5vw,8rem)] text-paper">I lead it.</p>
            <p className="display text-right text-[clamp(3rem,8.5vw,8rem)] text-paper">I ship it.</p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-sm">
              <p className="text-sm leading-relaxed text-paper/80 md:text-base">
                {years} years building web and mobile products, from junior engineer to CTO. I
                still write the code I sign off on, so what gets approved is what goes live.
              </p>
              <p className="mt-3 text-xs text-paper/45">
                Building since {since} · {projectCount} projects shipped · 4 roles, 1 path
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-paper px-5 py-3 text-sm text-ink transition-colors hover:bg-flame"
            >
              Get in touch
              <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
