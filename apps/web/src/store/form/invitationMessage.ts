import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface InvitationMessageState {
  isToggle: boolean;
  title: string;
  message: string;
}

const defaultInvitationMessage = {
  isToggle: false,
  title: '',
  message: '',
};

const invitationMessageAtomState = atom<InvitationMessageState>({
  key: 'invitation-message-state',
  default: defaultInvitationMessage,
});

export const useInvitationMessageStore = () => useRecoilState(invitationMessageAtomState);
export const useSetInvitationMessageStore = () =>
  useSetRecoilState(invitationMessageAtomState);
export const useInvitationMessageValueStore = () =>
  useRecoilValue(invitationMessageAtomState);
