export const GENDER_MAP = {
  SON: '아들',
  DAUGHTER: '딸',
} as const;

export const TRANSPORT_TYPES = ['버스', '지하철', '자가용'] as const;

export type TransportType = (typeof TRANSPORT_TYPES)[number];
