//JSON FOR...IN Loop  "We can use FOR/IN Loop to ITERATE over all the keys inside a JSON.

let person =
{
    firstName: "David",
    lastName: "SDPT",
    age: 22
  };
  
  for (let key in person) {
      console.log(key);
      console.log(person[key]);
      console.log(`${ key }:${ person[key] }`);

}
  

//"Object.keys() Method  Returns the keys of a JSON in an array format.
let keys = Object.keys(person);
console.log(keys);

//Assuming the person object from the previous turn, this code uses the Object.keys() method. This method takes an object as an argument and returns an array containing the names of all the object's own enumerable property names (keys).
//Therefore, the output of this code will be an array containing the keys of the person object: