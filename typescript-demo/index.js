"use strict";
let str = 'mainhou';
let num = 1;
let big = 10n;
console.log(str, num, big);
let obj1 = { a: 1, b: 2 };
obj1.a = 2;
let obj;
obj = 1; // ok
obj = 'a'; // ok
obj = true; // ok
obj = {}; // ok
obj = Symbol(); //ok
obj = 10n; //ok
obj = null; // error
obj = undefined; // error
