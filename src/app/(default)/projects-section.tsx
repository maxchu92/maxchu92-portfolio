import projects from '@/data/projects.json';
import experiences from '@/data/experiences.json';
import techs from '@/data/techs.json';
import SectionHeader from '@/components/section-header';
import RoleBadge from '@/components/role-badge';
import TechBadge from '@/components/tech-badge';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import clsx from 'clsx';
import { Fragment } from 'react';

type ExperienceType = keyof typeof experiences;
type TechType = keyof typeof techs;

export default function ProjectsSection() {
  return (
    <div>
      <SectionHeader title="Projects" />
      {projects
        .sort((n1, n2) => +n1.yearFrom - +n2.yearFrom)
        .map((proj, i) => (
          <div key={`proj_${i}`} className="container mx-auto px-4 py-10">
            <div className="py-4">
              {/* HEADER */}
              <div className="grid md:grid-cols-2 md:gap-8 md:items-center mb-4">
                <h3 className="text-5xl md:text-7xl md:text-right mb-4 md:mb-8">
                  Project&nbsp;{(i + 1).toString().padStart(2, '0')}
                </h3>
                <div className="mb-4 md:mb-8">
                  <h4 className="text-xl">
                    <span className="mr-2 text-primary">{proj.name}</span>
                    <small>
                      {proj.yearFrom}-{proj.yearTo}
                    </small>
                  </h4>
                  <p className="text-sm">{proj.description}</p>
                </div>
              </div>

              {/* DETAILS */}
              <div
                className={clsx(
                  'grid lg:grid-cols-2 gap-8',
                  i % 2 === 1 ? '' : 'lg:text-right'
                )}
              >
                {/* INFO */}
                <div className={clsx(i % 2 === 1 ? 'lg:order-1' : '')}>
                  <div>
                    <h5 className="mb-2">Responsibilities:</h5>
                    <div
                      className={clsx(
                        'flex flex-wrap gap-2 mb-4',
                        i % 2 === 1 ? '' : 'lg:justify-end'
                      )}
                    >
                      {proj.responsibilities.map((res, i) => (
                        <RoleBadge
                          key={`res_${i}`}
                          name={experiences[res as ExperienceType].name}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-2">Tech used:</h5>
                    <div
                      className={clsx(
                        'flex flex-wrap gap-2 mb-4',
                        i % 2 === 1 ? '' : 'lg:justify-end'
                      )}
                    >
                      {proj.techUsed.map((tu, i) => (
                        <TechBadge
                          key={`tu_${i}`}
                          name={techs[tu as TechType].name}
                          icon={techs[tu as TechType].icon}
                          badge={techs[tu as TechType].badge}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* PREVIEW */}
                <AspectRatio
                  ratio={16 / 9}
                  className={clsx('bg-muted', i % 2 === 1 ? 'lg:order-1' : '')}
                >
                  <Image
                    fill={true}
                    src={proj.preview}
                    alt={`Preview of ${proj.name}`}
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
