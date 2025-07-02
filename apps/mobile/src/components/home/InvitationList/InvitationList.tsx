import { Column, Text } from '@merried/ui';
import InvitationItem from '../InvitationItem/InvitationItem';
import { styled } from 'styled-components';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { useCardListQuery } from '@/services/card/queries';

const InvitationList = () => {
  const { data } = useCardListQuery();

  if (data?.length === 0) {
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
      {data?.map((item, idx) => (
        <InvitationItem
          key={idx}
          id={Number(item.id)}
          title={item.title}
          updateAt={item.updateAt}
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
