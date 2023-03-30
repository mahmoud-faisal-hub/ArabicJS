const decodeURL = (str: string) : string => {
    return decodeURIComponent(JSON.parse('"'+str.replace(/\"/g,'\\"')+'"'));
}

export default decodeURL;