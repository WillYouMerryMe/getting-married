import type { SVGProps } from 'react';
import React from 'react';

const IconMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_885_3628)">
      <path
        d="M17.4993 4.16699H2.49935C2.03911 4.16699 1.66602 4.54009 1.66602 5.00033V15.8337C1.66602 16.2939 2.03911 16.667 2.49935 16.667H17.4993C17.9596 16.667 18.3327 16.2939 18.3327 15.8337V5.00033C18.3327 4.54009 17.9596 4.16699 17.4993 4.16699Z"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2.5 5L10 10L17.5 5"
        stroke="#9F9F9F"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </g>
    <defs>
      <clipPath id="clip0_885_3628">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconMail;
