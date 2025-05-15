//Conditional Statements Comparison Operators (2 values)


// Operator	Description
// ==	Equal
// ===	Equal Value and Type
// !=	Not Equal
// !==	Not Equal Value and Type

let x = 5;

console.log(x == "5");
//Output: true

console.log(x === "5");
//Output: false

console.log(x != "5");
//Output: false

console.log(x !== "5");
//Output: true


// Operator	Description
// >	Greater Than
// <	Less Than
// >=	Greater Than or Equal
// <=	Less Than or Equal

console.log(13 > 10);
//Output: true

console.log(5 < 10);
//Output: true

console.log(5 >= 5);
//Output: true

console.log(5 <= 7);
//Output: true

//IF Statement
// code inside {} will only be executed IF the comparison is TRUE


let age = 0;

if (age >= 18)
{
  console.log("Legal Age");
}

else if (age <=0)
{
    console.log("Invalid age");
}

else
{
    console.log("Minor Age");
}

console.log("Thank You!");