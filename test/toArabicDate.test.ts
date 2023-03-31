import { test, expect } from 'vitest';
import { toArabicDate } from '../src';
import ArabicJS from '../src';

test('convert english date to arabic', () => {
  expect(toArabicDate("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am")).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص");
  expect(ArabicJS("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am").toArabicDate().toString()).toBe("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص");
});