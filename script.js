//  js is dynamically typed we need not to tell what we are storing in a varible

// To print
// console.log("hello world");

//  variables:- these are the containers used to store values //
// number
// age = 25;
// console.log(age);
// string
// name = "areeb";
// console.log("name");
// boolean
// isFollow = true;
// console.log(isFollow);
/* null:- absense of any value */
// x = null;
// console.log(x);
//  undefined:- means a variable has been declared but not assigned a value yet
// y = undefined;
// console.log(y);
//             variables rules
//  1. variables names are case sensitive "a" and "A" are different

//  2. only letters,digits,underscore(_) and $ is allowed,
//    below eg will show error

// 1name = "shoaib"
// console.log(1name);

// 3. only letters,underscore(_) and $ can be 1st character

// 4. reserved words cannot be variables names eg console = 25;

//  let,const and var

//   var: variable can be re-declared and updated.a global scope variable

//  let: variable cannot  be re-declared but can be updated.a block scope variable.

//  const: variable cannot be re-declared or updated. a block scope variable.
// let fullName = "shoaib";
// console.log(fullName);
// here we updated
// let rollno = 27;
// rollno = 28;
// console.log(rollno);
//  here we re- declared and updated
// var girlname = "bella";
// var girlname = "nabeeha";
// console.log(girlname);

// const section = "green";
// console.log(section);
//
//    this will cause error as            const is fixed
// section = 'red'
// console.log(section)

// let q;
// console.log(q);
//  yaha pahlay undefined hojaye ga then after value assign kr k ajaye ge
// q = "apple";
// console.log(q);
//  yaha tho error ajaye ga const ko hmaya sha phalay he value dhay ne padi ge meatlab initilize krna pade ga , 'let' mai zaruri ne hai

//         const color;
//         color ='blue'
//         console.log(color);

// block scope means { curly braces}
// {
//   let school = "biscoe";
//   console.log(school);
//   let gov = "bjp";
//   console.log(gov);
//    but if i redefine error aye ga tho usko alag block mai krna pade ga
//    school ='burnhall'
// }

// {
//   let school = "burnhall";
//   console.log(school);
// }

//  Data types in JS
//
// primitive
// string,boolean,number,undefined,null,BigInt,symbol

// non-primitive
// objects ---> categories arrays,functions
//
//objects; are collection of values
// const student = {
//   fullName: "aaqifshafi",
//   rollno: 25,
//   age: 25,
//   isPass: true,
// };

// console.log(student);
// console.log(typeof student);
//  its type will be object
//  to access particulars
//  suppose name -> student["fullName"];
//  obj.keyname -> student.fullName;
// console.log(student["age"]);
// console.log(student.fullName);
// to assign new values in object
// lets change the name
// student["fullName"] = "tazish";
// console.log(student.fullName);
//  const mai change ne hota but const obj mai change hota hai

// Qs1: create a const objects called "product" to store information shown in picture.

// const product = {
//   item_name: "parker pen",
//   ratings: "4 stars",
//   price: 270,
//   deal: "50% off",
// };
// console.log(product);

// product["ratings"] = "5 stars";
// product["deal"] = "45% off";
// console.log(product);
// console.log(product.item_name);

//  create a const object called 'profile' to store information.

// const profile = {
//   user_name: "shardakhapra",
//   posts: 198,
//   followers: "569k",
//   isFollow: true,
//   bio: "apna college| ex-microsoft,DRDO",
// };
// console.log(profile);
// console.log(profile.user_name);
// console.log(profile["isFollow"]);
//  operators: these are used to perform operations.

//arithemic operators

// let a = 5;
// let b = 2;
// console.log("a+b=", a + b);
// console.log("a-b=", a - b);
// console.log("a/b=", a / b);
// console.log("a*b=", a * b);
// console.log("a**b=", a ** b);
// console.log("a%b", a % b);
//  unary operator
//  a++ post    increment       ++a pre
//  a-- post    increment       --a pre
// post says value will change from next line pre will change first example

// let A = 3;
// console.log("A=", A);
// console.log("A", A++);
// console.log(A);

// let aa = 3;
// console.log("aa=", aa--);
// console.log("aa=", aa);
//  assigment operators :- used to assign values

//  =, +=,  -= , *= , %=,  **=
//  xx += 4 means xx= xx+4

// let xx = 2;
// let yy = 3;
// xx += 4;
// console.log(xx);
// yy *= 5;
// console.log(yy);

