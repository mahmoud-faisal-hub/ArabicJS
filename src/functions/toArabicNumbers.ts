const toArabicNumbers = (str: string) : string => {
    let arabicNumbers: Array<string> = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return str.replace(/[0-9]/g, function(w){
        return arabicNumbers[+w]
    });
}

export default toArabicNumbers;