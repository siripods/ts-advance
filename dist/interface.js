"use strict";
let p1;
p1 = {
    name: "Joe",
    age: 29,
    gender: "male",
    info() {
        console.log(`Last Updated = ${new Date().toLocaleString()}`);
    },
    jobTitle: "Doctor",
    income: 25000,
    address: "Paris",
    phone: "12345"
};
console.log(p1);
p1.info();
console.log("----------------");
let pp1 = {
    name: "Nick",
    age: 45,
    gender: "male",
    info() {
        console.log(`Last Updated = ${new Date().toLocaleString()}`);
    },
    jobTitle: "Teacher",
    income: 70000,
    address: "Madrid",
    phone: "67890"
};
console.log(pp1);
pp1.info();
