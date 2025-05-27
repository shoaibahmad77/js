//  array : theses are collection of items
// good to store related data -linear form

// example how to store , we can store diff types of data
// let arr = ["hulk", "spiderman", "superman", 92];
// console.log(arr);

//  arrays indicies arr[0] ...
// console.log(arr[5]);
// // to change value -> arr[0]='skaitiman
// arr[0] = "shaktiman";
// console.log(arr);
//  arrays are mutable
// loops and arrays
// prop length

// let marks = [12, 13, 14, 15, 16,17,18];
// for (i = 0; i < marks.length; i++) {
//   console.log(marks[i]);
// }

// for-of  and for -in can be used generally we use for of

// for of
// let cities = ['mumbai','delhi','pune'];
// for (let i of cities) {
//   console.log(i.toUpperCase());
// }
// output 1,2,3,4,5

//ques; for a given array with marks of student -> [85,97,44,37,76,60] find the avg marks of the entire class

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i of marks) {
//   sum = sum + i;
// }
// let avg = sum / marks.length;
// console.log(`avg marks are = ${avg}`);

// methods in arrays push()add to end, pop () delete from end and return ,toString() converts array to string

//push()
// let items = ["carrot", "potato", "apple"];
// items.push("tomato", "burger", "chips");
// console.log(items);

// pop()
// items.pop();
// console.log(items);
// output carrot ,potato,apple,tomato,burger
// toString
// console.log(items.toString());

// why do this maybe sometimes data needed in the form of string

// contact() to joins multiple arrays and returns new result

// let marvel_heros = ["spiderman", "thor", "ironman"];
// let dc_heroes = ["superman", "batman"];
// let indian_heros = ["shaktiman"];
// let hero = marvel_heros.concat(dc_heroes, indian_heros);
// console.log(hero);

// unshift( )  adds elemet at start of array

// marvel_heros.unshift('antman')
// console.log(marvel_heros)

//shift () returns deleted value 1st value in array
// let students= ['waseem','sabiq']
// let val = students.shift();
// console.log('deleted value is ',val)
// slice () returns  piece of array

// let marvel =['spiderman','batman','ironman','Drstrange']
// console.log(marvel)

// console.log( marvel.slice(1,3))

// splice is used to add remove delete in an array syntax arr.splice(startINDEX,endINDEX,element to be added )

// let bros =['zaryab','furkan','fahad','ahmer','saif']

// bros.splice(1,2,'sharana')
// console.log(bros)

// add element
// let arr =[1,2,3,4,5,6,7]
// arr.splice(1,0,9)
// console.log(arr)
// // delete element
// arr.splice(0,1)
// console.log(arr)
// replace item lets replace 9 by 10

// arr.splice(0,1,10)

// console.log(arr)

//lets practice
// ques; create an array to store companies , bloomberg, microsoft,uber ,google,ibm,netflix
// a. remove the first compnay from the array, b. remove uber and add ola, c. add amazon at the end.

// let companies=[ 'bloomberg', 'microsoft','uber','google','ibm','netflix']

// companies.splice(0,1)
// console.log(companies)
// companies.splice(1,1,'ola')
// console.log(companies)
// companies.splice(6,0,'amazon')
// console.log(companies)
// map , reduce filter ...

