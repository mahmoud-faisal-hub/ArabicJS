import ArabicJs from '../';

/**
 * Used for convert Arabic numbers and date to English
 * 
 * @function toEnglish
 * @param {(String|Number)} str 
 * @returns {String}
 */
const toEnglish = (str: string|number) : string => {
    return ArabicJs(str).toEnglishNumbers().toEnglishDate().toString();
}

export default toEnglish;