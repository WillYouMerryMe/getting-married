import React from 'react';
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
  fill?: string;
};

const IconDownload = ({ fill = 'white', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_2314_7571"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2314_7571)">
      <path
        d="M10 13.1571L6.44229 9.59937L7.32063 8.69563L9.375 10.75V3.75H10.625V10.75L12.6794 8.69563L13.5577 9.59937L10 13.1571ZM3.75 16.25V12.484H5V15H15V12.484H16.25V16.25H3.75Z"
        fill={fill}
      />
    </g>
  </svg>
);

export default IconDownload;
