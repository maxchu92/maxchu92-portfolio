//import clsx from 'clsx';
import React from 'react';

interface TechBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  name?: string;
  icon?: string;
  badge?: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({
  //className,
  name,
  //icon,
  badge,
  //...rest
}) => {
  return <img src={badge!} alt={`Badge of ${name}`} title={name} />;
  /* return (
    <div
      className={clsx(
        'rounded-full bg-foreground text-background px-3 py-1 text-sm flex gap-2 items-center',
        className
      )}
      {...rest}
    >
       {icon ? (
        <img width={20} height={20} src={icon} alt={`Icon of ${name}`} />
      ) : (
        <></>
      )}
      {name}
    </div>
  ); */
};

export default TechBadge;
