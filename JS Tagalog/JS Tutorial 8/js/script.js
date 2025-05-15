//Switch statements Are used to execute code depending on a case. It acts like Conditional Statements but can only check equality.
// break; is necessary after a case since it will let the program break out of the switch statement. Without it, the switch statement will continue running all code blocks.


let difficulty = 5;

switch (difficulty)

{
  case 1:
    console.log("Easy");
    break;
  case 2:
    console.log("Normal");
    break;
  case 3:
    console.log("Hard");
        break;
    default:
        console.log("Invalid Difficulty")
            break;
        
}

// Common Case  - can specify two or more cases in a code block

let num = 2;

switch (num)
{
  case 2:
  case 4:
    console.log("Even");
    break;
  case 3:
  case 5:
    console.log("Odd");
    break;
  default:
    console.log("Unknown");
    break;
}