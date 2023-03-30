import { test, expect } from 'vitest';
import { toEnglishNumbers } from '../src/functions';
import ArabicJS from '../src/index';

test('convert arabic numbers to english', () => {
  expect(toEnglishNumbers("تاريخ اليوم ٣٠/٣/٢٠٢٣")).toBe("تاريخ اليوم 30/3/2023");
  expect(ArabicJS("تاريخ اليوم ٣٠/٣/٢٠٢٣").toEnglishNumbers().toString()).toBe("تاريخ اليوم 30/3/2023");
});