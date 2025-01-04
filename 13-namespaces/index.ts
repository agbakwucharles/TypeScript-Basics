// Namespaces in TypeScript

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return /^[A-Za-z]+$/.test(s);
        }
    }
}

let validator = new Validation.LettersOnlyValidator();
console.log(validator.isAcceptable("Hello"));
console.log(validator.isAcceptable("123"));