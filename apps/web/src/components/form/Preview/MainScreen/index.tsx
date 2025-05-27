import { styled } from 'styled-components';
import { IconShortArrow } from '@merried/icon';
import { flex } from '@merried/utils';
import TextOverlay from './TextOverlay';
import { useMainScreenValueStore } from '@/store/form/mainScreen';

interface Props {
  id: string;
  onScrollClick: () => void;
}

const MainScreen = ({ id, onScrollClick }: Props) => {
  const { image, letteringColor, letteringFont, letteringText } =
    useMainScreenValueStore();

  return (
    <StyledMainScreen $id={id} $image={image}>
      <TextOverlay
        id={id}
        text={letteringText}
        color={letteringColor}
        font={letteringFont}
      />
      <ScrollTriggerButton onClick={onScrollClick}>
        <IconShortArrow width={16} height={16} />
      </ScrollTriggerButton>
    </StyledMainScreen>
  );
};

export default MainScreen;

const StyledMainScreen = styled.div<{ $id: string; $image: string[] | null }>`
  position: relative;
  width: 100%;
  height: 812px;
  background-image: ${({ $image, $id }) =>
    $image && $image.length > 0 ? `url(${$image[0]})` : `url('/templateFull${$id}.png')`};
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
