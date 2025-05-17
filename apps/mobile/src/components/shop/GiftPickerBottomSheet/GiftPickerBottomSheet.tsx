import React, { useState } from 'react';
import BottomSheet from '@/components/common/BottomSheet/BottomSheet';
import styled from 'styled-components';
import { flex } from '@merried/utils';
import { Button, Column, Text } from '@merried/ui';
import { color } from '@merried/design-system';
import GiftList from '../GiftList/GiftList';
import { useAttendeeStore } from '@/stores/shop/attendee';
import { GIFT_KEYS } from '@/constants/shop/constants';

interface GiftPickerBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const GiftPickerBottomSheet = ({ isOpen, onClose }: GiftPickerBottomSheetProps) => {
  const [attendee, setAttendee] = useAttendeeStore();
  const initialId = GIFT_KEYS.indexOf(attendee.gift);
  const [id, setId] = useState(initialId >= 0 ? initialId : 0);

  const handleConfirm = () => {
    setAttendee({
      ...attendee,
      gift: GIFT_KEYS[id],
    });
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <StyledGiftPickerBottomSheet>
        <Column width="100%" gap={56}>
          <Column gap={25} width="100%">
            <Text fontType="H3" color={color.G900}>
              답례품 선택
            </Text>
            <GiftList id={id} setId={setId} />
          </Column>
          <Button size="VERY_LARGE" onClick={handleConfirm}>
            <Text fontType="Button3" color={color.G10}>
              선택 완료
            </Text>
          </Button>
        </Column>
      </StyledGiftPickerBottomSheet>
    </BottomSheet>
  );
};

export default GiftPickerBottomSheet;

const StyledGiftPickerBottomSheet = styled.div`
  ${flex({
    alignItems: 'flex-start',
  })}
  width: 100%;
  margin-top: 36px;
  gap: 56px;
`;
