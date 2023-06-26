type Employee = {
    readonly id:number,
    name:string,
    readonly salary:number,
    phone?:string,   //optional property (with ? mark)
    department?:string
}

let emp1:Employee = { id:1, name:"John", salary:20000, phone: "0812345678"}
let emp2:Employee = { id:2, name:"Max", salary:40000, phone: "023456789"}
let emp3:Employee = { id:3, name:"Ken", salary:60000}
emp1.name = "Jane";

//try modify value of read-only properties
//emp1.id = 500;
//emp1.salary = 30000
console.log(emp1);
console.log(emp2);
console.log(emp3);

const emps:Employee[]=[];
emps.push({id:1, name:"John", salary:20000, phone: "0812345678", department: "programmer"});
emps.push({id:2, name:"Max", salary:40000, phone: "023456789"});
emps.push({id:3, name:"Ken", salary:60000});
console.log(emps[1]);

emps.forEach(element=> {
    console.log(element);
})