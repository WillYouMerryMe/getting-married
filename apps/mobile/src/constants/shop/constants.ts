import { Gift, Meal, Paid, Status } from '@/types/shop/client';

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

export const GIFT: Record<Gift, string> = {
  신세계상품권: '신세계상품권 1만원권',
  롯데백화점상품권: '롯데백화점 상품권 1만원권',
  현대백화점상품권: '현대백화점 상품권 1만원권',
  올리브영: '올리브영 모바일 금액권 1만원권',
};

export const GIFT_KEYS = Object.keys(GIFT) as (keyof typeof GIFT)[];
