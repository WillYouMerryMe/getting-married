import { ReactNode } from 'react';
import styled from 'styled-components';

interface CustomTextProps {
  children: ReactNode;
  fontType: string;
  color: string;
  size: number;
  line: number;
  weight: number;
  align?: 'left' | 'right' | 'center' | 'justify';
  space?: string;
}

const CustomText = ({
  fontType,
  color,
  children,
  size,
  line,
  weight,
  align = 'center',
  space = 'pre-wrap',
}: CustomTextProps) => {
  return (
    <StyledCustomText
      font={fontType}
      color={color}
      size={size}
      line={line}
      weight={weight}
      align={align}
      space={space}
    >
      {children}
    </StyledCustomText>
  );
};

export default CustomText;

const StyledCustomText = styled.div<{
  font: string;
  color: string;
  size: number;
  line: number;
  weight: number;
  align: string;
  space: string;
}>`
  font-family: ${(p) => p.font};
  font-size: ${(p) => p.size}px;
  font-weight: ${(p) => p.weight};
  line-height: ${(p) => p.line / 100};
  color: ${(p) => p.color};
  text-align: ${(p) => p.align};
  white-space: ${(p) => p.space};
`;
