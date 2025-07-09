import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

type TransportType = 'subway' | 'bus' | 'car';

interface DirectionsState {
  isToggle: boolean;
  address: string;
  methods: Partial<Record<TransportType, string>>;
  show: Record<TransportType, boolean>;
}

export const defaultDirections: DirectionsState = {
  isToggle: false,
  address: '',
  methods: {
    subway: '',
    bus: '',
    car: '',
  },
  show: {
    subway: false,
    bus: false,
    car: false,
  },
};

const DirectionsAtomState = atom<DirectionsState>({
  key: 'directions-state',
  default: defaultDirections,
});

export const useDirectionsStore = () => useRecoilState(DirectionsAtomState);
export const useSetDirectionsStore = () => useSetRecoilState(DirectionsAtomState);
export const useDirectionsValueStore = () => useRecoilValue(DirectionsAtomState);
