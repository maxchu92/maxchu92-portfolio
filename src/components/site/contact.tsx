import Reveal from './reveal';
import LocalTime from './local-time';
import contacts from '@/data/contacts.json';
import downloads from '@/data/downloads.json';

export default function Contact() {
  const email = contacts.find((c) => c.key === 'email');
  const socials = contacts.filter((c) => !['email', 'phone'].includes(c.key));
  const phone = contacts.find((c) => c.key === 'phone');

  return (
    <footer id="contact" className="bg-ink px-4 pb-8 pt-20 text-paper md:px-8 md:pt-28">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ink-line pb-6 text-xs md:text-sm">
        <p className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to conversations about building things
        </p>
        <p className="text-paper/60">
          Malaysia · <LocalTime />
        </p>
      </div>

      <Reveal className="py-20 md:py-28">
        <h2 className="display text-[clamp(3.5rem,11vw,11rem)]">
          Got a problem
          <br />
          <span className="text-paper/35">worth solving?</span>
        </h2>
        {email && (
          <a
            href={email.url}
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-flame px-7 py-4 text-base text-ink transition-colors hover:bg-paper md:text-lg"
          >
            {email.url.replace('mailto:', '')}
            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>
        )}
      </Reveal>

      <div className="grid gap-12 border-t border-ink-line pt-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-4 text-paper/45">Elsewhere</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-lg">
            {socials.map((c) => (
              <li key={c.key}>
                <a href={c.url} target="_blank" rel="noreferrer" className="hover:text-flame">
                  {c.description === 'Linkedin' ? 'LinkedIn' : c.description === 'Github' ? 'GitHub' : c.description} ↗
                </a>
              </li>
            ))}
            {phone && (
              <li>
                <a href={phone.url} className="hover:text-flame">
                  Call ↗
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <p className="eyebrow mb-4 text-paper/45">Take it with you</p>
          <ul className="space-y-2 text-lg">
            {downloads.map((d) => (
              <li key={d.href}>
                <a href={d.href} target={d.target} rel="noreferrer" className="hover:text-flame">
                  {d.caption} ↓
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-2 border-t border-ink-line pt-6 text-xs text-paper/45 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Max Chu</p>
        <p>Built with Next.js, Tailwind CSS and Vercel</p>
        <a href="#top" className="hover:text-paper">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
