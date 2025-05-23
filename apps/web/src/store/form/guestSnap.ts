import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface GuestSnapState {
  title: string;
  password: string;
}

const defaultGuestSnap: GuestSnapState = {
  title: '',
  password: '',
};

const guestSnapAtomState = atom<GuestSnapState>({
  key: 'guest-snap-state',
  default: defaultGuestSnap,
});

export const useGuestSnapStore = () => useRecoilState(guestSnapAtomState);
export const useSetGuestSnapStore = () => useSetRecoilState(guestSnapAtomState);
export const useGuestSnapValueStore = () => useRecoilValue(guestSnapAtomState);
