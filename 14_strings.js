// strings: are seq of char
// how to create
// let str = "string name";
// inbuilt prop and fuction (methods)
// properties :-
//  to print string lenght we can use  stringname.length
// to access index  string[0]

// let str = "waseem";
// console.log(str.length);
// console.log(str[0]);
/* template literals  in JS 
a way to have embedded expersions in strings 



*/
// template literals
// let sentence =`this is a template literals `  // using backticks

// let details ={
//     product_name:'pen',
//     product_price:45
// }
// details.product_price=5;
// details.product_name='book'
// console.log(`the product is a ${details.product_name} and it has a price of ${details.product_price}`)

// let student = {
//   name: "nabeeha",
//   class: 7,
//   school: "mallinson",
// };

// student.name = "areeb";
// student.school = "biscoe";
// console.log(
//   `the name of the student is ${student.name} and he reads in class ${student.class} and studies in ${student.school} school`
// );
//this technique is called string interpolation
// escape character :- used fro string next line /n
// console.log("apna \n college")
// tab space /t
// let word ='hello\tworld'  //12
// console.log(word.length) 
// \t counts as 1 length

// string methods :- methods to manipulate a string
/* 
str.toUpperCase()
str.toLowerCase()
str.trim() // remove whitespaces
*/

// console.log(word.toLocaleUpperCase())
// console.log(word.toLowerCase())
// let str ="hello"
// let new_str =str.toUpperCase();
// console.log(str)
// console.log(new_str)

// strings are immutable  we cant change 
// trim :- starting and ending ke gaps khtm krta hai
let str ="     hello  apna   college   "
console.log(str.trim())