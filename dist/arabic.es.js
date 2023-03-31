var h = Object.defineProperty;
var p = (e, t, r) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var l = (e, t, r) => (p(e, typeof t != "symbol" ? t + "" : t, r), r);
const g = (e) => {
  let t = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "am", "pm"], r = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "sat", "sun", "mon", "tue", "wed", "thu", "fri", "am", "pm"], i = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "ص", "م"];
  return e.trim().split(/\s+/).map((s) => {
    let a = s.replace(/[^a-zA-Z ]/g, ""), n = a.toLowerCase();
    return t.includes(n) ? s.replace(a, i[t.indexOf(n)]) : r.includes(n) ? s.replace(a, i[r.indexOf(n)]) : s;
  }).join(" ").toString();
}, b = (e) => e.replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ىئ]/g, "ي").replace(/[ه]/g, "ة"), m = (e, t = !1) => {
  let r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "am", "pm"], i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "am", "pm"], u = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر", "السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "ص", "م"];
  return e.trim().split(/\s+/).map((a) => {
    let n = a.replace(/[^ء-ي ]/g, ""), o = b(n);
    return u.includes(o) ? t ? a.replace(n, i[u.indexOf(o)]) : a.replace(n, r[u.indexOf(o)]) : a;
  }).join(" ").toString();
}, y = (e) => {
  e = String(e);
  let t = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return e.replace(/[0-9]/g, function(r) {
    return t[+r];
  });
}, f = (e) => (e = String(e), e.replace(/[٠-٩]/g, (t) => String("٠١٢٣٤٥٦٧٨٩".indexOf(t)))), A = (e) => d(e).toArabicNumbers().toArabicDate().toString(), S = (e, t = !1) => d(e).toEnglishNumbers().toEnglishDate(t).toString(), D = (e) => decodeURIComponent(JSON.parse('"' + e.replace(/\"/g, '\\"') + '"'));
class c {
  /**
   * Create the initial string
   *
   * @param {(String|Number)} str
   */
  constructor(t) {
    l(this, "str");
    t = String(t), this.str = t;
  }
  /**
   * Used for convert English date to Arabic
   *
   * @api public
   * @method toArabicDate
   * @return {Object} ArabicJs Object
   */
  toArabicDate() {
    return this.str = g(this.str), this;
  }
  /**
   * Used for convert Arabic date to English
   *
   * @api public
   * @method toEnglishDate
   * @param {Boolean} shorten default false
   * @return {Object} ArabicJs Object
   */
  toEnglishDate(t = !1) {
    return this.str = m(this.str, t), this;
  }
  /**
   * Used for convert English numbers to Arabic
   *
   * @api public
   * @method toArabicNumbers
   * @return {Object} ArabicJs Object
   */
  toArabicNumbers() {
    return this.str = y(this.str), this;
  }
  /**
   * Used for convert Arabic numbers to English
   *
   * @api public
   * @method toEnglishNumbers
   * @return {Object} ArabicJs Object
   */
  toEnglishNumbers() {
    return this.str = f(this.str), this;
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
  toEnglish(t = !1) {
    return this.str = S(this.str, t), this;
  }
  /**
   * Used to decode and fix URLs contains Arabic characters
   *
   * @api public
   * @method decodeURL
   * @return {Object} ArabicJs Object
   */
  decodeURL() {
    return this.str = D(this.str), this;
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
c.prototype.fixURL = c.prototype.decodeURL;
const d = (e) => (e = String(e), new c(e));
export {
  D as decodeURL,
  d as default,
  D as fixURL,
  A as toArabic,
  g as toArabicDate,
  y as toArabicNumbers,
  S as toEnglish,
  m as toEnglishDate,
  f as toEnglishNumbers
};
