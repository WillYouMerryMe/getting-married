import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface NoticeState {
  isToggle: boolean;
  title: string;
  message: string;
}

export const defaultNotice: NoticeState = {
  isToggle: false,
  title: '',
  message: '',
};

const noticeAtomState = atom<NoticeState>({
  key: 'notice-state',
  default: defaultNotice,
});

export const useNoticeStore = () => useRecoilState(noticeAtomState);
export const useSetNoticeStore = () => useSetRecoilState(noticeAtomState);
export const useNoticeValueStore = () => useRecoilValue(noticeAtomState);
