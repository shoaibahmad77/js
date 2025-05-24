// functions are the block of code that perform a specific task,can be called when ever needed
// syntax function funcname(par,par){
// do some work
//               }

// function zari() {
//   console.log("muje gess ahye");
// }

// function add(a, b) {
//   console.log(a + b);
// }
// add(1, 2);

// function myFunction(msg) {
//   console.log(msg);
// }
// myFunction("heloo");

// function sum(x,y){
//     s=x+y;
//     console.log("before return")
//     return s;
//     // console.log('after return') // wont run
// }
// sum(3,4)
// console.log(s)  // return a value

//  more about functions
// function minus(par,par) // these parameters are the local variables which have scope within the {} outside this if we call it we get undefined error in short these  have block scope.
/* 
function minus(x,y){
s=x-y;
return s;

}
// here if i call it 
console.log(x) it will show undefined...
*/

// arrow functions in js

// const add=(x,y)=>{
//     x+y;
//     console.log(`x + y = ${x+y}`)
// }

// add(2,5);

// for multiplication
// let m =(x,y)=>{
//     console.log(x*y)
// }
// m(2,5);

// multiplication = 5; phalay tho ye fucntion tha ab normal variale hai jismai value store hai

// const arrowMul = (a, b) => {
//   return a * b;
// };
// create an arrow function for print hello

// let printHello = () => {
//   console.log("hello");
// };
// printHello()


   
    //  Write a regular function and an arrow function to calculate the square of a number
    
    function square(a){
        s=a**2
        console.log(s)
    }
    square(3)

    let arrowSquare =(a)=>{
        console.log(a**2)
    }
    arrowSquare(2)
   