export type AccountField =
  | 'groom'
  | 'bride'
  | 'groomFather'
  | 'groomMother'
  | 'brideFather'
  | 'brideMother';

export type AccountState = Record<AccountField, boolean>;

export type AccountAction = { type: 'TOGGLE'; payload: AccountField };
