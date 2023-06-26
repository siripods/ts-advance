"use strict";
const person1 = {
    name: "john",
    age: 55,
    address: "Bangkok"
};
//function receives object as paramater
const showDetail = (data) => {
    console.log(`name = ${data.name}, age = ${data.age}`);
};
//pass object as argument
showDetail(person1);
//pass object like this, it will check excess property
showDetail({ name: "siripod", age: 43, address: "Bangkok" });
