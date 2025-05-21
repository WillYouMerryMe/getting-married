import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Button, Column, Input, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { useMasterPassword } from './PasswordModal.hooks';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  password: string;
  id: number;
}

const PasswordModal = ({ isOpen, onClose, password, id }: PasswordModalProps) => {
  const { error, inputValue, handleCloseModal, handleInputChange, handlePasswordSubmit } =
    useMasterPassword(onClose, password, id);

  useBodyScrollLock(isOpen);

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledPasswordModal>
        <Row width="100%" alignItems="flex-start" justifyContent="space-between">
          <Column gap={4} width="100%" alignItems="flex-start">
            <Text fontType="H3" color={color.G900}>
              방명록 확인
            </Text>
            <Text fontType="P3" color={color.G80}>
              방명록의 마스터 비밀번호를 입력해주세요.
            </Text>
          </Column>
          <div onClick={handleCloseModal}>
            <IconDelete width={20} height={20} stroke={color.G80} />
          </div>
        </Row>
        <Column gap={40} width="100%">
          <Input
            width="100%"
            size="SMALL"
            label="마스터 비밀번호"
            placeholder="마스터 비밀번호를 입력해주세요"
            onChange={handleInputChange}
            value={inputValue}
            isError={!!error}
            errorMessage="비밀번호가 틀렸습니다"
          />
          <Button
            width="100%"
            onClick={handlePasswordSubmit}
            pointColor={color.primary}
          >
            <Text fontType="Button3" color={color.G0}>
              방명록 보기
            </Text>
          </Button>
        </Column>
      </StyledPasswordModal>
    </BlurBackground>
  );
};

export default PasswordModal;

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

const StyledPasswordModal = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  })}
  width: 100%;
  height: auto;
  background-color: ${color.G0};
  border-radius: 16px;
  padding: 32px 16px 24px 16px;
  gap: 32px;
`;
