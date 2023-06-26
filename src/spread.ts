const sections:string[] = ["Accounting", "Finanace"];
const departments:string[] = ["Programmer", "Marketing", "Graphics"];
console.log(sections);
console.log(departments);
//departments.push(sections);
departments.push(...sections);
console.log(departments);