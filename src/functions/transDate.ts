import ArabicJs from '../';

/**
 * Used for convert date to specified locale
 * 
 * @function transDate
 * @param {(String|Number)} str 
 * @param {String} locale default 'ar'
 * @param {Boolean} shorten default false
 * @returns {String}
 */
const transDate = (str: string|number, locale: string = 'ar', shorten: Boolean = false) : string => {
    switch (locale) {
        case 'ar': 
            return ArabicJs(str).toArabicDate().toString();
            break;
        case 'en':
            return ArabicJs(str).toEnglishDate(shorten).toString();
            break;
        default: 
            return ArabicJs(str).toArabicDate().toString();
            break;
    }
}

export default transDate;