//  comparison :- used for comparison of 2 values
//  equal to ==
// equal to and type ===
//  not equal to !=
//  not equal to and type !==
// let item1 = 2;
// let item2 = 3;
// console.log("item1 == item2", item1 == item2);

// console.log("item1 == item2", item1 != item2);

//  i case i did let item1=2 item2="2" console.log(item1==item2 )  ---> string -> number by js itself and also its not a strict check so we get true
// item2 = 2;
// console.log(item1 == item2);
// now strict check ===
// let item3 = 4;
// let item4 = 5;
// console.log(item3 === item4);
//  we get false
// console.log(item3 !== item4);

// console.log("4>5", item3 > item4);
// console.log("4<5", item3 < item4);
// console.log("4=5", item3 == item4);
// console.log("4>=5", item3 >= item4);
// console.log("4<=5", item3 <= item4);
// logical operators depending upto both ouputs what final answer will be
//  logical AND &&  if both true output will be true
//  logical OR || if both false output will be false
//  logical NOT ! if true output false and viceversa
// let num1 = 5;
// let num2 = 4;

// let condi1 = num1 > num2;
// let condi2 = num1 === 5;
// console.log("condi1 && condi2", condi1 && condi2);
// let num3 = 5;
// let num4 = 5;
// let condi3 = num3 > num4;
// let condi4 = num3 < num4;
// console.log("condi3 || condi4", condi3 || condi4);
// let no1 = 4;
// let no2 = 5;
// let condition = no1 > no2;
// console.log(" not no1>no2", !(no1 > no2));
// console.log("no2 >no1", !(no2 === no1));
//conditional statemnets :- to implement some conditions in the code

// // if statement
// //  if ( condtion ) {}

// let age1 = 15;
// if (age1 > 18) {
//   console.log("you can drive");
// }
// if (age1 < 18) {
//   console.log("you cant drive");
// }
//  conditional statements for dark/light mode on our chrome
// let mode = "light"; // here mode is set to light so we get output 'light'
// let color;
// if (mode === "dark") {
//   color = "black";
// }
// if (mode === "light") {
//   color = "white";
// }
// console.log(color);
//  if else :- 'if' condition true console  if not then  'else' console

// let umer = 18;
// if ((umer = 18)) {
//   console.log("you can vote");
// } else {
//   console.log("you cant vote");
// }
//  let modee= 'black'
// // let colorr;
//  if(modee==="black"){
//    colorr="kala bacha"
//  }
//  else{
//    colorr="gora bacha"
//  }
// // console.log(colorr)
// let modee = "dark";
// let colorr;
// if (modee === "dark") {
//   colorr = "black";
// }
// if (modee === "light") {
//   colorr = "white";
// }
// console.log(colorr);

// let nom1 = 6;
// if (nom1 % 2 === 0) {
//   console.log(nom1, "is even");
// } else {
//   console.log(nom1, "is odd");
// }

// let person;
// if (person < 25) {
//   console.log("you are teen");
// } else if (person < 18) {
//   console.log("you are less than 18 and thus minor");
// } else if (person > 25) {
//   console.log("you are old");
// } else {
//   console.log("enter age");
// }
// Check if a number num = 10 is positive. Output "Positive" if true, otherwise "Not Positive".
// let check = 10;
// if (check > 0) {
//   console.log("its positive");
// } else {
//   console.log("its negative");
// }
// Question: Determine if a variable age = 18 is eligible to vote (age >= 18). Output "Eligible" if true, otherwise "Not Eligible".
// let variable_age = 18;
// if (variable_age >= 18) {
//   console.log("eligible");
// } else {
//   console.log("not eligible");
// }
// //Question: Check if a number score = 75 is passing (score >= 60). Output "Pass" if true, otherwise "Fail".
// let score = 75;
// if (score >= 60) {
//   console.log("pass");
// } else {
//   console.log("fail");
// }
//  Question: Create an object person with properties name: "Alex" and age: 25. Output the value of name.
// let person_ = {
//   name: "alex",
//   age: 25,
// };
// console.log(person_);
//  Question: Create an object book with properties title: "JavaScript Basics" and pages: 200. Add a new property author: "Jane Doe". Output the value of author.
// let book = {
//   title: "javascript basics",
//   pages: 200,
// };
// book.author = "Jane Doe";
// console.log(book.author);
// console.log(book);
//  Question: Create an object student with properties id: 101 and grade: "B". Update grade to "A". Output the updated grade.
// let studentss = {
//   id: 101,
//   grade: "B",
// };
// studentss["grade"] = "A"; // or we can use studentss.grade='A';
//  this will also update
// console.log(studentss);
// console.log(studentss.grade);

