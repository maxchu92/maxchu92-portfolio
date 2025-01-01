import Contacts from '@/components/contacts';
import { Fragment } from 'react';

const highlights = [
  'Full stack Developer',
  'ASP.Net',
  'MAUI.Net',
  'C#',
  'Flutter',
  'React.js',
  'Next.Js',
];

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="min-h-[70vh] flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-7xl">Max Chu</h1>
        <h2 className="text-xl">Full-stack Developer</h2>
        <Contacts />
        <ul className="flex list-disc justify-center flex-wrap gap-x-10 pl-6 text-muted-foreground">
          {highlights.map((h, i) => (
            <Fragment key={i}>
              <li>{h}</li>
            </Fragment>
          ))}
        </ul>
        <p className="max-w-2xl text-xl">
          A seasoned full-stack developer with a passion for creating innovative
          and efficient web and mobile applications.
        </p>
      </div>
    </div>
  );
}
