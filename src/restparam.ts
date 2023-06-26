const calcTotal=(...numbers:number[]) => {
    let rs:number = 0;
    rs = numbers.reduce((result,value,i)=> {
            console.log(`i=${i}, value=${value}, result=${result}`);
            return result+value;
        },0);
    return rs;
}
console.log(calcTotal(10,20));
console.log(calcTotal(10,20,30));
console.log(calcTotal(10,20,30,40));
