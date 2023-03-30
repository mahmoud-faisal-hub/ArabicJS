const standarizeArabic = (str: string) => {
    return str.replace(/[أإآ]/g,'ا').replace(/[ؤ]/g,'و').replace(/[ىئ]/g,'ي').replace(/[ه]/g,'ة')
}

export default standarizeArabic;