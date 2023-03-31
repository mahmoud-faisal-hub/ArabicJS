declare class ArabicJs {
    str: any;
    /**
     * Create the initial string
     *
     * @param {(String|Number)} str
     */
    constructor(str: any);
    /**
     * Used for convert English date to Arabic
     *
     * @api public
     * @method toArabicDate
     * @return {Object} ArabicJs Object
     */
    toArabicDate(): this;
    /**
     * Used for convert Arabic date to English
     *
     * @api public
     * @method toEnglishDate
     * @param {Boolean} shorten default false
     * @return {Object} ArabicJs Object
     */
    toEnglishDate(shorten?: boolean): this;
    /**
     * Used for convert English numbers to Arabic
     *
     * @api public
     * @method toArabicNumbers
     * @return {Object} ArabicJs Object
     */
    toArabicNumbers(): this;
    /**
     * Used for convert Arabic numbers to English
     *
     * @api public
     * @method toEnglishNumbers
     * @return {Object} ArabicJs Object
     */
    toEnglishNumbers(): this;
    /**
     * Used for convert English numbers and date to Arabic
     *
     * @api public
     * @method toArabic
     * @return {Object} ArabicJs Object
     */
    toArabic(): this;
    /**
     * Used for convert Arabic numbers and date to English
     *
     * @api public
     * @method toEnglish
     * @param {Boolean} shorten default false
     * @return {Object} ArabicJs Object
     */
    toEnglish(shorten?: boolean): this;
    /**
     * Used to decode and fix URLs contains Arabic characters
     *
     * @api public
     * @method decodeURL
     * @return {Object} ArabicJs Object
     */
    decodeURL(): this;
    /**
     * Used to return the string value after conversion
     *
     * @api public
     * @method decodeURL
     * @return {String} The converted string
     */
    toString(): any;
}
declare const arabicJs: (str: any) => ArabicJs;
export default arabicJs;
//# sourceMappingURL=arabic.d.ts.map