import SectionHeader from '@/components/section-header';
import personalSkills from '@/data/personal-skills.json';
import experiences from '@/data/experiences.json';
import techs from '@/data/techs.json';
import { Star, Stars } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type ExperienceType = keyof typeof experiences;
const responsibilities: string[] = Object.keys(experiences);

type TechType = keyof typeof techs;
const techUsed: string[] = Object.keys(techs);

export default function PersonalSkillsSection() {
  return (
    <div>
      <SectionHeader title="Personal Skills" />
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

      <div className="container mx-auto py-8 px-4 max-w-4xl">
        <h3 className="text-xl text-center mb-4">
          Roles i have been in before
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {responsibilities.map((res, i) => (
            <div
              key={`res_${i}`}
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm"
            >
              {experiences[res as ExperienceType].name}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 max-w-5xl">
        <h3 className="text-xl text-center mb-4">
          Experience with various frameworks and APIs
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techUsed.map((tu, i) => (
            <div
              key={`tu_${i}`}
              className="rounded-full bg-foreground text-background px-4 py-2 text-sm flex gap-2 items-center"
            >
              <Stars />
              {techs[tu as TechType].name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
