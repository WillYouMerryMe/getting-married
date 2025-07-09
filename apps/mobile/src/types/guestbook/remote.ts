import { GuestBook } from './client';

export interface PostGuestBookCreateReq {
  cardId: string;
  name: string;
  content: string;
}

export type GetGuestBookRes = GuestBook[];
