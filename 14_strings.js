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
str.slice(start,end?) //returns part of string

str1.concat(str2) // joins str2 withs str1

str.replace(searchVal,newval) // used to search a value in string
str.charAt(idx) // to find a char at a index



*/

// console.log(word.toLocaleUpperCase())
// console.log(word.toLowerCase())
// let str ="hello"
// let new_str =str.toUpperCase();
// console.log(str)
// console.log(new_str)

// strings are immutable  we cant change
// trim :- starting and ending ke gaps khtm krta hai
// let str = "     hello  apna   college   ";
// console.log(str.trim());

// use of slice method
// let name="0123456";
// console.log(name.slice(2,5)) //234
// let str="hello"
// console.log(str.slice(1,5))
// console.log(str.slice(1,3))

// let  str1 ='zaryab'
// let str2 = '\tlemda'
// console.log(str1.concat(str2));

// let searchVal = 'hello ' + 'world' // also a concat

// console.log(searchVal)

// let str = "hello";
// console.log(str.replace("h", "y"));
// console.log(str.replace('lo','p'))

// let str ='i love js'
// console.log(str.charAt(2))
//ques: prompt the user to enter their full name. generate a username for them based on thr input  start username with@ followed by their full name and ending with the fullname length.
// eg shardakhapra , should be @shardakhapra13

// let your_name = prompt('enter your full name');

// let str2 = "@";
// let str3 = str2.concat(your_name)
// let username = str3.concat(your_name.length);
// console.log(username);




