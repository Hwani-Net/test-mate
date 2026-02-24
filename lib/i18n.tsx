'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'ko' | 'en';

const translations = {
  ko: {
    // Nav
    appName: 'TestMate',
    langToggle: 'EN',
    // Hero
    heroTitle: '나를 알아가는\n재미있는 여정',
    heroEmoji: '🧪',
    heroSub: 'MZ세대가 선택한 바이럴 심리 테스트',
    heroBtn: '테스트 시작하기',
    // Section
    testsTitle: '인기 테스트',
    testsSub: '친구들과 결과를 공유하며 나를 발견해요',
    aiTitle: 'AI 동물상 분석',
    aiSub: '사진 한 장으로 나의 동물상을 알아보세요!',
    aiBtn: '분석하기',
    // Test cards
    testMbtiName: 'MBTI 간이 테스트',
    testMbtiDesc: '나의 성격 유형은 과연?',
    testMbtiMeta: '12문항 · 3분',
    testLoveName: '연애 유형 테스트',
    testLoveDesc: '나는 어떤 연애 스타일일까?',
    testLoveMeta: '10문항 · 3분',
    testAnimalName: '나의 성격 동물',
    testAnimalDesc: '나를 닮은 동물은 무엇일까?',
    testAnimalMeta: '8문항 · 2분',
    testColorName: '퍼스널컬러 테스트',
    testColorDesc: '나에게 어울리는 컬러는?',
    testColorMeta: '10문항 · 3분',
    testStressName: '스트레스 지수 테스트',
    testStressDesc: '지금 내 마음 상태는?',
    testStressMeta: '8문항 · 2분',
    testImpressionName: '첫인상 테스트',
    testImpressionDesc: '나의 첫인상은 어떨까?',
    testImpressionMeta: '8문항 · 2분',
    // Test page
    exitBtn: '나가기',
    prevBtn: '이전',
    nextBtn: '다음',
    startTest: '테스트 시작',
    seeResult: '결과 보기',
    question: '문항',
    of: '/',
    // Result page
    resultTitle: '당신의 결과는...',
    nicknameLabel: '닉네임을 입력하면 결과 카드를 만들어 드려요!',
    nicknamePlaceholder: '닉네임 입력',
    makeCard: '카드 생성하기 ✨',
    shareTitle: '친구에게 공유하기',
    shareKakao: '카카오톡',
    shareX: 'X(트위터)',
    shareCopy: '링크 복사',
    shareDownload: '이미지 저장',
    otherTests: '다른 테스트 해보기',
    participantCount: '명이 참여했어요',
    copySuccess: '링크가 복사되었습니다!',
    // Answer options
    veryYes: '매우 그렇다',
    yes: '그런 편이다',
    no: '아닌 편이다',
    veryNo: '전혀 아니다',
    // AI Animal
    aiPageTitle: 'AI 동물상 분석',
    aiPageSub: '나와 닮은 동물을 AI가 찾아드립니다',
    uploadPrompt: '사진을 업로드하세요',
    uploadSub: '얼굴이 선명하게 보이는 사진이 좋아요',
    analyzing: '분석 중...',
    analyzeBtn: '분석하기',
    retryBtn: '다시 분석하기',
    // Footer
    footerCopy: '© 2026 TestMate. All rights reserved.',
    footerPowered: 'Powered by Gemini AI',
    privacy: '개인정보처리방침',
    terms: '이용약관',
  },
  en: {
    // Nav
    appName: 'TestMate',
    langToggle: '한국어',
    // Hero
    heroTitle: 'A Fun Journey of\nSelf-Discovery',
    heroEmoji: '🧪',
    heroSub: 'Viral Psychology Tests Loved by Gen MZ',
    heroBtn: 'Start a Test',
    // Section
    testsTitle: 'Popular Tests',
    testsSub: 'Share your results with friends and discover yourself',
    aiTitle: 'AI Animal Face Match',
    aiSub: 'Find your spirit animal with just one photo!',
    aiBtn: 'Analyze Now',
    // Test cards
    testMbtiName: 'Quick MBTI Test',
    testMbtiDesc: 'What is your personality type?',
    testMbtiMeta: '12 questions · 3 min',
    testLoveName: 'Love Style Test',
    testLoveDesc: 'What kind of lover are you?',
    testLoveMeta: '10 questions · 3 min',
    testAnimalName: 'Personality Animal',
    testAnimalDesc: 'Which animal matches your personality?',
    testAnimalMeta: '8 questions · 2 min',
    testColorName: 'Personal Color Test',
    testColorDesc: 'Which colors suit you best?',
    testColorMeta: '10 questions · 3 min',
    testStressName: 'Stress Index Test',
    testStressDesc: 'How stressed are you right now?',
    testStressMeta: '8 questions · 2 min',
    testImpressionName: 'First Impression Test',
    testImpressionDesc: 'What first impression do you give?',
    testImpressionMeta: '8 questions · 2 min',
    // Test page
    exitBtn: 'Exit',
    prevBtn: 'Previous',
    nextBtn: 'Next',
    startTest: 'Start Test',
    seeResult: 'See Results',
    question: 'Q',
    of: '/',
    // Result page
    resultTitle: 'Your Result is...',
    nicknameLabel: 'Enter your nickname to create a result card!',
    nicknamePlaceholder: 'Enter nickname',
    makeCard: 'Create Card ✨',
    shareTitle: 'Share with Friends',
    shareKakao: 'KakaoTalk',
    shareX: 'X (Twitter)',
    shareCopy: 'Copy Link',
    shareDownload: 'Save Image',
    otherTests: 'Try Other Tests',
    participantCount: 'people participated',
    copySuccess: 'Link copied!',
    // Answer options
    veryYes: 'Strongly Agree',
    yes: 'Agree',
    no: 'Disagree',
    veryNo: 'Strongly Disagree',
    // AI Animal
    aiPageTitle: 'AI Animal Face Match',
    aiPageSub: 'AI will find the animal that looks most like you',
    uploadPrompt: 'Upload Your Photo',
    uploadSub: 'A photo with a clear face works best',
    analyzing: 'Analyzing...',
    analyzeBtn: 'Analyze',
    retryBtn: 'Try Again',
    // Footer
    footerCopy: '© 2026 TestMate. All rights reserved.',
    footerPowered: 'Powered by Gemini AI',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },
} as const;

type TranslationKeys = keyof typeof translations.ko;
type T = Record<TranslationKeys, string>;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: T;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('ko');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'ko' || stored === 'en') setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] as T }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be inside I18nProvider');
  return ctx;
}
