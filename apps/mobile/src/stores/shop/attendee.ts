import { ATTENDEE } from '@/constants/shop/data';
import { Attendee } from '@/types/shop/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const attendeeDataAtomState = atom<Attendee>({
  key: 'attendee-data',
  default: {
    status: ATTENDEE.status,
    paid: ATTENDEE.paid,
    meal: ATTENDEE.meal,
    gift: ATTENDEE.gift,
  },
});

export const useAttendeeStore = () => useRecoilState(attendeeDataAtomState);
export const useAttendeeValueStore = () => useRecoilValue(attendeeDataAtomState);
export const useSetAttendeeStore = () => useSetRecoilState(attendeeDataAtomState);
