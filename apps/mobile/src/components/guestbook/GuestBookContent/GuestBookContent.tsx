import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import GuestBookText from '../GuestBookText/GuestBookText';
import { generateTexts } from './GuestBookContent.hook';
import { TextData } from '@/types/guestbook/client';

interface GuestBookItem {
  name: string;
  content: string;
}

interface GuestBookContentProps {
  guestBookItems: GuestBookItem[];
}

const GuestBookContent = ({ guestBookItems }: GuestBookContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [texts, setTexts] = useState<TextData[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const contents = guestBookItems?.map((item) => item.content);

    setTexts(generateTexts(container, contents, 10));

    const id = setInterval(() => {
      setTexts(generateTexts(container, contents, 10));
    }, 10000);

    return () => clearInterval(id);
  }, [guestBookItems]);

  return (
    <StyledGuestBookContent ref={containerRef}>
      {texts.map((t, i) => (
        <GuestBookText key={i} x={t.x} y={t.y} rotate={t.rotate} text={t.text} />
      ))}
    </StyledGuestBookContent>
  );
};

export default GuestBookContent;

const StyledGuestBookContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
