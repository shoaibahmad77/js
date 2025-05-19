// objects : collection of values
// exmaple for a student we need to store his name,age,marks, isPass
/* {
    key:value,
    }
*/

// to access a key object.key , object[""];
// to update a value    object.key = value;
//                      object['key'] = 'value'; 
// to add new key and value object.key ='value';
let student = {
  name: "waseem",
  age: 23,
  marks: "80%",
  isPass: true,
};
console.log(student);

 const details ={
    customer_name:'sabiq',
    pincode:'190018',
    address:'bemina'
 }
 console.log(details);

 // updating in objects
 student.name = "farman";
 student.class ="green"; 
 console.log(student);

 // ques;Create an object to represent a car with properties make (string), model (string), and year (number). Update the year to a different value, then add a new property color (string). Log the object to verify changes.

 let car ={
    make:'hyundai',
    model:"creata",
    year:2025
 }
 car.color ="black";
 car.year =2024;
 console.log(car);
 console.log(car.model)
 // ques;Create an object for a pet with properties type (string), name (string), and age (number). Update the age to a higher value and add a property isVaccinated (boolean). Log the object to check the results.
 let pet ={
    type:'cat',
    name:'fufu',
    age:3
 }
 pet.age = 5;
 pet.isVaccinated =true;
 console.log(pet);