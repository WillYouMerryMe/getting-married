'use client';

import { ROUTES } from '@/constants/common/constant';
import AppLayout from '@/layouts/AppLayout';
import { getTemplateFontStyle } from '@merried/design-system';
import { Column, LoginButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const Login = () => {
  const router = useRouter();

  return (
    <AppLayout>
      <StyledLogin>
        <Text>우리 결혼할래요?</Text>
        <Column alignItems="center" width="100%" gap={12}>
          <LoginButton
            type="KAKAO"
            onClick={() => {
              router.push(ROUTES.HOME);
            }}
          />
          <LoginButton type="NAVER" onClick={() => {}} />
        </Column>
      </StyledLogin>
    </AppLayout>
  );
};

export default Login;

const StyledLogin = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
  padding: 180px 12px 97px;
  background-image: url('loginBackground.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  ${getTemplateFontStyle('template2', 'KoreanCNMM')}
  color: #FF9D94;
`;
