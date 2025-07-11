import type { SVGProps } from 'react';
import React from 'react';

const IconError = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="14" height="14" rx="7" fill="white" />
    <path
      d="M3.11133 3.11133L10.8891 10.8891"
      stroke="#E94848"
      strokeWidth="0.7"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M10.8891 3.11133L3.11133 10.8891"
      stroke="#E94848"
      strokeWidth="0.7"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconError;
