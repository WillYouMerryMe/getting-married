import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import WriteGuestBook from './WriteGuestBook';
import { Column } from '@merried/ui';
import GuestBookList from './GuestBookList';
import { useCardsQuery } from '@/services/form/queries';
import { CustomFontType } from '@/types/form/client';

interface Props {
  id: string;
}

const GuestBook = ({ id }: Props) => {
  const { data } = useCardsQuery(id);

  if (!data || !data?.guestBook) return null;

  const guestBook = data.guestBook;
  const invitationFont = data.invitationSetting.font;

  const { title } = guestBook;

  return (
    <StyledGuestBook>
      <Column width="100%" alignItems="center" gap={12}>
        <CustomText
          fontType={invitationFont as CustomFontType}
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
