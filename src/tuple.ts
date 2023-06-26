const point:[x:number, y:number] = [10,20];
point[0] = 100;
point[1] = 200;
console.log(point);

const goodStatus:[code:number, status:string] = [200, "OK"];
const notFoundStatus:[code:number, status:string] = [404, "Not Found"];
console.log(goodStatus); 
console.log(notFoundStatus); 

// type tuple
type HttpStatusCode=[code:number, status:string];
const badReqStatus:HttpStatusCode = [400, "Bad Request"];
console.log(badReqStatus);