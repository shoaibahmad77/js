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


// Data types in JS
/*
primitive 
string,boolean,number,undefined,null,BigInt,symbol

non-primitive
objects ---> categories arrays,functions
*/
// objects; are collection of values
const student = {
    fullName:'aaqifshafi',
    rollno:25,
    age:25,
    isPass:true
}

console.log(student)
console.log(typeof(student));
// its type will be object 
// to access particulars 
// suppose name -> student["fullName"];
// obj.keyname -> student.fullName;
console.log(student["age"])
console.log(student.fullName);
// to assign new values in object 
// lets change the name 
student['fullName']='tazish'
console.log(student.fullName)
// const mai change ne hota but const obj mai change hota hai 

//Qs1: create a const objects called "product" to store information shown in picture.

const product={
    item_name:'parker pen',
    ratings:'4 stars',
    price:270,
    deal:'50% off'
}
console.log(product);

product['ratings']='5 stars';
product['deal']='45% off'
console.log(product);
console.log(product.item_name);

// create a const object called 'profile' to store information.

const profile ={
    user_name:'shardakhapra',
    posts:198,
    followers:'569k',
    isFollow:true,
    bio:"apna college| ex-microsoft,DRDO"
}
console.log(profile);
console.log(profile.user_name);
console.log(profile['isFollow']);
