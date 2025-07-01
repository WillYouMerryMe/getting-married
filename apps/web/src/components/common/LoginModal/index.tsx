import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Column, LoginButton, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledLoginModal>
        <Row width="100%" justifyContent="space-between" alignItems="flex-start">
          <Column width="100%" gap={10} alignItems="flex-start">
            <Text fontType="H2" color={color.G900}>
              로그인하기
            </Text>
            <Text fontType="P2" color={color.G80}>
              로그인 시 여러 가지의 청접장을 무료로 <br /> 체험해볼 수 있어요.
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
        <Column width="100%" gap={12}>
          <LoginButton type="NAVER" onClick={() => {}}></LoginButton>
          <LoginButton type="KAKAO" onClick={() => {}}></LoginButton>
        </Column>
      </StyledLoginModal>
    </BlurBackground>
  );
};

export default LoginModal;

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

const StyledLoginModal = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 384px;
  padding: 40px 24px;
  gap: 100px;

  border-radius: 16px;
  background: ${color.G0};
`;
