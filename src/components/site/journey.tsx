import Reveal from './reveal';
import work from '@/data/work-experiences.json';
import educations from '@/data/educations.json';

const LEAD = [
  'Research & development',
  'Project scoping',
  'Analysis & design',
  'UI/UX design',
  'Team coaching',
];
const BUILD = ['Flutter', 'React & Next.js', '.NET MAUI', 'ASP.NET Core', 'SQL Server & data'];

export default function Journey() {
  return (
    <section id="journey" className="bg-ink px-4 pb-24 pt-28 text-paper md:px-8 md:pb-32 md:pt-40">
      <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <p className="eyebrow mb-6 text-paper/50">02 · Journey</p>
          <h2 className="display text-[clamp(3rem,7vw,6.5rem)]">
            Junior engineer
            <br />
            <span className="text-paper/35">to the C-suite.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="self-end md:col-span-4 md:col-start-9">
          <p className="text-base leading-relaxed text-paper/70 md:text-lg">
            A decade at Meteorsoft, from VB.NET and WinForms to heading research and development,
            then a move to lead technology at FatHopes Energy.
          </p>
        </Reveal>
      </div>

      <ol className="border-t border-ink-line">
        {work.map((w, i) => (
          <Reveal
            as="li"
            key={`${w.position}-${w.yearFrom}`}
            delay={i * 60}
            className="grid gap-4 border-b border-ink-line py-8 md:grid-cols-12 md:py-10"
          >
            <p className="text-sm tabular-nums text-paper/50 md:col-span-2">
              {w.yearFrom} – {w.yearTo}
            </p>
            <div className="md:col-span-5">
              <h3 className="display text-[clamp(1.9rem,3.6vw,3.25rem)]">{w.position}</h3>
              <p className="mt-2 text-sm text-flame">{w.company}</p>
            </div>
            <p className="text-sm leading-relaxed text-paper/65 md:col-span-4 md:col-start-9">
              {w.description}
            </p>
          </Reveal>
        ))}
      </ol>

      {/* Lead / Build split */}
      <div className="mt-24 grid border-y border-ink-line md:mt-32 md:grid-cols-2">
        <div className="border-b border-ink-line py-10 md:border-b-0 md:border-r md:pr-8">
          <div className="mb-8 flex items-baseline justify-between">
            <h3 className="text-2xl">Lead</h3>
            <span className="text-xs text-paper/45">Before the build · 05</span>
          </div>
          <ul>
            {LEAD.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="flex items-baseline gap-4 py-2">
                <span className="w-8 text-xs tabular-nums text-paper/40">l.{i + 1}</span>
                <span className="display text-[clamp(1.9rem,4vw,3.5rem)]">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <div className="py-10 md:pl-8">
          <div className="mb-8 flex items-baseline justify-between">
            <span className="text-xs text-paper/45">05 · Hands on the code</span>
            <h3 className="text-2xl">Build</h3>
          </div>
          <ul>
            {BUILD.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 70}
                className="flex flex-row-reverse items-baseline gap-4 py-2 md:text-right"
              >
                <span className="w-8 text-right text-xs tabular-nums text-paper/40">b.{i + 1}</span>
                <span className="display flex-1 text-[clamp(1.9rem,4vw,3.5rem)]">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="mt-24 grid gap-10 md:mt-32 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="eyebrow text-paper/50">Foundations</p>
          <h3 className="mt-4 text-3xl tracking-tight">Asia Pacific University</h3>
        </Reveal>
        <ul className="md:col-span-7 md:col-start-6">
          {educations.map((e, i) => (
            <Reveal as="li" key={e.cert} delay={i * 80} className="border-t border-ink-line py-6">
              <div className="flex items-baseline justify-between gap-6">
                <h4 className="text-xl tracking-tight">{e.cert}</h4>
                <span className="text-sm tabular-nums text-paper/50">{e.year}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">{e.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
