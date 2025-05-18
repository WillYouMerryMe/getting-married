import { AccountStep } from '@/types/invitation/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const accountStepAtomState = atom<AccountStep>({
  key: 'account-step',
  default: '의사여부',
});

export const useAccountStepStore = () => useRecoilState(accountStepAtomState);
export const useSetAccountStepStore = () => useSetRecoilState(accountStepAtomState);
export const useAccountStepValueStore = () => useRecoilValue(accountStepAtomState);
