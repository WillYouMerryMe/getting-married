import { styled } from 'styled-components';
import { flex } from '@merried/utils';
import InvitationItem from '../InvitationItem';
import { Column, DesktopButton, Text } from '@merried/ui';
import { color } from '@merried/design-system';
import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import { useCardsListQuery } from '@/services/form/queries';

const formatUpdateAt = (isoString: string) => {
  const date = new Date(isoString);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
};

const InvitationList = () => {
  const router = useRouter();

  const handleMoveForm = () => {
    router.push(ROUTES.FORM);
  };
  const { data: cardsListData = [] } = useCardsListQuery();

  const isEmpty = !cardsListData || cardsListData.length === 0;

  return (
    <Wrapper>
      {isEmpty ? (
        <EmptyState>
          <Column gap={40} alignItems="center">
            <Text fontType="H1" color={color.G900}>
              저장된 청접장이 없습니다
            </Text>
            <DesktopButton styleType="DEFAULT" size="LARGE" onClick={handleMoveForm}>
              청접장 제작
            </DesktopButton>
          </Column>
        </EmptyState>
      ) : (
        <ScrollableList>
          {cardsListData.map((item) => (
            <InvitationItem
              key={item.id}
              id={item.id}
              title={item.title}
              picture={item.picture}
              updateAt={formatUpdateAt(item.updateAt)}
            />
          ))}
        </ScrollableList>
      )}
    </Wrapper>
  );
};

export default InvitationList;

const Wrapper = styled.div`
  flex: 1;
  max-height: 100%;
  overflow: hidden;
`;

const EmptyState = styled.div`
  height: 100%;
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
`;

const ScrollableList = styled.div`
  ${flex({ alignItems: 'center' })}
  flex-wrap: wrap;
  gap: 20px 24px;
  overflow-y: auto;
  height: 100%;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
