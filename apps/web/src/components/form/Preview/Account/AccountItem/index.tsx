import { useState } from 'react';
import { AccountDetail } from '@/types/form/client';
import { color } from '@merried/design-system';
import { ActionButton, Column, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled, { css } from 'styled-components';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';

interface AccountItemProps {
  type: string;
  accounts: AccountDetail[];
}

const AccountItem = ({ type, accounts }: AccountItemProps) => {
  const { pointColor } = useInvitationSetupValueStore();
  const [isBlurred, setIsBlurred] = useState(true);
  const hasVisibleAccount = accounts.some((account) => account.isVisible);

  if (!hasVisibleAccount) return null;

  return (
    <StyledAccountItem>
      <Column gap={10} width="100%">
        <Text fontType="H4" color={color.G900}>
          {type}측 계좌번호
        </Text>
        <Line />
      </Column>
      <StyledAccountContent>
        <BlurArea $isBlurred={isBlurred}>
          {accounts.map(({ isVisible, bank, accountHolder, accountNumber }, i) => {
            if (!isVisible) return null;

            return (
              <Column key={i} gap={8} width="100%">
                <Text fontType="P2" color={color.G900}>
                  {bank} {accountNumber}
                </Text>
                <Text fontType="P2" color={color.G900}>
                  {accountHolder}
                </Text>
              </Column>
            );
          })}
        </BlurArea>
        {isBlurred && (
          <ButtonWrapper>
            <ActionButton background={pointColor} onClick={() => setIsBlurred(false)}>
              <Text fontType="Button3" color={color.G900}>
                계좌번호 보기
              </Text>
            </ActionButton>
          </ButtonWrapper>
        )}
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
  min-height: 100px;
  overflow: hidden;
  padding-top: 10px;
`;

const BlurArea = styled.div<{ $isBlurred: boolean }>`
  ${flex({ flexDirection: 'column' })}
  gap: 14px;
  ${({ $isBlurred }) =>
    $isBlurred &&
    css`
      filter: blur(10px);
    `}
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
