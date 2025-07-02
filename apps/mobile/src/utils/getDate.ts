import dayjs from 'dayjs';

export const getDate = (isoString: string) => {
  return dayjs(isoString).format('YYYY.MM.DD');
};
