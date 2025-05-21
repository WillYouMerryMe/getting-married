import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export interface PersonIntro {
  name: string;
  fatherName: string;
  isFatherDeceased: boolean;
  motherName: string;
  isMotherDeceased: boolean;
}

export interface CoupleIntroState {
  groom: PersonIntro;
  bride: PersonIntro;
}

const defaultPersonIntro: PersonIntro = {
  name: '',
  fatherName: '',
  isFatherDeceased: false,
  motherName: '',
  isMotherDeceased: false,
};

const defaultCoupleIntro: CoupleIntroState = {
  groom: defaultPersonIntro,
  bride: defaultPersonIntro,
};

const coupleIntroAtomState = atom<CoupleIntroState>({
  key: 'couple-intro-state',
  default: defaultCoupleIntro,
});

export const useCoupleIntroStore = () => useRecoilState(coupleIntroAtomState);
export const useSetCoupleIntroStore = () => useSetRecoilState(coupleIntroAtomState);
export const useCoupleIntroValueStore = () => useRecoilValue(coupleIntroAtomState);
