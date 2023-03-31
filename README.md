# En ArabicJS

En ArabicJS is a library to convert English date, time, numbers, etc. to arabic and vice-versa.

## Installation

```bash
npm i en-arabicjs
```

## Usage

```js
import ArabicJs from 'en-arabicjs';

// OR

import { toArabicNumbers,  toArabicDate } from 'en-arabicjs'; // import only the functions you need
```

## Section Links

[toArabicNumbers](#convert-english-numbers-to-arabic) - 
[toEnglishNumbers](#convert-arabic-numbers-to-english) - 
[toArabicDate](#convert-english-date-to-arabic) -
[toEnglishDate](#convert-arabic-date-to-english) - 
[toArabic](#convert-english-numbers-and-date-to-arabic) -
[toEnglish](#convert-arabic-numbers-and-date-to-english) -
[decodeURL & fixURL](#fix-or-decode-the-urls-contains-arabic-chars)
[Chaining](#chaining-usage)

## Documentation

### Convert English Numbers to Arabic
----------

```js
import ArabicJs from 'en-arabicjs';
ArabicJs("123456789").toArabicNumbers()->toString(); // return: "١٢٣٤٥٦٧٨٩"
ArabicJs(123456789).toArabicNumbers()->toString(); // return: "١٢٣٤٥٦٧٨٩"
// We use it in the pervious way if we want to chain the methods for example toArabicNumbers()->toArabicDate()

// OR
import { toArabicNumbers } from 'en-arabicjs';
toArabicNumbers("123456789"); // return: "١٢٣٤٥٦٧٨٩"
toArabicNumbers(123456789); // return: "١٢٣٤٥٦٧٨٩"
```

### Convert Arabic Numbers to English
----------

```js
ArabicJs("١٢٣٤٥٦٧٨٩").toEnglishNumbers()->toString(); // return: "123456789"

// OR
toEnglishNumbers("١٢٣٤٥٦٧٨٩"); // return: "123456789"
```

### Convert English Date to Arabic
----------

```js
ArabicJs("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am").toArabicDate()->toString(); // return: "تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص"
// OR
toArabicDate("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am"); // return: "تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص"
```

### Convert Arabic Date to English
----------

```js
ArabicJs("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص").toEnglishDate()->toString(); // return: "تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am"
// OR
toEnglishDate("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص"); // return: "تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am"
```
You can also chose if the returned english date is shorten or not in the previous example the default is not shorten
```js
ArabicJs("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص").toEnglishDate(true)->toString(); // return: "تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am"
// OR
toEnglishDate("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, 25 ص", true); // return: "تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am"
```

### Convert English Numbers and Date to Arabic
----------

```js
ArabicJs("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am").toArabic()->toString(); // return: "تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص"
// OR
toArabic("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am"); // return: "تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص"
```

### Convert Arabic Numbers and Date to English
----------

```js
ArabicJs("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص").toEnglish()->toString(); // return: "تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am"
// OR
toEnglish("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص"); // return: "تم نشر هذا الخبر يوم -Sunday الموافق June, 25 am"
```
And as before you can make the output shorten
```js
ArabicJs("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص").toEnglish(true)->toString(); // return: "تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am"
// OR
toEnglish("تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص", true); // return: "تم نشر هذا الخبر يوم -Sun الموافق Jun, 25 am"
```

### Fix or Decode the URLs contains Arabic chars
----------

```js
ArabicJs("https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9").decodeURL()->toString(); // return: "https://ar.wikipedia.org/wiki/الصفحة_الرئيسية"
ArabicJs("https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9").fixURL()->toString(); // return: "https://ar.wikipedia.org/wiki/الصفحة_الرئيسية"

// OR

decodeURL("https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9"); // return: "https://ar.wikipedia.org/wiki/الصفحة_الرئيسية"
fixURL("https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9_%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9"); // return: "https://ar.wikipedia.org/wiki/الصفحة_الرئيسية"
```

### Chaining usage

```js
// Chaing in only available when using the default import
import ArabicJs from 'en-arabicjs';

ArabicJs("تم نشر هذا الخبر يوم -Sunday الموافق Jun, 25 am").toArabicNumbers().toArabicDate().toString(); // return: "تم نشر هذا الخبر يوم -الأحد الموافق يونيو, ٢٥ ص"
```

## License
[MIT](./LICENSE.md)
