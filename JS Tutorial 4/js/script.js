//Strings

let num1 = 5;
let num2 = 2;
let sum = num1 + num2;

let world1 = "Hello World";
let len1 = world1.length;
console.log(len1);
//ouput: 11

let world2 = "HelloWorld";
let len2 = world2.length;
console.log(len2);
//output: 10


//*String Index (Indices)

          //012345
let $name = "Da vid";
console.log($name[3]);
//output: v
alert($name[$name.length - 1]);

//String Template literals
let tname = "Ryan";
console.log(`Hi, ${ tname }`);

console.log(`${num1} + ${num2} = ${sum}`)
