const aboutBtn = document.getElementById('about-btn');

aboutBtn.addEventListener('click', handleClick = () => {
    window.location.href = "about.html";
});


// validatorer för kontaktformulär
class _CHValidator {
    constructor() {
        this.isvalid=false;
    }
    get valid() {
        return this.isvalid;
    }
    get invalid() {
        return !this.isvalid;
    }
    validate(text) {
        this.isvalid = false;
    }
}

class CHTextValidator extends _CHValidator {
    constructor(minlen, maxlen) {
        super();
        this.minlen = minlen;
        this.maxlen = maxlen;
    }
    validate(text) {
        this.isvalid = text.length >= this.minlen && text.length <= this.maxlen;
    }
}

class CHMailValidator extends CHTextValidator {
    constructor() {
        super(6, 64);
    }
    validate(text) {
        super.validate(text);
        this.isvalid = super.valid && isValidMail(text);
    }
}

const isValidMail = (text) => {
    return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(text);
}

class CHMessageValidator extends CHTextValidator {
    constructor() {
        super(6, null);
        }
        validate(text) {
            super.validate(text);
            this.isvalid = super.valid;
        }
}
