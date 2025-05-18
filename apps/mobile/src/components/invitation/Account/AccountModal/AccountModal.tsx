import { useAccountStepValueStore } from '@/stores/invitation/accountStep';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { SwitchCase } from '@toss/react';
import styled from 'styled-components';
import ViewAccount from './ViewAccount/ViewAccount';
import { Account } from '@/types/invitation/client';
import AccountContent from './AccountContent/AccountContent';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  accounts: Account[];
  type: string;
}

const AccountModal = ({ isOpen, onClose, accounts, type }: AccountModalProps) => {
  const accountStep = useAccountStepValueStore();

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledAccountModal>
        <SwitchCase
          value={accountStep}
          caseBy={{
            의사여부: <ViewAccount onClose={onClose} />,
            계좌번호: (
              <AccountContent onClose={onClose} accounts={accounts} type={type} />
            ),
          }}
        />
      </StyledAccountModal>
    </BlurBackground>
  );
};

export default AccountModal;

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

const StyledAccountModal = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: auto;
  background-color: ${color.G0};
  padding: 32px 16px 24px;
  border-radius: 16px;
`;
