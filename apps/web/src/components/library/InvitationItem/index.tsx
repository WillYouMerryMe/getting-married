import { color } from '@merried/design-system';
import {
  IconCamera,
  IconEditPencil,
  IconMail,
  IconShare,
  IconTrash,
} from '@merried/icon';
import { Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import DeleteModal from '../DeleteModal';
import { useOverlay } from '@toss/use-overlay';
import GuestSnapModal from '../GuestSnapModal';

interface Props {
  id: string;
  title: string;
  updateAt: string;
}

const InvitationItem = ({ id, title, updateAt }: Props) => {
  const overlay = useOverlay();

  const handleOverlayDeleteModal = () => {
    overlay.open(({ isOpen, close }) => <DeleteModal isOpen={isOpen} onClose={close} />);
  };
  const handleGuestSnapButtonClick = () => {
    overlay.open(({ isOpen, close }) => (
      <GuestSnapModal isOpen={isOpen} onClose={close} />
    ));
  };

  const handleEditButtonClick = () => {
    //수정 페이지
  };

  const handleMailClick = () => {
    // 청첩장 확인 모달
  };

  const handleShareClick = () => {
    // URL 복사 로직
  };

  return (
    <StyledInvitationItem>
      <InvitationImage imageUrl="image" />
      <InvitationInfo>
        <Row width="100%" justifyContent="space-between" alignItems="center">
          <Column gap={4} alignItems="flex-start">
            <Text fontType="H3" color={color.G900}>
              {title}
            </Text>
            <Text fontType="P2" color={color.G100}>
              {updateAt}
            </Text>
          </Column>
          <Row gap={18} alignItems="center">
            <IconCamera
              style={{ cursor: 'pointer' }}
              onClick={handleGuestSnapButtonClick}
            />
            <IconEditPencil
              style={{ cursor: 'pointer' }}
              onClick={handleEditButtonClick}
            />
            <IconTrash style={{ cursor: 'pointer' }} onClick={handleOverlayDeleteModal} />
          </Row>
        </Row>
        <Column gap={12}>
          <ClickableRow onClick={handleMailClick}>
            <IconMail />
            <Text fontType="P3" color={color.G80}>
              청접장 확인
            </Text>
          </ClickableRow>
          <ClickableRow onClick={handleShareClick}>
            <IconShare />
            <Text fontType="P3" color={color.G80}>
              URL 복사
            </Text>
          </ClickableRow>
        </Column>
      </InvitationInfo>
    </StyledInvitationItem>
  );
};

export default InvitationItem;

const StyledInvitationItem = styled.div`
  ${flex({ alignItems: 'center' })}
  align-content: 'center';
  width: 588px;
  height: 276px;
  padding: 14px;
  gap: 16px;

  border-radius: 12px;
  background: ${color.G0};
`;

const InvitationImage = styled.div<{ imageUrl: string }>`
  width: 115px;
  height: 248px;
  aspect-ratio: 115 / 248;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Foundation-Grey-G30, #ededed);
  background: url(${({ imageUrl }) => `url(${imageUrl})`}) lightgray 50% / cover no-repeat;
`;

const InvitationInfo = styled.div`
  ${flex({
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  })}
  width: 100%;
  height: 214px;
  flex: 1 0 0;
`;

const ClickableRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
