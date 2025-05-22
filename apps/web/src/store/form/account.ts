import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface AccountDetail {
  isVisible: boolean;
  bank: string;
  accountNumber: string;
  accountHolder: string;
}

interface AccountInfoState {
  title: string;
  message: string;
  groom: AccountDetail;
  groomFather: AccountDetail;
  groomMother: AccountDetail;
  bride: AccountDetail;
  brideFather: AccountDetail;
  brideMother: AccountDetail;
}

const defaultAccountDetail: AccountDetail = {
  isVisible: false,
  bank: '',
  accountNumber: '',
  accountHolder: '',
};

const defaultAccountInfoState: AccountInfoState = {
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
