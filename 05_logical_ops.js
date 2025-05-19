// Logical operators in JavaScript are used to combine or manipulate boolean values (true or false) for conditions, control flow, or decision-making.
// Logical Operators:
// && (AND): Returns true if both operands are true.
// || (OR): Returns true if at least one operand is true.
// ! (NOT): Returns the opposite boolean value (e.g., !true is false).
let a = 5, b = 10, c = 2;

// AND (&&): true if both conditions are true
console.log("a < b && b > c:", a < b && b > c); // true (5 < 10 AND 10 > 2)
console.log("a > b && b > c:", a > b && b > c); // false (5 > 10 is false)

// OR (||): true if at least one condition is true
console.log("a < b || a > c:", a < b || a > c); // true (5 < 10 is true)
console.log("a > b || a < c:", a > b || a < c); // false (both are false)

// NOT (!): reverses the boolean value
console.log("!(a < b):", !(a < b)); // false (NOT true)
console.log("!(a > b):", !(a > b)); // true (NOT false)