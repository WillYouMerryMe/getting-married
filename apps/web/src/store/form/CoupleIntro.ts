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

export const useWeddingIntroStore = () => useRecoilState(coupleIntroAtomState);
export const useSetWeddingIntroStore = () => useSetRecoilState(coupleIntroAtomState);
export const useWeddingIntroValueStore = () => useRecoilValue(coupleIntroAtomState);
