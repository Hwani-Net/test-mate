'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';
import { useI18n } from '@/lib/i18n';
import { getTestBySlug } from '@/lib/tests';
import Header from '@/components/Header';
import styles from './page.module.css';

export default function TestPage() {
  const params = useParams();
  const router = useRouter();
  const { t, lang } = useI18n();
  const slug = params.slug as string;
  const test = useMemo(() => getTestBySlug(slug), [slug]);

  const [step, setStep] = useState<'intro' | 'quiz' | 'finish'>('intro');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  if (!test) {
    return (
      <>
        <Header />
        <div className={styles.notFound}>
          <p>테스트를 찾을 수 없습니다.</p>
          <button className="btn-primary" onClick={() => router.push('/')}>
            홈으로
          </button>
        </div>
      </>
    );
  }

  const q = test.questions[currentQ];
  const progress = ((currentQ + 1) / test.questions.length) * 100;

  const handleSelect = (value: number) => {
    setSelectedOption(value);
    // Auto-advance after brief delay
    setTimeout(() => {
      const newAnswers = [...answers];
      newAnswers[currentQ] = value;
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQ < test.questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        // Calculate result and navigate
        const resultId = test.calculateResult(newAnswers);
        router.push(`/test/${slug}/result?r=${resultId}`);
      }
    }, 400);
  };

  const handlePrev = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelectedOption(null);
    }
  };

  // Intro screen
  if (step === 'intro') {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <div className={`glass-card ${styles.introCard}`}>
            <div
              className={styles.introBadge}
              style={{ background: test.gradient }}
            >
              <span style={{ fontSize: 48 }}>{test.emoji}</span>
            </div>
            <h1 className={styles.introTitle}>
              {t[test.nameKey as keyof typeof t]}
            </h1>
            <p className={styles.introDesc}>
              {t[test.descKey as keyof typeof t]}
            </p>
            <p className={styles.introMeta}>
              {t[test.metaKey as keyof typeof t]}
              {' · '}
              {test.participants.toLocaleString()} {t.participantCount}
            </p>
            <button className="btn-primary" onClick={() => setStep('quiz')}>
              {t.startTest}
            </button>
          </div>
        </main>
      </>
    );
  }

  // Quiz screen
  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* Progress */}
        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%`, background: test.gradient }}
            />
          </div>
          <p className={styles.progressText}>
            {t.question} {currentQ + 1} {t.of} {test.questions.length}
          </p>
        </div>

        {/* Question */}
        <div className={`glass-card ${styles.quizCard}`} key={currentQ}>
          <h2 className={styles.questionText}>
            {lang === 'ko' ? q.text : q.textEn}
          </h2>
          <div className={styles.options}>
            {q.options.map((opt, i) => (
              <button
                key={i}
                className={`${styles.option} ${selectedOption === opt.value ? styles.optionSelected : ''}`}
                onClick={() => handleSelect(opt.value)}
                disabled={selectedOption !== null}
              >
                {lang === 'ko' ? opt.label : opt.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className={styles.quizNav}>
          <button
            className="btn-ghost"
            onClick={handlePrev}
            disabled={currentQ === 0}
          >
            {t.prevBtn}
          </button>
          <button className="btn-ghost" onClick={() => router.push('/')}>
            {t.exitBtn}
          </button>
        </div>
      </main>
    </>
  );
}
