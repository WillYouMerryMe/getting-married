import type { SVGProps } from 'react';
import React from 'react';

interface IconBagProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
}

const IconBag = ({ fillColor, strokeColor, ...props }: IconBagProps) => (
  <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path opacity="0.36" d="M28.167 0H0.166992V28H28.167V0Z" fill="white" />
    <path
      d="M24.667 25.6667H3.66699L4.98533 7H23.3603L24.667 25.6667Z"
      fill={fillColor}
      fillOpacity="0.15"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9.5 9.33301V7.00337C9.63241 5.71748 10.181 4.53111 11.0415 3.66998C11.902 2.80884 13.0142 2.33301 14.1667 2.33301C15.3191 2.33301 16.4314 2.80884 17.2918 3.66998C18.1523 4.53111 18.7009 5.71748 18.8333 7.00337V9.33301"
      stroke={strokeColor}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

export default IconBag;
