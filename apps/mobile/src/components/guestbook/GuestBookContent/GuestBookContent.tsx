import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import GuestBookText from '../GuestBookText/GuestBookText';
import { generateTexts } from './GuestBookContent.hook';
import { TextData } from '@/types/guestbook/client';

const sampleTexts = [
  '결혼 축하해❤️',
  `선배님 너무 축하드려요! 
저도 얼른 좋은 소식 전할게요 
항상 행복하세요~!`,
  '오래오래 행복해라S2',
  '영원히 축복이 함께하길..',
  '늘 지금처럼 행복하길 바라!',
  '결혼 진심으로 축하드립니다!',
  '두 분 앞날에 축복이 가득하길!',
  '사랑 가득한 날들만 있기를!',
  '행복한 결혼생활 응원해요!',
  '서로에게 늘 힘이 되어주세요!',
  '웃음 넘치는 하루하루 되길!',
  '앞으로의 모든 날들을 축복해요!',
  '가장 빛나는 인생의 시작이에요!',
  '서로의 가장 큰 팬이 되어주세요!',
  '사랑이 넘치는 부부 되시길!',
];

const GuestBookContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [texts, setTexts] = useState<TextData[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setTexts(generateTexts(container, sampleTexts, 10));

    const id = setInterval(() => {
      setTexts(generateTexts(container, sampleTexts, 10));
    }, 10000);

    return () => clearInterval(id);
  }, []);

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
