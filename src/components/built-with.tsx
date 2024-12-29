'use client';

import { useState } from 'react';
import techs from '@/data/techs.json';
import builtWith from '@/data/built-with.json';

export default function BuiltWith() {
  const [tech, setTech] = useState<string>('passion');

  function onMouseEnter_tech(tech: string) {
    setTech(tech);
  }

  function onMouseLeave_tech() {
    setTech('passion');
  }

  type TechType = keyof typeof techs;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="">
        <div className="text-4xl text-center mb-6">
          <h2 className="text-gray-500 mb-1">Built with</h2>
          <h2>{tech}</h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex text-foreground">
            {builtWith.map((bw, i) => (
              <div
                key={`bw_${i}`}
                className="p-1"
                onMouseEnter={() => {
                  onMouseEnter_tech(techs[bw as TechType].name);
                }}
                onMouseLeave={onMouseLeave_tech}
              >
                <div className="h-16 w-16 rounded-md border border-transparent hover:border-foreground transition-all duration-300 opacity-75 hover:opacity-100 flex justify-center items-center">
                  <img
                    className="dark:invert"
                    src={techs[bw as TechType].icon}
                    alt={techs[bw as TechType].name}
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
