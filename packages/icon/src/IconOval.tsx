import type { SVGProps } from 'react';
import React from 'react';

interface IconOvalProps extends Omit<SVGProps<SVGSVGElement>, 'key' | 'children'> {
  fill?: string;
}

const IconOval = ({ fill = '#FFDF3E', ...props }: IconOvalProps) => (
  <svg viewBox="0 0 145 43" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="72.5" cy="21.5" rx="72.5" ry="21.5" fill={fill} />
  </svg>
);

export default IconOval;
