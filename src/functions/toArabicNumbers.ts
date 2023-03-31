const toArabicNumbers = (str: string|number) : string => {
    str = String(str);
    
    let arabicNumbers: Array<string> = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return str.replace(/[0-9]/g, function(w){
        return arabicNumbers[+w]
    });
}

export default toArabicNumbers;