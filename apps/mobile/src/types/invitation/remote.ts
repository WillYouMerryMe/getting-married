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
