import ArabicJs from '../';

/**
 * Used for convert English numbers and date to Arabic
 * 
 * @function toArabic
 * @param {(String|Number)} str 
 * @returns {String}
 */
const toArabic = (str: string|number) : string => {
    return ArabicJs(str).toArabicNumbers().toArabicDate().toString();
}

export default toArabic;