// Type Assertions in TypeScript

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength);