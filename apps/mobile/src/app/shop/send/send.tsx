import { ROUTES } from '@/constants/common/constant';
import { GIFT, MEAL, PAID, STATUS } from '@/constants/shop/constants';
import { useAttendee } from '@/services/attendee/queries';
import { useAttendeeValueStore } from '@/stores/shop/attendee';
import { useSetShopStepStore } from '@/stores/shop/shopStep';
import { Gift, Meal, Paid, Status } from '@/types/shop/client';
import { useToast } from '@/utils/useToast';
import { color } from '@merried/design-system';
import { Button, Column, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

const Send = () => {
  const attendee = useAttendeeValueStore();
  const setShopStep = useSetShopStepStore();
  const router = useRouter();
  const { show } = useToast();

  const attendeeStatus = attendee.status === 'ATTEND' ? true : false;
  const attendeeGift = attendee.paid === 'PAID' ? true : false;
  const attendeeMeal = attendee.meal === 'MEAL' ? true : false;

  const { data } = useAttendee({
    isAttendee: attendeeStatus,
    hasSentGift: attendeeGift,
    isEating: attendeeMeal,
  });

  const handleSendGift = () => {
    router.push(ROUTES.HOME);
    show('답례품이 발송되었습니다');
    setShopStep('답례품목록');
  };

  return (
    <StyledSend>
      <Column gap={57} width="100%">
        <Column gap={24}>
          <Column gap={8}>
            <Text fontType="H3" color={color.primary}>
              {STATUS[attendee.status as Status]}•{PAID[attendee.paid as Paid]}•
              {MEAL[attendee.meal as Meal]}
            </Text>
            <Text fontType="H3" color={color.G900}>
              조건을 만족한{' '}
              <Text fontType="H3" color={color.primary}>
                {data?.length}명
              </Text>
              에게
            </Text>
          </Column>
          <Text fontType="H3" color={color.G900}>
            <Text fontType="H3" color={color.primary}>
              {GIFT[attendee.gift as Gift]}
            </Text>
            을 보낼게요
          </Text>
        </Column>
        <GiftCard />
      </Column>
      <Button width="100%" size="VERY_LARGE" onClick={handleSendGift}>
        <Text fontType="Button3" color={color.G0}>
          답례품 보내기
        </Text>
      </Button>
    </StyledSend>
  );
};

export default Send;

const StyledSend = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  })}
  width: 100%;
  padding-top: 64px;
  height: calc(100vh - 71px - 142px);
`;

const GiftCard = styled.div`
  ${flex({
    alignItems: 'center',
    justifyContent: 'center',
  })}
  width: 241.65px;
  height: 198px;
  margin: 0 auto;
  background: url('/images/giftcard.svg') center / contain no-repeat;
`;
