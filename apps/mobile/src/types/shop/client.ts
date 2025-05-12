export type Status = 'ATTEND' | 'ABSENT';

export type Paid = 'PAID' | 'UNPAID';

export type Meal = 'MEAL' | 'NOMEAL';

export type Gift = '신세계상품권' | '롯데백화점상품권' | '현대백화점상품권' | '올리브영';

export interface Attendee {
  status: Status;
  paid: Paid;
  meal: Meal;
  gift: Gift;
}

export type ShopStep = '답례품목록' | '답례품전송';
