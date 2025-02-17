import projects from '@/data/projects.json';
import experiences from '@/data/experiences.json';
import techs from '@/data/techs.json';
import SectionHeader from '@/components/section-header';
import RoleBadge from '@/components/role-badge';
import TechBadge from '@/components/tech-badge';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import clsx from 'clsx';
import AnimationOnScroll from '../../components/animation-on-scroll';
import Link from 'next/link';

type ExperienceType = keyof typeof experiences;
type TechType = keyof typeof techs;

export default function ProjectsSection() {
  return (
    <div id="projects-section" className="scroll-mt-[57px] md:scroll-mt-[69px]">
      <SectionHeader title="Projects" />
      {projects
        .sort((n1, n2) => +n1.yearFrom - +n2.yearFrom)
        .map((proj, i) => (
          <AnimationOnScroll
            key={`proj_${i}`}
            classNameInView="animate-in fade-in slide-in-from-right duration-1000"
            classNameNotInView="opacity-0"
          >
            <div
              id={`proj-${proj.key}`}
              className="container mx-auto px-4 py-10 scroll-mt-[57px] md:scroll-mt-[69px]"
            >
              <div className="py-4">
                {/* HEADER */}
                <div className="grid md:grid-cols-2 md:gap-8 md:items-center mb-4">
                  <p className="text-5xl md:text-7xl md:text-right mb-4 md:mb-8">
                    Project&nbsp;{(i + 1).toString().padStart(2, '0')}
                  </p>
                  <div className="mb-4 md:mb-8">
                    <div className="text-xl flex gap-2 items-center">
                      <h3 className="text-primary">{proj.name}</h3>
                      <small>
                        {proj.yearFrom}-{proj.yearTo}
                      </small>
                    </div>
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
                    <div>
                      <div
                        className={clsx(
                          'flex flex-wrap gap-2 mb-4',
                          i % 2 === 1 ? '' : 'lg:justify-end'
                        )}
                      >
                        {proj.iOSAppStoreUrl !== '' ? (
                          <Link target="_blank" href={proj.iOSAppStoreUrl}>
                            <Image
                              height={45}
                              width={150}
                              src="/badges/badge_appstore.svg"
                              alt="Download on the App Store"
                            />
                          </Link>
                        ) : (
                          <></>
                        )}
                        {proj.androidPlayStoreUrl !== '' ? (
                          <Link target="_blank" href={proj.androidPlayStoreUrl}>
                            <Image
                              height={45}
                              width={169}
                              src="/badges/badge_playstore.svg"
                              alt="Get it on Google Play"
                            />
                          </Link>
                        ) : (
                          <></>
                        )}
                        {false ? (
                          <Link target="_blank" href={proj.androidPlayStoreUrl}>
                            <Image
                              height={45}
                              width={150}
                              src="/buttons/download_appgallery.png"
                              alt="Explore it on AppGallery"
                            />
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* PREVIEW */}
                  <AspectRatio
                    ratio={16 / 9}
                    className={clsx(
                      'bg-muted',
                      i % 2 === 1 ? 'lg:order-1' : ''
                    )}
                  >
                    <Image
                      fill={true}
                      src={proj.preview}
                      alt={`Preview of ${proj.name}`}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        ))}
    </div>
  );
}
