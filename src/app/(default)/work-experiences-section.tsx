import SectionHeader from '@/components/section-header';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import workExperiences from '@/data/work-experiences.json';

export default function WorkExperiencesSection() {
  return (
    <div id="work-experiences-section">
      <SectionHeader title="Work Experiences" />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workExperiences
            .sort((n1, n2) => +n2.yearTo - +n1.yearTo)
            .map((we, i) => (
              <Card key={`we_${i}`}>
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
            ))}
        </div>
      </div>
    </div>
  );
}
