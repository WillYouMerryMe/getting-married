import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Button, Column, Input, Row, Text } from '@merried/ui';
import { useViewAccount } from './ViewAccount.hooks';
import styled from 'styled-components';
import { flex } from '@merried/utils';

interface ViewAccountProps {
  onClose: () => void;
  pointColor: string;
  id: string;
}

const ViewAccount = ({ onClose, pointColor, id }: ViewAccountProps) => {
  const { handleCloseModal, handleInputChange, handleSubmit, errors, formData } =
    useViewAccount(onClose, id);

  const hasError = Boolean(errors.name || errors.phoneNumber);
  const errorMessage = errors.name ?? errors.phoneNumber;

  return (
    <StyledViewAccount>
      <Row alignItems="flex-start" justifyContent="space-between">
        <Column alignItems="flex-start" gap={4}>
          <Text fontType="H3" color={color.G900}>
            계좌번호 보기
          </Text>
          <Text fontType="P3" color={color.G80}>
            돈을 보내실 분만 정보를 기입해주시길 바랍니다.
          </Text>
        </Column>
        <div onClick={handleCloseModal}>
          <IconDelete width={20} height={20} stroke={color.G80} />
        </div>
      </Row>
      <Column alignItems="center" width="100%">
        <Column gap={18} width="100%">
          <Input
            label="이름"
            size="SMALL"
            placeholder="이름을 입력해주세요"
            value={formData.name}
            onChange={handleInputChange('name')}
            isError={!!errors.name?.length}
          />
          <Input
            label="전화번호"
            size="SMALL"
            placeholder="(-제외) 전화번호를 입력해주세요"
            value={formData.phoneNumber}
            onChange={handleInputChange('phoneNumber')}
            isError={!!errors.phoneNumber?.length}
          />
        </Column>
        <ErrorContainer hasError={hasError}>
          {hasError && (
            <Text fontType="P3" color={color.red}>
              {errorMessage}
            </Text>
          )}
        </ErrorContainer>
        <Button onClick={handleSubmit} size="LARGE" width="100%" pointColor={pointColor}>
          <Text fontType="Button3" color={color.G0}>
            계좌번호 보기
          </Text>
        </Button>
      </Column>
    </StyledViewAccount>
  );
};

export default ViewAccount;

const StyledViewAccount = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: 100%;
  gap: 32px;
`;

const ErrorContainer = styled.div<{ hasError: boolean }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  margin-top: ${({ hasError }) => (hasError ? '32px' : '40px')};
  margin-bottom: ${({ hasError }) => (hasError ? '12px' : '0')};
`;
