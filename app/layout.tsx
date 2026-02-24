import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';

const BASE_URL = 'https://testmate-app.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'TestMate — 나를 알아가는 재미있는 여정',
  description:
    'MZ세대가 선택한 바이럴 심리 테스트. MBTI, 연애 유형, 성격 동물, 퍼스널컬러 등 6종 테스트를 즐기고 결과를 공유하세요!',
  keywords: [
    '심리테스트',
    'MBTI 테스트',
    '연애 유형',
    '성격 동물',
    '퍼스널컬러',
    '스트레스 테스트',
    '첫인상',
    'TestMate',
    'AI 동물상',
  ],
  authors: [{ name: 'TestMate' }],
  openGraph: {
    title: 'TestMate — 나를 알아가는 재미있는 여정',
    description: 'MZ세대가 선택한 바이럴 심리 테스트. 6종 심리 테스트 + AI 동물상 분석!',
    type: 'website',
    url: BASE_URL,
    siteName: 'TestMate',
    images: [
      {
        url: '/api/og?title=TestMate&sub=나를 알아가는 재미있는 여정&emoji=🧪',
        width: 1200,
        height: 630,
        alt: 'TestMate 심리 테스트',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TestMate — 나를 알아가는 재미있는 여정',
    description: 'MZ세대가 선택한 바이럴 심리 테스트',
    images: ['/api/og?title=TestMate&sub=나를 알아가는 재미있는 여정&emoji=🧪'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#a855f7',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('theme');
                  if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9200560771587224"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
