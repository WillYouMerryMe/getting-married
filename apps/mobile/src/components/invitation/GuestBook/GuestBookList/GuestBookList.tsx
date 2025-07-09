import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import { Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import GuestBookListItem from './GuestBookListItem/GuestBookListItem';
import { useState } from 'react';
import { useGuestBook } from '@/services/guestbook/queries';

interface GuestBookListProps {
  font: string;
  password: string;
  cardId: string;
}

const GuestBookList = ({ font, password, cardId }: GuestBookListProps) => {
  const [showAll, setShowAll] = useState(false);
  const { data = [] } = useGuestBook(cardId);

  const listToRender = showAll ? data : data.slice(0, 3);

  const handleAllGuestBookItem = () => {
    setShowAll(true);
  };

  return (
    <StyledGuestBookList>
      {listToRender.map((item, idx) => {
        return (
          <GuestBookListItem
            cardId={cardId}
            key={idx}
            id={item.id}
            name={item.name}
            password={password}
          />
        );
      })}
      {data.length > 3 && !showAll && data.length > 0 && (
        <div onClick={handleAllGuestBookItem}>
          <Row gap={6} alignItems="center" justifyContent="center" width="100%">
            <CustomText
              fontType={font}
              color={color.G80}
              size={20}
              weight={400}
              line={100}
            >
              더보기
            </CustomText>
            <IconArrow width={12} height={12} direction="bottom" />
          </Row>
        </div>
      )}
    </StyledGuestBookList>
  );
};

export default GuestBookList;

const StyledGuestBookList = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: 100%;
  gap: 10px;
`;
