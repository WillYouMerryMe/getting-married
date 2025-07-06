import dayjs from "dayjs";

const DAY_MAP = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const formatDateToDotYMDWithDay = (dateString: string) => {
  const d = dayjs(dateString);
  const year = d.year();
  const month = (d.month() + 1).toString().padStart(2, '0');
  const date = d.date().toString().padStart(2, '0');
  const day = DAY_MAP[d.day()];

  return `${year}.${month}.${date} ${day}`;
};
