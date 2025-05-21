import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

interface InvitationMessageState {
  title: string;
  message: string;
}

const defaultInvitationMessage = {
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
