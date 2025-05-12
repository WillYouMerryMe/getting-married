import { useAttendeeStore } from '@/stores/shop/attendee';

export const useFieldChange = () => {
  const [attendee, setAttendee] = useAttendeeStore();

  const handleChange = (value: string, name: string) => {
    setAttendee((prev) => ({ ...prev, [name]: value }));
  };

  return { handleChange, attendee };
};
