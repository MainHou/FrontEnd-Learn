let str: string = "mainhou";
let num: number = 1;
let big: bigint = 10n;
console.log(str, num, big);
let obj1: object = { a: 1, b: 2 };
// obj1.a = 2; // error
let obj: Object;
obj = 1; // ok
obj = "a"; // ok
obj = true; // ok
obj = {}; // ok
obj = Symbol(); //ok
obj = 10n; //ok
// obj = null; // error
// obj = undefined; // error
let a = (p1: number, p2: number) => {};
let b = (p1?: number, p2?: number) => {};
let c = (...arg: number[]) => {};
a = b;
a = c;
// b = c; //error
// b = a; //error
