export type AccountField =
  | 'groom'
  | 'bride'
  | 'groomFather'
  | 'groomMother'
  | 'brideFather'
  | 'brideMother';

export interface Account {
  bank: string;
  accountNumber: string;
  accountHolder: string;
}

export type AccountDetail = Account & {
  isVisible: boolean;
};

export interface AccountInfoState {
  title: string;
  message: string;
  groom: AccountDetail;
  groomFather: AccountDetail;
  groomMother: AccountDetail;
  bride: AccountDetail;
  brideFather: AccountDetail;
  brideMother: AccountDetail;
}

export type GuestBook = '비밀번호 입력' | '방명록 확인';
