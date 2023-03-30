var d = Object.defineProperty;
var p = (e, r, t) => r in e ? d(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var o = (e, r, t) => (p(e, typeof r != "symbol" ? r + "" : r, t), t);
const h = (e) => {
  let r = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "am", "pm"], t = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec", "sat", "sun", "mon", "tue", "wed", "thu", "fri", "am", "pm"], i = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر", "السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "ص", "م"];
  return e.trim().split(/\s+/).map((n) => {
    let a = n.replace(/[^a-zA-Z ]/g, ""), s = a.toLowerCase();
    return r.includes(s) ? n.replace(a, i[r.indexOf(s)]) : t.includes(s) ? n.replace(a, i[t.indexOf(s)]) : n;
  }).join(" ").toString();
}, m = (e) => e.replace(/[أإآ]/g, "ا").replace(/[ؤ]/g, "و").replace(/[ىئ]/g, "ي").replace(/[ه]/g, "ة"), b = (e, r = !1) => {
  let t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "am", "pm"], i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "am", "pm"], u = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "اغسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر", "السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "ص", "م"];
  return e.trim().split(/\s+/).map((a) => {
    let s = a.replace(/[^ء-ي ]/g, ""), c = m(s);
    return u.includes(c) ? r ? a.replace(s, i[u.indexOf(c)]) : a.replace(s, t[u.indexOf(c)]) : a;
  }).join(" ").toString();
}, y = (e) => {
  let r = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return e.replace(/[0-9]/g, function(t) {
    return r[+t];
  });
}, g = (e) => e.replace(/[٠-٩]/g, (r) => String("٠١٢٣٤٥٦٧٨٩".indexOf(r))), f = (e) => decodeURIComponent(JSON.parse('"' + e.replace(/\"/g, '\\"') + '"'));
class l {
  constructor(r) {
    o(this, "str");
    this.str = r;
  }
  toArabicDate() {
    return this.str = h(this.str), this;
  }
  toEnglishDate(r = !1) {
    return this.str = b(this.str, r), this;
  }
  toArabicNumbers() {
    return this.str = y(this.str), this;
  }
  toEnglishNumbers() {
    return this.str = g(this.str), this;
  }
  decodeURL() {
    return this.str = f(this.str), this;
  }
  toString() {
    return this.str;
  }
}
l.prototype.fixURL = l.prototype.decodeURL;
const S = (e) => new l(e);
export {
  f as decodeURL,
  S as default,
  f as fixURL,
  h as toArabicDate,
  y as toArabicNumbers,
  b as toEnglishDate,
  g as toEnglishNumbers
};
