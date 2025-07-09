import { PostCardReq } from '@/types/form/remote';

import { useSetMainStore } from '@/store/form/main';
import { useSetInvitationSetupStore } from '@/store/form/invitationSetup';
import { useSetMainScreenStore } from '@/store/form/mainScreen';
import { useSetInvitationMessageStore } from '@/store/form/invitationMessage';
import { useSetCoupleIntroStore } from '@/store/form/coupleIntro';
import { useSetCeremonyInfoStore } from '@/store/form/ceremonyInfo';
import { useSetGalleryImageStore } from '@/store/form/galleryImage';
import { useSetWeddingIntroStore } from '@/store/form/weddingIntro';
import { useSetDirectionsStore } from '@/store/form/directions';
import { useSetAccountInfoStore } from '@/store/form/account';
import { useSetNoticeStore } from '@/store/form/notice';
import { useSetGuestbookStore } from '@/store/form/guestbook';
import { useSetGuestSnapStore } from '@/store/form/guestSnap';
import { useSetUrlShareStyleStore } from '@/store/form/urlShareStyle';
import { useSetComponentOrderStore } from '@/store/form/orderState';
import { Account, CustomFontType } from '@/types/form/client';

export const useApplyCardParams = () => {
  const setMain = useSetMainStore();
  const setInvitationSetup = useSetInvitationSetupStore();
  const setMainScreen = useSetMainScreenStore();
  const setInvitationMessage = useSetInvitationMessageStore();
  const setCoupleIntro = useSetCoupleIntroStore();
  const setCeremonyInfo = useSetCeremonyInfoStore();
  const setGalleryImage = useSetGalleryImageStore();
  const setWeddingIntro = useSetWeddingIntroStore();
  const setDirections = useSetDirectionsStore();
  const setAccount = useSetAccountInfoStore();
  const setNotice = useSetNoticeStore();
  const setGuestbook = useSetGuestbookStore();
  const setGuestSnap = useSetGuestSnapStore();
  const setUrlShareStyle = useSetUrlShareStyleStore();
  const setComponentOrder = useSetComponentOrderStore();

  const applyParams = (data: PostCardReq) => {
    setMain({ title: data.title, templateId: data.templateId });

    setInvitationSetup({
      pointColor: data.invitationSetting.pointColor,
      invitationFont: data.invitationSetting.font as CustomFontType,
    });

    setMainScreen({
      image: data.mainPageSetting.picture ? [data.mainPageSetting.picture] : [],
      letteringText: data.mainPageSetting.lettering?.[0] ?? '',
      letteringFont: data.mainPageSetting.font,
      letteringColor: data.mainPageSetting.letteringColor,
    });

    if (data.invitationMessage) {
      setInvitationMessage({
        isToggle: true,
        title: data.invitationMessage.title,
        message: data.invitationMessage.content,
      });
    }

    if (data.groomProfile && data.brideProfile) {
      setCoupleIntro({
        isToggle: true,
        groom: data.groomProfile,
        bride: data.brideProfile,
      });
    }

    if (data.weddingInfo) {
      setCeremonyInfo({
        isToggle: true,
        calenderDate: new Date(data.weddingInfo.date),
        name: data.weddingInfo.weddingHallName,
        isCalendarVisible: data.weddingInfo.isCalendarVisible,
      });
    }

    if (data.photoGallery) {
      setGalleryImage({
        isToggle: true,
        title: data.photoGallery.title,
        imageList: [],
      });
    }

    if (data.videoGallery) {
      setWeddingIntro({
        isToggle: true,
        title: data.videoGallery.title ?? '',
        videoURL: data.videoGallery.url,
      });
    }

    if (data.locationGuide) {
      setDirections({
        isToggle: true,
        address: data.locationGuide.address,
        show: {
          subway: data.locationGuide.isSubway ?? false,
          bus: data.locationGuide.isBus ?? false,
          car: data.locationGuide.hasParking ?? false,
        },
        methods: {
          subway: data.locationGuide.subwayDetail ?? '',
          bus: data.locationGuide.busDetail ?? '',
          car: data.locationGuide.parkingDetail ?? '',
        },
      });
    }

    if (data.accountInfo) {
      const { accountInfo } = data;

      const createAccountInfo = (roleData: Account | null) => ({
        isVisible: !!roleData,
        accountHolderName: roleData?.accountHolderName ?? '',
        accountNumber: roleData?.accountNumber ?? '',
        bankName: roleData?.bankName ?? '',
      });

      setAccount({
        isToggle: true,
        title: accountInfo.title,
        message: accountInfo.content,
        groom: createAccountInfo(accountInfo.groom),
        bride: createAccountInfo(accountInfo.bride),
        groomFather: createAccountInfo(accountInfo.groomFather),
        groomMother: createAccountInfo(accountInfo.groomMother),
        brideFather: createAccountInfo(accountInfo.brideFather),
        brideMother: createAccountInfo(accountInfo.brideMother),
      });
    }

    if (data.guestNotice) {
      setNotice({
        isToggle: true,
        title: data.guestNotice.title ?? '',
        message: data.guestNotice.content,
      });
    }

    if (data.guestBook) {
      setGuestbook({
        isToggle: true,
        title: data.guestBook.title ?? '',
        password: data.guestBook.masterPassword,
      });
    }

    if (data.guestSnapshots) {
      setGuestSnap({
        isToggle: true,
        title: data.guestSnapshots.title ?? '',
        password: data.guestSnapshots.masterPassword,
      });
    }

    if (data.shareUrlStyle) {
      setUrlShareStyle({
        isToggle: true,
        title: data.shareUrlStyle.title ?? '',
        message: data.shareUrlStyle.content ?? '',
        image: null,
      });
    }

    setComponentOrder(data.componentOrders.map((o) => o.componentType));
  };

  return { applyParams };
};
