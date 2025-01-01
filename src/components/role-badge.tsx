import clsx from 'clsx';
import React from 'react';

interface RoleBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  name?: string;
}

const RoleBadge: React.FC<RoleBadgeProps> = ({ className, name, ...rest }) => {
  return (
    <div
      className={clsx(
        'rounded-full bg-foreground text-background px-3 py-1 text-sm',
        className
      )}
      {...rest}
    >
      {name}
    </div>
  );
};

export default RoleBadge;
