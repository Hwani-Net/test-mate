'use client';

import { useI18n } from '@/lib/i18n';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>{t.footerCopy}</p>
        <p className={styles.powered}>{t.footerPowered}</p>
      </div>
    </footer>
  );
}
