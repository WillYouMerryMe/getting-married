import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import WriteGuestBook from './WriteGuestBook/WriteGuestBook';
import { Column } from '@merried/ui';
import GuestBookList from './GuestBookList/GuestBookList';

const GuestBook = () => {
  return (
    <StyledGuestBook>
      <Column width="100%" alignItems="center" gap={12}>
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.G900}
          size={24}
          weight={400}
          line={100}
        >
          방명록
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
  height: 100%;
  gap: 32px;
`;
