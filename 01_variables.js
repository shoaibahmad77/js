// JS is a dynamically typed langauge we need not to tell the type of data we are storing in a variable.

// variables are containers used to store data

// JavaScript Data Types:

// Primitive Types:
// Number: Integer or floating-point (e.g., 42, 3.14).
// String: Text data (e.g., "hello").
// Boolean: true or false.
// Undefined: Variable declared but not assigned (e.g., let x;).
// Null: Explicitly no value (e.g., let x = null;).
// Symbol: Unique, immutable identifier (e.g., Symbol("id")).
// BigInt: Large integers beyond Number limits (e.g., 123n).

// Non-Primitive (Reference) Types:
// Object: Key-value pairs (e.g., { name: "John" }).
// Array: Ordered list (e.g., [1, 2, 3]).
// Function: Reusable code block (e.g., function add() {}).

name = "tony stark";
console.log(name);

age = 25;
console.log(age);

// null :- absense of value its a special value

x = null;
console.log(x);

// undefined :- dont know whats inn

y = undefined;
console.log(y);

isFollow = true;
console.log(isFollow);

// let , const & var
/*
var : can be redeclared and updated, global scope(can be used any where in the code).
let : cannot be redeclared but can be updated, block scope (cant be used any where in the code ).
const : cannot be redeclared or updated, a block scope variable.
*/

let name_ = 'james';
console.log(name);
let age_ = 23;
console.log(age_); 
// it has block scope 
{ 
   let a = 77;
   console.log(a); 
}
// can be used within block now if we want to re-update it we make new block
{
   let a = 89;
   console.log(a);
}





/* we can declare let a;
console.log(a);
output will be undefined
*/


var _name = 'basit'; // last updated value will be output
var _name = 'waseem';
console.log(_name);

const PI = 3.14;
console.log(PI);

/* we cant declare const a;
we get error so it should be given error always , its value should be initialized */



 
