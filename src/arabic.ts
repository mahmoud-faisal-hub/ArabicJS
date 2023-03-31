import * as converters from './functions';

interface ArabicJs {
    fixURL: typeof ArabicJs.prototype.decodeURL;
}

class ArabicJs {
    private str: string;
    
    constructor(str: string|number) {
        str = String(str);
        this.str = str;
    }

    public toArabicDate() : this {
        this.str = converters.toArabicDate(this.str);
        return this;
    }

    public toEnglishDate(shorten: Boolean = false) : this {
        this.str = converters.toEnglishDate(this.str, shorten);
        return this;
    }

    public toArabicNumbers() : this {
        this.str = converters.toArabicNumbers(this.str);
        return this;
    }

    public toEnglishNumbers() : this {
        this.str = converters.toEnglishNumbers(this.str);
        return this;
    }

    public decodeURL() : this {
        this.str = converters.decodeURL(this.str);
        return this;
    }

    toString() : string { 
        return this.str;
    }
}

ArabicJs.prototype.fixURL = ArabicJs.prototype.decodeURL;

const arabicJs = (str: string|number) => {
    str = String(str);
    return new ArabicJs(str);
}

export default arabicJs;