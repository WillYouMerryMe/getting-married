import { Column, Text } from '@merried/ui';
import InvitationItem from '../InvitationItem/InvitationItem';
import { styled } from 'styled-components';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';

interface InvitationItemProps {
  id: number;
  title: string;
  date: string;
  hour: string;
}

const exampleData: InvitationItemProps[] = [
  { id: 1, title: '김예진 결혼식에 초대합니다', date: '2025.05.10', hour: '15:00' },
  { id: 2, title: '송윤서 웨딩 초대장', date: '2025.05.10', hour: '11:30' },
  { id: 3, title: '강민지 & 이준호', date: '2025.06.15', hour: '14:00' },
  { id: 4, title: '유진 & 태형 결혼식', date: '2025.07.02', hour: '16:30' },
  { id: 5, title: '지원 & 수혁 결혼식', date: '2025.07.20', hour: '13:00' },
  { id: 6, title: '소연 & 민재 초대장', date: '2025.08.05', hour: '12:00' },
];

const InvitationList = () => {
  if (exampleData.length === 0) {
    return (
      <EmptyContainer>
        <Column gap={10} alignItems="center">
          <Text fontType="H3" color={color.G900}>
            아직 생성된 청첩장이 없습니다
          </Text>
          <Text fontType="P3" color={color.G100}>
            우리 결혼할래요 웹사이트에서 제작이 가능합니다
          </Text>
        </Column>
      </EmptyContainer>
    );
  }

  return (
    <ListContainer>
      {exampleData.map((item, idx) => (
        <InvitationItem
          key={idx}
          id={item.id}
          title={item.title}
          date={item.date}
          hour={item.hour}
        />
      ))}
    </ListContainer>
  );
};

export default InvitationList;

const ListContainer = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
`;

const EmptyContainer = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })}
  height: calc(100vh - 71px - 105px - 32px);
  width: 100%;
`;
