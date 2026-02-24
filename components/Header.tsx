'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import styles from './Header.module.css';

export default function Header() {
  const { lang, setLang, t } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoEmoji}>🧪</span>
          <span className={styles.logoText}>{t.appName}</span>
        </Link>
        <div className={styles.actions}>
          <button
            className={styles.toggleBtn}
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            aria-label="Toggle language"
          >
            {t.langToggle}
          </button>
          <button
            className={styles.toggleBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
