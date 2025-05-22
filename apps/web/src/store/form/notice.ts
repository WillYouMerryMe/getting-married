import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface NoticeState {
  title: string;
  message: string;
}

const defaultNotice: NoticeState = {
  title: '',
  message: '',
};

const noticeAtomState = atom<NoticeState>({
  key: 'wedding-intro-state',
  default: defaultNotice,
});

export const useNoticeStore = () => useRecoilState(noticeAtomState);
export const useSetNoticeStore = () => useSetRecoilState(noticeAtomState);
export const useNoticeValueStore = () => useRecoilValue(noticeAtomState);
