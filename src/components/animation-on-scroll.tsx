'use client';

import { InView } from 'react-intersection-observer';

export default function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
  threshold = 0.3,
}: {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView: string;
  threshold?: number;
}) {
  return (
    <InView triggerOnce threshold={threshold}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={inView ? classNameInView : classNameNotInView}
        >
          {children}
        </div>
      )}
    </InView>
  );
}
