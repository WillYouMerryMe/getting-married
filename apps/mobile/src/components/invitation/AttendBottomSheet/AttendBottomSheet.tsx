import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup';
import DesktopButtonGroup from '@/components/common/ButtonGroup/DesktopButtonGroup';
import { color } from '@merried/design-system';
import { Button, Column, Input, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { useInput } from './AttendBottomSheet.hooks';
import { useIntention } from '@/services/attendee/mutations';
import { useState } from 'react';
import { PostIntentionReq } from '@/types/invitation/remote';
import { useToast } from '@/utils/useToast';
import { AttendeeSchema } from '@/schemas/AttendeeSchema';

interface AttendBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  pointColor: string;
  id: string;
}

const AttendBottomSheet = ({
  isOpen,
  onClose,
  pointColor,
  id,
}: AttendBottomSheetProps) => {
  const { handleCountChange, handleCountBlur, count } = useInput();
  const { show } = useToast();
  const { intentionMutate } = useIntention();
  const [intention, setIntention] = useState<PostIntentionReq>({
    cardId: id,
    side: 'GROOM',
    name: '',
    phoneNumber: '',
    numberOfAttendees: 1,
    mealPreference: 'PLANNED',
  });

  const handleSubmitIntention = () => {
    const result = AttendeeSchema.safeParse(intention);

    if (!result.success) {
      show('참석 의사 전송에 실패했습니다', 'ERROR');
    } else {
      intentionMutate(intention, {
        onSuccess: () => {
          show('참석 의사 전송에 성공했습니다', 'SUCCESS');
          onClose();
        },
        onError: () => {
          show('참석 의사 전송에 실패했습니다', 'ERROR');
        },
      });
    }
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <StyledAttendBottomSheet>
        <Column gap={40}>
          <Column gap={24}>
            <Column>
              <Text fontType="H2" color={color.G900}>
                결혼식 참석 의사
              </Text>
              <Text fontType="P2" color={color.G80}>
                솔직한 답은 신랑•신부에게 도움이 됩니다
              </Text>
            </Column>
            <ButtonGroup
              buttons={[
                {
                  label: '신랑측',
                  onClick: () => setIntention((prev) => ({ ...prev, side: 'GROOM' })),
                },
                {
                  label: '신부측',
                  onClick: () => setIntention((prev) => ({ ...prev, side: 'BRIDE' })),
                },
              ]}
              pointColor={pointColor}
            />
            <Column gap={18}>
              <Input
                label="이름"
                placeholder="이름을 입력해주세요"
                size="LARGE"
                width="100%"
                name="name"
                value={intention.name}
                onChange={(e) =>
                  setIntention((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Input
                label="전화번호"
                placeholder="전화번호를 입력해주세요"
                size="LARGE"
                width="100%"
                name="phoneNumber"
                value={intention.phoneNumber}
                onChange={(e) =>
                  setIntention((prev) => ({ ...prev, phoneNumber: e.target.value }))
                }
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
                  const val = e.target.value === '' ? 1 : Number(e.target.value);
                  setIntention((prev) => ({
                    ...prev,
                    numberOfAttendees: val < 1 ? 1 : val,
                  }));
                }}
                onBlur={handleCountBlur}
              />
              <DesktopButtonGroup
                title="식사 여부"
                buttons={[
                  {
                    label: '예정',
                    onClick: () =>
                      setIntention((prev) => ({ ...prev, mealPreference: 'PLANNED' })),
                  },
                  {
                    label: '안함',
                    onClick: () =>
                      setIntention((prev) => ({ ...prev, mealPreference: 'SKIP' })),
                  },
                  {
                    label: '미정',
                    onClick: () =>
                      setIntention((prev) => ({ ...prev, mealPreference: 'UNDECIDED' })),
                  },
                ]}
                pointColor={pointColor}
              />
            </Column>
          </Column>
          <Button
            size="VERY_LARGE"
            onClick={handleSubmitIntention}
            pointColor={pointColor}
            width="100%"
          >
            <Text fontType="Button3" color={color.G900}>
              참석 의사 전달하기
            </Text>
          </Button>
        </Column>
      </StyledAttendBottomSheet>
    </BottomSheet>
  );
};

export default AttendBottomSheet;

const StyledAttendBottomSheet = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'stretch' })}
  width: 100%;
  margin-top: 40px;
`;
