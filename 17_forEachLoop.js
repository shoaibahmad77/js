//  forEach loop in js   its used in arrays 
// its actually a method
// a function in js can be returned as well as passed 
// its used to create a loop

// functions in js can be passed as parameter  and  we can return a value of a function also

// callback func a func passed as an argument  to another function
// let arrays = [1,2,3,4,5,6,7]

// arrays.forEach(function arr(val){
//     console.log(val)
// })
// // 1. Print Each Element in an Array
// let places =['delhi','jammu','kashmir']
// places.forEach((val)=>{
//     console.log(val)
// })
// Question: Use a forEach loop to print each number in an array with the message “Number: X”, where X is the number. Write it using both a traditional function and an arrow function.

// let numbers =[11,12,13]
// numbers.forEach(function msg(val){
//     console.log(`number:${val}`)
// } )
// now using arrow function
// let numbers =[80,44,58]
// numbers.forEach((val)=>{
//     console.log(`number:${val}`)
// })
// let places=['gp road','gujarnagar']
// places.forEach((val)=>{
//     console.log(val.toUpperCase())
// })



// let number =[33,7279,3283,32]
// number.forEach(function prints(j){
//     console.log(j)
// })

//

let friends =['waseem','asrar','sabiq','farman']

friends.forEach(function jenny(val,j){
    console.log(val,j)
    
})


