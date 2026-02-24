import type { Test } from './index';

export const animalTest: Test = {
  slug: 'animal',
  nameKey: 'testAnimalName',
  descKey: 'testAnimalDesc',
  metaKey: 'testAnimalMeta',
  emoji: '🦊',
  gradient: 'var(--grad-animal)',
  bgImage: 'https://images.unsplash.com/photo-1474511320723-9a56873b3205?w=800&q=80',
  participants: 76234,
  questions: [
    { id: 1, text: '주말에 혼자 있는 것이 더 편하다.', textEn: 'I prefer being alone on weekends.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 0 }, { label: '그런 편이다', labelEn: 'Agree', value: 1 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 3 }] },
    { id: 2, text: '위험한 상황에서도 침착함을 유지한다.', textEn: 'I stay calm even in dangerous situations.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 3, text: '새로운 사람을 만나면 먼저 다가간다.', textEn: 'I approach new people first.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 4, text: '규칙적인 생활보다 자유로운 생활을 선호한다.', textEn: 'I prefer a free lifestyle over a structured one.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 5, text: '친구들 사이에서 리더 역할을 자주 맡는다.', textEn: 'I often take on the leader role among friends.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 6, text: '감정 표현을 잘 하는 편이다.', textEn: 'I express my emotions well.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 7, text: '한 번 시작한 일은 끝까지 해내는 편이다.', textEn: 'Once I start something, I see it through to the end.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 8, text: '예상치 못한 상황이 오히려 재미있다.', textEn: 'Unexpected situations are actually fun to me.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
  ],
  results: [
    { id: 'fox', title: '🦊 여우', titleEn: '🦊 Fox', emoji: '🦊', description: '영리하고 눈치가 빠른 당신! 상황 판단력이 뛰어나고 사회성이 좋습니다. 잔머리도 잘 굴리지만 그만큼 매력적이에요.', descriptionEn: 'Clever and sharp! You have great situational awareness and social skills. You may be cunning but equally charming.', color: 'var(--grad-animal)' },
    { id: 'bear', title: '🐻 곰', titleEn: '🐻 Bear', emoji: '🐻', description: '듬직하고 따뜻한 당신! 겉으로는 무뚝뚝해 보여도 속은 누구보다 다정합니다. 믿음직한 존재감!', descriptionEn: 'Dependable and warm! You may look tough on the outside, but inside you are the most caring. A truly reliable presence!', color: 'var(--grad-animal)' },
    { id: 'cat', title: '🐱 고양이', titleEn: '🐱 Cat', emoji: '🐱', description: '독립적이고 자유로운 영혼! 자기만의 세계가 확고하고, 필요할 때만 사람을 찾는 매력적인 미스터리.', descriptionEn: 'An independent, free spirit! You have your own world and seek company only when you choose to. A charming mystery.', color: 'var(--grad-animal)' },
    { id: 'dog', title: '🐶 강아지', titleEn: '🐶 Dog', emoji: '🐶', description: '충성스럽고 에너지 넘치는 당신! 사람을 좋아하고 함께하는 시간이 가장 행복해요. 긍정 에너지 충전기!', descriptionEn: 'Loyal and energetic! You love people and are happiest when spending time together. A walking positive energy battery!', color: 'var(--grad-animal)' },
  ],
  calculateResult: (answers) => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = answers.length * 3;
    const ratio = total / max;
    if (ratio >= 0.75) return 'fox';
    if (ratio >= 0.55) return 'dog';
    if (ratio >= 0.35) return 'bear';
    return 'cat';
  },
};
