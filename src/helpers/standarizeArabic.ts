/**
 * Used to standarize the diffrent types of Arabic Characters like => {آ - إ - أ} => { ا }
 * 
 * @function standarizeArabic
 * @param {String} str 
 * @returns {String}
 */
const standarizeArabic = (str: string): string => {
    return str.replace(/[أإآ]/g,'ا').replace(/[ؤ]/g,'و').replace(/[ىئ]/g,'ي').replace(/[ه]/g,'ة')
}

export default standarizeArabic;