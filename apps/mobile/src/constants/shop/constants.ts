import { Meal, Paid, Status } from '@/types/shop/client';

export const STATUS_OPTIONS = [
  { value: 'ATTEND', label: '참석' },
  { value: 'ABSENT', label: '불참석' },
];

export const STATUS: Record<Status, string> = {
  ATTEND: '참석',
  ABSENT: '불참석',
};

export const PAID_OPTIONS = [
  { value: 'PAID', label: '축의금 O' },
  { value: 'UNPAID', label: '축의금 X' },
];

export const PAID: Record<Paid, string> = {
  PAID: '축의금 O',
  UNPAID: '축의금 X',
};

export const MEAL_OPTIONS = [
  { value: 'MEAL', label: '식권 O' },
  { value: 'NOMEAL', label: '식권 X' },
];

export const MEAL: Record<Meal, string> = {
  MEAL: '식권 O',
  NOMEAL: '식권 X',
};
