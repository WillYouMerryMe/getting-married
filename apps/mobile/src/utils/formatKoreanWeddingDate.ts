import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

export const formatKoreanWeddingDate = (isoDate: string) => {
  const d = dayjs(isoDate).add(9, 'hour');
  const year = d.year();
  const month = d.month() + 1;
  const day = d.date();
  const week = d.format('dddd');
  let hour = d.hour();
  const minute = d.minute();
  const ampm = hour < 12 ? '오전' : '오후';
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  const minuteStr = minute === 0 ? '' : ` ${minute}분`;

  return `${year}년 ${month}월 ${day}일 ${week} ${ampm} ${hour}시${minuteStr}`;
};
