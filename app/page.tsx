'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { allTests } from '@/lib/tests';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  const { t, lang } = useI18n();

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroEmoji}>{t.heroEmoji}</div>
          <h1 className={styles.heroTitle}>
            {t.heroTitle.split('\\n').map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>
          <p className={styles.heroSub}>{t.heroSub}</p>
          <a href="#tests" className="btn-primary" style={{ marginTop: 16 }}>
            {t.heroBtn}
          </a>
        </section>

        {/* Tests */}
        <section id="tests" className={styles.section}>
          <h2 className="section-title">{t.testsTitle}</h2>
          <p className={styles.sectionSub}>{t.testsSub}</p>

          <div className={styles.grid}>
            {allTests.map((test, i) => (
              <Link
                key={test.slug}
                href={`/test/${test.slug}`}
                className={`glass-card ${styles.card}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={styles.cardBadge}
                  style={{ background: test.gradient }}
                >
                  <span className={styles.cardEmoji}>{test.emoji}</span>
                </div>
                <h3 className={styles.cardTitle}>
                  {t[test.nameKey as keyof typeof t]}
                </h3>
                <p className={styles.cardDesc}>
                  {t[test.descKey as keyof typeof t]}
                </p>
                <div className={styles.cardMeta}>
                  <span>{t[test.metaKey as keyof typeof t]}</span>
                  <span>
                    {test.participants.toLocaleString()}{' '}
                    {lang === 'ko' ? '명' : ''}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* AI Animal */}
        <section className={styles.aiSection}>
          <div className="glass-card" style={{ padding: '48px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🤖🐾</div>
            <h2 className="section-title">{t.aiTitle}</h2>
            <p className={styles.sectionSub}>{t.aiSub}</p>
            <Link href="/ai-animal" className="btn-primary" style={{ marginTop: 20, display: 'inline-block' }}>
              {t.aiBtn}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
