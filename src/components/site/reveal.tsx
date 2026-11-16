'use client';

import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'p' | 'h2' | 'section';
}) {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -10% 0px' });
  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'is-in', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
