var b = Object.defineProperty;
var g = (t, r, e) => r in t ? b(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var h = (t, r, e) => (g(t, typeof r != "symbol" ? r + "" : r, e), e);
const d = (t) => {
  let r = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "am", "pm"], e = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "sat", "sun", "mon", "tue", "wed", "thu", "fri", "am", "pm"], u = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "ص", "م"];
  return t.trim().split(/\s+/).map((i) => {
    let s = i.replace(/[^a-zA-Z ]/g, ""), n = s.toLowerCase();
    return r.includes(n) ? i.replace(s, u[r.indexOf(n)]) : e.includes(n) ? i.replace(s, u[e.indexOf(n)]) : i;
  }).join(" ").toString();
}, m = (t) => t.replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ىئ]/g, "ي").replace(/[ه]/g, "ة"), p = (t, r = !1) => {
  let e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "am", "pm"], u = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "am", "pm"], o = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر", "السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "ص", "م"];
  return t.trim().split(/\s+/).map((s) => {
    let n = s.replace(/[^ء-ي ]/g, ""), c = m(n);
    return o.includes(c) ? r ? s.replace(n, u[o.indexOf(c)]) : s.replace(n, e[o.indexOf(c)]) : s;
  }).join(" ").toString();
}, f = (t) => {
  t = String(t);
  let r = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return t.replace(/[0-9]/g, function(e) {
    return r[+e];
  });
}, S = (t) => (t = String(t), t.replace(/[٠-٩]/g, (r) => String("٠١٢٣٤٥٦٧٨٩".indexOf(r)))), A = (t) => a(t).toArabicNumbers().toArabicDate().toString(), y = (t, r = !1) => a(t).toEnglishNumbers().toEnglishDate(r).toString(), D = (t, r = "ar") => {
  switch (r) {
    case "ar":
      return a(t).toArabicNumbers().toString();
    case "en":
      return a(t).toEnglishNumbers().toString();
    default:
      return a(t).toArabicNumbers().toString();
  }
}, N = (t, r = "ar", e = !1) => {
  switch (r) {
    case "ar":
      return a(t).toArabicDate().toString();
    case "en":
      return a(t).toEnglishDate(e).toString();
    default:
      return a(t).toArabicDate().toString();
  }
}, E = (t, r = "ar", e = !1) => {
  switch (r) {
    case "ar":
      return a(t).toArabicNumbers().toArabicDate().toString();
    case "en":
      return a(t).toEnglishNumbers().toEnglishDate(e).toString();
    default:
      return a(t).toArabicNumbers().toArabicDate().toString();
  }
}, J = (t) => decodeURIComponent(JSON.parse('"' + t.replace(/\"/g, '\\"') + '"'));
class l {
  /**
   * Create the initial string
   *
   * @param {(String|Number)} str
   */
  constructor(r) {
    h(this, "str");
    r = String(r), this.str = r;
  }
  /**
   * Used for convert English date to Arabic
   *
   * @api public
   * @method toArabicDate
   * @return {Object} ArabicJs Object
   */
  toArabicDate() {
    return this.str = d(this.str), this;
  }
  /**
   * Used for convert Arabic date to English
   *
   * @api public
   * @method toEnglishDate
   * @param {Boolean} shorten default false
   * @return {Object} ArabicJs Object
   */
  toEnglishDate(r = !1) {
    return this.str = p(this.str, r), this;
  }
  /**
   * Used for convert date to specified locale
   *
   * @api public
   * @method transDate
   * @param {(String|Number)} str
   * @param {String} locale default 'ar'
   * @param {Boolean} shorten default false
   * @return {Object} ArabicJs Object
   */
  transDate(r = "ar", e = !1) {
    return this.str = N(this.str, r, e), this;
  }
  /**
   * Used for convert English numbers to Arabic
   *
   * @api public
   * @method toArabicNumbers
   * @return {Object} ArabicJs Object
   */
  toArabicNumbers() {
    return this.str = f(this.str), this;
  }
  /**
   * Used for convert Arabic numbers to English
   *
   * @api public
   * @method toEnglishNumbers
   * @return {Object} ArabicJs Object
   */
  toEnglishNumbers() {
    return this.str = S(this.str), this;
  }
  /**
   * Used for convert numbers to specified locale
   *
   * @api public
   * @method transNumbers
   * @param {(String|Number)} str
   * @param {String} locale default 'ar'
   * @return {Object} ArabicJs Object
   */
  transNumbers(r = "ar") {
    return this.str = D(this.str, r), this;
  }
  /**
   * Used for convert English numbers and date to Arabic
   *
   * @api public
   * @method toArabic
   * @return {Object} ArabicJs Object
   */
  toArabic() {
    return this.str = A(this.str), this;
  }
  /**
   * Used for convert Arabic numbers and date to English
   *
   * @api public
   * @method toEnglish
   * @param {Boolean} shorten default false
   * @return {Object} ArabicJs Object
   */
  toEnglish(r = !1) {
    return this.str = y(this.str, r), this;
  }
  /**
   * Used for convert numbers and date to specified locale
   *
   * @api public
   * @method trans
   * @param {(String|Number)} str
   * @param {String} locale default 'ar'
   * @param {Boolean} shorten default false
   * @return {Object} ArabicJs Object
   */
  trans(r = "ar", e = !1) {
    return this.str = E(this.str, r, e), this;
  }
  /**
   * Used to decode and fix URLs contains Arabic characters
   *
   * @api public
   * @method decodeURL
   * @return {Object} ArabicJs Object
   */
  decodeURL() {
    return this.str = J(this.str), this;
  }
  /**
   * Used to return the string value after conversion
   *
   * @api public
   * @method decodeURL
   * @return {String} The converted string
   */
  toString() {
    return this.str;
  }
}
l.prototype.fixURL = l.prototype.decodeURL;
const a = (t) => (t = String(t), new l(t));
export {
  J as decodeURL,
  a as default,
  J as fixURL,
  A as toArabic,
  d as toArabicDate,
  f as toArabicNumbers,
  y as toEnglish,
  p as toEnglishDate,
  S as toEnglishNumbers,
  E as trans,
  N as transDate,
  D as transNumbers
};
