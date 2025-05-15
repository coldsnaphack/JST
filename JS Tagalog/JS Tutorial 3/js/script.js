let num1 = "123gasgsafsaf34";
let num2 = 2;

let float1 = "23.4afsfsaerwr"
let float2 = 5.1

let increment = 0
let incrementb = 0
let decrement = 0

// only the first set of numbers are detected by parseint
num1 = parseInt(num1);  
float1 = parseFloat(float1)

console.log(typeof num1);
console.log(num1 + num2);
console.log(typeof float1);
console.log(float1 + float2);

let math1 = 5;
let math2 = 2;

// PEMDAS is followed

//addition
console.log(math1 + math2)

//subtraction
console.log(math1 - math2)

//Multiplication
console.log(math1 * math2)

//Division
console.log(math1 / math2)

//modulus or remainder
console.log(math1 % math2)

//Exponent
console.log(math1 ** math2)

//shorthand operators  x = x + 5

math1 *= 2;
console.log(math1);

math2 += (math1 / 3);
console.log(math2)

//increment
console.log(++increment);  //prefix
console.log(increment)

alert(incrementb++); //postfix
alert(incrementb)

//decrement
console.log(--decrement);