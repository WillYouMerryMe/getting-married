import type { SVGProps } from 'react';
import React from 'react';

const IconCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 12"
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 5.5L6 10.5L11 1.5"
      stroke="#FFF"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconCheck;
