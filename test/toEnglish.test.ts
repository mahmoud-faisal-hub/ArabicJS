import { test, expect } from 'vitest';
import { toEnglish } from '../src/functions';
import ArabicJS from '../src/index';

test('convert english date to arabic', () => {
  expect(toEnglish("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص")).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص").toEnglish().toString()).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
});