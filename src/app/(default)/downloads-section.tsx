import AnimationOnScroll from '@/components/animation-on-scroll';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import downloads from '@/data/downloads.json';

export default function DownloadsSection() {
  return (
    <div
      id="downloads-section"
      className="py-6 scroll-mt-[57px] md:scroll-mt-[69px]"
    >
      <AnimationOnScroll
        classNameInView="animate-in fade-in slide-in-from-right duration-1000"
        classNameNotInView="opacity-0"
      >
        <div className="container mx-auto max-w-4xl py-8 px-4">
          <div className="text-4xl text-center mb-4">
            <h2 className="text-gray-500 mb-1">Downloads</h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {downloads.map((dl, i) => (
              <Button
                key={`dl_${i}`}
                type="button"
                variant="outline"
                size="lg"
                asChild
              >
                <Link href={dl.href} target={dl.target}>
                  {dl.caption}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}
