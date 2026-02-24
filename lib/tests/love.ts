import type { Test } from './index';

export const loveTest: Test = {
  slug: 'love',
  nameKey: 'testLoveName',
  descKey: 'testLoveDesc',
  metaKey: 'testLoveMeta',
  emoji: '💕',
  gradient: 'var(--grad-love)',
  bgImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
  participants: 98421,
  questions: [
    { id: 1, text: '연인에게 하루에도 여러 번 연락하는 편이다.', textEn: 'I contact my partner multiple times a day.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 2, text: '연인의 작은 변화도 금방 눈치채는 편이다.', textEn: "I quickly notice small changes in my partner's appearance or mood.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 3, text: '연인과 함께하는 시간보다 혼자만의 시간도 중요하다.', textEn: 'Personal time apart from my partner is just as important as time together.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 4, text: '연인에게 솔직하게 내 감정을 표현하는 것이 어렵다.', textEn: 'I find it difficult to express my feelings openly to my partner.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 5, text: '연인의 기분이 안 좋으면 내 기분도 영향을 받는다.', textEn: "When my partner is in a bad mood, it affects my mood too.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 6, text: '연애보다 커리어나 자기계발이 우선인 시기가 있다.', textEn: "There are times when career or self-improvement takes priority over romance.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 7, text: '처음 만난 사람에게도 자연스럽게 호감을 표현한다.', textEn: 'I naturally express interest to someone I just met.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 8, text: '연인이 약속을 어기면 쉽게 넘어가지 못한다.', textEn: "I have a hard time letting it go when my partner breaks a promise.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 9, text: '연인과의 갈등을 직접 대화로 해결하려 한다.', textEn: 'I try to resolve conflicts with my partner through direct conversation.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 10, text: '미래 계획(결혼, 동거 등)을 일찍부터 이야기하는 편이다.', textEn: 'I like to discuss future plans (marriage, living together) early in a relationship.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
  ],
  results: [
    { id: 'passionate', title: '🔥 열정파 연인', titleEn: '🔥 The Passionate Lover', emoji: '🔥', description: '사랑에 빠지면 전력투구! 연인에게 모든 것을 쏟아붓는 열정적인 타입. 가끔 너무 강렬해서 상대방이 놀랄 수 있어요.', descriptionEn: "When you fall in love, you go all in! You pour everything into your partner. Sometimes your intensity can surprise them.", compatibility: '궁합 최고: 안정파 연인', compatibilityEn: 'Best match: The Steady Lover', color: 'var(--grad-love)' },
    { id: 'caring', title: '🌸 다정파 연인', titleEn: '🌸 The Caring Lover', emoji: '🌸', description: '세심하고 배려심이 깊은 당신. 연인의 작은 것 하나도 신경 쓰며 따뜻한 사랑을 전합니다.', descriptionEn: "Attentive and considerate, you notice every little thing about your partner and offer warm, tender love.", compatibility: '궁합 최고: 활발파 연인', compatibilityEn: 'Best match: The Vibrant Lover', color: 'var(--grad-love)' },
    { id: 'independent', title: '🦅 독립파 연인', titleEn: '🦅 The Independent Lover', emoji: '🦅', description: '자기 자신을 사랑할 줄 아는 당신. 연애를 하면서도 자신의 공간과 시간을 중요하게 여깁니다.', descriptionEn: "You love yourself first. Even in a relationship, you value your personal space and time deeply.", compatibility: '궁합 최고: 독립파 연인', compatibilityEn: 'Best match: Another Independent', color: 'var(--grad-love)' },
    { id: 'steady', title: '🌿 안정파 연인', titleEn: '🌿 The Steady Lover', emoji: '🌿', description: '느리지만 확실한 사랑을 전하는 타입. 신뢰와 안정감을 기반으로 깊고 오래가는 관계를 만들어갑니다.', descriptionEn: "Slow but certain, you build love on trust and stability, creating deep, long-lasting relationships.", compatibility: '궁합 최고: 열정파 연인', compatibilityEn: 'Best match: The Passionate Lover', color: 'var(--grad-love)' },
  ],
  calculateResult: (answers) => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = answers.length * 3;
    const ratio = total / max;
    if (ratio >= 0.75) return 'passionate';
    if (ratio >= 0.55) return 'caring';
    if (ratio >= 0.35) return 'independent';
    return 'steady';
  },
};
