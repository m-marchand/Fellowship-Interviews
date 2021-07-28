
/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

function changeCase(letter) {
  //check if it's lowerCase or uppercase
  //change it to the opposite
  if (letter.toUpperCase() === letter) { //know that letter passed in is uppercase
    return letter.toLowerCase();
  } else { //lowercase passed in
    return letter.toUpperCase();
  }
}

// console.log(changeCase("H"));


/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

// Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"

function effectString(string, callback) {
  //split the string into letter array
  //iterate through the letter array, call callback
  //join into string
  let letters = string.split("");
  let result = "";
  
  for (let i = 0; i < letters.length; i++) {
    result += callback(letters[i]);
  }
  
  return result;
  
}

// console.log(effectString("hello WORLD", changeCase));



/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
Example:
const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
oddCounter(); ->  { true: 0, false: 0 }
oddCounter(3); -> true
oddCounter(2); ->  false
oddCounter(); -> { true: 1, false: 1 }
*/



function checkerLogger(func) { //func returns boolean
  const obj = {
    true: 0,
    false: 0
  };
  return function(arg) {
    if (arg) {
      if (func(arg) === true) {
        obj.true += 1;
      } else {
        obj.false += 1;
      }
      return func(arg); //should return true or false
    } else {
      return obj;
    }
    //if arg is defined, func is invoked and its result returned
    //if arg is undefined, return how many times the callback has been called with an argument
  }
}

// const isOdd = num => num % 2 === 1
// const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()) // ->  { true: 0, false: 0 }
// console.log(oddCounter(3))  //-> true
// console.log(oddCounter(2)) 
// console.log(oddCounter())

// ->  false

// -> { true: 1, false: 1 }



/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2

Note: Do not use any native JS methods, or loops.
*/

function countChar(input, target, count = 0, idx = 0) {
  //define a count variable initialized to 0
  //define idx variable starting at 0
  //iterate with idx
  
  //base case
  if (input[idx] === undefined) { //string's length does not have a value
    return count;
  } else {
    //check if the string at idx is equal to the target
    //if equal, increment the count
    //recursive call, incrementing idx by 1
    if (input[idx] === target) {
      count++;
    }
    return countChar(input, target, count, idx + 1);
  }
}

// console.log(countChar('javascript', 'a'));



/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:

*/


function transpose(arrays) {
  //return array of transposed arrays
  //iterate the array of arrays
  //in each array, push the elements at the same indices to their own array
  //return array containing the result arrays
  let result = []; //eventually contain result arrays
	let idx = 0;
  
  for (let i = 0; i < arrays[i].length; i++) { //accesses each array
    let toPush = [];
    
    
    for (let j = 0; j < arrays.length; j++) { //accesses each element in the current array
      toPush.push(arrays[j][i]);
      console.log(toPush);
    }
    result.push(toPush);
  }
  return result;
}

const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]