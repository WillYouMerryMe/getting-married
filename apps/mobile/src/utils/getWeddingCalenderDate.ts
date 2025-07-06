import dayjs from 'dayjs';

export const getWeddingCalenderDate = (date: string) => {
  return dayjs(date).add(9, 'hour').format('YYYYMMDD');
};
