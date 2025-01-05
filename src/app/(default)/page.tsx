import { ScrollArea } from '@/components/ui/scroll-area';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import HeroSection from './hero-section';
import AboutMeSection from './about-me-section';
import PersonalSkillsSection from './personal-skills-section';
import WorkExperiencesSection from './work-experiences-section';
import EducationsSection from './educations-section';
import ProjectsSection from './projects-section';
import AwardsSection from './awards-section';
import ActivitiesSection from './activities-section';
import BuiltWithSection from './built-with-section';
import DownloadsSection from './downloads-section';
import profile from '@/data/profile.json';
import { Person } from 'schema-dts';

const jsonLd: Person = {
  '@type': 'Person',
  name: profile.fullName,
  disambiguatingDescription: `Malaysian ${profile.position}`,
  description: profile.shortDescription,
  birthDate: profile.birthDate,
  awards: [
    'Winner of Makeweekend Robotic Hackaton',
    'Winner of Pertandingan Kuiz ICT, UTHM',
  ],
};

export default function Page() {
  return (
    <main className="h-dvh" id="home">
      {' '}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppHeader />
      <ScrollArea type="always" className="mt-[57px] md:mt-[69px]">
        <HeroSection />
        <AboutMeSection />
        <PersonalSkillsSection />
        <WorkExperiencesSection />
        <EducationsSection />
        <ProjectsSection />
        <AwardsSection />
        <ActivitiesSection />
        <BuiltWithSection />
        <DownloadsSection />
        <AppFooter />
      </ScrollArea>
    </main>
  );
}
