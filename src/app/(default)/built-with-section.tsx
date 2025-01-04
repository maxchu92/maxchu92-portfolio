'use client';

import { useState } from 'react';
import techs from '@/data/techs.json';
import builtWith from '@/data/built-with.json';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import AnimationOnScroll from '@/components/animation-on-scroll';

export default function BuiltWithSection() {
  const [tech, setTech] = useState<string>('passion');
  const [animateKey, setAnimateKey] = useState(0);

  function onMouseEnter_tech(tech: string) {
    setTech(tech);
    setAnimateKey((prev) => prev + 1);
  }

  function onMouseLeave_tech() {
    setTech('passion');
    setAnimateKey((prev) => prev + 1);
  }

  type TechType = keyof typeof techs;

  return (
    <div
      id="built-with-section"
      className="container mx-auto py-8 px-4 scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <AnimationOnScroll
        classNameInView="animate-in fade-in slide-in-from-right duration-700"
        classNameNotInView="opacity-0"
      >
        <div className="flex flex-col items-center">
          <div className="text-4xl text-center mb-6">
            <h2 className="text-gray-500 mb-1">Built with</h2>
            <h2
              key={animateKey}
              className="animate-in fade-in slide-in-from-bottom duration-1000"
            >
              {tech}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center text-foreground">
            {builtWith.map((bw, i) => (
              <div
                key={`bw_${i}`}
                className="p-1"
                onMouseEnter={() => {
                  onMouseEnter_tech(techs[bw as TechType].name);
                }}
                onMouseLeave={onMouseLeave_tech}
              >
                <div className="h-16 w-16 rounded-md border border-transparent hover:border-foreground transition-all duration-300 opacity-75 hover:opacity-100 flex justify-center items-center p-2">
                  <AspectRatio ratio={1}>
                    <Image
                      fill={true}
                      className="dark:invert"
                      src={techs[bw as TechType].icon}
                      alt={techs[bw as TechType].name}
                    />
                  </AspectRatio>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}
