import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatTemplate05Date = (dateString: string) => {
  const d = dayjs.utc(dateString).tz('Asia/Seoul').locale('en');
  const year = d.year();
  const month = String(d.month() + 1).padStart(2, '0');
  const date = String(d.date()).padStart(2, '0');
  const day = d.format('ddd').toUpperCase();

  const hour = d.format('h');
  const minute = d.format('mm');
  const ampm = d.format('A');

  const timeString = minute === '00' ? `${hour}:00${ampm}` : `${hour}:${minute}${ampm}`;

  return `${year}.${month}.${date} ${day} ${timeString}`;
};
