import ArabicJs from '../';

/**
 * Used for convert numbers and date to specified locale
 * 
 * @function trans
 * @param {(String|Number)} str 
 * @param {String} locale default 'ar'
 * @param {Boolean} shorten default false
 * @returns {String}
 */
const trans = (str: string|number, locale: string = 'ar', shorten: Boolean = false) : string => {
    switch (locale) {
        case 'ar': 
            return ArabicJs(str).toArabicNumbers().toArabicDate().toString();
            break;
        case 'en':
            return ArabicJs(str).toEnglishNumbers().toEnglishDate(shorten).toString();
            break;
        default: 
            return ArabicJs(str).toArabicNumbers().toArabicDate().toString();
            break;
    }
}

export default trans;