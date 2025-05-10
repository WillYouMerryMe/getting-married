import { styled } from 'styled-components';

interface GuestBookTextProps {
  x: number;
  y: number;
  rotate: number;
  text: string;
}

const GuestBookText = ({ x, y, rotate, text }: GuestBookTextProps) => (
  <StyleduestBookText x={x} y={y} rotate={rotate}>
    {text}
  </StyleduestBookText>
);

export default GuestBookText;

const StyleduestBookText = styled.div<{ x: number; y: number; rotate: number }>`
  position: absolute;
  top: ${({ y }) => `${y}px`};
  left: ${({ x }) => `${x}px`};
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  color: #fff;
  font-family: 'Ownglyph Kundo';
  font-size: 20px;
  line-height: 1.2;
  white-space: pre;
  text-align: center;
`;
