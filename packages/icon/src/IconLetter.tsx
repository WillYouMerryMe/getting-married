import type { SVGProps } from 'react';
import React from 'react';

interface IconLetterProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
}

const IconLetter = ({ fillColor, strokeColor, ...props }: IconLetterProps) => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1206_2741)">
      <path opacity="0.36" d="M28 0H0V28H28V0Z" fill="white" />
      <path
        d="M24.4997 5.83301H3.49967C2.85534 5.83301 2.33301 6.35534 2.33301 6.99967V22.1663C2.33301 22.8107 2.85534 23.333 3.49967 23.333H24.4997C25.144 23.333 25.6663 22.8107 25.6663 22.1663V6.99967C25.6663 6.35534 25.144 5.83301 24.4997 5.83301Z"
        fill={fillColor}
        fillOpacity="0.15"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M3.5 7L14 14L24.5 7" fill={fillColor} fillOpacity="0.15" />
      <path
        d="M3.5 7L14 14L24.5 7"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="clip0_1206_2741">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconLetter;
