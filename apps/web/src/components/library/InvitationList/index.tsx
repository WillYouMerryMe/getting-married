import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import InvitationItem from '../InvitationItem';

const data = [
  { id: '1', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '2', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '3', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
  { id: '4', title: '정말 귀여운 청접장', updateAt: '2025-06-30T05:07:41.620Z' },
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
    <StyledInvitationList>
      {data.map((item) => (
        <InvitationItem
          key={item.id}
          id={item.id}
          title={item.title}
          updateAt={formatUpdateAt(item.updateAt)}
        />
      ))}
    </StyledInvitationList>
  );
};

export default InvitationList;

const StyledInvitationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(588px, 2fr));
  gap: 24px;
  width: 100%;
`;
