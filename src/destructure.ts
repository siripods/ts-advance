const colors:string[] = ["red", "green", "blue"];

//destructure elements in array, use square brackets around list of variables
const [red,green,blue] = colors;
console.log(red);
console.log(green);
console.log(blue);

//same result but need more coding
let red2:string = colors[0];
let green2:string = colors[1];
let blue2:string = colors[2];
console.log(red2);
console.log(green2);
console.log(blue2);

console.log("-----------------")
type person = {
    fname:string,
    age:number,
    address:string
}
let p:person = { fname:"Jack", age:29, address:"London"};
//destructure properties in an object, use curly brackets around list of variables
const {fname, age, address} = p;
console.log(fname);
console.log(age);
console.log(address);

//same result but need more coding
let fname2:string = p.fname;
let age2:number = p.age;
let address2:string = p.address;
console.log(fname2);
console.log(age2);
console.log(address2);