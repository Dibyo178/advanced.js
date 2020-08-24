let bonus=20; //global scope...

function sum(first,second) {
    let result=first+second+bonus;
    // console.log(bonus);//global scope...
if(result>9){ //if block scope {}..
    let mood='happy'
    // var mood='happy';//wasting done..
    console.log(mood);
}
// console.log(mood);//wasting done..
    return result;
}
const output=sum(3,7);

// console.log(bonus); //global scope...
// console.log(output);

//global variable
var a = 2;

