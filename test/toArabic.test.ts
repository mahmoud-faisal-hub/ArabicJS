import { test, expect } from 'vitest';
import { toArabic } from '../src';
import ArabicJS from '../src';

test('convert english date to arabic', () => {
  expect(toArabic("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am")).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص");
  expect(ArabicJS("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am").toArabic().toString()).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص");
});