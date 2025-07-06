import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import AccountItem from './AccountItem/AccountItem';
import { Account as AccountList } from '@/types/invitation/client';

interface AccountProps {
  groomAccounts?: AccountList[];
  brideAccounts?: AccountList[];
  title: string;
  content: string;
  pointColor: string;
  font: string;
}

const Account = ({
  groomAccounts,
  brideAccounts,
  title,
  content,
  font,
  pointColor,
}: AccountProps) => {
  return (
    <StyledAccount>
      <Column gap={12}>
        <CustomText fontType={font} size={24} weight={400} line={100} color={color.G900}>
          {title}
        </CustomText>
        <CustomText fontType={font} size={18} weight={400} line={140} color={color.G80}>
          {content}
        </CustomText>
      </Column>
      <Column gap={24} width="100%">
        {groomAccounts && groomAccounts.some((a) => a.bank || a.account || a.name) && (
          <AccountItem type="신랑" accounts={groomAccounts} pointColor={pointColor} />
        )}
        {brideAccounts && brideAccounts.some((a) => a.bank || a.account || a.name) && (
          <AccountItem type="신부" accounts={brideAccounts} pointColor={pointColor} />
        )}
      </Column>
    </StyledAccount>
  );
};

export default Account;

const StyledAccount = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: 100%;
  gap: 80px;
`;
