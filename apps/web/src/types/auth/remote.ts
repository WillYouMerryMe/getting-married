import { Provider } from './client';

export interface PostLoginReq {
  code: string;
  provider: Provider;
}

export interface PostLoginRes {
  accessToken: string;
  refreshToken: string;
  provider: Provider;
}
