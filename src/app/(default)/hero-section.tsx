import Contacts from '@/components/contacts';
import profile from '@/data/profile.json';
import { Fragment } from 'react';
import highlights from '@/data/highlights.json';

export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="container mx-auto px-4 h-[70vh] max-h-[700px] scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <div className="min-h-[600px] flex flex-col justify-center items-center gap-6 text-center animate-in fade-in duration-1000">
        <h1 className="text-4xl md:text-7xl">{profile.fullName}</h1>
        <h2 className="md:text-xl">
          {profile.position}
          {profile.company ? ` at ${profile.company}` : ''}
        </h2>
        <Contacts />
        <ul className="flex list-disc justify-center flex-wrap gap-x-10 pl-6 text-muted-foreground">
          {highlights.map((h, i) => (
            <Fragment key={i}>
              <li>{h}</li>
            </Fragment>
          ))}
        </ul>
        <p className="max-w-2xl md:text-xl">{profile.shortDescription}</p>
      </div>
    </div>
  );
}
