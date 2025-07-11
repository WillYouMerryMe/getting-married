import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup';
import DesktopButtonGroup from '@/components/common/ButtonGroup/DesktopButtonGroup';
import { Button, Column, Input } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { useInput } from './InviteContent.hooks';
import { useState } from 'react';
import { PostAttendeeReq } from '@/types/invitation/remote';
import { useAttendeeMutation } from '@/services/attendee/mutations';
import { AttendeeSchema } from '@/schemas/AttendeeSchema';
import { useToast } from '@/utils/useToast';

interface InviteContentProps {
  id: string;
}

const InviteContent = ({ id }: InviteContentProps) => {
  const { show } = useToast();
  const { handleCountChange, handleCountBlur, count } = useInput();
  const { attendeeMutate } = useAttendeeMutation();
  const [attendee, setAttendee] = useState<PostAttendeeReq>({
    cardId: id,
    side: 'GROOM',
    name: '',
    phoneNumber: '',
    numberOfAttendees: 1,
    isAttending: true,
    hasSentGift: true,
    mealPreference: 'PLANNED',
  });

  const handleSubmitAttendee = () => {
    const result = AttendeeSchema.safeParse(attendee);

    if (!result.success) {
      show('참석자 추가에 실패했습니다', 'ERROR');
    } else {
      attendeeMutate(attendee);
    }
  };

  return (
    <StyledInviteContent>
      <Column gap={28}>
        <ButtonGroup
          buttons={[
            {
              label: '신랑측',
              onClick: () => setAttendee((prev) => ({ ...prev, side: 'GROOM' })),
            },
            {
              label: '신부측',
              onClick: () => setAttendee((prev) => ({ ...prev, side: 'BRIDE' })),
            },
          ]}
        />
        <Input
          label="이름"
          placeholder="이름을 입력해주세요"
          type="text"
          value={attendee.name}
          onChange={(e) => setAttendee((prev) => ({ ...prev, name: e.target.value }))}
          name="name"
        />
        <Input
          label="전화번호"
          placeholder="전화번호를 입력해주세요"
          type="text"
          value={attendee.phoneNumber}
          onChange={(e) =>
            setAttendee((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
          name="phoneNumber"
        />
        <Input
          label="참석인원"
          size="LARGE"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min={1}
          step={1}
          value={count}
          onChange={(e) => {
            handleCountChange(e);
            const val = e.target.value === '1' ? 1 : Number(e.target.value);
            setAttendee((prev) => ({
              ...prev,
              numberOfAttendees: val < 1 ? 1 : val,
            }));
          }}
          onBlur={handleCountBlur}
        />
        <Column gap={24}>
          <ButtonGroup
            title="참석 여부"
            buttons={[
              {
                label: '참석',
                onClick: () => setAttendee((prev) => ({ ...prev, isAttending: true })),
              },
              {
                label: '불참석',
                onClick: () => setAttendee((prev) => ({ ...prev, isAttending: false })),
              },
            ]}
          />
          <ButtonGroup
            title="축의금 여부"
            buttons={[
              {
                label: 'O',
                onClick: () => setAttendee((prev) => ({ ...prev, hasSentGift: true })),
              },
              {
                label: 'X',
                onClick: () => setAttendee((prev) => ({ ...prev, hasSentGift: false })),
              },
            ]}
          />
          <DesktopButtonGroup
            title="식사 여부"
            buttons={[
              {
                label: '예정',
                onClick: () =>
                  setAttendee((prev) => ({ ...prev, mealPreference: 'PLANNED' })),
              },
              {
                label: '안함',
                onClick: () =>
                  setAttendee((prev) => ({ ...prev, mealPreference: 'SKIP' })),
              },
              {
                label: '미정',
                onClick: () =>
                  setAttendee((prev) => ({ ...prev, mealPreference: 'UNDECIDED' })),
              },
            ]}
            height="52px"
          />
        </Column>
        <Button
          width="100%"
          onClick={handleSubmitAttendee}
          styleType={attendee.name && attendee.phoneNumber ? 'DEFAULT' : 'DISABLED'}
        >
          참석자 추가하기
        </Button>
      </Column>
    </StyledInviteContent>
  );
};

export default InviteContent;

const StyledInviteContent = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 100%;
  height: 100%;
`;
