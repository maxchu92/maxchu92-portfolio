import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';

const educations = [
  {
    year: 2012,
    university: 'Asia Pacific University',
    cert: 'Diploma of IT specialized in Software Engineering',
    description:
      'I gained foundational skills in software development, programming, and system design, as well as developed key skills in problem-solving, algorithm design, and coding practices through various hands-on projects.',
  },
  {
    year: 2014,
    university: 'Asia Pacific University',
    cert: 'Bachelor of Science in Information System Security',
    description:
      'Focusing on cybersecurity, cryptography, and protecting network infrastructures, this education equipped me with the expertise to safeguard systems and manage vulnerabilities, complementing my technical development skills.',
  },
];

const personalSkills = [
  {
    skills: ['Problem-solving', 'Adaptability'],
    description:
      'I excel in problem-solving, with a strong ability to analyze complex issues, break them down, and devise efficient solutions. This skill allows me to tackle development challenges and deliver optimal results across various projects.',
  },
  {
    skills: ['Leadership', 'Project Management'],
    description:
      'I have experience guiding and mentoring development teams, ensuring collaboration and productivity. My leadership style focuses on empowering team members while maintaining a clear direction toward achieving project goals.',
  },
];

const workExperiences = [
  {
    company: 'Meteorsoft Sdn. Bhd.',
    year: '2014-2015',
    position: 'Junior Developer',
    description:
      'Gained foundational experience in developing web and mobile applications. Worked with VB.Net and WinForm, C# and WPF, contributing to various projects under the guidance of senior developers. Assisted in managing Microsoft SQL Server databases.',
  },
  {
    company: 'Meteorsoft Sdn. Bhd.',
    year: '2016-2017',
    position: 'Senior Developer',
    description:
      'Developed and maintained complex web and mobile applications using C#, HTML, JS, jQuery, CSS, and ASP.Net Core. Collaborated  with cross-functional teams to gather requirements and deliver customized solutions. Mentored junior developers, fostering their growth and enhancing team productivity. Managed Microsoft SQL Server databases, ensuring optimal performance and security.',
  },
  {
    company: 'Meteorsoft Sdn. Bhd.',
    year: '2017-Present',
    position: 'Head of R&D',
    description:
      'Led a team of developers in creating cutting-edge web and mobile applications. Spearheaded the adoption of new technologies and frameworks to improve development efficiency. Oversaw project management, ensuring timely delivery of high-quality software solutions.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <main>
        {/* HERO */}
        <div className="container mx-auto p-8">
          <h1 className="text-5xl">maxchu92 portfolio</h1>
        </div>

        {/* INTRODUCTION */}
        <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <p>
            I’m Max Chu, a seasoned full-stack developer with a passion for
            creating innovative and efficient web and mobile applications.
          </p>
          <p>
            With a solid background in various programming languages and
            frameworks, I have dedicated myself to staying at the forefront of
            technology and delivering exceptional solutions since 2014.
          </p>
        </div>

        {/* ABOUT ME */}
        <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl">About Me</h2>
            <p>
              I am a driven and enthusiastic developer with a knack for
              problem-solving and a commitment to excellence. My journey in the
              tech industry has seen me grow from a junior developer to the head
              of the Research and Development department at Meteorsoft Sdn. Bhd.
              My diverse skill set and leadership experience allow me to tackle
              complex projects and guide teams toward success. I thrive in
              dynamic environments where I can continuously learn and apply new
              technologies to create impactful software solutions.
            </p>
          </div>
        </div>

        {/* EDUCATIONS */}
        <div>
          <div className="bg-primary">
            <div className="container mx-auto p-8">
              <h2 className="text-4xl md:text-8xl text-background">
                Education
              </h2>
            </div>
          </div>
          <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educations.map((education, i) => (
                <div key={`education_${i}`} className="flex flex-col gap-1">
                  <p className="text-lg flex flex-row gap-2 items-center">
                    <GraduationCap className="size-8" />
                    &nbsp;{education.year}
                  </p>
                  <h3 className="text-2xl font-semibold">
                    {education.university}
                  </h3>
                  <h4 className="font-semibold">{education.cert}</h4>
                  <p>{education.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PERSONAL SKILLS */}
        <div>
          <div className="">
            <div className="container mx-auto p-8">
              <h2 className="text-4xl md:text-8xl">Personal Skills</h2>
            </div>
          </div>
          <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted md:col-span-1 lg:col-span-1">
                <AspectRatio ratio={1 / 1} className="bg-muted">
                  <Image
                    fill={true}
                    src="/images/profile_pic.jpg"
                    alt="Profile Picture"
                    className="h-full w-full rounded-md object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="hidden md:block lg:hidden"></div>
              {personalSkills.map((ps, i) => (
                <div
                  key={`$ps_${i}`}
                  className="flex flex-col gap-6 p-2 lg:col-span-1"
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
        </div>

        {/* WORK EXPERIENCE */}
        <div>
          <div className="">
            <div className="container mx-auto p-8">
              <h2 className="text-4xl md:text-8xl">Work Experiences</h2>
            </div>
          </div>
          <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {workExperiences.map((we, i) => (
                <div key={`$we_${i}`} className="flex flex-col gap-6 p-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 justify-between items-center">
                      <p className="text-sm">{we.company}</p>
                      {/* <ArrowRight /> */}
                      <p>{we.year}</p>
                    </div>
                    <h3 className="text-2xl font-semibold">{we.position}</h3>
                  </div>
                  <p>{we.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
