import { atom, useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import { color } from '@merried/design-system';
import { CustomFontType } from '@/types/form/client';

interface InvitationSetupState {
  pointColor: string;
  invitationFont: CustomFontType;
}

export const defaultInvitationSetup: InvitationSetupState = {
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
