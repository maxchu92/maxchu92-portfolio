import SectionHeader from '@/components/section-header';
import personalSkills from '@/data/personal-skills.json';
import experiences from '@/data/experiences.json';
import techs from '@/data/techs.json';
import languages from '@/data/languages.json';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import RoleBadge from '@/components/role-badge';
import TechBadge from '@/components/tech-badge';
import { Fragment } from 'react';
import AnimationOnScroll from '@/components/animation-on-scroll';

type ExperienceType = keyof typeof experiences;
const responsibilities: string[] = Object.keys(experiences);

type TechType = keyof typeof techs;
const techUsed: string[] = Object.keys(techs);

export default function PersonalSkillsSection() {
  return (
    <div
      id="personal-skills-section"
      className="scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <SectionHeader title="Personal Skills" />

      {/* ROLES */}
      <AnimationOnScroll
        classNameInView="animate-in fade-in slide-in-from-right duration-1000"
        classNameNotInView="opacity-0"
      >
        <div className="container mx-auto py-8 px-4 max-w-4xl">
          <p className="text-xl text-center mb-4">Languages I speak</p>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((la, i) => (
              <AnimationOnScroll
                key={`la_${i}`}
                classNameInView="animate-in fade-in slide-in-from-right duration-1000"
                classNameNotInView="opacity-0"
              >
                <RoleBadge name={la} />
              </AnimationOnScroll>
            ))}
          </div>
        </div>
      </AnimationOnScroll>
      {/* ROLES */}
      <AnimationOnScroll
        classNameInView="animate-in fade-in slide-in-from-right duration-1000"
        classNameNotInView="opacity-0"
      >
        <div className="container mx-auto py-8 px-4 max-w-4xl">
          <p className="text-xl text-center mb-4">
            Roles i have been in before
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {responsibilities
              .filter((res) => experiences[res as ExperienceType].isVisible)
              .map((res, i) => (
                <AnimationOnScroll
                  key={`role_${i}`}
                  classNameInView="animate-in fade-in slide-in-from-right duration-1000"
                  classNameNotInView="opacity-0"
                >
                  <RoleBadge name={experiences[res as ExperienceType].name} />
                </AnimationOnScroll>
              ))}
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll
        classNameInView="animate-in fade-in slide-in-from-right duration-1000"
        classNameNotInView="opacity-0"
      >
        {/* TECH SKILLS */}
        <div className="container mx-auto py-8 px-4 max-w-5xl">
          <p className="text-xl text-center mb-4">
            Experience with various languages, frameworks and APIs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techUsed
              .sort((n1, n2) => (n1 < n2 ? -1 : 1))
              .map((tu, i) => (
                <AnimationOnScroll
                  key={`tu_${i}`}
                  classNameInView="animate-in fade-in slide-in-from-right duration-1000"
                  classNameNotInView="opacity-0"
                >
                  <Fragment>
                    <TechBadge
                      name={techs[tu as TechType].name}
                      icon={techs[tu as TechType].icon}
                      badge={techs[tu as TechType].badge}
                    />
                  </Fragment>
                </AnimationOnScroll>
              ))}
          </div>
        </div>
      </AnimationOnScroll>
      {/* PERSONAL SKILLS */}
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalSkills.map((ps, i) => (
            <AnimationOnScroll
              key={`ps_${i}`}
              classNameInView="animate-in fade-in slide-in-from-right duration-1000"
              classNameNotInView="opacity-0"
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4">
                    {ps.skills.map((s, i) => (
                      <div
                        key={`s_${i}`}
                        className="flex flex-row gap-3 items-center"
                      >
                        <div className="rounded-full bg-primary p-2">
                          <Star className="size-4 text-primary-foreground" />
                        </div>
                        {s}
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-6 lg:col-span-1">
                    <p>{ps.description}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
