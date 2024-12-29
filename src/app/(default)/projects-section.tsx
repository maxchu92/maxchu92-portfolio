import { Fragment } from 'react';
import projects from '@/data/projects.json';
import experiences from '@/data/experiences.json';
import techs from '@/data/techs.json';
import SectionHeader from '@/components/section-header';

type ExperienceType = keyof typeof experiences;
type TechType = keyof typeof techs;

export default function ProjectsSection() {
  return (
    <div>
      <SectionHeader title="Projects" />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div key={`proj_${i}`} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 justify-between items-center">
                  <p className="text-sm">{proj.name}</p>
                  <p className="text-sm">{proj.description}</p>
                  {/* <ArrowRight /> */}
                  <p>
                    {proj.yearFrom}&nbsp;-&nbsp;{proj.yearTo}
                  </p>
                </div>
                <ul>
                  {proj.responsibilities.map((res, i) => (
                    <div key={`res_${i}`}>
                      {experiences[res as ExperienceType].name}
                    </div>
                  ))}
                </ul>
                <ul>
                  {proj.techUsed.map((tu, i) => (
                    <Fragment key={`tu_${i}`}>
                      {/*  <div>{techs[tu as TechType].icon}</div> */}
                      <div>{techs[tu as TechType].name}</div>
                    </Fragment>
                  ))}
                </ul>
                {/* <h3 className="text-2xl font-semibold">{proj.}</h3> */}
              </div>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
