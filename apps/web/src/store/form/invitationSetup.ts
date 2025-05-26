import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { color } from '@merried/design-system';

interface InvitationSetupState {
  pointColor: string;
  invitationFont: string;
}

const defaultInvitationSetup: InvitationSetupState = {
  pointColor: color.pointYellow,
  invitationFont: 'Ownglyph Kundo',
};

const invitationSetupAtomState = atom<InvitationSetupState>({
  key: 'invitation-setup-state',
  default: defaultInvitationSetup,
});

export const useInvitationSetupStore = () => useRecoilState(invitationSetupAtomState);
export const useSetInvitationSetupStore = () =>
  useSetRecoilState(invitationSetupAtomState);
export const useInvitationSetupValueStore = () =>
  useRecoilValue(invitationSetupAtomState);
