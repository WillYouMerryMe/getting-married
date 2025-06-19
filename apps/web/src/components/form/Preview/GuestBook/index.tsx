import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import WriteGuestBook from './WriteGuestBook';
import { Column } from '@merried/ui';
import GuestBookList from './GuestBookList';
import { useGuestbookValueStore } from '@/store/form/guestbook';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';

const GuestBook = () => {
  const { isToggle, title } = useGuestbookValueStore();
  const { invitationFont } = useInvitationSetupValueStore();

  if (!isToggle) return null;

  return (
    <StyledGuestBook>
      <Column width="100%" alignItems="center" gap={12}>
        <CustomText
          fontType={invitationFont}
          color={color.G900}
          size={24}
          weight={400}
          line={100}
        >
          {title || '방명록'}
        </CustomText>
        <GuestBookList />
      </Column>
      <WriteGuestBook />
    </StyledGuestBook>
  );
};

export default GuestBook;

const StyledGuestBook = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 32px;
`;
