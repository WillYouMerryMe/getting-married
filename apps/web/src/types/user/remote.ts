import { Provider } from '@/types/auth/client';

export interface getUsersRes {
  email: string;
  nickname: string;
  profileImg: string;
  provider: Provider;
}
