import AppHeader from '@/components/app-header';
import HeroSection from './hero-section';
import AboutMeSection from './about-me-section';
import EducationsSection from './educations-section';
import PersonalSkillsSection from './personal-skills-section';
import WorkExperiencesSection from './work-experiences-section';
import ProjectsSection from './projects-section';
import BuiltWithSection from '@/app/(default)/built-with-section';
import AppFooter from '@/components/app-footer';
import DownloadsSection from './downloads-section';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Page() {
  return (
    <main className="min-h-dvh" id="home">
      <AppHeader />
      <div>
        <ScrollArea
          type="always"
          className="h-[calc(100vh-57px)] md:h-[calc(100vh-69px)]"
        >
          <HeroSection />
          <AboutMeSection />
          <PersonalSkillsSection />
          <WorkExperiencesSection />
          <EducationsSection />
          <ProjectsSection />
          <BuiltWithSection />
          <DownloadsSection />
          <AppFooter />
        </ScrollArea>
      </div>
    </main>
  );
}
