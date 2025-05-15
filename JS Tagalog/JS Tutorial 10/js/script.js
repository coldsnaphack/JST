//FOR Loop is used to execute a block of code, while the condition is met/true

for (let i = 0; i < 5; i++) {
    console.log("Hello");
    alert(i);
}
  
//ITERATE Array - You can use for loop to read through all the array elements.

let people = ["David", "Alenere", "Gibert", "James"];

for (let x = 0; x < people.length; x++)
{
  console.log(people[x]);
}

//For loops are used when the number of iterations are known.
// While loops are used when the number of iterations are unknown

let person = ["David", "Alenere", "Gibert", "James"];
let index = 0;

while (person[index])
{
  console.log(person[index]);
  index++;
}



for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (i === 1) {
    break;
  }
}

//Output: David Alenere

//FOR...IN Loop    Are used for iterating over JSONs or Arrays. It returns the key or index of each item.

people = ["David", "Alenere", "Gibert", "James"];

for (let idx in people)
{
  console.log(people[idx]);
}

//For...OF  Are used for iterating over Arrays. It returns the value of each element.

people = ["David", "Alenere", "Gibert", "James"];

for (let person of people)
{
  console.log(person);
}