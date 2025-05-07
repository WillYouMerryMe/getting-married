import type { SVGProps } from 'react';
import React from 'react';

const IconCircleAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="18" cy="18" r="15" fill="#FFC0CF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 16.5002V10.5H16.5V16.5002H10.5V19.5002H16.5V25.5003H19.5V19.5002H25.5003V16.5002H19.5Z"
      fill="white"
    />
  </svg>
);

export default IconCircleAdd;
