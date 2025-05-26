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
  { src: '/IconTMap.svg', name: '티맵' },
  { src: '/IconKakaoMap.svg', name: '카카오맵' },
];

export const TRANSPORT_TYPES = ['bus', 'subway', 'car'] as const;

export const TRANSPORT_MAP: Record<string, string> = {
  bus: '버스',
  subway: '지하철',
  car: '자가용',
};

export type TransportType = (typeof TRANSPORT_TYPES)[number];
