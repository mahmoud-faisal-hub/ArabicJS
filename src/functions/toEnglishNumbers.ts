/**
 * Used for convert Arabic numbers to English
 * 
 * @function toEnglishNumbers
 * @param {(String|Number)} str 
 * @returns {String}
 */
const toEnglishNumbers = (str: string|number) : string => {
    str = String(str);
    
    return str.replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
}

export default toEnglishNumbers;