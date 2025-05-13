import { flex } from '@merried/utils';
import styled from 'styled-components';
import SearchInput from '../SearchInput/SearchInput';
import { Column, Text } from '@merried/ui';
import ListHeader from './ListHeader/ListHeader';
import { Side } from '@/types/manage/client';
import ListItem from './ListItem/ListItem';
import { color } from '@merried/design-system';
import { useState } from 'react';

export const listData: {
  id: string;
  name: string;
  side: Side;
  count: number;
  attend: boolean;
  money: boolean;
  meal: boolean;
}[] = [
  {
    id: '1',
    name: '홍길동',
    side: 'GROOM',
    count: 3,
    attend: true,
    money: true,
    meal: false,
  },
  {
    id: '2',
    name: '홍이장군',
    side: 'GROOM',
    count: 3,
    attend: true,
    money: true,
    meal: false,
  },
  {
    id: '3',
    name: '김영희',
    side: 'BRIDE',
    count: 2,
    attend: true,
    money: false,
    meal: true,
  },
  {
    id: '4',
    name: '박철수',
    side: 'GROOM',
    count: 1,
    attend: false,
    money: false,
    meal: false,
  },
  {
    id: '5',
    name: '이민호',
    side: 'BRIDE',
    count: 4,
    attend: true,
    money: true,
    meal: true,
  },
  {
    id: '6',
    name: '최지우',
    side: 'GROOM',
    count: 2,
    attend: false,
    money: true,
    meal: false,
  },
  {
    id: '7',
    name: '장보리',
    side: 'BRIDE',
    count: 5,
    attend: true,
    money: false,
    meal: false,
  },
  {
    id: '8',
    name: '오세훈',
    side: 'GROOM',
    count: 1,
    attend: false,
    money: true,
    meal: true,
  },
  {
    id: '9',
    name: '오세훈2',
    side: 'GROOM',
    count: 1,
    attend: false,
    money: true,
    meal: true,
  },
];

const AttendeeList = () => {
  const [search, setSearch] = useState('');
  const isEmpty = listData.length === 0;

  const searchNameData = listData.filter((item) =>
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
            searchNameData.map((attendee, index) => (
              <ListItem key={`attendee-${index}`} {...attendee} />
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
