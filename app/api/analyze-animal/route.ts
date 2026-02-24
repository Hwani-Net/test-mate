import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const SYSTEM_PROMPT = `당신은 사람의 얼굴 이미지를 보고 그 사람과 닮은 동물상을 분석하는 전문가입니다.

다음 형식으로 JSON만 반환하세요 (다른 텍스트 없이):
{
  "animal": "동물 이름 (한국어, 예: 강아지, 고양이, 여우, 토끼, 곰, 사자, 늑대, 부엉이 등)",
  "animalEn": "Animal name in English",
  "animalEmoji": "동물 이모지 (예: 🐶)",
  "match": 85,
  "traits": ["귀여운", "친근한", "따뜻한"],
  "description": "이 분은 [동물]상이에요! [3-4문장의 성격과 매력 분석. 긍정적이고 재미있게 작성]",
  "compatibleAnimal": "잘 맞는 동물상 (한국어)",
  "compatibleEmoji": "잘 맞는 동물 이모지",
  "charm": "이 동물상의 대표 매력 한 줄"
}

분석 기준:
- 눈 모양, 얼굴형, 코, 입 등 전체적인 인상으로 판단
- match는 60~95 사이 숫자
- description은 밝고 재미있게, MZ세대 감성으로 작성
- 동물은 강아지/고양이/여우/토끼/곰/사자/늑대/부엉이/원숭이/사슴 중에서 선택`;

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: '이미지가 없습니다.' }, { status: 400 });
    }

    // Check file size (max 4MB for Gemini inline)
    if (file.size > 4 * 1024 * 1024) {
      return NextResponse.json({ error: '이미지가 너무 큽니다. 4MB 이하로 올려주세요.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString('base64');
    const mimeType = file.type as 'image/jpeg' | 'image/png' | 'image/webp';

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const result = await model.generateContent([
      SYSTEM_PROMPT,
      {
        inlineData: {
          data: base64,
          mimeType,
        },
      },
    ]);

    const text = result.response.text();

    // Extract JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format');
    }

    const analysis = JSON.parse(jsonMatch[0]);
    return NextResponse.json(analysis);
  } catch (error) {
    console.error('Gemini Vision error:', error);
    return NextResponse.json(
      { error: '분석에 실패했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
