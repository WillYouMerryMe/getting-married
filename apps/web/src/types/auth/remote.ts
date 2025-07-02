import { Provider } from './client';

export interface PostLoginRes {
  code: string;
  provider: Provider;
}

export interface PostLoginReq {
  accessToken: string;
  refreshToken: string;
  provider: Provider;
}
