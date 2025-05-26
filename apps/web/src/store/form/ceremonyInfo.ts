import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

interface CeremonyInfoState {
  isToggle: boolean;
  calenderDate: Date;
  isCalendarVisible: boolean;
  name: string;
}

const defaultCeremonyInfo: CeremonyInfoState = {
  isToggle: false,
  calenderDate: new Date(),
  isCalendarVisible: false,
  name: '',
};

const ceremonyInfoAtomState = atom<CeremonyInfoState>({
  key: 'ceremony-info-state',
  default: defaultCeremonyInfo,
});

export const useCeremonyInfoStore = () => useRecoilState(ceremonyInfoAtomState);
export const useSetCeremonyInfoStore = () => useSetRecoilState(ceremonyInfoAtomState);
export const useCeremonyInfoValueStore = () => useRecoilValue(ceremonyInfoAtomState);
