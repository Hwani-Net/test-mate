'use client';

import { useEffect } from 'react';

interface AdSlotProps {
  slotId?: string;
  style?: React.CSSProperties;
  className?: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSlot({
  slotId = '1234567890', // 실제 슬롯 ID로 교체 필요 (AdSense 대시보드에서 발급)
  style,
  className,
  format = 'auto',
}: AdSlotProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // AdSense not loaded (dev env)
    }
  }, []);

  return (
    <div
      className={className}
      style={{
        display: 'block',
        textAlign: 'center',
        margin: '16px auto',
        ...style,
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9200560771587224"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
