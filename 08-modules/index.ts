// Modules in TypeScript

export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
}

import { Calculator } from './Calculator';

let calculator = new Calculator();
console.log(calculator.add(5, 3));