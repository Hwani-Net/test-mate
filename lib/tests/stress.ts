import type { Test } from './index';

export const stressTest: Test = {
  slug: 'stress',
  nameKey: 'testStressName',
  descKey: 'testStressDesc',
  metaKey: 'testStressMeta',
  emoji: '🧘',
  gradient: 'var(--grad-stress)',
  bgImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
  participants: 55129,
  questions: [
    { id: 1, text: '최근 2주간 잠들기까지 30분 이상 걸린 적이 많다.', textEn: 'In the past 2 weeks, it often took more than 30 min to fall asleep.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 2, text: '사소한 일에도 쉽게 짜증이 난다.', textEn: 'I get easily irritated by small things.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 3, text: '하루가 끝나면 체력이 완전히 바닥난 느낌이다.', textEn: 'By the end of the day, I feel completely drained.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 4, text: '집중력이 예전 같지 않다고 느낀다.', textEn: "My concentration isn't what it used to be.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 5, text: '가까운 사람과도 대화하고 싶지 않을 때가 있다.', textEn: "Sometimes I don't want to talk to even close friends.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 6, text: '주말에도 완전히 쉬는 느낌이 들지 않는다.', textEn: "Even on weekends, I don't feel fully rested.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 7, text: '나를 위한 시간이 부족하다고 느낀다.', textEn: "I feel like I don't have enough time for myself.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 8, text: '별다른 이유 없이 머리가 아프거나 몸이 무겁다.', textEn: 'I often have headaches or feel heavy for no reason.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
  ],
  results: [
    { id: 'danger', title: '🔴 위험 — 지금 쉬세요!', titleEn: '🔴 Danger — Rest Now!', emoji: '🔴', description: '스트레스 지수가 매우 높습니다. 지금 당장 충분한 휴식이 필요해요. 좋아하는 음악 듣기, 산책, 명상 등으로 마음을 달래주세요.', descriptionEn: 'Your stress level is very high. You need rest right now. Try listening to music, taking a walk, or meditating.', color: 'linear-gradient(135deg, #ff6b6b, #ee5a24)' },
    { id: 'warning', title: '🟡 주의 — 관리가 필요해요', titleEn: '🟡 Caution — You Need Care', emoji: '🟡', description: '약간의 스트레스가 쌓이고 있어요. 무리하지 말고 규칙적인 생활과 적절한 휴식을 병행해 보세요.', descriptionEn: "Stress is building up a bit. Don't push too hard — try to maintain regular routines with proper rest.", color: 'linear-gradient(135deg, #ffa726, #ff7043)' },
    { id: 'normal', title: '🟢 양호 — 균형 잡힌 상태', titleEn: '🟢 Good — Well Balanced', emoji: '🟢', description: '스트레스 관리를 잘 하고 계시네요! 현재의 좋은 습관을 유지하면서 자신을 더 아끼세요.', descriptionEn: "You're managing stress well! Keep up your good habits and continue to take care of yourself.", color: 'linear-gradient(135deg, #66bb6a, #43a047)' },
    { id: 'excellent', title: '💚 최고 — 힐링 마스터', titleEn: '💚 Excellent — Healing Master', emoji: '💚', description: '놀라울 정도로 편안한 상태! 당신의 마음 관리 비법을 친구들에게 공유해 주세요 😊', descriptionEn: 'An amazingly relaxed state! Share your mental wellness secrets with your friends 😊', color: 'linear-gradient(135deg, #00c9ff, #92fe9d)' },
  ],
  calculateResult: (answers) => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = answers.length * 3;
    const ratio = total / max;
    if (ratio >= 0.75) return 'danger';
    if (ratio >= 0.5) return 'warning';
    if (ratio >= 0.25) return 'normal';
    return 'excellent';
  },
};
