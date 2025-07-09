import { Profile } from '@/types/form/remote';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export type PersonIntro = Profile;

export interface CoupleIntroState {
  isToggle: boolean;
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

export const defaultCoupleIntro: CoupleIntroState = {
  isToggle: false,
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
