/**
 * Used for convert English date to Arabic
 * 
 * @function toArabicDate
 * @param {String} str 
 * @returns {String}
 */
const toArabicDate = (str: string) : string => {
    let englishDate: Array<string> = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'am', 'pm'];
    let englishDateShorten: Array<string> = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'am', 'pm'];
    let arabicDate: Array<string> = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس' , 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر', 'السبت', 'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'ص', 'م'];
    
    let dateArr = str.trim().split((/\s+/)).map((value: string) : string => {
        let cleanValue: string = value.replace(/[^a-zA-Z ]/g, "");
        let lowerCleanVal: string = cleanValue.toLowerCase();

        if (englishDate.includes(lowerCleanVal)) {
            return value.replace(cleanValue, arabicDate[englishDate.indexOf(lowerCleanVal)]);
        }
        
        if (englishDateShorten.includes(lowerCleanVal)) {
            return value.replace(cleanValue, arabicDate[englishDateShorten.indexOf(lowerCleanVal)]);
        }
        
        return value;
    });
    
    return dateArr.join(" ").toString();
}

export default toArabicDate;