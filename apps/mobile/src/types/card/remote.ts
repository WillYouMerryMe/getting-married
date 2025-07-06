import { CardList } from './client';

export type CardListRes = CardList[];

export interface CardDetailRes {
  title: string;
  templateId: string;
  invitationSetting: InvitationSetting;
  mainPageSetting: MainPageSetting;
  invitationMessage?: {
    title: string;
    content: string;
  };
  groomProfile?: Profile;
  brideProfile?: Profile;
  weddingInfo?: WeddingInfo;
  photoGallery?: PhotoGallery;
  videoGallery?: {
    title?: string;
    url: string;
  };
  locationGuide?: LocationGuide;
  accountInfo?: AccountInfo;
  guestNotice?: {
    title?: string;
    content: string;
  };
  guestBook?: {
    title?: string;
    masterPassword: string;
  };
  guestSnapshots?: {
    title?: string;
    masterPassword: string;
  };
  shareUrlStyle?: ShareUrlStyle;
  componentOrders: ComponentOrder[];
}

interface InvitationSetting {
  pointColor: string;
  font: string;
}

interface MainPageSetting {
  picture: string;
  font: string;
  lettering: string[];
  letteringColor: string;
}

interface Profile {
  name: string;
  fatherName?: string;
  isFatherDeceased?: boolean;
  motherName?: string;
  isMotherDeceased?: boolean;
}

interface WeddingInfo {
  date: string;
  weddingHallName: string;
  isCalendarVisible: boolean;
}

interface PhotoGallery {
  urls: string[];
  title: string;
}

interface LocationGuide {
  address: string;
  isSubway: boolean;
  subwayDetail?: string;
  isBus: boolean;
  busDetail?: string;
  hasParking: boolean;
  parkingDetail?: string;
}

interface AccountInfo {
  title: string;
  content: string;
  groom?: Account;
  bride?: Account;
  groomFather?: Account;
  groomMother?: Account;
  brideFather?: Account;
  brideMother?: Account;
}

interface Account {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
}

interface ShareUrlStyle {
  thumbnailUrl: string;
  title?: string;
  content?: string;
}

interface ComponentOrder {
  componentType: ComponentType;
  order: number;
}

type ComponentType =
  | 'INVITATION_MESSAGE'
  | 'GROOM_BRIDE_PROFILE'
  | 'WEDDING_DATE'
  | 'PHOTO_GALLERY'
  | 'VIDEO_GALLERY'
  | 'LOCATION_GUIDE'
  | 'ACCOUNT_INFO'
  | 'GUEST_NOTICE'
  | 'GUEST_BOOK'
  | 'GUEST_SNAPSHOTS'
  | 'SHARE_URL_STYLE';
