//ARRAYS is an object data type
// Elements - data inside an array
// Elements have index


//Array of Strings
let names = ["Alenere", "David", "Jaymar", "Maye", "Ryan", "Corinne", "Ethan", "Sylhanna"];

//Array of Numbers
let numbers = [3, 6.5, 9.35, 12.75, 7, 2];

//Array of Mixed Datatypes
let mixed = ["Alenere", 99, "David", true, 3.99];

//Empty Array
let dummy = [];


//length starts with 1

console.log(names.length);

//index start with 0
console.log(names[0])

//Example of updating arrays
let cars = ["Yaris", "Innova"];
alert(cars);
cars[1] = "Sentra";
console.log(cars);


//other ways to update arrays
//ADD using LENGTH
cars[cars.length] = "Ferrari";
alert(cars);
//ADD using push(value)
cars.push("Juke");
alert(cars);
//ADD using unshift(value)
cars.unshift("Lancer");
alert(cars);

//Deleting Arrays
alert(names);

//DELETE using LENGTH
names.length = 5;
alert(names);
//DELETE using pop()  sa dulo
names.pop();
alert(names);

//DELETE using shift()  sa harap
names.shift();
alert(names);
//DELETE using slice(start_index,end_index)
names.slice(0, 2);
alert(names);