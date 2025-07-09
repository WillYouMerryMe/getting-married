import { Attendee } from './client';

type MealPerference = 'PLANNED' | 'SKIP' | 'UNDECIDED';

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
  mealPreference: MealPerference;
}

export interface PostAttendeeReq {
  cardId: string;
  side: 'GROOM' | 'BRIDE';
  name: string;
  phoneNumber: string;
  numberOfAttendees: number;
  isAttending: boolean;
  hasSentGift: boolean;
  mealPreference: MealPerference;
}

export type GetAttendee = Attendee[];

export interface GetAttendeeParms {
  isAttendee?: boolean | null;
  hasSentGift?: boolean | null;
  isEating?: boolean | null;
}

export interface PatchAttendeeParams {
  attendeeId: string;
  numberOfAttendees: number;
  isAttending: boolean;
  hasSentGift: boolean;
  mealPreference: MealPerference;
}
