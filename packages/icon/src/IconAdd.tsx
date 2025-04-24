import type { SVGProps } from 'react';
import React from 'react';

const IconAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.333 8H14.667"
      stroke="currentColor"
      strokeWidth={2.667}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M8 1.333V14.667"
      stroke="currentColor"
      strokeWidth={2.667}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconAdd;
