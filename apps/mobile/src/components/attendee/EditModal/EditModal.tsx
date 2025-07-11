'use client';

import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup';
import DesktopButtonGroup from '@/components/common/ButtonGroup/DesktopButtonGroup';
import { color } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Button, Column, Input, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { useDeleteAttendee, usePatchAttendee } from '@/services/attendee/mutations';
import { useQueryClient } from '@tanstack/react-query';
import { KEY } from '@/constants/common/constant';
import { PatchAttendeeParams } from '@/types/invitation/remote';
import { useEffect, useState } from 'react';
import { useToast } from '@/utils/useToast';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  name: string;
  count: number;
  attend: boolean;
  money: boolean;
  meal: 'PLANNED' | 'SKIP' | 'UNDECIDED';
}

const EditModal = ({
  isOpen,
  onClose,
  id,
  name,
  count,
  attend,
  money,
  meal,
}: EditModalProps) => {
  const [edit, setEdit] = useState<PatchAttendeeParams>({
    attendeeId: id,
    numberOfAttendees: count,
    isAttending: attend,
    hasSentGift: money,
    mealPreference: meal,
  });
  const { show } = useToast();

  const { deleteAttendeeMutate } = useDeleteAttendee();
  const { patchAttendeeMutate } = usePatchAttendee();
  const queryClient = useQueryClient();

  useEffect(() => {
    setEdit({
      attendeeId: id,
      numberOfAttendees: count,
      isAttending: attend,
      hasSentGift: money,
      mealPreference: meal,
    });
  }, [isOpen, name, count, attend, money, meal, id]);

  const handleCloseModal = () => {
    patchAttendeeMutate(
      {
        attendeeId: edit.attendeeId,
        numberOfAttendees: edit.numberOfAttendees,
        isAttending: edit.isAttending,
        hasSentGift: edit.hasSentGift,
        mealPreference: edit.mealPreference,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [
              KEY.ATTENDEE,
              { isAttendee: null, hasSentGift: null, isEating: null },
            ],
          });
          onClose();
          show('참석자 수정에 성공했습니다', 'SUCCESS');
        },
        onError: () => {
          show('참석자 수정에 실패했습니다', 'ERROR');
        },
      }
    );
  };

  const handleDeleteAttendee = () => {
    deleteAttendeeMutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [
            KEY.ATTENDEE,
            { isAttendee: null, hasSentGift: null, isEating: null },
          ],
        });
        onClose();
        show('참석자 삭제에 성공했습니다', 'SUCCESS');
      },
      onError: () => {
        show('참석자 삭제에 실패했습니다', 'ERROR');
        onClose();
      },
    });
  };

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledEditModal>
        <Row width="100%" alignItems="center" justifyContent="space-between">
          <Text fontType="H3" color={color.G900}>
            {name}
          </Text>
          <div onClick={handleCloseModal}>
            <IconDelete width={20} height={20} stroke={color.G900} />
          </div>
        </Row>
        <Column gap={24} width="100%">
          <Input
            label="참석인원"
            size="LARGE"
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            step={1}
            value={edit.numberOfAttendees}
            onChange={(e) => {
              const val = Number(e.target.value);
              setEdit((prev) => ({
                ...prev,
                numberOfAttendees: val < 1 ? 1 : val,
              }));
            }}
            onBlur={() => {
              if (!edit.numberOfAttendees || edit.numberOfAttendees < 1)
                setEdit((prev) => ({ ...prev, numberOfAttendees: 1 }));
            }}
          />
          <ButtonGroup
            title="참석 여부"
            buttons={[
              {
                label: '참석',
                onClick: () => setEdit((prev) => ({ ...prev, isAttending: true })),
              },
              {
                label: '불참석',
                onClick: () => setEdit((prev) => ({ ...prev, isAttending: false })),
              },
            ]}
            active={edit.isAttending === true ? 0 : 1}
          />
          <ButtonGroup
            title="축의금 여부"
            buttons={[
              {
                label: 'O',
                onClick: () => setEdit((prev) => ({ ...prev, hasSentGift: true })),
              },
              {
                label: 'X',
                onClick: () => setEdit((prev) => ({ ...prev, hasSentGift: false })),
              },
            ]}
            active={edit.hasSentGift === true ? 0 : 1}
          />
          <DesktopButtonGroup
            title="식사 여부"
            buttons={[
              {
                label: '예정',
                onClick: () =>
                  setEdit((prev) => ({ ...prev, mealPreference: 'PLANNED' })),
              },
              {
                label: '안함',
                onClick: () => setEdit((prev) => ({ ...prev, mealPreference: 'SKIP' })),
              },
              {
                label: '미정',
                onClick: () =>
                  setEdit((prev) => ({ ...prev, mealPreference: 'UNDECIDED' })),
              },
            ]}
            active={
              edit.mealPreference === 'PLANNED'
                ? 0
                : edit.mealPreference === 'SKIP'
                  ? 1
                  : edit.mealPreference === 'UNDECIDED'
                    ? 2
                    : 0
            }
            height="52px"
          />
        </Column>
        <Button onClick={handleDeleteAttendee} styleType="WARNING" width="100%">
          하객 삭제
        </Button>
      </StyledEditModal>
    </BlurBackground>
  );
};

export default EditModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  z-index: 10;
  padding: 0px 12px;
`;

const StyledEditModal = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  height: 606px;
  background-color: ${color.G0};
  border-radius: 16px;
  padding: 32px 16px 24px 16px;
  gap: 40px;
`;
