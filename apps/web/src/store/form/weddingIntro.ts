import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface WeddingIntroState {
  title: string;
  vedioURL: string;
}

const defaultWeddingIntro: WeddingIntroState = {
  title: '',
  vedioURL: '',
};

const weddingIntroAtomState = atom<WeddingIntroState>({
  key: 'wedding-intro-state',
  default: defaultWeddingIntro,
});

export const useWeddingIntroStore = () => useRecoilState(weddingIntroAtomState);
export const useSetWeddingIntroStore = () => useSetRecoilState(weddingIntroAtomState);
export const useWeddingIntroValueStore = () => useRecoilValue(weddingIntroAtomState);
