"use strict";
const colors = ["red", "green", "blue"];
//destructure elements in array, use square brackets around list of variables
const [red, green, blue] = colors;
console.log(red);
console.log(green);
console.log(blue);
//same result but need more coding
let red2 = colors[0];
let green2 = colors[1];
let blue2 = colors[2];
console.log(red2);
console.log(green2);
console.log(blue2);
console.log("-----------------");
let p = { fname: "Jack", age: 29, address: "London" };
//destructure properties in an object, use curly brackets around list of variables
const { fname, age, address } = p;
console.log(fname);
console.log(age);
console.log(address);
//same result but need more coding
let fname2 = p.fname;
let age2 = p.age;
let address2 = p.address;
console.log(fname2);
console.log(age2);
console.log(address2);
