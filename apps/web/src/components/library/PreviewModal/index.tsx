import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { useRef } from 'react';

import Greeting from './Greeting';
import CoupleInfo from './CoupleInfo';
import WeddingCalender from './WeddingCalender';
import WeddingAlbum from './WeddingAlbum';
import WeddingIntro from './WeddingIntro';
import Direction from './Direction';
import Account from './Account';
import Guide from './Guide';
import GuestBook from './GuestBook';
import GuestSnapShot from './GuestSnapShot';
import UrlShareStyle from './UrlShareStyle';
import MainScreen from './MainScreen';
import { IconDelete } from '@merried/icon';
import { PutCardReq } from '@/types/form/remote';

interface ComponentsProps {
  data: PutCardReq;
}

const PREVIEW_COMPONENTS: Record<string, React.FC<ComponentsProps>> = {
  INVITATION_MESSAGE: Greeting,
  GROOM_BRIDE_PROFILE: CoupleInfo,
  WEDDING_DATE: WeddingCalender,
  PHOTO_GALLERY: WeddingAlbum,
  VIDEO_GALLERY: WeddingIntro,
  LOCATION_GUIDE: Direction,
  ACCOUNT_INFO: Account,
  GUEST_NOTICE: Guide,
  GUEST_BOOK: GuestBook,
  GUEST_SNAPSHOTS: GuestSnapShot,
  SHARE_URL_STYLE: UrlShareStyle,
};

interface Props {
  data: PutCardReq;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal = ({ data, isOpen, onClose }: Props) => {
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

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <IconDelete
        style={{ cursor: 'pointer', position: 'absolute', top: 104, right: 120 }}
        stroke={color.G80}
        width={20}
        height={20}
        onClick={handleCloseModal}
      />
      <StyledPreview>
        <ScrollableArea ref={scrollRef}>
          <MainScreen data={data} onScrollClick={scrollToContent} />

          <ContentSection ref={contentRef}>
            {data?.componentOrders
              ?.sort((a, b) => a.order - b.order)
              .map(({ componentType }) => {
                const Component = PREVIEW_COMPONENTS[componentType];
                return Component ? <Component key={componentType} data={data} /> : null;
              })}
            <Text fontType="P4" color={color.G80}>
              COPYRIGHT Kangwon Park. All rights reserved.
            </Text>
          </ContentSection>
        </ScrollableArea>
      </StyledPreview>
    </BlurBackground>
  );
};
export default PreviewModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: ${color.G20};
  z-index: 1001;
`;

const StyledPreview = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

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

const ContentSection = styled.div`
  width: 100%;
  padding: 32px 12px 100px;
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  gap: 100px;
  flex-shrink: 0;
  background: ${color.G0};
`;
