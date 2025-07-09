import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export const defaultComponentOrder = [
  'INVITATION_MESSAGE',
  'GROOM_BRIDE_PROFILE',
  'WEDDING_DATE',
  'PHOTO_GALLERY',
  'VIDEO_GALLERY',
  'LOCATION_GUIDE',
  'ACCOUNT_INFO',
  'GUEST_NOTICE',
  'GUEST_BOOK',
  'GUEST_SNAPSHOTS',
  'SHARE_URL_STYLE',
];

export const componentOrderState = atom<string[]>({
  key: 'componentOrderState',
  default: defaultComponentOrder,
});

export const useComponentOrderStore = () => useRecoilState(componentOrderState);
export const useSetComponentOrderStore = () => useSetRecoilState(componentOrderState);
export const useComponentOrderValueStore = () => useRecoilValue(componentOrderState);
