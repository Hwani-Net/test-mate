import type { Test } from './index';

export const mbtiTest: Test = {
  slug: 'mbti',
  nameKey: 'testMbtiName',
  descKey: 'testMbtiDesc',
  metaKey: 'testMbtiMeta',
  emoji: '🧠',
  gradient: 'var(--grad-mbti)',
  bgImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  participants: 142853,
  questions: [
    { id: 1, text: '처음 만난 사람과도 쉽게 대화를 시작하는 편이다.', textEn: 'I easily start conversations with people I just met.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 2, text: '약속을 잡을 때 즉흥적으로 결정하는 것을 선호한다.', textEn: 'I prefer making plans spontaneously rather than in advance.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 3, text: '감정보다는 논리와 사실에 따라 결정을 내린다.', textEn: 'I make decisions based on logic and facts rather than emotions.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 4, text: '새로운 환경에 빠르게 적응하는 편이다.', textEn: 'I adapt quickly to new environments.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 5, text: '파티나 모임 이후에는 혼자만의 시간이 필요하다.', textEn: 'After parties or gatherings I need alone time to recharge.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 6, text: '계획을 세우고 그에 따라 움직이는 것이 편하다.', textEn: 'I feel comfortable making plans and following them.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 7, text: '다른 사람의 감정과 기분에 민감하게 반응한다.', textEn: "I'm sensitive to other people's emotions and moods.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 8, text: '현실보다는 가능성과 미래에 대해 생각하는 것을 즐긴다.', textEn: 'I enjoy thinking about possibilities and the future rather than current reality.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 9, text: '갈등이 생기면 바로 해결하려고 하는 편이다.', textEn: 'When conflicts arise, I try to resolve them immediately.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 10, text: '주변이 정리되어 있어야 마음이 편하다.', textEn: 'I feel at ease when my surroundings are organized.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 11, text: '새로운 아이디어를 생각하는 것을 즐긴다.', textEn: 'I enjoy coming up with new ideas.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 12, text: '한 번 결정을 내리면 쉽게 바꾸지 않는 편이다.', textEn: 'Once I make a decision, I rarely change my mind.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
  ],
  results: [
    { id: 'ENFP', title: 'ENFP — 활동가형', titleEn: 'ENFP — The Campaigner', emoji: '🌟', description: '열정적이고 창의적인 당신! 사람들에게 영감을 주고 항상 새로운 가능성을 찾아요. 넘치는 에너지로 주변을 밝게 만드는 타입.', descriptionEn: "You're enthusiastic and creative! You inspire others and always seek new possibilities. Your overflowing energy brightens the people around you.", compatibility: '궁합: INTJ, INFJ', compatibilityEn: 'Compatible with: INTJ, INFJ', color: 'var(--grad-mbti)' },
    { id: 'ENTJ', title: 'ENTJ — 통솔자형', titleEn: 'ENTJ — The Commander', emoji: '👑', description: '타고난 리더! 목표 지향적이고 결단력 있는 당신은 어디서든 이끄는 역할을 맡게 됩니다.', descriptionEn: 'A born leader! Goal-oriented and decisive, you naturally take charge wherever you go.', compatibility: '궁합: INTP, INFP', compatibilityEn: 'Compatible with: INTP, INFP', color: 'var(--grad-mbti)' },
    { id: 'INFP', title: 'INFP — 중재자형', titleEn: 'INFP — The Mediator', emoji: '🌙', description: '감수성이 풍부하고 이상주의적인 당신. 세상을 더 좋은 곳으로 만들고 싶다는 깊은 소망이 있어요.', descriptionEn: 'Sensitive and idealistic, you have a deep desire to make the world a better place.', compatibility: '궁합: ENFJ, ENTJ', compatibilityEn: 'Compatible with: ENFJ, ENTJ', color: 'var(--grad-mbti)' },
    { id: 'INTJ', title: 'INTJ — 전략가형', titleEn: 'INTJ — The Architect', emoji: '♟️', description: '치밀한 전략가! 독립적이고 분석적인 사고로 복잡한 문제도 척척 해결합니다.', descriptionEn: 'A meticulous strategist! Your independent and analytical thinking solves even complex problems.', compatibility: '궁합: ENFP, ENTP', compatibilityEn: 'Compatible with: ENFP, ENTP', color: 'var(--grad-mbti)' },
  ],
  calculateResult: (answers) => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = answers.length * 3;
    const ratio = total / max;
    if (ratio >= 0.75) return 'ENFP';
    if (ratio >= 0.55) return 'ENTJ';
    if (ratio >= 0.35) return 'INFP';
    return 'INTJ';
  },
};
