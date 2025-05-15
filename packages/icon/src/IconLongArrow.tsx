import React from 'react';
import type { SVGProps } from 'react';

type IconLongArrowProps = SVGProps<SVGSVGElement> & {
  direction?: 'top' | 'bottom' | 'left' | 'right';
};

const IconLongArrow = ({ direction = 'bottom', ...props }: IconLongArrowProps) => {
  const rotateMap = { left: '0deg', top: '-90deg', right: '180deg', bottom: '90deg' };
  const deg = rotateMap[direction];

  return (
    <svg
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${deg})`,
        transformOrigin: '50% 50%',
      }}
      {...props}
    >
      <path
        d="M11.166 8L3.16602 16L11.166 24"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M3.16536 15C2.61308 15 2.16536 15.4477 2.16536 16C2.16536 16.5523 2.61308 17 3.16536 17L3.16536 15ZM29.832 17L30.832 17L30.832 15L29.832 15L29.832 17ZM3.16536 16L3.16536 17L29.832 17L29.832 16L29.832 15L3.16536 15L3.16536 16Z"
        fill="#9F9F9F"
      />
    </svg>
  );
};

export default IconLongArrow;
