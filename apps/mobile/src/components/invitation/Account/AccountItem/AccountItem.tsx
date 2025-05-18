import { Account } from '@/types/invitation/client';
import { color } from '@merried/design-system';
import { ActionButton, Column, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import AccountModal from '../AccountModal/AccountModal';

interface AccountItemProps {
  type: string;
  accounts: Account[];
}

const AccountItem = ({ type, accounts }: AccountItemProps) => {
  const overlay = useOverlay();

  const handleOverlayAccountModal = () => {
    overlay.open(({ isOpen, close }) => (
      <AccountModal isOpen={isOpen} onClose={close} accounts={accounts} type={type} />
    ));
  };

  return (
    <StyledAccountItem>
      <Column gap={10} width="100%">
        <Text fontType="H4" color={color.G900}>
          {type}측 계좌번호
        </Text>
        <Line />
      </Column>
      <StyledAccountContent>
        <BlurArea>
          {accounts.map(({ bank, account, name }, i) => (
            <Column key={i} gap={8} width="100%">
              <Text fontType="P2" color={color.G900}>
                {bank} {account}
              </Text>
              <Text fontType="P2" color={color.G900}>
                {name}
              </Text>
            </Column>
          ))}
        </BlurArea>
        <ButtonWrapper>
          <ActionButton
            background={color.pointYellow}
            onClick={handleOverlayAccountModal}
          >
            <Text fontType="Button3" color={color.G900}>
              계좌번호 보기
            </Text>
          </ActionButton>
        </ButtonWrapper>
      </StyledAccountContent>
    </StyledAccountItem>
  );
};

export default AccountItem;

const StyledAccountItem = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 100%;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${color.G50};
`;

const StyledAccountContent = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 10px;
`;

const BlurArea = styled.div`
  ${flex({ flexDirection: 'column' })}
  gap: 14px;
  filter: blur(10px);
  position: relative;
  z-index: 1;
`;

const ButtonWrapper = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
