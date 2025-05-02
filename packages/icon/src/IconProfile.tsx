import type { SVGProps } from 'react';
import React from 'react';

interface IconProfileProps extends SVGProps<SVGSVGElement> {
  fillColor?: string;
  strokeColor?: string;
}

const IconProfile = ({ fillColor, strokeColor, ...props }: IconProfileProps) => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_1206_3112)">
      <path opacity="0.36" d="M28 0H0V28H28V0Z" fill="white" />
      <path
        d="M13.9997 25.6663C20.443 25.6663 25.6663 20.443 25.6663 13.9997C25.6663 7.55635 20.443 2.33301 13.9997 2.33301C7.55635 2.33301 2.33301 7.55635 2.33301 13.9997C2.33301 20.443 7.55635 25.6663 13.9997 25.6663Z"
        fill={fillColor}
        fillOpacity="0.15"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M13.9997 15.1663C16.577 15.1663 18.6663 13.077 18.6663 10.4997C18.6663 7.92235 16.577 5.83301 13.9997 5.83301C11.4223 5.83301 9.33301 7.92235 9.33301 10.4997C9.33301 13.077 11.4223 15.1663 13.9997 15.1663Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M14.0001 25.6666C16.8083 25.6646 19.5215 24.6497 21.6417 22.8083C21.0562 21.255 20.0111 19.917 18.6459 18.9727C17.2807 18.0283 15.6601 17.5225 14.0001 17.5225C12.3401 17.5225 10.7195 18.0283 9.35424 18.9727C7.98901 19.917 6.94398 21.255 6.3584 22.8083C8.4786 24.6497 11.1919 25.6646 14.0001 25.6666V25.6666Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </g>
    <defs>
      <clipPath id="clip0_1206_3112">
        <rect width="28" height="28" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconProfile;
