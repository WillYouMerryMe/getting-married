import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import AccountItem from './AccountItem';
import { useAccountInfoValueStore } from '@/store/form/account';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';

const Account = () => {
  const {
    isToggle,
    title,
    message,
    groom,
    groomFather,
    groomMother,
    bride,
    brideFather,
    brideMother,
  } = useAccountInfoValueStore();

  const { invitationFont } = useInvitationSetupValueStore();

  const groomAccounts = [groom, groomFather, groomMother];
  const brideAccounts = [bride, brideFather, brideMother];

  if (!isToggle) return null;

  return (
    <StyledAccount>
      <Column gap={12}>
        <CustomText
          fontType={invitationFont}
          size={24}
          weight={400}
          line={100}
          color={color.G900}
        >
          {title}
        </CustomText>
        <CustomText
          fontType={invitationFont}
          size={18}
          weight={400}
          line={140}
          color={color.G80}
        >
          {message}
        </CustomText>
      </Column>
      <Column gap={24} width="100%">
        <AccountItem type="신랑" accounts={groomAccounts} />
        <AccountItem type="신부" accounts={brideAccounts} />
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
