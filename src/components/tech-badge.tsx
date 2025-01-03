import clsx from 'clsx';
//import Image from 'next/image';
import React from 'react';

interface TechBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  name?: string;
  icon?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ className, name, ...rest }) => {
  return (
    <div
      className={clsx(
        'rounded-full bg-foreground text-background px-3 py-1 text-sm flex gap-2 items-center',
        className
      )}
      {...rest}
    >
      {/*  {icon ? (
        <img width={20} height={20} src={icon} alt={`Icon of ${name}`} />
      ) : (
        <></>
      )} */}
      {name}
    </div>
  );
};

export default TechBadge;
