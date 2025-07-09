import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { color } from '@merried/design-system';

interface MainScreenState {
  image: (File | string)[] | null;
  letteringColor: string;
  letteringFont: string;
  letteringText: string;
}

export const defaultMainScreen: MainScreenState = {
  image: null,
  letteringColor: color.letterYellow,
  letteringFont: 'Ownglyph Kundo',
  letteringText: '',
};

const mainScreenAtom = atom<MainScreenState>({
  key: 'main-screen-atom',
  default: defaultMainScreen,
});

export const useMainScreenStore = () => useRecoilState(mainScreenAtom);
export const useSetMainScreenStore = () => useSetRecoilState(mainScreenAtom);
export const useMainScreenValueStore = () => useRecoilValue(mainScreenAtom);
