import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface GuestbookState {
  isToggle: boolean;
  title: string;
  password: string;
}

export const defaultGuestbook: GuestbookState = {
  isToggle: false,
  title: '',
  password: '',
};

const guestbookAtomState = atom<GuestbookState>({
  key: 'guestbook-state',
  default: defaultGuestbook,
});

export const useGuestbookStore = () => useRecoilState(guestbookAtomState);
export const useSetGuestbookStore = () => useSetRecoilState(guestbookAtomState);
export const useGuestbookValueStore = () => useRecoilValue(guestbookAtomState);
