"use strict";
function sayHi(name) {
    if (!name) {
        return 'Hello TypeScript';
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(sayHi());
console.log(sayHi("siripod"));
function total(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return (parseInt(a) + parseInt(b)).toString();
    }
}
console.log(total(100, 200));
console.log(total("100", "200"));
