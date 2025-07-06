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

export type GuestBook = '비밀번호 입력' | '방명록 확인';

export type CustomFontType =
  | 'Ownglyph Kundo'
  | 'Pretendard'
  | 'YUniverse-B'
  | 'BBB0003'
  | 'Paperlogy'
  | 'Diphylleia'
  | 'DOSGothic'
  | 'KoreanCNMM'
  | 'LeeSeoyun'
  | 'MapoDacapo'
  | 'Ownglyph Baek Subin'
  | 'Nelna Yesam'
  | 'White Angelica'
  | 'Heir of Light OTF';

export type Position = 'left' | 'right' | 'center';

export interface StyleConfig {
  top: string;
  left?: string;
  right?: string;
  center?: boolean;
  font: string;
}

export interface CaseConfig {
  groom?: StyleConfig;
  bride?: StyleConfig;
  groom_bride?: StyleConfig;
  subtitle?: StyleConfig;
  date?: StyleConfig;
}

export type InvitationSetting = {
  pointColor: string;
  font: string;
};
