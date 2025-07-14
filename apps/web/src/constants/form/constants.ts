import { PutCardReq } from '@/types/form/remote';
import { color } from '@merried/design-system';

export const LETTERING_COLORS = [
  color.letterBlue,
  color.letterGreen,
  color.letterOrange,
  color.letterPurple,
  color.letterRed,
  color.letterYellow,
];

export const POINT_COLOR_OPTIONS = [
  { value: color.pointYellow, label: 'Gargoyle Gas' },
  { value: color.pointGreen, label: 'Mantis' },
  { value: color.pointOrange, label: 'Orange-Red2' },
  { value: color.pointRed, label: 'Tart Orange' },
  { value: color.pointPurple, label: 'Lavender Indigo' },
  { value: color.pointBlue, label: 'Tufts Blue' },
];

export const LETTERING_COLORS_OPTIONS = [
  { value: color.letterYellow, label: 'Yellow Sun' },
  { value: color.letterGreen, label: 'Screaming Green' },
  { value: color.letterRed, label: 'Candy Apple Red' },
  { value: color.letterOrange, label: 'Orange-Red' },
  { value: color.letterPurple, label: 'Blue-Violet' },
  { value: color.letterBlue, label: 'Dodger Blue' },
];

export const SETUP_FONT_OPTIONS = [
  { label: 'Ownglyph Kundo', value: 'Ownglyph Kundo' },
  { label: 'Pretendard', value: 'Pretendard' },
  { label: 'YUniverse-B', value: 'YUniverse-B' },
  { label: 'BBB0003', value: 'BBB0003' },
  { label: 'Paperlogy', value: 'Paperlogy' },
  { label: 'Diphylleia', value: 'Diphylleia' },
  { label: 'DOSGothic', value: 'DOSGothic' },
  { label: 'KoreanCNMM', value: 'KoreanCNMM' },
  { label: 'LeeSeoyun', value: 'LeeSeoyun' },
  { label: 'MapoDacapo', value: 'MapoDacapo' },
  { label: 'Ownglyph Baek Subin', value: 'Ownglyph Baek Subin' },
  { label: 'Nelna Yesam', value: 'Nelna Yesam' },
  { label: 'White Angelica', value: 'White Angelica' },
  { label: 'Heir of Light OTF', value: 'Heir of Light OTF' },
];

export const GENDER_MAP = {
  GROOM: '아들',
  BRIDE: '딸',
} as const;

export const BRAND = [
  { src: '/IconNaver.svg', name: '네이버지도' },
  { src: '/IconKakaoMap.svg', name: '카카오맵' },
];

export const TRANSPORT_TYPES = ['bus', 'subway', 'car'] as const;

export const TRANSPORT_MAP: Record<string, string> = {
  bus: '버스',
  subway: '지하철',
  car: '자가용',
};

export type TransportType = (typeof TRANSPORT_TYPES)[number];

