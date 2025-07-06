export type InvitationSetting = {
  pointColor: string;
  font: string;
};

export type MainPageSetting = {
  picture: string;
  font: string;
  lettering: string[];
  letteringColor: string;
};

export type InvitationMessage = {
  title: string;
  content: string;
};

export type Profile = {
  name: string;
  fatherName: string;
  isFatherDeceased: boolean;
  motherName: string;
  isMotherDeceased: boolean;
};

export type WeddingInfo = {
  date: string;
  weddingHallName: string;
  isCalendarVisible: boolean;
};

export type PhotoGallery = {
  title: string;
  urls: string[];
};

export type VideoGallery = {
  title: string;
  url: string;
};

export type LocationGuide = {
  address: string;
  isSubway: boolean;
  subwayDetail: string;
  isBus: boolean;
  busDetail: string;
  hasParking: boolean;
  parkingDetail: string;
};

export type BankInfo = {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
};

export type AccountInfo = {
  title: string;
  content: string;
  groom: BankInfo;
  bride: BankInfo;
  groomFather: BankInfo;
  groomMother: BankInfo;
  brideFather: BankInfo;
  brideMother: BankInfo;
};

export type GuestNotice = {
  title: string;
  content: string;
};

export type GuestBook = {
  title: string;
  masterPassword: string;
};

export type GuestSnapshots = {
  title: string;
  masterPassword: string;
};

export type ShareUrlStyle = {
  thumbnailUrl: string;
  title: string;
  content: string;
};

export enum ComponentType {
  INVITATION_MESSAGE = 'INVITATION_MESSAGE',
  GROOM_BRIDE_PROFILE = 'GROOM_BRIDE_PROFILE',
  WEDDING_DATE = 'WEDDING_DATE',
  PHOTO_GALLERY = 'PHOTO_GALLERY',
  VIDEO_GALLERY = 'VIDEO_GALLERY',
  LOCATION_GUIDE = 'LOCATION_GUIDE',
  ACCOUNT_INFO = 'ACCOUNT_INFO',
  GUEST_NOTICE = 'GUEST_NOTICE',
  GUEST_BOOK = 'GUEST_BOOK',
  GUEST_SNAPSHOTS = 'GUEST_SNAPSHOTS',
  SHARE_URL_STYLE = 'SHARE_URL_STYLE',
}

export type ComponentOrder = {
  componentType: ComponentType;
  order: number;
};

export type PostCardReq = {
  title: string;
  templateId: string;
  invitationSetting: InvitationSetting;
  mainPageSetting: MainPageSetting;
  invitationMessage: InvitationMessage;
  groomProfile: Profile;
  brideProfile: Profile;
  weddingInfo: WeddingInfo;
  photoGallery: PhotoGallery;
  videoGallery: VideoGallery;
  locationGuide: LocationGuide;
  accountInfo: AccountInfo;
  guestNotice: GuestNotice;
  guestBook: GuestBook;
  guestSnapshots: GuestSnapshots;
  shareUrlStyle: ShareUrlStyle;
  componentOrders: ComponentOrder[];
};
