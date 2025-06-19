import { GuestBook } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const guestbookStepAtomState = atom<GuestBook>({
  key: 'guestbook-step',
  default: '비밀번호 입력',
});

export const useGuestBookStepStore = () => useRecoilState(guestbookStepAtomState);
export const useSetGuestBookStepStore = () => useSetRecoilState(guestbookStepAtomState);
export const useGuestBookStepValueStore = () => useRecoilValue(guestbookStepAtomState);
