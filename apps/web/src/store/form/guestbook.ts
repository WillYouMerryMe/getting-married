import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface GuestbookState {
  title: string;
  password: string;
}

const defaultGuestbook: GuestbookState = {
  title: '',
  password: '',
};

const guestbookAtomState = atom<GuestbookState>({
  key: 'notice-state',
  default: defaultGuestbook,
});

export const useGuestbookStore = () => useRecoilState(guestbookAtomState);
export const useSetGuestbookStore = () => useSetRecoilState(guestbookAtomState);
export const useGuestbookValueStore = () => useRecoilValue(guestbookAtomState);
