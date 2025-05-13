import type { SVGProps } from 'react';
import React from 'react';

const IconCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <mask id="mask0" fill="white">
        <path d="M1.66667 4.33337C1.66667 3.78109 2.11439 3.33337 2.66667 3.33337H17.3333C17.8856 3.33337 18.3333 3.78109 18.3333 4.33337V16.3334C18.3333 17.4379 17.4379 18.3334 16.3333 18.3334H3.66667C2.5621 18.3334 1.66667 17.4379 1.66667 16.3334V4.33337Z" />
      </mask>
      <path
        d="M1.66667 4.33337C1.66667 3.78109 2.11439 3.33337 2.66667 3.33337H17.3333C17.8856 3.33337 18.3333 3.78109 18.3333 4.33337V16.3334C18.3333 17.4379 17.4379 18.3334 16.3333 18.3334H3.66667C2.5621 18.3334 1.66667 17.4379 1.66667 16.3334V4.33337Z"
        stroke="#9F9F9F"
        strokeWidth={4}
        mask="url(#mask0)"
      />
      <mask id="mask1" fill="white">
        <path d="M1.66667 4.33337C1.66667 3.78109 2.11439 3.33337 2.66667 3.33337H17.3333C17.8856 3.33337 18.3333 3.78109 18.3333 4.33337V8.33337H1.66667V4.33337Z" />
      </mask>
      <path
        d="M1.66667 4.33337C1.66667 3.78109 2.11439 3.33337 2.66667 3.33337H17.3333C17.8856 3.33337 18.3333 3.78109 18.3333 4.33337V8.33337H1.66667V4.33337Z"
        stroke="#9F9F9F"
        strokeWidth={4}
        mask="url(#mask1)"
      />
      <path
        d="M5.83334 2.5V5"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1667 2.5V5"
        stroke="#9F9F9F"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default IconCalendar;
