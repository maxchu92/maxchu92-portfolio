import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function AboutMeSection() {
  return (
    <div
      id="about-me"
      className="container mx-auto py-8 px-4 scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-1000">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl lg:mt-6 xl:mt-16">About Me</h2>
            <p>
              I am a driven and enthusiastic developer with a knack for
              problem-solving and a commitment to excellence.
            </p>
            {/* <p>
            My journey in the tech industry has seen me grow from a junior
            developer to the head of a R&D department. My diverse skill set and
            leadership experience allow me to tackle complex projects and guide
            teams toward success. I thrive in dynamic environments where I can
            continuously learn and apply new technologies to create impactful
            software solutions.
          </p> */}
            <p>
              With a solid background in various programming languages and
              frameworks, I have dedicated myself to staying at the forefront of
              technology and delivering exceptional solutions since 2014.
            </p>
          </div>
        </div>

        <AspectRatio ratio={1} className="bg-muted rounded-xl">
          <Image
            fill={true}
            src="/images/profile_pic.jpg"
            alt="Profile Picture"
            className="rounded-xl object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
