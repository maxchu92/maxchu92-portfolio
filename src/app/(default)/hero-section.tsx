import Contacts from '@/components/contacts';
import profile from '@/data/profile.json';
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
        <h1 className="text-7xl">{profile.fullName}</h1>
        <h2 className="text-xl">{profile.position}</h2>
        <Contacts />
        <ul className="flex list-disc justify-center flex-wrap gap-x-10 pl-6 text-muted-foreground">
          {highlights.map((h, i) => (
            <Fragment key={i}>
              <li>{h}</li>
            </Fragment>
          ))}
        </ul>
        <p className="max-w-2xl text-xl">{profile.shortDescription}</p>
      </div>
    </div>
  );
}
