import SectionHeader from '@/components/section-header';
import { GraduationCap } from 'lucide-react';
import educations from '@/data/educations.json';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

export default function EducationsSection() {
  return (
    <div>
      <SectionHeader title="Education" />
      <div className="container mx-auto py-8  px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AspectRatio ratio={1} className="bg-muted">
            <Image
              fill={true}
              src="/images/education.jpg"
              alt="Profile Picture"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
          {educations
            .sort((n1, n2) => n2.year - n1.year)
            .map((education, i) => (
              <Card key={`education_${i}`}>
                <CardHeader>
                  <p className="text-lg flex gap-2 items-center">
                    <GraduationCap className="size-8" />
                    &nbsp;Graduated on&nbsp;{education.year}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-semibold">
                      {education.university}
                    </h3>
                    <h4 className="text-primary font-semibold">
                      {education.cert}
                    </h4>
                    <p>{education.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
