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

let veggies = ["carrot", "potato", "apple"];
veggies.push("tomato");
console.log(veggies);
