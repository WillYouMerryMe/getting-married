import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface UrlShareStyleState {
  isToggle: boolean;
  title: string;
  message: string;
  image: File[] | null;
}

export const defaultUrlShareStyle: UrlShareStyleState = {
  isToggle: false,
  title: '',
  message: '',
  image: null,
};

const urlShareStyleAtomState = atom<UrlShareStyleState>({
  key: 'url-share-style-state',
  default: defaultUrlShareStyle,
});

export const useUrlShareStyleStore = () => useRecoilState(urlShareStyleAtomState);
export const useSetUrlShareStyleStore = () => useSetRecoilState(urlShareStyleAtomState);
export const useUrlShareStyleValueStore = () => useRecoilValue(urlShareStyleAtomState);
