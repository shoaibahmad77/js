// for-in loop used for objects
// syntax for (let key in objvar){ //do some work }

let details = {
  name: "rahul",
  age: 28,
  addres: "delhi tilak nagar 61901",
};

for (let i in details) {
  console.log(i);
}

//for-in return key values
//now to get key and its values
let list = {
  object: "PENCIL",
  belongs_to: "areeb",
  age: 8,
};
for (let i in list) {
  console.log("key=", i, "value=", list[i]);
}

// Write a JavaScript program using a for...in loop to print all property names of the object { name: "Alice", age: 25, city: "Paris" }.

let property = {
  name: "alice",
  age: 25,
  city: "paris",
};

for (let i in property) {
  console.log("key=", i, "values=", property[i]);
}

// Write a JavaScript program using a for...in loop to print only the properties with numeric values from the object { name: "Bob", age: 30, job: "developer", id: 123 }.

let prop = {
  name: "bob",
  age: 30,
  job: "developer",
  id: 123,
};
 for(let i in prop){
   if(typeof prop[i]==='number'){
    console.log('key',i,'values',prop[i])
   }
 }
//  
