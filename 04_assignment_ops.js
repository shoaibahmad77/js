//Comparison operators :in JavaScript compare two values and return a boolean (true or false).
//  Common Comparison Operators:
// ==: Equal (loose equality, converts types).
// ===: Strict equal (checks value and type).
// !=: Not equal (loose inequality).
// !==: Strict not equal (checks value and type).
// >: Greater than.
// <: Less than.
// >=: Greater than or equal to.
// <=: Less than or equal to.

let a = 5, b = "5", c = 10;

console.log("a == b:", a == b);   // true (converts "5" to 5)
console.log("a === b:", a === b); // false (different types)
console.log("a != c:", a != c);   // true (5 ≠ 10)
console.log("a !== b:", a !== b); // true (different types)
console.log("a > c:", a > c);     // false (5 < 10)
console.log("a < c:", a < c);     // true
console.log("a >= 5:", a >= 5);   // true
console.log("c <= 10:", c <= 10); // true