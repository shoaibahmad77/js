// for of loop

//they help to apply loop on some special data types like arrays ,string
// syntax  for(let val of strVar){// do some work} 
// no initialization , updation, no stopping condition needed 

// for-of loop
let str ='apnaCollege'
for(let i  of str){
    console.log('i:',i)
}

// it print each character in the string
// Ques; calculate no of values in 'world'

let size =0;
let str_ ='world'
for(let i of str_){
    console.log( "string:",i)
    size++;
}

console.log(size);