const templateBase: Omit<PutCardReq, 'templateId' | 'mainPageSetting'> = {
  id: 'dsafsdafsa',
  title: '',
  invitationSetting: {
    pointColor: '#FFDF3E',
    font: 'Ownglyph Kundo',
  },
  invitationMessage: {
    title: '초대글귀',
    content:
      '서로의 반쪽이 되어 걸어갈 길 위에서 저희 두 사람이 인생의 새로운 첫걸음을 내딛습니다. 소중한 걸음 해주시어 축복해 주시면 감사하겠습니다.',
  },
  groomProfile: {
    name: '견우',
    fatherName: '여상',
    isFatherDeceased: false,
    motherName: '도연',
    isMotherDeceased: false,
  },
  brideProfile: {
    name: '직녀',
    fatherName: '옥황',
    isFatherDeceased: false,
    motherName: '서왕모',
    isMotherDeceased: false,
  },
  weddingInfo: {
    date: '2025-08-21T15:00:00',
    weddingHallName: '오작교',
    isCalendarVisible: true,
  },
  photoGallery: {
    title: '갤러리',
    urls: [
      'https://married-get.s3.ap-northeast-2.amazonaws.com/56e22e646fef4285a4b0e1a8b4ab8b95/354cbcaa-6458-4a3d-a529-b0f1b72f4b82_images.jpg',
      'https://married-get.s3.ap-northeast-2.amazonaws.com/56e22e646fef4285a4b0e1a8b4ab8b95/6a03e386-c7c4-43c8-a038-057beb09c449_다운로드.jpg',
      'https://married-get.s3.ap-northeast-2.amazonaws.com/56e22e646fef4285a4b0e1a8b4ab8b95/d447a47f-a5d8-40fb-a937-01b5b47ff8c6_칠석-여름-별자리_06.jpg',
      'https://married-get.s3.ap-northeast-2.amazonaws.com/56e22e646fef4285a4b0e1a8b4ab8b95/80885d05-9fb1-4726-9169-3a042a14c174_칠석-여름-별자리_01.jpg',
    ],
  },
  videoGallery: {
    title: '견우와 직녀',
    url: '',
  },
  locationGuide: {
    address: '강원특별자치도 고성군 간성읍 수성로22번길 13-3/오작교',
    isSubway: true,
    subwayDetail: '가까운 지하철이 없습니다. 버스로 방문을 부탁 드립니다.',
    isBus: true,
    busDetail: '까치가 직접 다리를 만들어서 안내해줍니다.',
    hasParking: true,
    parkingDetail: '차를 가지고 올 수 없습니다.',
  },
  accountInfo: {
    title: '마음 전하실 곳',
    content:
      '부득이한 사정으로 식장에 오시지 못하지만 마음을 직접적으로 전하고 싶으시다면 이용할 수 있습니다.',
    groom: {
      bankName: '신한',
      accountNumber: '123123123123',
      accountHolderName: '견우',
    },
    bride: {
      bankName: '한국',
      accountNumber: '123123123123',
      accountHolderName: '직녀',
    },
    groomFather: {
      bankName: '',
      accountNumber: '',
      accountHolderName: '',
    },
    groomMother: {
      bankName: '',
      accountNumber: '',
      accountHolderName: '',
    },
    brideFather: {
      bankName: '우리',
      accountNumber: '123123123123',
      accountHolderName: '옥활',
    },
    brideMother: {
      bankName: '',
      accountNumber: '',
      accountHolderName: '',
    },
  },
  guestNotice: {
    title: '안내사항',
    content:
      '무게가 너무 무거우면 까치가 못 버틸 수도 있습니다. 다들 구름빵을 드시고 와주시길 바랍니다.',
  },
  guestBook: {
    title: '방명록',
    masterPassword: '1234',
  },
  guestSnapshots: {
    title: '게스트 스냅',
    masterPassword: '1234',
  },
  shareUrlStyle: {
    thumbnailUrl: '아무URL',
    title: '',
    content: '',
  },
  componentOrders: [
    { componentType: 'INVITATION_MESSAGE', order: 0 },
    { componentType: 'GROOM_BRIDE_PROFILE', order: 1 },
    { componentType: 'WEDDING_DATE', order: 2 },
    { componentType: 'PHOTO_GALLERY', order: 3 },
    { componentType: 'VIDEO_GALLERY', order: 4 },
    { componentType: 'LOCATION_GUIDE', order: 5 },
    { componentType: 'ACCOUNT_INFO', order: 6 },
    { componentType: 'GUEST_NOTICE', order: 7 },
    { componentType: 'GUEST_BOOK', order: 8 },
    { componentType: 'GUEST_SNAPSHOTS', order: 9 },
    { componentType: 'SHARE_URL_STYLE', order: 10 },
  ],
};

const templateMainPageSettings: Record<string, PutCardReq['mainPageSetting']> = {
  '1': {
    picture: '',
    font: 'BBB0003',
    lettering: ['THE START OF \nOUR FORERVER'],
    letteringColor: '#FFDF3E',
  },
  '2': {
    picture: '',
    font: 'Ownglyph Baek Subin',
    lettering: ['By your side'],
    letteringColor: '#fffffe',
  },
  '3': {
    picture: '',
    font: 'White Angelica',
    lettering: ['Dear My \nSoulmate'],
    letteringColor: '#fffffe',
  },
  '4': {
    picture: '',
    font: 'Diphylleia',
    lettering: ['끝나지 않을\n행복의 시작'],
    letteringColor: '#fffffe',
  },
  '5': {
    picture: '',
    font: 'White Angelica',
    lettering: ['Endless Love'],
    letteringColor: '#65E052',
  },
  '6': {
    picture: '',
    font: 'White Angelica',
    lettering: ['We Ar\nGetting Married'],
    letteringColor: '#FF0808',
  },
  '7': {
    picture: '',
    font: 'KoreanCNMM',
    lettering: ['Our\nLovely\nDays'],
    letteringColor: '#fefa66',
  },
  '8': {
    picture: '',
    font: 'Ownglyph Kundo',
    lettering: ['Wedding'],
    letteringColor: '#fffffe',
  },
};

export const getTemplateById = (id: string): PutCardReq => {
  return {
    ...templateBase,
    templateId: id,
    mainPageSetting: templateMainPageSettings[id],
  };
};
