/**
 * Used to decode and fix URLs contains Arabic characters
 * 
 * @function decodeURL
 * @param {String} str 
 * @returns {String}
 */
const decodeURL = (str: string) : string => {
    return decodeURIComponent(JSON.parse('"'+str.replace(/\"/g,'\\"')+'"'));
}

export default decodeURL;