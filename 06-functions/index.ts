// Functions in TypeScript

function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

console.log(add(5, 3));
console.log(myAdd(5, 3));