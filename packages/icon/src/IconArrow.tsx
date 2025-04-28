import type { SVGProps } from 'react';
import React from 'react';

type IconArrowProps = SVGProps<SVGSVGElement> & {
  direction?: 'top' | 'bottom';
};

const IconArrow = ({ direction = 'bottom', ...props }: IconArrowProps) => {
  const rotation = direction === 'top' ? 'rotate(180 9 8)' : undefined;

  return (
    <svg
      width={18}
      height={16}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.6666 4.66602L8.99992 11.3327L2.33325 4.66602"
        stroke="#B8B8B8"
        strokeWidth={2}
        strokeLinecap="square"
        transform={rotation}
      />
    </svg>
  );
};

export default IconArrow;
