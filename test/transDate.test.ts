import { test, expect } from 'vitest';
import { transDate } from '../src';
import ArabicJS from '../src';

test('trans english date to arabic', () => {
  expect(transDate("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am")).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص");
  expect(ArabicJS("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am").transDate().toString()).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص");
});

test('trans arabic date to English', () => {
  expect(transDate("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص", 'en')).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص").transDate('en').toString()).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(transDate("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص", 'en', true)).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص").transDate('en', true).toString()).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
});