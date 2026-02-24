import type { Test } from './index';

export const impressionTest: Test = {
  slug: 'impression',
  nameKey: 'testImpressionName',
  descKey: 'testImpressionDesc',
  metaKey: 'testImpressionMeta',
  emoji: '👁️',
  gradient: 'var(--grad-impression)',
  bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  participants: 48321,
  questions: [
    { id: 1, text: '처음 만난 사람에게 미소를 먼저 보여주는 편이다.', textEn: 'I tend to smile first at someone I just met.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 2, text: '주변에서 대화하기 편하다는 말을 자주 듣는다.', textEn: 'People often tell me I\'m easy to talk to.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 3, text: '외모나 패션에 신경을 많이 쓰는 편이다.', textEn: 'I pay a lot of attention to my appearance and fashion.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 4, text: '말하기보다 듣는 것을 더 좋아한다.', textEn: 'I prefer listening over talking.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 0 }, { label: '그런 편이다', labelEn: 'Agree', value: 1 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 3 }] },
    { id: 5, text: '생각을 바로바로 말하는 편이다.', textEn: 'I tend to say what I think right away.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 6, text: '눈을 마주치며 대화하는 것이 자연스럽다.', textEn: 'Making eye contact during conversation comes naturally to me.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 7, text: '새로운 환경에서도 긴장하지 않는 편이다.', textEn: "I don't get nervous easily in new environments.", options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 8, text: '주변에서 카리스마가 있다는 말을 들어본 적 있다.', textEn: 'People have told me I have charisma.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
  ],
  results: [
    { id: 'charisma', title: '✨ 카리스마형', titleEn: '✨ Charismatic', emoji: '✨', description: '강렬한 존재감! 말 없이도 눈빛만으로 사람을 끌어당기는 타입. 자신감과 당당함이 매력 포인트.', descriptionEn: 'Intense presence! You draw people in with just your gaze. Your confidence and composure are your charm points.', color: 'var(--grad-impression)' },
    { id: 'friendly', title: '😊 친근형', titleEn: '😊 Friendly', emoji: '😊', description: '따뜻하고 편안한 첫인상! 처음 보는 사람도 편하게 다가올 수 있는 분위기를 풍기는 당신.', descriptionEn: "Warm and comfortable first impression! You create an atmosphere where even strangers feel comfortable approaching.", color: 'var(--grad-impression)' },
    { id: 'mysterious', title: '🌙 미스터리형', titleEn: '🌙 Mysterious', emoji: '🌙', description: '알 수 없는 매력! 속을 잘 드러내지 않아 사람들이 더 궁금해하는 타입. 특유의 분위기가 매력적.', descriptionEn: "An unknowable charm! You don't reveal yourself easily, making people even more curious. Your unique aura is captivating.", color: 'var(--grad-impression)' },
    { id: 'cute', title: '🎀 귀여움형', titleEn: '🎀 Adorable', emoji: '🎀', description: '보호본능을 자극하는 사랑스러운 첫인상! 표정과 리액션이 풍부해서 함께 있으면 즐거운 타입.', descriptionEn: "An adorable first impression that triggers protective instincts! Your rich expressions and reactions make you a joy to be around.", color: 'var(--grad-impression)' },
  ],
  calculateResult: (answers) => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = answers.length * 3;
    const ratio = total / max;
    if (ratio >= 0.75) return 'charisma';
    if (ratio >= 0.55) return 'friendly';
    if (ratio >= 0.35) return 'mysterious';
    return 'cute';
  },
};
