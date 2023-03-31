import { test, expect } from 'vitest';
import { toEnglish } from '../src';
import ArabicJS from '../src';

test('convert english date to arabic', () => {
  expect(toEnglish("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص")).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص").toEnglish().toString()).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(toEnglish("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص", true)).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص").toEnglish(true).toString()).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
});