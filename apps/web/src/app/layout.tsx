import Provider from './providers/Provider';
import QueryClientProvider from './providers/QueryClientProvider';
import type { ReactNode } from 'react';
import StyledComponentsRegistry from './providers/StyledComponentsProvider';

export const metadata = {
  title: '우리 결혼할래요?',
  description: '우리 결혼할래요? 의 웹사이트 입니다.',
  icons: {
    icon: '/LogoFull.svg',
  },
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <QueryClientProvider>
            <Provider>{children}</Provider>
          </QueryClientProvider>
        </StyledComponentsRegistry>
        <script
          type="text/javascript"
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer`}
        />
      </body>
    </html>
  );
};

export default RootLayout;
