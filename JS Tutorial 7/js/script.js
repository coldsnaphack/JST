//Conditional Statements LOGICAL Operators (3 or more complex conditions)

// Method	Description
// &&	    AND
// ||	    OR
// !	    NOT

//AND both conditions True
let age = 18;
let xperience = 3;

console.log(age >= 18 && xperience > 1);
//Output: true

console.log(age >= 18 && xperience > 3);
//Output: false

//OR either conditions should be True

let experience = 0;
let language = "C++";
let hasDegree = true;

if (experience > 1 || language === "C#")
{
    alert("You are qualified.");
}
else
{
    alert("You are not qualified.");
}

alert(!hasDegree);
//Output: false

alert(!(xperience > 1));
//Output: false

//NOT  inverts the results of a Condition

let isTall = true;

if (!isTall) {
  alert("Wow Toll");
} else {
  alert("Shmol");
}


//Nested Conditional Statements inside a conditional statement


if (age >= 18)
    {
    if (experience > 1)
        {
            if (experience >= 5) alert("You are OVER Qualified");
            else alert("You are Qualified");
        }  else alert("You don't have enough experience");
  } else alert("You are a Minor");