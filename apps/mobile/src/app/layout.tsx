/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';
import Provider from './providers/Provider';
import QueryClientProvider from './providers/QueryClientProvider';
import StyledComponentsProvider from './providers/StyledComponentsProvider';
import Head from 'next/head';

export const metadata: Metadata = {
  title: '우리 결혼할래요?',
  description: '요즘 세대, 요즘 결혼을 위한 맞춤 온라인 청첩장 & 하객 관리 서비스',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <body>
        <StyledComponentsProvider>
          <QueryClientProvider>
            <Provider>{children}</Provider>
          </QueryClientProvider>
        </StyledComponentsProvider>
        <script
          type="text/javascript"
          src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer`}
        />
      </body>
    </html>
  );
}
