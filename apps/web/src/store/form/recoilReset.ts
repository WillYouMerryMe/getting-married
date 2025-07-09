import { defaultAccountInfoState, useSetAccountInfoStore } from './account';
import { defaultCeremonyInfo, useSetCeremonyInfoStore } from './ceremonyInfo';
import { defaultCoupleIntro, useSetCoupleIntroStore } from './coupleIntro';
import { defaultDirections, useSetDirectionsStore } from './directions';
import { defaultGalleryImage, useSetGalleryImageStore } from './galleryImage';
import { defaultGuestSnap, useSetGuestSnapStore } from './guestSnap';
import { defaultGuestbook, useSetGuestbookStore } from './guestbook';
import {
  defaultInvitationMessage,
  useSetInvitationMessageStore,
} from './invitationMessage';
import { defaultInvitationSetup, useSetInvitationSetupStore } from './invitationSetup';
import { defaultMain, useSetMainStore } from './main';
import { defaultMainScreen, useSetMainScreenStore } from './mainScreen';
import { defaultNotice, useSetNoticeStore } from './notice';
import { defaultComponentOrder, useSetComponentOrderStore } from './orderState';
import { defaultUrlShareStyle, useSetUrlShareStyleStore } from './urlShareStyle';
import { defaultWeddingIntro, useSetWeddingIntroStore } from './weddingIntro';

export const useResetFormStores = () => {
  const setAccount = useSetAccountInfoStore();
  const setCeremonyInfo = useSetCeremonyInfoStore();
  const setCoupleIntro = useSetCoupleIntroStore();
  const setDirections = useSetDirectionsStore();
  const setGalleryImage = useSetGalleryImageStore();
  const setGuestbook = useSetGuestbookStore();
  const setGuestSnap = useSetGuestSnapStore();
  const setInvitationMessage = useSetInvitationMessageStore();
  const setInvitationSetup = useSetInvitationSetupStore();
  const setMain = useSetMainStore();
  const setMainScreen = useSetMainScreenStore();
  const setNotice = useSetNoticeStore();
  const setOrderState = useSetComponentOrderStore();
  const setUrlShareStyle = useSetUrlShareStyleStore();
  const setWeddingIntro = useSetWeddingIntroStore();

  const resetAllFormState = () => {
    setAccount(defaultAccountInfoState);
    setCeremonyInfo(defaultCeremonyInfo);
    setCoupleIntro(defaultCoupleIntro);
    setDirections(defaultDirections);
    setGalleryImage(defaultGalleryImage);
    setGuestbook(defaultGuestbook);
    setGuestSnap(defaultGuestSnap);
    setInvitationMessage(defaultInvitationMessage);
    setInvitationSetup(defaultInvitationSetup);
    setMain(defaultMain);
    setMainScreen(defaultMainScreen);
    setNotice(defaultNotice);
    setOrderState(defaultComponentOrder);
    setUrlShareStyle(defaultUrlShareStyle);
    setWeddingIntro(defaultWeddingIntro);
  };

  return { resetAllFormState };
};
