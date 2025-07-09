import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface MainState {
  id: string | null;
  title: string;
  templateId: string;
}

export const defaultMain: MainState = {
  id: null,
  title: '',
  templateId: '',
};

const mainAtomState = atom<MainState>({
  key: 'main-state',
  default: defaultMain,
});

export const useMainStore = () => useRecoilState(mainAtomState);
export const useSetMainStore = () => useSetRecoilState(mainAtomState);
export const useMainValueStore = () => useRecoilValue(mainAtomState);
