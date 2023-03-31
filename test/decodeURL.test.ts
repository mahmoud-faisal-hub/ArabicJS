import { test, expect } from 'vitest';
import { decodeURL } from '../src';
import ArabicJS from '../src';

test('convert english date to arabic', () => {
  expect(decodeURL("https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9")).toBe("https://ar.wikipedia.org/wiki/الصفحة_الرئيسية");
  expect(ArabicJS("https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9").decodeURL().toString()).toBe("https://ar.wikipedia.org/wiki/الصفحة_الرئيسية");
  expect(ArabicJS("https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9").fixURL().toString()).toBe("https://ar.wikipedia.org/wiki/الصفحة_الرئيسية");
});