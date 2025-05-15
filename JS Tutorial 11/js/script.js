// JSON - JavaScript Object Notation

// JSON   Is a file format that is commonly used in transporting data, via API or other means.

// JSON Structure  A JSON Data should have a key | value pair and a colon ':' in the middle. JSONs should be surrounded by {}
let person = { key: "value" };

//A JSON can have multiple JSON Data by using commas as separators. JSONs should be surrounded by {}.

person = {
    firstName: "David",
    lastName: "SDPT",
    age: 22
};
  
console.log(person);


//A JSON can also have arrays as its value

let tao = {
    firstName: "David",
    lastName: "SDPT",
    age: 22,
    hobbies: ["coding", "eating", "sleeping"]
};
  
console.log(tao)


//A JSON can also have JSONS as its value
person = 
{
    "firstName": "David",
    "lastName": "SDPT",
    "age": 22,
    "hobbies": ["coding", "eating", "sleeping"],
    "pets": [
      {
        "name": "Shadow",  
        "type": "Dog"
      },
      {
        "name": "Mocha",
        "type": "Cat"
      }
    ]
  }  //This expanded person object now includes a pets property. The value of pets is another object,
// which in this case, uses numeric keys ("0" and "1") to represent individual pets. Each pet is described by an object containing its name and type.
  

// JSON Read/Write  you can read specific values of a JSON by using its key surrounded by []
//Example console.log(read["write"])

console.log(person["hobbies"]);
console.log(person["pets"]);

//JSON Read/Write you can read specific values of a JSON by using a period followed by the key. Only works on a STRING key
console.log(person.firstName)
console.log(person.lastName)

//JSON Read you can read array values in a JSON by using its key and accessing it by index

console.log(person["hobbies"][0]);
console.log(person["hobbies"][1]);

//JSON Read you can read array values in a JSON by using its key and accessing it by key as well
console.log(person["pets"]["0"]["name"]);
console.log(person["pets"]["1"]["type"]);


//JSON Write You can UPDATE specific values of a JSON by using its key surrounded by [] and assigning a value to it.
//Assigning a value to a non-existent key will result into adding it.

let xmen = {
    firstName: "Scott",
    lastName: "Summers",
    age: 22
  };
console.log(xmen);
  
  //Update Existing "key|value"
  xmen["firstName"] = "Alex";
  console.log(xmen);
  
  //Create New "key|value"
  xmen["middleInitial"] = "F";
  console.log(xmen);

// JSON Stringify You can convert JSON into string by using the JSON.stringify() method.

let strXmen = JSON.stringify(xmen);
console.log(strXmen)

// JSON Parsing  You can convert valid Strings into JSON by using the JSON.parse() method. If a string is invalid it would throw an error at the console

let strPersona = '{"firstName": "Ryan", "lastName": "Rodriguez", "age": 22}';
let persona = JSON.parse(strPersona);
console.log(persona);


// This code snippet demonstrates the use of JSON.parse().
// A string variable strPerson is declared and initialized with a JSON string. Notice that the keys (firstName, lastName, age) are enclosed in double quotes, which is the correct JSON syntax.
// The JSON.parse() method is called with strPerson as its argument. This method parses the JSON string and converts it into a JavaScript object. The resulting object is assigned to the person variable.
// Finally, console.log(person) will output the JavaScript object to the console.


// JSON Array  You can also create an Array of JSONs, which can be manipulated the same as any other arrays.

let pipol = [
    {
      firstName: "David",
      lastName: "SDPT",
      age: 22
    },
    {
      firstName: "Alenere",
      lastName: "SDPT",
      age: 21
    },
    {
      firstName: "Jaymar",
      lastName: "Catapang",
      age: 22
    }
  ];
console.log(pipol);
console.log(pipol[0].firstName);

