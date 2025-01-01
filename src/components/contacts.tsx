import Image from 'next/image';
import Link from 'next/link';
import contacts from '@/data/contacts.json';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Contacts() {
  return (
    <div className="flex flex-wrap gap-2 justify-center p-4">
      {contacts.map((c, i) => (
        <Tooltip key={`c_${i}`}>
          <TooltipTrigger>
            <Link target="_blank" href={c.url}>
              <div className="rounded-full bg-secondary size-10 flex justify-center items-center">
                <Image
                  className="dark:invert"
                  height={20}
                  width={20}
                  src={c.icon}
                  alt={c.description}
                />
              </div>
            </Link>
          </TooltipTrigger>
          <TooltipContent className="bg-foreground text-background">
            <p>{c.description}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
