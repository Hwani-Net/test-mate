'use client';

import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useState, useRef, useCallback, Suspense } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { getTestBySlug, allTests } from '@/lib/tests';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

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
    ctx.fillText(lang === 'ko' ? result.title : result.titleEn, 300, 280);

    // Nickname
    if (nickname) {
      ctx.font = '20px Inter, sans-serif';
      ctx.fillStyle = '#c4b5fd';
      ctx.fillText(nickname, 300, 320);
    }

    // Description (word wrap)
    ctx.font = '16px Inter, sans-serif';
    ctx.fillStyle = '#d4d4e8';
    const desc = lang === 'ko' ? result.description : result.descriptionEn;
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
  }, [result, nickname, lang]);

  const downloadCard = () => {
    if (!canvasRef.current) return;
    const link = document.createElement('a');
    link.download = `testmate-${slug}-result.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({
        title: `TestMate — ${lang === 'ko' ? result?.title : result?.titleEn}`,
        text: lang === 'ko' ? result?.description : result?.descriptionEn,
        url: window.location.href,
      });
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
            {lang === 'ko' ? result.title : result.titleEn}
          </h1>
          <p className={styles.resultDesc}>
            {lang === 'ko' ? result.description : result.descriptionEn}
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
            <button className={styles.shareBtn} onClick={shareNative}>
              📤 {t.shareCopy.includes('복') ? '공유' : 'Share'}
            </button>
            <button className={styles.shareBtn} onClick={copyLink}>
              🔗 {copied ? t.copySuccess : t.shareCopy}
            </button>
          </div>
        </div>

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
