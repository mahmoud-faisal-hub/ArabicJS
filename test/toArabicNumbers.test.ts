import { test, expect } from 'vitest';
import { toArabicNumbers } from '../src/functions';
import ArabicJS from '../src/index';

test('convert english numbers to arabic', () => {
  expect(toArabicNumbers("تاريخ اليوم 30/3/2023")).toBe("تاريخ اليوم ٣٠/٣/٢٠٢٣");
  expect(toArabicNumbers(30)).toBe("٣٠");
  expect(ArabicJS("تاريخ اليوم 30/3/2023").toArabicNumbers().toString()).toBe("تاريخ اليوم ٣٠/٣/٢٠٢٣");
  expect(ArabicJS(30).toArabicNumbers().toString()).toBe("٣٠");
});