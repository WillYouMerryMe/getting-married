import { Attendee } from './client';

export interface PostAccountReq {
  cardId: string;
  name: string;
  phoneNumber: string;
}

export interface PostIntentionReq {
  cardId: string;
  side: 'GROOM' | 'BRIDE';
  name: string;
  phoneNumber: string;
  numberOfAttendees: number;
  mealPreference: 'PLANNED' | 'SKIP' | 'UNDECIDED';
}

export type GetAttendee = Attendee[];

export interface GetAttendeeParms {
  isAttendee?: boolean | null;
  hasSentGift?: boolean | null;
  isEating?: boolean | null;
}
