import { styled } from 'styled-components';
import { IconShortArrow } from '@merried/icon';
import { flex } from '@merried/utils';
import TextOverlay from './TextOverlay';
import SubTextOverlay from './SubTextOverlay';
import { color } from '@merried/design-system';
import { PutCardReq } from '@/types/form/remote';

interface Props {
  data: PutCardReq;
  onScrollClick: () => void;
}

const MainScreen = ({ data, onScrollClick }: Props) => {
  if (!data) return null;

  const { picture, letteringColor, lettering, font } = data.mainPageSetting;
  const templateId = data.templateId;

  const groom = data.groomProfile;
  const bride = data.brideProfile;

  const calenderDate = data.weddingInfo?.date;

  return (
    <StyledMainScreen $imageUrl={picture}>
      {templateId === '7' && <SvgOverlay src="/template7Backgroud.svg" alt="overlay" />}
      <TextOverlay
        id={templateId}
        text={lettering[0]}
        color={letteringColor}
        font={font}
      />
      <SubTextOverlay
        id={templateId}
        groomName={groom?.name || 'OOO'}
        brideName={bride?.name || 'OOO'}
        dateStr={`${calenderDate}`}
        color={templateId === '5' || templateId === '6' ? letteringColor : color.G0}
      />
      <ScrollTriggerButton onClick={onScrollClick}>
        <IconShortArrow width={16} height={16} />
      </ScrollTriggerButton>
    </StyledMainScreen>
  );
};

export default MainScreen;

const StyledMainScreen = styled.div<{ $imageUrl: string }>`
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
