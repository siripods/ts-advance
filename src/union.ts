let year:number|string|boolean;
year = 50;
year = "abc";
year = false;
console.log(`year = ${year}`);

type Point = {
    x:number,
    y:number
}
type Position = {
    lat:number,
    long:number
}

//coord can stores both Point and Position
let coord:Point|Position;
coord = {x:100, y:200};
coord = {lat:500, long:600};
console.log(coord);


//Function parameter using union type
function sayHello(name:string|string[]):void {
    if(typeof name == "string") {
        console.log(`Hello ${name}`);
    }
    else {
        name.forEach(element => {
            console.log(`Hello ${element}`);
        });
    }
}

sayHello("John");
sayHello(["George", "Mary", "Bob"]);