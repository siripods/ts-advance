"use strict";
const users = ["John", "Max", "Ken"];
//const users:string[] = [];  
users.push("Bob");
users.push("Joe");
console.log("length = " + users.length);
users[0] = "Tom";
console.log(users[0]);
for (let i = 0; i < users.length; i++) {
    console.log("No." + i + " = " + users[i]);
}
users.forEach(element => {
    console.log(element);
});
const ages = [18, 20, 25];
console.log(ages);
