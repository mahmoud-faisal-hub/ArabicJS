var d = Object.defineProperty;
var p = (e, r, t) => r in e ? d(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var o = (e, r, t) => (p(e, typeof r != "symbol" ? r + "" : r, t), t);
const h = (e) => {
  let r = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "am", "pm"], t = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "sat", "sun", "mon", "tue", "wed", "thu", "fri", "am", "pm"], i = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "ص", "م"];
  return e.trim().split(/\s+/).map((s) => {
    let a = s.replace(/[^a-zA-Z ]/g, ""), n = a.toLowerCase();
    return r.includes(n) ? s.replace(a, i[r.indexOf(n)]) : t.includes(n) ? s.replace(a, i[t.indexOf(n)]) : s;
  }).join(" ").toString();
}, m = (e) => e.replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ىئ]/g, "ي").replace(/[ه]/g, "ة"), g = (e, r = !1) => {
  let t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "am", "pm"], i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "am", "pm"], u = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر", "السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "ص", "م"];
  return e.trim().split(/\s+/).map((a) => {
    let n = a.replace(/[^ء-ي ]/g, ""), c = m(n);
    return u.includes(c) ? r ? a.replace(n, i[u.indexOf(c)]) : a.replace(n, t[u.indexOf(c)]) : a;
  }).join(" ").toString();
}, b = (e) => {
  e = String(e);
  let r = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return e.replace(/[0-9]/g, function(t) {
    return r[+t];
  });
}, y = (e) => (e = String(e), e.replace(/[٠-٩]/g, (r) => String("٠١٢٣٤٥٦٧٨٩".indexOf(r)))), f = (e) => decodeURIComponent(JSON.parse('"' + e.replace(/\"/g, '\\"') + '"'));
class l {
  constructor(r) {
    o(this, "str");
    r = String(r), this.str = r;
  }
  toArabicDate() {
    return this.str = h(this.str), this;
  }
  toEnglishDate(r = !1) {
    return this.str = g(this.str, r), this;
  }
  toArabicNumbers() {
    return this.str = b(this.str), this;
  }
  toEnglishNumbers() {
    return this.str = y(this.str), this;
  }
  decodeURL() {
    return this.str = f(this.str), this;
  }
  toString() {
    return this.str;
  }
}
l.prototype.fixURL = l.prototype.decodeURL;
const A = (e) => (e = String(e), new l(e));
export {
  f as decodeURL,
  A as default,
  f as fixURL,
  h as toArabicDate,
  b as toArabicNumbers,
  g as toEnglishDate,
  y as toEnglishNumbers
};
