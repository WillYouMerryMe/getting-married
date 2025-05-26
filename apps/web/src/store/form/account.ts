import { AccountDetail, AccountInfoState } from '@/types/form/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const defaultAccountDetail: AccountDetail = {
  isVisible: false,
  bank: '',
  accountNumber: '',
  accountHolder: '',
};

const defaultAccountInfoState: AccountInfoState = {
  isToggle: false,
  title: '',
  message: '',
  groom: { ...defaultAccountDetail },
  groomFather: { ...defaultAccountDetail },
  groomMother: { ...defaultAccountDetail },
  bride: { ...defaultAccountDetail },
  brideFather: { ...defaultAccountDetail },
  brideMother: { ...defaultAccountDetail },
};

export const accountInfoAtom = atom<AccountInfoState>({
  key: 'account-info-state',
  default: defaultAccountInfoState,
});

export const useAccountInfoStore = () => useRecoilState(accountInfoAtom);
export const useSetAccountInfoStore = () => useSetRecoilState(accountInfoAtom);
export const useAccountInfoValueStore = () => useRecoilValue(accountInfoAtom);
