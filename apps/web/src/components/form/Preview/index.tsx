import { color } from '@merried/design-system';
import { IconShortArrow } from '@merried/icon';
import { Column, Row, Text, ToggleButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import Greeting from './Greeting';
import { useRef } from 'react';
import CoupleInfo from './CoupleInfo';
import WeddingCalender from './WeddingCalender';

interface Props {
  id?: string;
}

const Preview = ({ id }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    if (scrollRef.current && contentRef.current) {
      scrollRef.current.scrollTo({
        top: contentRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <StyledPreview>
      <ScrollableArea ref={scrollRef}>
        <HeroSection>
          <ScrollTriggerButton onClick={scrollToContent}>
            <IconShortArrow width={16} height={16} />
          </ScrollTriggerButton>
        </HeroSection>

        <ContentSection ref={contentRef}>
          <Greeting />
          <CoupleInfo />
          <WeddingCalender />
        </ContentSection>
      </ScrollableArea>

      <Row gap={8} alignItems="center">
        <ToggleButton isOpen={true} />
        <Column gap={4}>
          <Text fontType="H4" color={color.G900}>
            자동 포커스
          </Text>
          <Text fontType="P3" color={color.G80}>
            수정하는 부분을 따라 포커스가 바뀝니다.
          </Text>
        </Column>
      </Row>
    </StyledPreview>
  );
};
export default Preview;

const StyledPreview = styled.div`
  width: 375px;
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  gap: 20px;
`;

const ScrollableArea = styled.div`
  width: 100%;
  height: 812px;
  overflow-y: auto;
  scroll-behavior: smooth;
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE & Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;

const HeroSection = styled.div`
  width: 100%;
  height: 812px;
  background-image: url('/templateFull1.png');
  background-size: cover;
  background-position: center;
  ${flex({ flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' })}
  flex-shrink: 0;
`;

const ScrollTriggerButton = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(14.7px);
  margin-bottom: 24px;
  cursor: pointer;
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
`;

const ContentSection = styled.div`
  width: 100%;
  padding: 32px 12px 100px;
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  gap: 100px;
  flex-shrink: 0;
`;
