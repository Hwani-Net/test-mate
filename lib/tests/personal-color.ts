import type { Test } from './index';

export const colorTest: Test = {
  slug: 'color',
  nameKey: 'testColorName',
  descKey: 'testColorDesc',
  metaKey: 'testColorMeta',
  emoji: '🎨',
  gradient: 'var(--grad-color)',
  bgImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
  participants: 63842,
  questions: [
    { id: 1, text: '화장할 때 따뜻한 톤의 컬러를 선호한다.', textEn: 'I prefer warm-toned colors for makeup.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 2, text: '은색보다 금색 액세서리가 더 잘 어울린다.', textEn: 'Gold accessories look better on me than silver.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 3, text: '순백색보다 아이보리가 더 편안하게 느껴진다.', textEn: 'Ivory feels more comfortable to me than pure white.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 4, text: '햇볕에 타면 붉게 변했다가 원래로 돌아온다.', textEn: 'When I tan, my skin turns red first then returns to normal.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 0 }, { label: '그런 편이다', labelEn: 'Agree', value: 1 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 3 }] },
    { id: 5, text: '비비드한 원색보다 파스텔 톤이 잘 어울린다.', textEn: 'Pastel tones suit me better than vivid primary colors.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 0 }, { label: '그런 편이다', labelEn: 'Agree', value: 1 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 3 }] },
    { id: 6, text: '검정보다 네이비가 더 잘 어울린다고 느낀다.', textEn: 'Navy suits me better than black.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 0 }, { label: '그런 편이다', labelEn: 'Agree', value: 1 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 3 }] },
    { id: 7, text: '주변에서 피부가 따뜻한 톤이라는 말을 자주 듣는다.', textEn: 'People often tell me my skin has a warm tone.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 3 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 1 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 8, text: '자연광 아래서 반짝이는 로즈골드가 좋다.', textEn: 'I like rose gold that sparkles under natural light.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 2 }, { label: '그런 편이다', labelEn: 'Agree', value: 1 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 0 }] },
    { id: 9, text: '오렌지보다 핑크 블러셔가 더 자연스럽다.', textEn: 'Pink blush looks more natural on me than orange.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 0 }, { label: '그런 편이다', labelEn: 'Agree', value: 1 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 3 }] },
    { id: 10, text: '밝은 톤의 옷을 입으면 얼굴이 화사해 보인다.', textEn: 'My face looks brighter when I wear light-toned clothes.', options: [{ label: '매우 그렇다', labelEn: 'Strongly Agree', value: 1 }, { label: '그런 편이다', labelEn: 'Agree', value: 2 }, { label: '아닌 편이다', labelEn: 'Disagree', value: 2 }, { label: '전혀 아니다', labelEn: 'Strongly Disagree', value: 1 }] },
  ],
  results: [
    { id: 'spring', title: '🌸 봄 웜톤', titleEn: '🌸 Spring Warm', emoji: '🌸', description: '밝고 화사한 봄 웜톤! 코랄, 피치, 아이보리가 잘 어울려요. 생기 넘치는 당신만의 컬러로 빛나세요!', descriptionEn: 'Bright and radiant Spring Warm! Coral, peach, and ivory suit you perfectly. Shine with your vibrant colors!', color: 'linear-gradient(135deg, #ff9a9e, #fecfef)' },
    { id: 'summer', title: '💎 여름 쿨톤', titleEn: '💎 Summer Cool', emoji: '💎', description: '시원하고 우아한 여름 쿨톤! 라벤더, 로즈핑크, 스카이블루가 당신을 더 빛나게 해줍니다.', descriptionEn: 'Cool and elegant Summer Cool! Lavender, rose pink, and sky blue make you glow even more.', color: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' },
    { id: 'autumn', title: '🍂 가을 웜톤', titleEn: '🍂 Autumn Warm', emoji: '🍂', description: '깊고 따뜻한 가을 웜톤! 머스타드, 카키, 테라코타가 당신의 매력을 극대화해요. 자연스러운 고급미!', descriptionEn: 'Deep and warm Autumn Warm! Mustard, khaki, and terracotta maximize your charm. A natural sophistication!', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { id: 'winter', title: '❄️ 겨울 쿨톤', titleEn: '❄️ Winter Cool', emoji: '❄️', description: '선명하고 강렬한 겨울 쿨톤! 블랙, 화이트, 로열블루로 도시적인 세련미를 뽐내세요!', descriptionEn: 'Vivid and intense Winter Cool! Rock black, white, and royal blue for an urban chic look!', color: 'linear-gradient(135deg, #667eea, #764ba2)' },
  ],
  calculateResult: (answers) => {
    const total = answers.reduce((a, b) => a + b, 0);
    const max = answers.length * 3;
    const ratio = total / max;
    if (ratio >= 0.7) return 'autumn';
    if (ratio >= 0.5) return 'spring';
    if (ratio >= 0.3) return 'summer';
    return 'winter';
  },
};
