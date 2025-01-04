import SectionHeader from '@/components/section-header';
import personalSkills from '@/data/personal-skills.json';
import experiences from '@/data/experiences.json';
import techs from '@/data/techs.json';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import RoleBadge from '@/components/role-badge';
import TechBadge from '@/components/tech-badge';
import { Fragment } from 'react';

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
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h3 className="text-xl text-center mb-4">Languages I speak</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <RoleBadge name="English" />
          <RoleBadge name="Malay" />
          <RoleBadge name="Mandarin" />
        </div>
      </div>

      {/* ROLES */}
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h3 className="text-xl text-center mb-4">
          Roles i have been in before
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {responsibilities
            .filter((res) => experiences[res as ExperienceType].isVisible)
            .map((res, i) => (
              <RoleBadge
                key={i}
                name={experiences[res as ExperienceType].name}
              />
            ))}
        </div>
      </div>

      {/* TECH SKILLS */}
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <h3 className="text-xl text-center mb-4">
          Experience with various languages, frameworks and APIs
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techUsed
            .sort((n1, n2) => (n1 < n2 ? -1 : 1))
            .map((tu, i) => (
              <Fragment key={`tu_${i}`}>
                <TechBadge
                  key={`tu_${i}`}
                  name={techs[tu as TechType].name}
                  icon={techs[tu as TechType].icon}
                  badge={techs[tu as TechType].badge}
                />
              </Fragment>
            ))}
        </div>
      </div>

      {/* PERSONAL SKILLS */}
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalSkills.map((ps, i) => (
            <Card key={`ps_${i}`}>
              <CardHeader>
                <div className="flex flex-col gap-4">
                  {ps.skills.map((s, i) => (
                    <div
                      key={`s_${i}`}
                      className="flex flex-row gap-3 items-center"
                    >
                      <div className="rounded-full bg-primary p-2">
                        <Star className="size-4" />
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
          ))}
        </div>
      </div>
    </div>
  );
}
