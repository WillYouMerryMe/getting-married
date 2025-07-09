import { atom, useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

export interface GuestBookItem {
  id: string
  name: string;
  content: string;
}

const guestBookState = atom<GuestBookItem[]>({
  key: 'guestBook',
  default: [],
});

export const useGuestBookStore = () => useRecoilState(guestBookState);
export const useSetGuestBookStore = () => useSetRecoilState(guestBookState);
export const useGuestBookValueStore = () => useRecoilValue(guestBookState);
