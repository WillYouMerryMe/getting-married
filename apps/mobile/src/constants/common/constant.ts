import { Side } from '@/types/manage/client';

export const ROUTES = {
  LOGIN: '/',
  HOME: '/home',
  MANAGE: '/attendee',
  INVITE: '/attendee/invite',
  INVITATION: '/invitation',
  GUESTBOOK: '/guestbook',
  SHOP: '/shop',
  MY: '/my',
};

export const SIDE: Record<Side, string> = {
  GROOM: '신랑',
  BRIDE: '신부',
};

export const TOKEN = {
  ACCESS: 'access-token',
  REFRESH: 'refresh-token',
};

export const KEY = {
  CARD_LIST: 'card-list',
};
