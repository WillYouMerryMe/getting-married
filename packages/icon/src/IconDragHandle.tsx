import type { SVGProps } from 'react';
import React from 'react';

const IconDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 36 36"
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: 'pointer' }}
    {...props}
  >
    <mask
      id="mask0_749_3843"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={36}
      height={36}
    >
      <rect width={36} height={36} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_749_3843)">
      <path
        d="M6.75 21.5764V19.692H29.25V21.5764H6.75ZM6.75 16.3072V14.4229H29.25V16.3072H6.75Z"
        fill="#9F9F9F"
      />
    </g>
  </svg>
);

export default IconDragHandle;
