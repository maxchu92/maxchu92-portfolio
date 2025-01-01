import AppHeader from '@/components/app-header';
import HeroSection from './hero-section';
import AboutMeSection from './about-me-section';
import EducationsSection from './educations-section';
import PersonalSkillsSection from './personal-skills-section';
import WorkExperiencesSection from './work-experiences-section';
import ProjectsSection from './projects-section';
import BuiltWithSection from '@/app/(default)/built-with-section';
import AppFooter from '@/components/app-footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main>
        <HeroSection />
        <AboutMeSection />
        <PersonalSkillsSection />
        <WorkExperiencesSection />
        <EducationsSection />
        <ProjectsSection />
        <BuiltWithSection />
      </main>
      <AppFooter />
    </div>
  );
}
