import { flex } from '@merried/utils';
import styled from 'styled-components';
import SearchInput from '../SearchInput/SearchInput';
import { Column, Text } from '@merried/ui';
import ListHeader from './ListHeader/ListHeader';
import ListItem from './ListItem/ListItem';
import { color } from '@merried/design-system';
import { useState } from 'react';
import { useAttendee } from '@/services/attendee/queries';

const AttendeeList = () => {
  const [search, setSearch] = useState('');

  const { data } = useAttendee({
    isAttendee: null,
    hasSentGift: null,
    isEating: null,
  });

  const isEmpty = data?.length === 0;

  const searchNameData = data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <StyledAttendeeList>
      <Column gap={24} width="100%">
        <SearchInput placeholder="이름을 입력해주세요" onChange={handleInputChange} />
        {!isEmpty && <ListHeader />}
      </Column>
      <ListContainer>
        <ListContent>
          {isEmpty ? (
            <EmptyContainer>
              <Text fontType="H3_140per" color={color.G900} textAlign="center">
                아직 참석 여부를
                <br />
                밝힌 사람이 없습니다
              </Text>
            </EmptyContainer>
          ) : (
            searchNameData?.map((attendee, index) => (
              <ListItem
                key={`attendee-${index}`}
                id={attendee.id}
                name={attendee.name}
                side={attendee.side}
                count={attendee.numberOfAttendees}
                attend={attendee.isAttending}
                money={attendee.hasSentGift}
                meal={attendee.mealPreference}
              />
            ))
          )}
        </ListContent>
      </ListContainer>
    </StyledAttendeeList>
  );
};

export default AttendeeList;

const StyledAttendeeList = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 10px;
`;

const ListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 450px);
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListContent = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 10px;
`;

const EmptyContainer = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  margin-top: 40%;
`;
