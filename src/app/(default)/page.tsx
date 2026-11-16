import { Person } from 'schema-dts';
import profile from '@/data/profile.json';
import projects from '@/data/projects.json';
import techs from '@/data/techs.json';
import awards from '@/data/awards.json';
import languages from '@/data/languages.json';
import SiteNav from '@/components/site/site-nav';
import IntroHero from '@/components/site/intro-hero';
import SelectedWork, { type WorkItem } from '@/components/site/selected-work';
import Journey from '@/components/site/journey';
import Awards from '@/components/site/awards';
import Stats from '@/components/site/stats';
import Contact from '@/components/site/contact';

const SINCE = 2014;

const jsonLd: Person = {
  '@type': 'Person',
  name: profile.fullName,
  jobTitle: profile.position,
  worksFor: { '@type': 'Organization', name: profile.company },
  disambiguatingDescription: `Malaysian ${profile.position}`,
  description: profile.shortDescription,
  birthDate: profile.birthDate,
  award: awards.map((a) => `${a.position}, ${a.event}`),
};

const techNames = techs as Record<string, { name: string }>;

function kindOf(p: (typeof projects)[number]) {
  const text = `${p.name} ${p.description}`.toLowerCase();
  const mobile = ['flutter', 'dotNetMaui', 'xamarinForms'].some((t) => p.techUsed.includes(t));
  if (p.iOSAppStoreUrl || p.androidPlayStoreUrl || mobile || /\bapp\b/.test(text)) return 'Mobile app';
  if (text.includes('kiosk') || /\bpos\b/.test(text) || text.includes('register')) return 'Retail system';
  if (text.includes('web') || text.includes('ecommerce') || text.includes('e-commerce') || text.includes('portal'))
    return 'Web';
  return 'System';
}

const work: WorkItem[] = [...projects]
  .sort((a, b) => Number(b.yearTo) - Number(a.yearTo) || Number(b.yearFrom) - Number(a.yearFrom))
  .map((p) => ({
    key: p.key,
    name: p.name,
    description: p.description,
    years: p.yearFrom === p.yearTo ? p.yearFrom : `${p.yearFrom}–${p.yearTo}`,
    kind: kindOf(p),
    preview: p.preview,
    stack: p.techUsed
      .filter((t) => t !== 'adobeXd' && t !== 'redgateToolbelt')
      .slice(0, 4)
      .map((t) => techNames[t]?.name ?? t),
    appStore: p.iOSAppStoreUrl || undefined,
    playStore: p.androidPlayStoreUrl || undefined,
  }));

export default function Page() {
  const years = new Date().getFullYear() - SINCE;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteNav />
      <main>
        <IntroHero projectCount={projects.length} since={SINCE} />
        <SelectedWork items={work} />
        <Journey />
        <Awards />
        <Stats years={years} projects={projects.length} awards={awards.length} languages={languages} />
      </main>
      <Contact />
    </>
  );
}
