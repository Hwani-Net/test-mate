// Test data types and exports
export interface TestOption {
  label: string;
  labelEn: string;
  value: number;
}

export interface Question {
  id: number;
  text: string;
  textEn: string;
  options: TestOption[];
}

export interface TestResult {
  id: string;
  title: string;
  titleEn: string;
  emoji: string;
  description: string;
  descriptionEn: string;
  color: string;
  compatibility?: string;
  compatibilityEn?: string;
}

export interface Test {
  slug: string;
  nameKey: string;
  descKey: string;
  metaKey: string;
  emoji: string;
  gradient: string;
  bgImage: string;
  participants: number;
  questions: Question[];
  results: TestResult[];
  calculateResult: (answers: number[]) => string;
}

import { mbtiTest } from './mbti';
import { loveTest } from './love';
import { animalTest } from './animal-personality';
import { colorTest } from './personal-color';
import { stressTest } from './stress';
import { impressionTest } from './first-impression';

export const allTests: Test[] = [
  mbtiTest,
  loveTest,
  animalTest,
  colorTest,
  stressTest,
  impressionTest,
];

export function getTestBySlug(slug: string): Test | undefined {
  return allTests.find((t) => t.slug === slug);
}
