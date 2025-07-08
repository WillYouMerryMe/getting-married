import { styled } from 'styled-components';
import { IconShortArrow } from '@merried/icon';
import { flex } from '@merried/utils';
import TextOverlay from './TextOverlay';
import { useMainScreenValueStore } from '@/store/form/mainScreen';
import SubTextOverlay from './SubTextOverlay';
import { useCoupleIntroValueStore } from '@/store/form/coupleIntro';
import { useCeremonyInfoValueStore } from '@/store/form/ceremonyInfo';
import { color } from '@merried/design-system';
import { useEffect, useMemo } from 'react';

interface Props {
  id: string;
  onScrollClick: () => void;
}

const MainScreen = ({ id, onScrollClick }: Props) => {
  const { image, letteringColor, letteringFont, letteringText } =
    useMainScreenValueStore();

  const { bride, groom } = useCoupleIntroValueStore();

  const { calenderDate } = useCeremonyInfoValueStore();

  const backgroundUrl = useMemo(() => {
    if (!image || image.length === 0) return `/templateFull${id}.png`;

    const first = image[0];
    if (typeof first === 'string') return first;

    return URL.createObjectURL(first);
  }, [image, id]);

  useEffect(() => {
    if (!image || image.length === 0) return;

    const first = image[0];
    if (first instanceof File) {
      const url = URL.createObjectURL(first);
      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [image]);

  return (
    <StyledMainScreen $id={id} $imageUrl={backgroundUrl}>
      {id === '7' && <SvgOverlay src="/template7Backgroud.svg" alt="overlay" />}
      <TextOverlay
        id={id}
        text={letteringText}
        color={letteringColor}
        font={letteringFont}
      />
      <SubTextOverlay
        id={id}
        groomName={groom.name}
        brideName={bride.name}
        dateStr={`${calenderDate}`}
        color={id === '5' || id === '6' ? letteringColor : color.G0}
      />
      <ScrollTriggerButton onClick={onScrollClick}>
        <IconShortArrow width={16} height={16} />
      </ScrollTriggerButton>
    </StyledMainScreen>
  );
};

export default MainScreen;

const StyledMainScreen = styled.div<{ $id: string; $imageUrl: string }>`
  position: relative;
  width: 100%;
  height: 812px;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
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

const SvgOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;
