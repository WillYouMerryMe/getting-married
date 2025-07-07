import { useDeleteCardMutation } from '@/services/form/mutations';
import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Column, DesktopButton, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

interface Props {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal = ({ id, isOpen, onClose }: Props) => {
  const { deleteCardMutate } = useDeleteCardMutation();

  const handleCloseModal = () => {
    onClose();
  };

  const handleDeleteButtonClick = () => {
    deleteCardMutate(id);
    onClose();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledDeleteModal>
        <Row width="100%" justifyContent="space-between" alignItems="flex-start">
          <Column width="100%" gap={10} alignItems="flex-start">
            <Text fontType="H2" color={color.G900}>
              저장한 청접장을 <br /> 삭제할까요?
            </Text>
            <Text fontType="P2" color={color.G80}>
              저장한 청첩장 삭제 시 복구는 어려우니 <br />
              신중하게 고민 후 삭제해주세요.
            </Text>
          </Column>
          <IconDelete
            style={{ cursor: 'pointer' }}
            stroke={color.G80}
            width={20}
            height={20}
            onClick={handleCloseModal}
          />
        </Row>
        <DesktopButton styleType="WARNING" size="LARGE" onClick={handleDeleteButtonClick}>
          삭제하기
        </DesktopButton>
      </StyledDeleteModal>
    </BlurBackground>
  );
};

export default DeleteModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  z-index: 1001;
  padding: 0px 12px;
`;

const StyledDeleteModal = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 384px;
  height: 342px;
  padding: 40px 24px;
  gap: 100px;

  border-radius: 16px;
  background: ${color.G0};
`;
