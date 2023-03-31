import { standarizeArabic } from '../helpers';

/**
 * Used for convert Arabic date to English
 * 
 * @function toEnglishDate
 * @param {String} str 
 * @param {Boolean} shorten default false
 * @returns {String}
 */
const toEnglishDate = (str: string, shorten: Boolean = false) : string => {
    let englishDate: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'am', 'pm'];
    let englishDateShorten: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'am', 'pm'];
    let arabicDate: Array<string> = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'اغسطس' , 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر', 'السبت', 'الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'ص', 'م'];
    
    let dateArr = str.trim().split((/\s+/)).map((value: string) : string => {
        let cleanValue: string = value.replace(/[^ء-ي ]/g, "");
        let standarizeCleanVal: string = standarizeArabic(cleanValue);

        if (arabicDate.includes(standarizeCleanVal)) {
            if (shorten) {
                return value.replace(cleanValue, englishDateShorten[arabicDate.indexOf(standarizeCleanVal)]);
            } else {
                return value.replace(cleanValue, englishDate[arabicDate.indexOf(standarizeCleanVal)]);
            }
        }
        
        return value;
    });
    
    return dateArr.join(" ").toString();
}

export default toEnglishDate;