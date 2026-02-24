'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useState, useRef, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { getTestBySlug, allTests } from '@/lib/tests';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import AdSlot from '@/components/AdSlot';

function ResultContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t, lang } = useI18n();
  const slug = params.slug as string;
  const resultId = searchParams.get('r') || '';
  const test = useMemo(() => getTestBySlug(slug), [slug]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nickname, setNickname] = useState('');
  const [cardGenerated, setCardGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () => test?.results.find((r) => r.id === resultId),
    [test, resultId],
  );

  const testTitle = useMemo(() => {
    if (!test) return '';
    return lang === 'ko'
      ? (t[test.nameKey as keyof typeof t] || test.nameKey)
      : (t[test.nameKey as keyof typeof t] || test.nameKey);
  }, [test, t, lang]);

  const resultTitle = useMemo(() => {
    if (!result) return '';
    return lang === 'ko' ? result.title : result.titleEn;
  }, [result, lang]);

  const resultDesc = useMemo(() => {
    if (!result) return '';
    return lang === 'ko' ? result.description : result.descriptionEn;
  }, [result, lang]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const generateCard = useCallback(() => {
    if (!canvasRef.current || !result) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    canvas.width = 600;
    canvas.height = 800;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 600, 800);
    grad.addColorStop(0, '#1a0533');
    grad.addColorStop(0.5, '#2d1b69');
    grad.addColorStop(1, '#0f0f1a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 800);

    // Decorative circles
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.arc(480, 120, 160, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.arc(120, 680, 120, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // Emoji
    ctx.font = '80px serif';
    ctx.textAlign = 'center';
    ctx.fillText(result.emoji, 300, 200);

    // Result title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Inter, sans-serif';
    ctx.fillText(resultTitle, 300, 280);

    // Nickname
    if (nickname) {
      ctx.font = '20px Inter, sans-serif';
      ctx.fillStyle = '#c4b5fd';
      ctx.fillText(nickname, 300, 320);
    }

    // Description (word wrap)
    ctx.font = '16px Inter, sans-serif';
    ctx.fillStyle = '#d4d4e8';
    const desc = resultDesc;
    const words = desc.split(' ');
    let line = '';
    let y = 380;
    for (const word of words) {
      const testLine = line + word + ' ';
      if (ctx.measureText(testLine).width > 460) {
        ctx.fillText(line.trim(), 300, y);
        line = word + ' ';
        y += 28;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), 300, y);

    // Watermark
    ctx.font = '14px Inter, sans-serif';
    ctx.fillStyle = '#6060a0';
    ctx.fillText('testmate.app', 300, 760);

    setCardGenerated(true);
  }, [result, nickname, resultTitle, resultDesc]);

  const downloadCard = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `testmate-${slug}-result.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: 'copy_link',
        content_type: 'test_result',
        item_id: `${slug}_${resultId}`,
      });
    }
  };

  const shareKakao = () => {
    if (typeof window === 'undefined') return;
    const Kakao = (window as any).Kakao;
    if (!Kakao?.isInitialized?.()) {
      // Kakao SDK not loaded, fallback to URL scheme
      window.open(
        `https://story.kakao.com/share?url=${encodeURIComponent(shareUrl)}`,
        '_blank',
        'noopener,noreferrer'
      );
      return;
    }
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `TestMate — ${resultTitle}`,
        description: resultDesc,
        imageUrl: `https://testmate-wheat.vercel.app/api/og?title=${encodeURIComponent(resultTitle)}&sub=${encodeURIComponent(testTitle)}&emoji=${encodeURIComponent(result?.emoji || '🧪')}`,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: lang === 'ko' ? '나도 테스트하기' : 'Take the Test',
          link: {
            mobileWebUrl: `https://testmate-wheat.vercel.app/test/${slug}`,
            webUrl: `https://testmate-wheat.vercel.app/test/${slug}`,
          },
        },
      ],
    });
    // GA4 event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: 'kakao',
        content_type: 'test_result',
        item_id: `${slug}_${resultId}`,
      });
    }
  };

  const shareX = () => {
    const text = lang === 'ko'
      ? `나의 ${testTitle} 결과: ${resultTitle}! 🧪 나도 해보기 →`
      : `My ${testTitle} result: ${resultTitle}! 🧪 Try it →`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
    // GA4 event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: 'twitter',
        content_type: 'test_result',
        item_id: `${slug}_${resultId}`,
      });
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `TestMate — ${resultTitle}`,
        text: resultDesc,
        url: window.location.href,
      });
      // GA4 event
      if ((window as any).gtag) {
        (window as any).gtag('event', 'share', {
          method: 'native',
          content_type: 'test_result',
          item_id: `${slug}_${resultId}`,
        });
      }
    }
  };

  if (!test || !result) {
    return (
      <div className={styles.notFound}>
        <p>결과를 찾을 수 없습니다.</p>
        <button className="btn-primary" onClick={() => router.push('/')}>홈으로</button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* Result card */}
        <div className={`glass-card ${styles.resultCard}`}>
          <p className={styles.resultLabel}>{t.resultTitle}</p>
          <div className={styles.emojiWrap}>{result.emoji}</div>
          <h1 className={styles.resultTitle}>
            {resultTitle}
          </h1>
          <p className={styles.resultDesc}>
            {resultDesc}
          </p>
        </div>

        {/* Nickname + Card gen */}
        <div className={`glass-card ${styles.cardSection}`}>
          <p className={styles.nicknameLabel}>{t.nicknameLabel}</p>
          <div className={styles.nicknameRow}>
            <input
              className={styles.nicknameInput}
              placeholder={t.nicknamePlaceholder}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={20}
            />
            <button className="btn-primary" onClick={generateCard}>
              {t.makeCard}
            </button>
          </div>
          <canvas
            ref={canvasRef}
            className={styles.canvas}
            style={{ display: cardGenerated ? 'block' : 'none' }}
          />
          {cardGenerated && (
            <button className="btn-ghost" onClick={downloadCard} style={{ marginTop: 12 }}>
              {t.shareDownload}
            </button>
          )}
        </div>

        {/* Share */}
        <div className={`glass-card ${styles.shareSection}`}>
          <h3 className={styles.shareTitle}>{t.shareTitle}</h3>
          <div className={styles.shareGrid}>
            <button className={`${styles.shareBtn} ${styles.kakaoBtn}`} onClick={shareKakao}>
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor"><path d="M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.726.914 2.381 1.121.655 2.438.152 2.438.152 3.218-.448 37.27-24.356 43.141-28.542 6.335.936 12.877 1.443 19.54 1.443C185.438 200.6 232 163.887 232 118.6 232 72.713 185.438 36 128 36z"/></svg>
              {t.shareKakao}
            </button>
            <button className={`${styles.shareBtn} ${styles.xBtn}`} onClick={shareX}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              {t.shareX}
            </button>
            <button className={`${styles.shareBtn} ${styles.copyBtn}`} onClick={copyLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              {copied ? t.copySuccess : t.shareCopy}
            </button>
            {typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'share' in navigator && (
              <button className={`${styles.shareBtn} ${styles.nativeBtn}`} onClick={shareNative}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                {lang === 'ko' ? '더 보기' : 'More'}
              </button>
            )}
          </div>
        </div>

        {/* 🔵 AdSense — 공유 섹션과 다른 테스트 사이 (가장 클릭율 높음) */}
        <AdSlot format="rectangle" style={{ maxWidth: 400, margin: '8px auto 16px' }} />

        {/* Other tests */}
        <div className={styles.otherSection}>
          <h3 className={styles.otherTitle}>{t.otherTests}</h3>
          <div className={styles.otherGrid}>
            {allTests
              .filter((tt) => tt.slug !== slug)
              .slice(0, 3)
              .map((tt) => (
                <Link key={tt.slug} href={`/test/${tt.slug}`} className={`glass-card ${styles.otherCard}`}>
                  <span style={{ fontSize: 28 }}>{tt.emoji}</span>
                  <span className={styles.otherName}>
                    {t[tt.nameKey as keyof typeof t]}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </main>
      {/* 🔵 AdSense — 페이지 하단 */}
      <AdSlot format="horizontal" style={{ maxWidth: 728, margin: '0 auto 16px' }} />
      <Footer />
    </>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
