import type { SVGProps } from 'react';
import React from 'react';

const IconOval = ({
  children,
  ...props
}: SVGProps<SVGSVGElement> & { children?: React.ReactNode }) => (
  <svg viewBox="0 0 145 43" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="72.5" cy="21.5" rx="72.5" ry="21.5" fill="#FFDF3E" />
    <foreignObject x="0" y="0" width="145" height="43">
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </foreignObject>
  </svg>
);

export default IconOval;
