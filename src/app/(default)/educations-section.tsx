import SectionHeader from '@/components/section-header';
import { GraduationCap } from 'lucide-react';
import educations from '@/data/educations.json';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import AnimationOnScroll from '@/components/animation-on-scroll';

export default function EducationsSection() {
  return (
    <div
      id="educations-section"
      className="scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <SectionHeader title="Education" />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AspectRatio ratio={1}>
            <AnimationOnScroll
              classNameInView="animate-in fade-in slide-in-from-right duration-1000 h-full w-full"
              classNameNotInView="opacity-0"
            >
              <div className="bg-muted rounded-xl">
                <Image
                  fill={true}
                  src="/images/educations/uni-time.jpg"
                  alt="Profile Picture"
                  className="rounded-xl object-cover"
                />
              </div>
            </AnimationOnScroll>
          </AspectRatio>
          {educations
            .sort((n1, n2) => n2.year - n1.year)
            .map((education, i) => (
              <AnimationOnScroll
                key={`education_${i}`}
                classNameInView="animate-in fade-in slide-in-from-right duration-1000"
                classNameNotInView="opacity-0"
              >
                <Card className="h-full">
                  <CardHeader>
                    <p className="text-lg flex gap-2 items-center">
                      <GraduationCap className="size-8" />
                      &nbsp;Graduated on&nbsp;{education.year}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-1">
                      <p className="text-2xl font-semibold">
                        {education.university}
                      </p>
                      <h3 className="text-primary font-semibold">
                        {education.cert}
                      </h3>
                      <p>{education.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimationOnScroll>
            ))}
        </div>
      </div>
    </div>
  );
}
