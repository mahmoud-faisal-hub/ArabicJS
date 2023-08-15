import { test, expect } from 'vitest';
import { trans } from '../src';
import ArabicJS from '../src';

test('trans english date and numbers to arabic', () => {
  expect(trans("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am")).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص");
  expect(ArabicJS("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am").trans().toString()).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص");
});

test('trans arabic date and numbers to English', () => {
  expect(trans("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص", 'en')).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص").trans('en').toString()).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(trans("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص", 'en', true)).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص").trans('en', true).toString()).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
});