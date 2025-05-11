import { useAttendeeStore } from '@/stores/shop/attendee';
import { useSetShopStepStore } from '@/stores/shop/shopStep';

export const useFieldChange = () => {
  const [attendee, setAttendee] = useAttendeeStore();

  const handleChange = (value: string, name: string) => {
    setAttendee((prev) => ({ ...prev, [name]: value }));
  };

  return { handleChange, attendee };
};

export const useCTAButton = () => {
  const setShopStep = useSetShopStepStore();

  const handleMoveSend = () => {
    setShopStep('답례품전송');
  };

  return { handleMoveSend };
};
