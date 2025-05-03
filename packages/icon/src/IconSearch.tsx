import type { SVGProps } from 'react';
import React from 'react';

const IconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1263_3881)">
      <path
        d="M6.66732 11.9997C9.61284 11.9997 12.0007 9.61186 12.0007 6.66634C12.0007 3.72082 9.61284 1.33301 6.66732 1.33301C3.7218 1.33301 1.33398 3.72082 1.33398 6.66634C1.33398 9.61186 3.7218 11.9997 6.66732 11.9997Z"
        stroke="#FFC0CF"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M14.666 14.667L10.666 10.667"
        stroke="#FFC0CF"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1263_3881">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconSearch;
