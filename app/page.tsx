'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { allTests } from '@/lib/tests';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

// Pastel gradient backgrounds for each test card
const cardGradients = [
  'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)', // purple
  'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', // pink
  'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', // yellow
  'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)', // indigo
  'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)', // green
  'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)', // orange
];

export default function Home() {
  const { t, lang } = useI18n();

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroDecorations}>
            <div className={styles.floatingIcon}>🧠</div>
            <div className={styles.floatingIcon}>❤️</div>
            <div className={styles.floatingIcon}>🎨</div>
            <div className={styles.floatingIcon}>✨</div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              ✨ {lang === 'ko' ? '바이럴 심리 테스트' : 'Viral Psychology Tests'}
            </div>
            <h1 className={styles.heroTitle}>
              {t.heroTitle.split('\\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
            <p className={styles.heroSub}>{t.heroSub}</p>
            <div className={styles.heroButtons}>
              <a href="#tests" className={`${styles.heroBtn} ${styles.heroBtnPrimary}`}>
                {t.heroBtn} 🔥
              </a>
              <Link href="/ai-animal" className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}>
                {lang === 'ko' ? '인기 랭킹 확인' : 'View Rankings'} 📊
              </Link>
            </div>
          </div>
        </section>

        {/* Tests Grid */}
        <section id="tests" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.testsTitle}</h2>
            <div className={styles.sectionBadge}>
              🔥 {lang === 'ko' ? '인기 급상승' : 'Trending'}
            </div>
          </div>
          <p className={styles.sectionSub}>{t.testsSub}</p>

          <div className={styles.grid}>
            {allTests.map((test, i) => (
              <Link
                key={test.slug}
                href={`/test/${test.slug}`}
                className={styles.card}
              >
                <div
                  className={styles.cardIconArea}
                  style={{ background: cardGradients[i % cardGradients.length] }}
                >
                  <span className={styles.cardEmoji}>{test.emoji}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {t[test.nameKey as keyof typeof t]}
                  </h3>
                  <p className={styles.cardDesc}>
                    {t[test.descKey as keyof typeof t]}
                  </p>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardMetaItem}>
                      ⏱ {t[test.metaKey as keyof typeof t]}
                    </span>
                    <span className={styles.cardMetaItem}>
                      👥 {test.participants.toLocaleString()}
                      {lang === 'ko' ? '명' : ''}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* AI Animal Banner */}
        <section className={styles.aiBanner}>
          <div className={styles.aiBannerContent}>
            <h2 className={styles.aiBannerTitle}>{t.aiTitle}</h2>
            <p className={styles.aiBannerSub}>{t.aiSub}</p>
            <Link href="/ai-animal" className={styles.aiBannerBtn}>
              🐾 {t.aiBtn}
            </Link>
          </div>
          <div className={styles.aiBannerEmojis}>
            <span className={styles.aiBannerEmoji}>🦊</span>
            <div className={styles.aiBannerBadge}>AI</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
