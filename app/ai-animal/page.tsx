'use client';

import { useState, useRef } from 'react';
import { useI18n } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

interface AnalysisResult {
  animal: string;
  animalEn: string;
  animalEmoji: string;
  match: number;
  traits: string[];
  description: string;
  compatibleAnimal: string;
  compatibleEmoji: string;
  charm: string;
}

export default function AiAnimalPage() {
  const { t } = useI18n();
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(f);
    setResult(null);
    setError(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f || !f.type.startsWith('image/')) return;
    setFile(f);
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result as string);
    reader.readAsDataURL(f);
    setResult(null);
    setError(null);
  };

  const analyze = async () => {
    if (!file) return;
    setAnalyzing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('/api/analyze-animal', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || '분석에 실패했습니다.');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '분석에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setAnalyzing(false);
    }
  };

  const retry = () => {
    setImage(null);
    setFile(null);
    setResult(null);
    setError(null);
    setAnalyzing(false);
  };

  const share = async () => {
    if (!result) return;
    const text = `나는 ${result.animalEmoji} ${result.animal}! (${result.match}% 일치)\n"${result.charm}"\n\n#TestMate #동물상테스트 #AI동물상분석`;
    if (navigator.share) {
      await navigator.share({ title: 'AI 동물상 분석 결과', text });
    } else {
      await navigator.clipboard.writeText(text);
      alert('결과가 클립보드에 복사됐어요! 🎉');
    }
  };

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={`glass-card ${styles.card}`}>
          <h1 className={styles.title}>{t.aiPageTitle}</h1>
          <p className={styles.sub}>{t.aiPageSub}</p>

          {/* Upload zone */}
          {!image && !result && (
            <div
              className={styles.uploadZone}
              onClick={() => fileRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <span style={{ fontSize: 56 }}>📸</span>
              <p className={styles.uploadText}>{t.uploadPrompt}</p>
              <p className={styles.uploadSub}>{t.uploadSub}</p>
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFile}
                style={{ display: 'none' }}
              />
            </div>
          )}

          {/* Preview + analyze button */}
          {image && !result && (
            <div className={styles.previewWrap}>
              <img src={image} alt="Preview" className={styles.preview} />
              {error && <p className={styles.error}>{error}</p>}
              <button className="btn-primary" onClick={analyze} disabled={analyzing}>
                {analyzing ? (
                  <span className={styles.loadingRow}>
                    <span className={styles.spinner} />
                    {t.analyzing}
                  </span>
                ) : t.analyzeBtn}
              </button>
              <button className="btn-ghost" onClick={retry} style={{ marginTop: 8 }}>
                다른 사진 선택
              </button>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className={styles.resultWrap}>
              {/* Big emoji */}
              <div className={styles.resultEmoji}>{result.animalEmoji}</div>

              {/* Match bar */}
              <div className={styles.matchRow}>
                <span className={styles.matchLabel}>일치율</span>
                <div className={styles.matchBar}>
                  <div
                    className={styles.matchFill}
                    style={{ width: `${result.match}%` }}
                  />
                </div>
                <span className={styles.matchNum}>{result.match}%</span>
              </div>

              <h2 className={styles.resultTitle}>
                {result.animal}
              </h2>
              <p className={styles.charm}>✨ {result.charm}</p>

              {/* Traits */}
              <div className={styles.traits}>
                {result.traits.map((trait) => (
                  <span key={trait} className={styles.trait}>#{trait}</span>
                ))}
              </div>

              {/* Description */}
              <p className={styles.description}>{result.description}</p>

              {/* Compatible */}
              <div className={styles.compatible}>
                <span className={styles.compatibleLabel}>잘 맞는 동물상</span>
                <span className={styles.compatibleValue}>
                  {result.compatibleEmoji} {result.compatibleAnimal}
                </span>
              </div>

              {/* Buttons */}
              <div className={styles.btnRow}>
                <button className="btn-primary" onClick={share}>
                  결과 공유하기 🔗
                </button>
                <button className="btn-ghost" onClick={retry}>
                  {t.retryBtn}
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
