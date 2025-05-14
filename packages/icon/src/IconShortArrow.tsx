import type { SVGProps } from 'react';
import React from 'react';

const IconShortArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_278_1837)">
      <path
        d="M4 10.667L8 14.667L12 10.667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M7 14.6673C7 15.2196 7.44771 15.6673 8 15.6673C8.55228 15.6673 9 15.2196 9 14.6673L7 14.6673ZM9 1.33398L9 0.333984L7 0.333984L7 1.33398L9 1.33398ZM9 14.6673L9 1.33398L7 1.33398L7 14.6673L9 14.6673Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_278_1837">
        <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
      </clipPath>
    </defs>
  </svg>
);

export default IconShortArrow;
