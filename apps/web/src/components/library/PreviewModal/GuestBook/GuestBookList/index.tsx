import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import { Row } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import GuestBookListItem from './GuestBookListItem';
import { useState } from 'react';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';

const dummyGuestbooks = [
  { name: '홍길동', content: '결혼 축하드려요! 행복한 가정 이루세요 😊' },
  { name: '이영희', content: '두 분의 앞날에 늘 웃음만 가득하길 기원합니다.' },
  { name: '박민수', content: '맛있는 음식과 즐거운 시간 되세요!' },
  { name: '김수진', content: '행복하세요~' },
  { name: '최준영', content: '축복이 가득한 하루 되시길 바랍니다.' },
  {
    name: '박강원',
    content:
      '이제부터 시작입니다! 🎊 서로를 향한 무한한 사랑과 신뢰로 함께할 두 분의 결혼 생활이 너무 기대돼요. 싸울 일이 생기더라도 ‘신부님이 항상 옳다’는 철칙을 잊지 마시고요! 행복한 순간은 배로, 어려운 순간은 반으로 나누며 언제나 서로에게 최고의 편이 되어 주세요. 앞으로 두 분이 만들어갈 이야기가 기대됩니다. 진심으로 축하드려요! 이제부터 시작입니다! 🎊 서로를 향한 무한한 사랑과 신뢰로 함께할 두 분의 결혼 생활이 너무 기대돼요. 싸울 일이 생기더라도 ‘신부님이 항상 옳다’는 철칙을 잊지 마시고요! 행복한 순간은 배로, 어려운 순간은 반으로 나누며 언제나 서로에게 최고의 편이 되어 주세요. 앞으로 두 분이 만들어갈 이야기가 기대됩니다. 진심으로 축하드려요! ',
  },
];

const GuestBookList = () => {
  const [showAll, setShowAll] = useState(false);
  const { invitationFont } = useInvitationSetupValueStore();

  const listToRender = showAll ? dummyGuestbooks : dummyGuestbooks.slice(0, 3);

  const handleAllGuestBookItem = () => {
    setShowAll(true);
  };

  return (
    <StyledGuestBookList>
      {listToRender.map((item, idx) => (
        <GuestBookListItem key={idx} name={item.name} content={item.content} />
      ))}
      {dummyGuestbooks.length > 3 && !showAll && (
        <div onClick={handleAllGuestBookItem}>
          <Row gap={6} alignItems="center" justifyContent="center" width="100%">
            <CustomText
              fontType={invitationFont}
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
