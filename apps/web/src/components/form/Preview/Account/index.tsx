import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import AccountItem from './AccountItem';
import { useAccountInfoValueStore } from '@/store/form/account';

const Account = () => {
  const {
    title,
    message,
    groom,
    groomFather,
    groomMother,
    bride,
    brideFather,
    brideMother,
  } = useAccountInfoValueStore();

  const groomAccounts = [groom, groomFather, groomMother];
  const brideAccounts = [bride, brideFather, brideMother];

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
          {title}
        </CustomText>
        <CustomText
          fontType="Ownglyph Kundo"
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
