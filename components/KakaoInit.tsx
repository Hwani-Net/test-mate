'use client';

import Script from 'next/script';

const KAKAO_JS_KEY = ''; // TODO: Replace with actual Kakao JS key

export default function KakaoInit() {
  if (!KAKAO_JS_KEY) return null;

  return (
    <Script
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
      integrity="sha384-DKYJZ8NLiK8MN4/C5P2ezmFnkrWRG6OvOOCAhwPGKmUKEXWBkqZynJam2V2mMpm+"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && (window as any).Kakao) {
          (window as any).Kakao.init(KAKAO_JS_KEY);
        }
      }}
    />
  );
}
