import type { SVGProps } from 'react';
import React from 'react';

interface IconListProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
}

const IconList = ({ fillColor, strokeColor, ...props }: IconListProps) => (
  <svg viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1206_2716)">
      <path opacity="0.36" d="M28.833 0H0.833008V28H28.833V0Z" fill="white" />
      <path
        d="M19.6367 8.99023C19.6367 12.4353 19.6367 18.104 19.6367 19.9706C19.6367 24.0883 22.3818 25.4608 22.3818 25.4608C24.6602 25.4608 26.4995 23.6216 26.4995 21.3432V8.99023H19.6367Z"
        fill={fillColor}
        fillOpacity="0.15"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M19.6366 19.9706C19.6366 18.1039 19.6366 12.4353 19.6366 8.9902V6.2451V3.5H3.16602V21.3431C3.16602 23.6216 5.00523 25.4608 7.28366 25.4608H22.3817C22.3817 25.4608 19.6366 24.0882 19.6366 19.9706Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="4.83301" y1="7" x2="11.833" y2="7" stroke={strokeColor} strokeWidth="2" />
      <line
        x1="4.83301"
        y1="10"
        x2="10.833"
        y2="10"
        stroke={strokeColor}
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1206_2716">
        <rect width="28" height="28" fill="white" transform="translate(0.833008)" />
      </clipPath>
    </defs>
  </svg>
);

export default IconList;
