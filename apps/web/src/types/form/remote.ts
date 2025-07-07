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
  fatherName: string | null;
  isFatherDeceased: boolean | null;
  motherName: string | null;
  isMotherDeceased: boolean | null;
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
  title: string | null;
  url: string;
};

export type LocationGuide = {
  address: string;
  isSubway: boolean;
  subwayDetail: string | null;
  isBus: boolean;
  busDetail: string | null;
  hasParking: boolean;
  parkingDetail: string | null;
};

export type BankInfo = {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
};

export type AccountInfo = {
  title: string;
  content: string;
  groom: BankInfo | null;
  bride: BankInfo | null;
  groomFather: BankInfo | null;
  groomMother: BankInfo | null;
  brideFather: BankInfo | null;
  brideMother: BankInfo | null;
};

export type GuestNotice = {
  title: string | null;
  content: string;
};

export type GuestBook = {
  title: string | null;
  masterPassword: string;
};

export type GuestSnapshots = {
  title: string | null;
  masterPassword: string;
};

export type ShareUrlStyle = {
  thumbnailUrl: string;
  title: string | null;
  content: string | null;
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
  componentType: string;
  order: number;
};

export type PostCardReq = {
  title: string;
  templateId: string;
  invitationSetting: InvitationSetting;
  mainPageSetting: MainPageSetting;
  invitationMessage: InvitationMessage | null;
  groomProfile: Profile | null;
  brideProfile: Profile | null;
  weddingInfo: WeddingInfo | null;
  photoGallery: PhotoGallery | null;
  videoGallery: VideoGallery | null;
  locationGuide: LocationGuide | null;
  accountInfo: AccountInfo | null;
  guestNotice: GuestNotice | null;
  guestBook: GuestBook | null;
  guestSnapshots: GuestSnapshots | null;
  shareUrlStyle: ShareUrlStyle | null;
  componentOrders: ComponentOrder[];
};

export type GetCardListRes = {
  id: string;
  title: string;
  updateAt: string;
};
