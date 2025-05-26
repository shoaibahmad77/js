//  forEach loop in js   its used in arrays 
// its actually a method
// a function in js can be returned as well as passed 
// its used to create a loop

// functions in js can be passed as parameter  and  we can return a value of a function also

// callback func a func passed as an argument  to another function
let arrays = [1,2,3,4,5,6,7]

arrays.forEach(function arr(val){
    console.log(val)
})

let places =['delhi','jammu','kashmir']
places.forEach((val)=>{
    console.log(val)
})