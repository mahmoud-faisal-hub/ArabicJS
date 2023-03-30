declare class ArabicJs {
    str: any;
    constructor(str: any);
    toArabicDate(): this;
    toEnglishDate(shorten?: boolean): this;
    toArabicNumbers(): this;
    toEnglishNumbers(): this;
    decodeURL(): this;
    toString(): any;
}
declare const arabicJs: (str: any) => ArabicJs;
export default arabicJs;
//# sourceMappingURL=arabic.d.ts.map