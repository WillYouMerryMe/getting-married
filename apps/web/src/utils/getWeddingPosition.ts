import { CaseConfig, StyleConfig } from '@/types/form/client';

const MAPPING: Record<string, CaseConfig> = {
  '1': {
    groom: { top: '54px', left: '22px', font: 'default' },
    bride: { top: '54px', right: '22px', font: 'default' },
    date: { top: '54px', center: true, font: 'defalut' },
  },
  '2': {
    groom_bride: { top: '718px', center: true, font: 'default' },
    date: { top: '741px', center: true, font: 'default' },
  },
  '3': {
    groom: { top: '40px', left: '24px', font: 'name' },
    bride: { top: '40px', right: '24px', font: 'name' },
    subtitle: { top: '437px', center: true, font: 'subTitle' },
  },
  '4': {
    groom_bride: { top: '586px', center: true, font: 'name' },
    date: { top: '735px', center: true, font: 'date' },
  },
  '5': {
    groom_bride: { top: '688px', center: true, font: 'name' },
    date: { top: '720px', center: true, font: 'date' },
  },
  '6': {
    date: { top: '706px', center: true, font: 'date' },
  },
  '8': {
    groom: { top: '732px', left: '33px', font: 'default' },
    bride: { top: '732px', right: '33px', font: 'default' },
    date: { top: '732px', center: true, font: 'defalut' },
  },
};

const getWeddingPosition = (id: string): (StyleConfig | null)[] => {
  const result: (StyleConfig | null)[] = [null, null, null];
  const config = MAPPING[id];

  if (!config) return result;

  if (config.groom && config.bride) {
    result[0] = config.groom;
    result[1] = config.bride;
  } else if (config.groom_bride) {
    const base = config.groom_bride;
    result[0] = {
      ...base,
      left: undefined,
      right: base.center ? 'calc(52%)' : base.right,
      center: false,
    };
    result[1] = {
      ...base,
      left: base.center ? 'calc(52%)' : base.left,
      right: undefined,
      center: false,
    };
  }

  if (config.date) {
    result[2] = config.date;
  }

  return result;
};

export default getWeddingPosition;
