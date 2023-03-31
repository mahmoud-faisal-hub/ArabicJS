import ArabicJs from '../';

/**
 * Used for convert Arabic numbers and date to English
 * 
 * @function toEnglish
 * @param {(String|Number)} str 
 * @param {Boolean} shorten default false
 * @returns {String}
 */
const toEnglish = (str: string|number, shorten: Boolean = false) : string => {
    return ArabicJs(str).toEnglishNumbers().toEnglishDate(shorten).toString();
}

export default toEnglish;