//  Question: Create an object house with properties rooms: 3 and city: "Boston". Update rooms to 4. Output the updated rooms.
// let house = {
//   rooms: 3,
//   city: "Boston",
// };
// house.rooms = 4;
// console.log(house);
//  Question: Create an object pet with properties type: "Dog" and age: 2. Add a property name: "Buddy". Output the entire object.
// let pet = {
//   type: "Dog",
//   age: 2,
// };
// pet.buddy = "hemlo"; // add property
// console.log(pet);
//  Question: Create an object order with properties item: "Shirt" and quantity: 2. Update quantity to 5. Output the entire object.
// let order = {
//   item: "Shirt",
//   quantity: 2,
// };
// order.quantity = 5;
// console.log(order);
// // ternary operator:-
// // ? :    a?b:c
// let ball = 6;
// ball > 5 ? "six" : "hello";
// console.log(ball);

// let scorre = 75;
// let result = scorre >= 60 ? "Pass" : "Fail";
// console.log(result);

// let gender = "male";
// gender === "male" ? "its a boy" : "its a girl";
// console.log(gender);

//  MDN documents to study
// switch statement
// let day = 2;
// let dayname;
// switch (day) {
//   case 1:
//     dayname = "monday";
//     break;
//   case 2:
//     dayname = "tuesday";
//     break;
// }
// console.log(dayname);

// alert("hello"); // create one time pop-up
// prompt(" ") for taking input
// let enter__name = prompt("enter name");
// if (enter__name === "shoaib") {
//   console.log("authorized");
// } else {
//   console.log("not authorized");
// }
// // get input check if its multiple of 5
// let get_number = prompt("enter a number");
// if (get_number % 5 === 0) {
//   console.log(get_number, "it is multiple of 5 ");
// } else {
//   console.log("it is not");
// }
//  write a code which can give grade to student acc t their scores
// let grade = prompt("enter marks");
// if (grade >= 80 && grade <= 100) {
//   console.log("grade is A");
// }
// if (grade >= 70 && grade <= 89) {
//   console.log("grade is B");
// } else if (grade >= 60 && grade <= 69) {
//   console.log("grade is C");
// } else if (grade >= 50 && grade <= 59) {
//   console.log("grade is D");
// } else if (grade >= 0 && grade <= 49) {
//   console.log("grade is F");
// }
// let NAME = prompt("enter yourr name");
// if (NAME === "zaryab") {
//   console.log("lance");
// } else {
//   console.log("jav lance");
// }
// loop :- they are needed to execute a piece of code again and again .
// for,while,do while

// for loop, --->     for ( let i=1 (initilization); i<5 (stopping condition);i++ (update)){}

// for( let count=1 ; count<=5; count++)
// {
//   console.log("5x times print");
// }
// calculate sum of 1 to 5
// let sum =0;
// for (let i=1; i<=5;i++){
//   sum = sum+i

// }
// // global and block scope
// // console.log("sum from 1-5 is :",sum);
// // for(let j=0; j<=5; j++){
// //   console.log("j=",j)
// // }
// // console.log(j); // ye define ne hoga qke we have used let jiska block scope hota hai {}

// // now if we have used var
// var k=1;
// for(k=1; k<=5;k++){
//   console.log("k=",k)
// }
// console.log(k) // 6 hoga print coz last value 6 thena
// // infinite loop :- loop that never ends never do it in a program

// //while loop , while(condition ) {}
// let balance=10;
// while(balance<=15){
//   console.log("numbers are", balance)
//    balance++;
//    }

// //suming 1-5 using while
// let summing=0;
// while(summing<=5){
//   summing= summing+1;
//   console.log("are as",summing);
// }

// for(var gen =1;gen<=5;gen++){
//   console.log( "gen is ",gen);
// }
// console.log(gen)
// do while loop
// do {
// od some work}
// while {}
// let kk=10
// while(kk<=5){
//   console.log(kk)
// }  this would not run ek bar b run ne huwa coz of condtion but do while mai first time run hog athen condition check hogi

// let yt = 20;
// do {
//   console.log("apna college");
//   yt++;
// } while (yt <= 10);
// print 1-5 using do while
// let math = 1;
// do {
//   console.log("1-5 print",math)
//   math++;
// }
// while(math<=5);
// for-of loop used for strings and arrays
//eg 
 let str="haseeb";
 for(let i of str){
  console.log("i=",i);
 }