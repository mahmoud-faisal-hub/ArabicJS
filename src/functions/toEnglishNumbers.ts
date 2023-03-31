const toEnglishNumbers = (str: string|number) : string => {
    str = String(str);
    
    return str.replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
}

export default toEnglishNumbers;