import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Button, Column, Input, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { useMasterPassword } from './MasterPassword.hooks';

interface MasterPasswordProps {
  onClose: () => void;
  password: string;
  cardId: string;
}

const MasterPassword = ({ onClose, password, cardId }: MasterPasswordProps) => {
  const { error, inputValue, handleCloseModal, handleInputChange, handlePasswordSubmit } =
    useMasterPassword(onClose, password, cardId);

  return (
    <StyledMasterpassword>
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
      <Column gap={40}>
        <Input
          label="마스터 비밀번호"
          width="100%"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="마스터 비밀번호를 입력해주세요"
          isError={!!error}
          errorMessage="비밀번호가 틀렸습니다"
        />
        <Button
          width="100%"
          onClick={handlePasswordSubmit}
          pointColor={color.pointYellow}
        >
          <Text fontType="Button3" color={color.G0}>
            방명록 보기
          </Text>
        </Button>
      </Column>
    </StyledMasterpassword>
  );
};

export default MasterPassword;

const StyledMasterpassword = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'stretch' })}
  width: 100%;
  height: auto;
  gap: 32px;
`;
