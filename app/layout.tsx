import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'TestMate — 나를 알아가는 재미있는 여정',
  description: 'MZ세대가 선택한 바이럴 심리 테스트. MBTI, 연애 유형, 성격 동물, 퍼스널컬러 등 6종 테스트를 즐기고 결과를 공유하세요!',
  keywords: ['심리테스트', 'MBTI 테스트', '연애 유형', '성격 동물', '퍼스널컬러', '스트레스 테스트', '첫인상', 'TestMate'],
  authors: [{ name: 'TestMate' }],
  openGraph: {
    title: 'TestMate — 나를 알아가는 재미있는 여정',
    description: 'MZ세대가 선택한 바이럴 심리 테스트',
    type: 'website',
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
      </body>
    </html>
  );
}
