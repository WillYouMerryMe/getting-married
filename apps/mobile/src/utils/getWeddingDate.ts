import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

export const getWeddingDate = (date: string) => {
  return dayjs(date).add(9, 'hour').format('YYYY. MM. DD ddd');
};
