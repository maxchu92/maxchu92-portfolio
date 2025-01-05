import Contacts from '@/components/contacts';
import profile from '@/data/profile.json';
import { Fragment } from 'react';
import highlights from '@/data/highlights.json';

export default function HeroSection() {
  return (
    <div id="hero-section">
      <div className="-z-10 hidden lg:block absolute top-[100px] xl:top-[0px] left-0 animate-in fade-in slide-in-from-left duration-1000">
        <img
          className="xl:hidden"
          src="/images/home-bg-left.png"
          alt="Background"
        />
        <img
          className="hidden xl:block"
          src="/images/home-bg-left-x2.png"
          alt="Background"
        />
      </div>
      <div className="-z-10 hidden lg:block absolute top-[100px] right-0 animate-in fade-in slide-in-from-right duration-1000">
        <img
          className="xl:hidden"
          src="/images/home-bg-right.png"
          alt="Background"
        />
        <img
          className="hidden xl:block"
          src="/images/home-bg-right-x2.png"
          alt="Background"
        />
      </div>
      <div className="container mx-auto px-4 min-h-[700px] max-h-[700px] scroll-mt-[57px] md:scroll-mt-[69px]">
        <div className="min-h-[600px] flex flex-col justify-center items-center gap-6 text-center animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-7xl">{profile.fullName}</h1>
          <p className="md:text-xl">
            {profile.position}
            {profile.company ? ` at ${profile.company}` : ''}
          </p>
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
    </div>
  );
}
