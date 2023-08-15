import * as converters from './functions';

interface ArabicJs {
    fixURL: typeof ArabicJs.prototype.decodeURL;
}

/**
 * ArabicJs main class
 *
 * @class ArabicJs
 * @param {String} str
 */
class ArabicJs {
    private str: string;
    
    /**
     * Create the initial string
     *
     * @param {(String|Number)} str
     */
    constructor(str: string|number) {
        str = String(str);
        this.str = str;
    }

    /**
     * Used for convert English date to Arabic
     *
     * @api public
     * @method toArabicDate
     * @return {Object} ArabicJs Object
     */
    public toArabicDate() : this {
        this.str = converters.toArabicDate(this.str);
        return this;
    }

    /**
     * Used for convert Arabic date to English
     *
     * @api public
     * @method toEnglishDate
     * @param {Boolean} shorten default false
     * @return {Object} ArabicJs Object
     */
    public toEnglishDate(shorten: Boolean = false) : this {
        this.str = converters.toEnglishDate(this.str, shorten);
        return this;
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
    public transDate(locale: string = 'ar', shorten: Boolean = false) : this {
        this.str = converters.transDate(this.str, locale, shorten);
        return this;
    }

    /**
     * Used for convert English numbers to Arabic
     *
     * @api public
     * @method toArabicNumbers
     * @return {Object} ArabicJs Object
     */
    public toArabicNumbers() : this {
        this.str = converters.toArabicNumbers(this.str);
        return this;
    }

    /**
     * Used for convert Arabic numbers to English
     *
     * @api public
     * @method toEnglishNumbers
     * @return {Object} ArabicJs Object
     */
    public toEnglishNumbers() : this {
        this.str = converters.toEnglishNumbers(this.str);
        return this;
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
    public transNumbers(locale: string = 'ar') : this {
        this.str = converters.transNumbers(this.str, locale);
        return this;
    }

    /**
     * Used for convert English numbers and date to Arabic
     *
     * @api public
     * @method toArabic
     * @return {Object} ArabicJs Object
     */
    public toArabic() : this {
        this.str = converters.toArabic(this.str);
        return this;
    }

    /**
     * Used for convert Arabic numbers and date to English
     *
     * @api public
     * @method toEnglish
     * @param {Boolean} shorten default false
     * @return {Object} ArabicJs Object
     */
    public toEnglish(shorten: Boolean = false) : this {
        this.str = converters.toEnglish(this.str, shorten);
        return this;
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
    public trans(locale: string = 'ar', shorten: Boolean = false) : this {
        this.str = converters.trans(this.str, locale, shorten);
        return this;
    }

    /**
     * Used to decode and fix URLs contains Arabic characters
     *
     * @api public
     * @method decodeURL
     * @return {Object} ArabicJs Object
     */
    public decodeURL() : this {
        this.str = converters.decodeURL(this.str);
        return this;
    }

    /**
     * Used to return the string value after conversion
     *
     * @api public
     * @method decodeURL
     * @return {String} The converted string
     */
    toString() : string { 
        return this.str;
    }
}

/**
 * To make an alias fixURL of the method decodeURL
 */
ArabicJs.prototype.fixURL = ArabicJs.prototype.decodeURL;

/**
 * To create an instance of class ArabicJs and pass the str to the constructor
 * 
 * @param {(String|number)} str 
 * @returns {ArabicJs} ArabicJs instance of class ArabicJs
 */
const arabicJs = (str: string|number): ArabicJs => {
    str = String(str);
    return new ArabicJs(str);
}

export default arabicJs;