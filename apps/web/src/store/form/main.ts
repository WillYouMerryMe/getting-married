import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface MainState {
  title: string;
  templateId: string;
}

const defaultMain: MainState = {
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
