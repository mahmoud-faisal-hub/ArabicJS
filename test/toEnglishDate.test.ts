import { test, expect } from 'vitest';
import { toEnglishDate } from '../src/functions';
import ArabicJS from '../src/index';

test('convert arabic date to english', () => {
  expect(toEnglishDate("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص")).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(toEnglishDate("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص", true)).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص").toEnglishDate().toString()).toBe("تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am");
  expect(ArabicJS("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص").toEnglishDate(true).toString()).toBe("تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am");
});