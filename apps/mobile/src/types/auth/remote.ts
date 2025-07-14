export type LoginType = 'NAVER' | 'KAKAO';

export interface PostLoginReq {
  code: string;
  provider: LoginType;
  redirectUri: string;
}
