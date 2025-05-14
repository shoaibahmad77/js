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