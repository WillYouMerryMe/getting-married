import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import AccountItem from './AccountItem/AccountItem';
import { Account as AccountList } from '@/types/invitation/client';

interface AccountProps {
  groomAccounts: AccountList[];
  brideAccounts: AccountList[];
}

const Account = ({ groomAccounts, brideAccounts }: AccountProps) => {
  return (
    <StyledAccount>
      <Column gap={12}>
        <CustomText
          fontType="Ownglyph Kundo"
          size={24}
          weight={400}
          line={100}
          color={color.G900}
        >
          마음 전하실 곳
        </CustomText>
        <CustomText
          fontType="Ownglyph Kundo"
          size={18}
          weight={400}
          line={140}
          color={color.G80}
        >
          멀리서도 축하의 마음을
          <br />
          전하고 싶으신 분들을 위해
          <br />
          계좌번호를 안내드립니다.
          <br />
          <br />
          소중한 축하를 보내주셔서 감사드리며,
          <br />
          따뜻한 마음에 깊이 감사드립니다
        </CustomText>
      </Column>
      <Column gap={24} width="100%">
        <AccountItem type="신랑" accounts={brideAccounts}/>
        <AccountItem type="신부" accounts={groomAccounts} />
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
