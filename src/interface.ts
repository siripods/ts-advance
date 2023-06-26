//Define interface, properties and abstract methods
interface Job {
    jobTitle:string,
    income:number
}
interface Contact {
    address:string,
    phone?:string
}
interface Person extends Job,Contact {
    name:string,
    age?:number,    //optional
    readonly gender:string  //cannot modify
    info:()=>void;
}
let p1:Person;
    p1 = { 
        name:"Joe", 
        age: 29,
        gender:"male",
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
//create intersection type
type People = Person & Job & Contact;
let pp1:People = { 
    name:"Nick", 
    age: 45,
    gender:"male",
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


