"use strict";
const sections = ["Accounting", "Finanace"];
const departments = ["Programmer", "Marketing", "Graphics"];
console.log(sections);
console.log(departments);
//departments.push(sections);
departments.push(...sections);
console.log(departments);
