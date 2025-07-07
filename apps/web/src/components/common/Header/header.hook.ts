import { useComponentOrderValueStore } from '@/store/form/orderState';
import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';
import { useMainScreenValueStore } from '@/store/form/mainScreen';
import { useInvitationMessageValueStore } from '@/store/form/invitationMessage';
import { useCoupleIntroValueStore } from '@/store/form/coupleIntro';
import { useCeremonyInfoValueStore } from '@/store/form/ceremonyInfo';
import { useGalleryImageValueStore } from '@/store/form/galleryImage';
import { useWeddingIntroValueStore } from '@/store/form/weddingIntro';
import { useDirectionsValueStore } from '@/store/form/directions';
import { useAccountInfoValueStore } from '@/store/form/account';
import { useNoticeValueStore } from '@/store/form/notice';
import { useGuestbookValueStore } from '@/store/form/guestbook';
import { useGuestSnapValueStore } from '@/store/form/guestSnap';
import { useUrlShareStyleValueStore } from '@/store/form/urlShareStyle';
import { useMainValueStore } from '@/store/form/main';
import { getDownloadUrl, getPresigned, putPresigned } from '@/services/form/apis';
import { PostCardReq } from '@/types/form/remote';

export const usePostCardParams = () => {
  const main = useMainValueStore();
  const invitationSetup = useInvitationSetupValueStore();
  const mainScreen = useMainScreenValueStore();
  const invitationMessage = useInvitationMessageValueStore();
  const coupleIntro = useCoupleIntroValueStore();
  const ceremonyInfo = useCeremonyInfoValueStore();
  const galleryImage = useGalleryImageValueStore();
  const weddingIntro = useWeddingIntroValueStore();
  const directions = useDirectionsValueStore();
  const account = useAccountInfoValueStore();
  const notice = useNoticeValueStore();
  const guestbook = useGuestbookValueStore();
  const guestSnap = useGuestSnapValueStore();
  const urlShareStyle = useUrlShareStyleValueStore();
  const componentOrder = useComponentOrderValueStore();

  const handleUploadFile = async (file: File): Promise<string> => {
    const presignedUrl = await getPresigned(file.name);
    await putPresigned(file, presignedUrl);
    const downloadableUrl = await getDownloadUrl(presignedUrl);

    return downloadableUrl;
  };

  const buildParams = async (): Promise<PostCardReq> => {
    const uploadedPicture = mainScreen.image?.[0]
      ? await handleUploadFile(mainScreen.image[0])
      : '';

    const uploadedUrls = galleryImage.imageList?.length
      ? await Promise.all(galleryImage.imageList.map((file) => handleUploadFile(file)))
      : [];

    return {
      title: main.title,
      templateId: main.templateId,
      invitationSetting: {
        pointColor: invitationSetup.pointColor,
        font: invitationSetup.invitationFont,
      },
      mainPageSetting: {
        picture: uploadedPicture,
        font: mainScreen.letteringFont,
        lettering: [mainScreen.letteringText],
        letteringColor: mainScreen.letteringColor,
      },
      invitationMessage: invitationMessage.isToggle
        ? {
            title: invitationMessage.title,
            content: invitationMessage.message,
          }
        : null,
      groomProfile: coupleIntro.isToggle ? coupleIntro.groom : null,
      brideProfile: coupleIntro.isToggle ? coupleIntro.bride : null,
      weddingInfo: ceremonyInfo.isToggle
        ? {
            date: ceremonyInfo.calenderDate.toISOString(),
            weddingHallName: ceremonyInfo.name,
            isCalendarVisible: ceremonyInfo.isCalendarVisible,
          }
        : null,
      photoGallery: galleryImage.isToggle
        ? {
            title: galleryImage.title,
            urls: uploadedUrls,
          }
        : null,
      videoGallery: weddingIntro.isToggle
        ? {
            title: weddingIntro.title,
            url: weddingIntro.videoURL,
          }
        : null,
      locationGuide: directions.isToggle
        ? {
            address: directions.address,
            isSubway: directions.show.subway,
            subwayDetail: directions.methods.subway || '',
            isBus: directions.show.bus,
            busDetail: directions.methods.bus || '',
            hasParking: directions.show.car,
            parkingDetail: directions.methods.car || '',
          }
        : null,
      accountInfo: account.isToggle
        ? {
            title: account.title,
            content: account.message,
            groom: account.groom,
            bride: account.bride,
            groomFather: account.groomFather,
            groomMother: account.groomMother,
            brideFather: account.brideFather,
            brideMother: account.brideMother,
          }
        : null,
      guestNotice: notice.isToggle
        ? {
            title: notice.title,
            content: notice.message,
          }
        : null,
      guestBook: guestbook.isToggle
        ? {
            title: guestbook.title,
            masterPassword: guestbook.password,
          }
        : null,
      guestSnapshots: guestSnap.isToggle
        ? {
            title: guestSnap.title,
            masterPassword: guestSnap.password,
          }
        : null,
      shareUrlStyle: urlShareStyle.isToggle
        ? {
            thumbnailUrl: '아무URL',
            title: urlShareStyle.title,
            content: urlShareStyle.message,
          }
        : null,
      componentOrders: componentOrder.map((type, index) => ({
        componentType: type,
        order: index,
      })),
    };
  };

  return buildParams;
};
