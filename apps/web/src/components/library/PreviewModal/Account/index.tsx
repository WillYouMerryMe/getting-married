import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import AccountItem from './AccountItem';
import type { Account, CustomFontType } from '@/types/form/client';
import { PutCardReq } from '@/types/form/remote';

interface Props {
  data: PutCardReq;
}

const Account = ({ data }: Props) => {
  if (!data || !data?.accountInfo) return null;

  const invitationFont = data.invitationSetting.font;
  const pointColor = data.invitationSetting.pointColor;

  const {
    title,
    content: message,
    groom,
    groomFather,
    groomMother,
    bride,
    brideFather,
    brideMother,
  } = data.accountInfo;

  const groomAccounts = [groom, groomFather, groomMother].filter(Boolean) as Account[];
  const brideAccounts = [bride, brideFather, brideMother].filter(Boolean) as Account[];

  return (
    <StyledAccount>
      <Column gap={12}>
        <CustomText
          fontType={invitationFont as CustomFontType}
          size={24}
          weight={400}
          line={100}
          color={color.G900}
        >
          {title || '마음 전하실 곳'}
        </CustomText>
        <CustomText
          fontType={invitationFont as CustomFontType}
          size={18}
          weight={400}
          line={140}
          color={color.G80}
        >
          {message}
        </CustomText>
      </Column>
      <Column gap={24} width="100%">
        <AccountItem type="신랑" accounts={groomAccounts} pointColor={pointColor} />
        <AccountItem type="신부" accounts={brideAccounts} pointColor={pointColor} />
      </Column>
    </StyledAccount>
  );
};

export default Account;

const StyledAccount = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 80px;
`;
