// js is dynamically typed we need not to tell what we are storing in a varible

// To print //
console.log("hello world");

// variables:- these are the containers used to store values //
// number
age = 25;
console.log(age);
// string
name = "areeb";
console.log("name");
// boolean
isFollow = true;
console.log(isFollow);
/* null:- absense of any value */
x = null;
console.log(x);
/* undefined:- means a variable has been declared but not assigned a value yet */
y = undefined;
console.log(y);
/*
            variables rules
 1. variables names are case sensitive "a" and "A" are different

 2. only letters,digits,underscore(_) and $ is allowed,
   below eg will show error

1name = "shoaib"
console.log(1name); 

3. only letters,underscore(_) and $ can be 1st character

4. reserved words cannot be variables names eg console = 25;
*/
//   let,const and var  //

//  var: variable can be re-declared and updated.a global scope variable

//  let: variable cannot  be re-declared but can be updated.a block scope variable.

//  const: variable cannot be re-declared or updated. a block scope variable.
let fullName = "shoaib";
console.log(fullName);
// here we updated
let rollno = 27;
rollno = 28;
console.log(rollno);
// here we re- declared and updated
var girlname = "bella";
var girlname = "nabeeha";
console.log(girlname);

const section = "green";
console.log(section);
/*
   this will cause error as            const is fixed 
section = 'red'
console.log(section)
*/
let q;
console.log(q);
// yaha pahlay undefined hojaye ga then after value assign kr k ajaye ge
q = "apple";
console.log(q);
/*  yaha tho error ajaye ga const ko hmaya sha phalay he value dhay ne padi ge meatlab initilize krna pade ga , 'let' mai zaruri ne hai*/
/*
        const color;
        color ='blue'
        console.log(color);
*/
// block scope means { curly braces}
{
  let school = "biscoe";
  console.log(school);
  let gov = "bjp";
  console.log(gov);
  // but if i redefine error aye ga tho usko alag block mai krna pade ga
  // school ='burnhall'
}

{
  let school = "burnhall";
  console.log(school);
}
