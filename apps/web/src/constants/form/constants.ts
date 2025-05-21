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

export const GENDER_MAP = {
  GROOM: '아들',
  BRIDE: '딸',
} as const;
