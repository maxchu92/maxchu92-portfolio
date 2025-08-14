import AnimationOnScroll from "@/components/animation-on-scroll";
import SectionHeader from "@/components/section-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import workExperiences from "@/data/work-experiences.json";

export default function WorkExperiencesSection() {
  return (
    <div
      id="work-experiences-section"
      className="scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <SectionHeader title="Work Experiences" />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <AnimationOnScroll
                  classNameInView="col-span-1 lg:col-span-2 animate-in fade-in slide-in-from-right duration-1000"
                  classNameNotInView="opacity-0"
                >
              
                  <div className="bg-muted rounded-xl h-full flex items-center">
                    <AspectRatio ratio={16 / 9}>
                    <Image
                      fill={true}
                      src="/images/work-experiences/fhe-tech-team.jpg"
                      alt="FatHopes Energy Tech Team"
                      className="rounded-xl lg:rounded-none xl:rounded-xl object-cover"
                    />
              </AspectRatio>
                  </div>
                </AnimationOnScroll>

            {/*
            <AnimationOnScroll
              classNameInView="animate-in fade-in slide-in-from-right duration-1000"
              classNameNotInView="opacity-0"
            >
              <div className="bg-muted rounded-xl">
                <Image
                  fill={true}
                  src="/images/work-experiences/fhe-tech-team.jpg"
                  alt="FatHopes Energy Tech Team"
                  className="rounded-xl object-cover"
                />
              </div>
            </AnimationOnScroll>
            */}

          {workExperiences
            .sort((n1, n2) => +n2.yearTo - +n1.yearTo)
            .map((we, i) => (
              <AnimationOnScroll
                key={`we_${i}`}
                classNameInView="animate-in fade-in slide-in-from-right duration-1000"
                classNameNotInView="opacity-0"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 justify-between items-center">
                        <p className="text-sm">{we.company}</p>
                        <p>
                          {we.yearFrom === we.yearTo
                            ? we.yearTo
                            : `${we.yearFrom} - ${we.yearTo}`}
                        </p>
                      </div>
                      <h3 className="text-2xl font-semibold">{we.position}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-6">
                      <p>{we.description}</p>
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
