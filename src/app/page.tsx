import { Fragment } from 'react';
import { GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';
//Shadcn UI components
import { AspectRatio } from '@/components/ui/aspect-ratio';
//My components
import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
//JSON DATA
import educations from '@/data/educations.json';
import personalSkills from '@/data/personal-skills.json';
import workExperiences from '@/data/work-experiences.json';
import projects from '@/data/projects.json';
import experiences from '@/data/experiences.json';
import techs from '@/data/techs.json';
import builtWith from '@/data/built-with.json';
import BuiltWith from '@/components/built-with';
import SectionHeader from '@/components/section-header';

type ExperienceType = keyof typeof experiences;
type TechType = keyof typeof techs;

const highlights = [
  'Full stack Developer',
  'ASP.Net',
  'MAUI.Net',
  'C#',
  'Flutter',
  'React.js',
  'Next.Js',
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main>
        {/* HERO */}
        <div className="container mx-auto px-4">
          <div className="min-h-[60vh] flex flex-col justify-center items-center gap-6 text-center">
            <h1 className="text-7xl">Max Chu</h1>
            <ul className="flex list-disc justify-center flex-wrap gap-x-10 text-muted-foreground">
              {highlights.map((h, i) => (
                <Fragment key={i}>
                  <li>{h}</li>
                </Fragment>
              ))}
            </ul>
            <p className="max-w-2xl text-xl">
              A seasoned full-stack developer with a passion for creating
              innovative and efficient web and mobile applications.
            </p>
          </div>
        </div>

        {/* ABOUT ME */}
        <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex">
            <AspectRatio ratio={1} className="bg-muted mb-8">
              <Image
                fill={true}
                src="/images/profile_pic.jpg"
                alt="Profile Picture"
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-5">
              <h2 className="text-4xl">About Me</h2>
              <p>
                I am a driven and enthusiastic developer with a knack for
                problem-solving and a commitment to excellence.
              </p>
              <p>
                My journey in the tech industry has seen me grow from a junior
                developer to the head of a R&D department. My diverse skill set
                and leadership experience allow me to tackle complex projects
                and guide teams toward success. I thrive in dynamic environments
                where I can continuously learn and apply new technologies to
                create impactful software solutions.
              </p>
              <p>
                With a solid background in various programming languages and
                frameworks, I have dedicated myself to staying at the forefront
                of technology and delivering exceptional solutions since 2014.
              </p>
            </div>
          </div>
        </div>

        {/* EDUCATIONS */}
        <div>
          <SectionHeader title="Education" />
          <div className="container mx-auto max-w-4xl py-[100px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              {educations.map((education, i) => (
                <div key={`education_${i}`} className="flex flex-col gap-1">
                  <p className="text-lg flex flex-row gap-2 items-center">
                    <GraduationCap className="size-8" />
                    &nbsp;Graduated on&nbsp;{education.year}
                  </p>
                  <h3 className="text-2xl font-semibold">
                    {education.university}
                  </h3>
                  <h4 className="text-primary font-semibold">
                    {education.cert}
                  </h4>
                  <p>{education.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PERSONAL SKILLS */}
        <div>
          <SectionHeader title="Personal Skills" />
          <div className="container mx-auto py-[100px] px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="hidden md:block lg:hidden"></div>
              {personalSkills.map((ps, i) => (
                <div
                  key={`ps_${i}`}
                  className="flex flex-col gap-6 lg:col-span-1"
                >
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
                  <p>{ps.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container mx-auto py-[100px] px-4">
            {/* {experiences.map((ex, i) => (
              <></>
            ))} */}
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <div>
          <SectionHeader title="Work Experiences" />
          <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {workExperiences.map((we, i) => (
                <div key={`we_${i}`} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 justify-between items-center">
                      <p className="text-sm">{we.company}</p>
                      {/* <ArrowRight /> */}
                      <p>
                        {we.yearFrom}&nbsp;-&nbsp;{we.yearTo}
                      </p>
                    </div>
                    <h3 className="text-2xl font-semibold">{we.position}</h3>
                  </div>
                  <p>{we.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROJECTS */}
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
                          <div>{techs[tu as TechType].icon}</div>
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

        {/* BUILT WITH */}
        <BuiltWith />
      </main>
      <AppFooter />
      {/*  <main className="container mx-auto p-4 flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
