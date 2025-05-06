import type { SVGProps } from 'react';
import React from 'react';

const IconDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.33398 1.33398L14.6673 14.6673"
      stroke="#FFF"
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M14.6673 1.33398L1.33398 14.6673"
      stroke="#FFF"
      strokeWidth={1.6}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconDelete;
