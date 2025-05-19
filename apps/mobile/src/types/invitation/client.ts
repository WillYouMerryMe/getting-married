export interface Account {
  bank: string;
  account: string;
  name: string;
}

export type AccountStep = '의사여부' | '계좌번호';

export type GuestBook = '비밀번호 입력' | '방명록 확인';
