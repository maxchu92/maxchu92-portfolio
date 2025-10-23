import AnimationOnScroll from '@/components/animation-on-scroll';
import SectionHeader from '@/components/section-header';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import activities from '@/data/activities.json';
import Image from 'next/image';

export default function ActivitiesSection() {
  return (
    <div
      id="activities-section"
      className="scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <SectionHeader title="Activities" />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {activities
            .sort((n1, n2) => +n2.year - +n1.year)
            .map((act, i) => (
              <AnimationOnScroll
                key={`act_${i}`}
                classNameInView="animate-in fade-in slide-in-from-right duration-1000"
                classNameNotInView="opacity-0"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 justify-between items-center">
                        <p className="text-sm">{act.position}</p>
                        <p>{act.year}</p>
                      </div>
                      <h3 className="text-2xl font-semibold">{act.event}</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-6">
                      <p>{act.description}</p>
                      {act.image_url ? (
                        <AspectRatio ratio={2 / 1}>
                          <Image
                            fill={true}
                            src={act.image_url!}
                            alt="Activity Image"
                            className="rounded-xl object-cover"
                          />
                        </AspectRatio>
                      ) : null}
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
