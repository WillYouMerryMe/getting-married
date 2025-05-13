type AccountField =
  | 'groom'
  | 'bride'
  | 'groomFather'
  | 'groomMother'
  | 'brideFather'
  | 'brideMother';

type AccountState = Record<AccountField, boolean>;

type AccountAction = { type: 'TOGGLE'; payload: AccountField };
