'use client';

import { useState, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function AiAnimalPage() {
  const { t } = useI18n();
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };

  const analyze = async () => {
    if (!image) return;
    setAnalyzing(true);
    // Placeholder: in real app, call Gemini Vision API
    await new Promise((r) => setTimeout(r, 2000));
    const animals = ['🐶 강아지상', '🐱 고양이상', '🦊 여우상', '🐻 곰상', '🐰 토끼상', '🦁 사자상'];
    setResult(animals[Math.floor(Math.random() * animals.length)]);
    setAnalyzing(false);
  };

  const retry = () => {
    setImage(null);
    setResult(null);
    setAnalyzing(false);
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={`glass-card ${styles.card}`}>
          <h1 className={styles.title}>{t.aiPageTitle}</h1>
          <p className={styles.sub}>{t.aiPageSub}</p>

          {!image && !result && (
            <div className={styles.uploadZone} onClick={() => fileRef.current?.click()}>
              <span style={{ fontSize: 48 }}>📸</span>
              <p className={styles.uploadText}>{t.uploadPrompt}</p>
              <p className={styles.uploadSub}>{t.uploadSub}</p>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                style={{ display: 'none' }}
              />
            </div>
          )}

          {image && !result && (
            <div className={styles.previewWrap}>
              <img src={image} alt="Preview" className={styles.preview} />
              <button className="btn-primary" onClick={analyze} disabled={analyzing}>
                {analyzing ? t.analyzing : t.analyzeBtn}
              </button>
            </div>
          )}

          {result && (
            <div className={styles.resultWrap}>
              <div className={styles.resultEmoji}>
                {result.split(' ')[0]}
              </div>
              <h2 className={styles.resultTitle}>{result}</h2>
              <button className="btn-ghost" onClick={retry} style={{ marginTop: 20 }}>
                {t.retryBtn}
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
