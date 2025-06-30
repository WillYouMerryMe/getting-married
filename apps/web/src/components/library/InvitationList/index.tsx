import { styled } from 'styled-components';
import { flex } from '@merried/utils';
import InvitationItem from '../InvitationItem';

const data = [
  { id: '1', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '2', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '3', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '4', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '5', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '6', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '7', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
];

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
  return (
    <Wrapper>
      <ScrollableList>
        {data.map((item) => (
          <InvitationItem
            key={item.id}
            id={item.id}
            title={item.title}
            updateAt={formatUpdateAt(item.updateAt)}
          />
        ))}
      </ScrollableList>
    </Wrapper>
  );
};

export default InvitationList;

const Wrapper = styled.div`
  flex: 1;
  max-height: 100%;
  overflow: hidden;
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
