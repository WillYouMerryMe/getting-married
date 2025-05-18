import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { color, font } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Button, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface GuestBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  content: string;
}

const GuestBookModal = ({ isOpen, onClose, name, content }: GuestBookModalProps) => {
  useBodyScrollLock(isOpen);

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledGuestBookModal>
        <Row width="100%" alignItems="center" justifyContent="space-between">
          <Text fontType="H3" color={color.G900}>
            {name}님의 방명록
          </Text>
          <div onClick={handleCloseModal}>
            <IconDelete width={20} height={20} stroke={color.G80} />
          </div>
        </Row>
        <Column gap={32} width="100%">
          <StyledContent>{content}</StyledContent>
          <Button onClick={handleCloseModal} size="LARGE" styleType="SECOND">
            <Text fontType="Button3" color={color.G300}>
              닫기
            </Text>
          </Button>
        </Column>
      </StyledGuestBookModal>
    </BlurBackground>
  );
};

export default GuestBookModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  z-index: 10;
  padding: 0px 12px;
`;

const StyledGuestBookModal = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  height: 334px;
  background-color: ${color.G0};
  border-radius: 16px;
  padding: 24px 16px;
  gap: 20px;
`;

const StyledContent = styled.div`
  ${font.P3_160per}
  color: ${color.G100};
  width: 100%;
  height: 160px;
  overflow-y: auto;
  white-space: pre-wrap;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
