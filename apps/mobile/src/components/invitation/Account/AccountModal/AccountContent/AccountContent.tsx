import { useSetAccountStepStore } from '@/stores/invitation/accountStep';
import { Account } from '@/types/invitation/client';
import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { ActionButton, Button, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface AccountContentProps {
  onClose: () => void;
  accounts: Account[];
  type: string;
  pointColor: string;
}

const AccountContent = ({ onClose, accounts, type, pointColor }: AccountContentProps) => {
  const setAccountStep = useSetAccountStepStore();

  const handleCloseModal = () => {
    onClose();
    setAccountStep('의사여부');
  };

  const handleCopyAccount = (bank?: string, account?: string) => {
    const textToCopy = `${account} ${bank}`;
    navigator.clipboard.writeText(textToCopy);
  };

  const validAccounts = accounts.filter(
    (a) => a.bank?.trim() || a.account?.trim() || a.name?.trim()
  );

  return (
    <StyledAccountContent>
      <Row alignItems="flex-start" justifyContent="space-between">
        <Text fontType="H3" color={color.G900}>
          {type}측 계좌번호
        </Text>
        <div onClick={handleCloseModal}>
          <IconDelete width={20} height={20} stroke={color.G80} />
        </div>
      </Row>
      <Column gap={40}>
        <Column gap={24}>
          {validAccounts.length > 0 ? (
            validAccounts.map(({ bank, account, name }, i) => (
              <Row key={i} width="100%" justifyContent="space-between">
                <Column gap={8} width="100%">
                  <Text fontType="P2" color={color.G900}>
                    {bank} {account}
                  </Text>
                  <Text fontType="P2" color={color.G900}>
                    {name}
                  </Text>
                </Column>
                <ActionButton
                  onClick={() => handleCopyAccount(bank, account)}
                  background={pointColor}
                >
                  복사하기
                </ActionButton>
              </Row>
            ))
          ) : (
            <Text fontType="P2" color={color.G500}>
              등록된 계좌가 없습니다.
            </Text>
          )}
        </Column>
        <Button onClick={handleCloseModal} size="LARGE" width="100%" styleType="SECOND">
          <Text fontType="Button3" color={color.G300}>
            닫기
          </Text>
        </Button>
      </Column>
    </StyledAccountContent>
  );
};

export default AccountContent;

const StyledAccountContent = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: 100%;
  gap: 32px;
`;
