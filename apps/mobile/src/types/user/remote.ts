import { LoginType } from '../auth/remote';

export interface GetUserRes {
  email: string;
  nickname: string;
  profileImg: string;
  provider: LoginType;
}
