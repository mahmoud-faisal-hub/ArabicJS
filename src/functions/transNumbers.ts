import ArabicJs from '../';

/**
 * Used for convert numbers to specified locale
 * 
 * @function transNumbers
 * @param {(String|Number)} str 
 * @param {String} locale default 'ar'
 * @returns {String}
 */
const transNumbers = (str: string|number, locale: string = 'ar') : string => {
    switch (locale) {
        case 'ar': 
            return ArabicJs(str).toArabicNumbers().toString();
            break;
        case 'en':
            return ArabicJs(str).toEnglishNumbers().toString();
            break;
        default: 
            return ArabicJs(str).toArabicNumbers().toString();
            break;
    }
}

export default transNumbers;