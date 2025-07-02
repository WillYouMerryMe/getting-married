import dayjs from 'dayjs';

export const getHour = (isoString: string) => {
  return dayjs(isoString).format('HH:mm');
};
