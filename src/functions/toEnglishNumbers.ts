const toEnglishNumbers = (str: string) : string => {
    return str.replace(/[٠-٩]/g, d => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
}

export default toEnglishNumbers;