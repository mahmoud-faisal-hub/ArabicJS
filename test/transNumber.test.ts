import { test, expect } from 'vitest';
import { transNumbers } from '../src';
import ArabicJS from '../src';

test('trans english Numbers to arabic', () => {
  expect(transNumbers("تاريخ اليوم 30/3/2023")).toBe("تاريخ اليوم ٣٠/٣/٢٠٢٣");
  expect(ArabicJS("تاريخ اليوم 30/3/2023").transNumbers().toString()).toBe("تاريخ اليوم ٣٠/٣/٢٠٢٣");
});

test('trans arabic Numbers to English', () => {
  expect(transNumbers("تاريخ اليوم ٣٠/٣/٢٠٢٣", 'en')).toBe("تاريخ اليوم 30/3/2023");
  expect(ArabicJS("تاريخ اليوم ٣٠/٣/٢٠٢٣").transNumbers('en').toString()).toBe("تاريخ اليوم 30/3/2023");
});