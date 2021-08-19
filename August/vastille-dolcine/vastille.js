

/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

function countTimes(array, target) {
  // declare a count variable
  let count = 0;
  // iterate over the array
  for (let num of array) {
  	// check if indexed value equals target
    if (num === target) {
  		// if yes, increment count by one
      count += 1;
    }
  }
  // return count
  return count;
}

// console.log(countTimes([1, 8, 9, 9, 10], 9)) // -> 2
// console.log(countTimes([2, 108, 9, 9, 10, 108, 108], 108)) // -> 3
// console.log(countTimes([], 1)) // -> 0




/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).
"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

function wordSearchLetterCounter(array, target) {
  // declare a count variable
  let letterCount = 0
  // iterate over the array
  for (let i = 0; i < array.length; i++) {
  	// invoke countTimes with arguments subarray and target
    letterCount += countTimes(array[i], target);
  	// add evaluated result to count variable
  }
  // return count
  return letterCount;
}


const array = [
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
]
// console.log(wordSearchLetterCounter(array, 'D')) // 3
// console.log(wordSearchLetterCounter(array, 'S')) // 3
// console.log(wordSearchLetterCounter(array, 'I')) // 0




/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

function changeCase(letter) {
  // check if letter is uppercase
  return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()
  	//if yes, return lowercase
  	// else, return uppercase
}

// console.log(changeCase('a')) // -> 'A'
// console.log(changeCase('B')) // -> 'b'
// console.log(changeCase('v')) // -> 'V'


/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

function effectString(string, callback) {
  // declare a variabel to store new string
  let newString = '';
  // iterate over the string
  for (let i = 0; i < string.length; i++) {
  	// invoke the callback with indexed string charcter as the argument
    newString += callback(string[i]);
  	// add the evaluated result to the new string
  }
  // return new string
  return newString;
}

// Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"
let chars = 'hello WORLD';
// console.log(effectString(chars, changeCase)); // 'HELLO world'
// console.log(effectString('Vastille', changeCase)); // 'vASTILLE'





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

function checkerLogger(callback) {
  // declare a count variable
  const results = {
    true: 0,
    false: 0
  };
  // return a function, may or may not have argument
  return function(arg) {
  	// if argument
    if (arguments.length) {
  		// if evaulated result of callback is true
      if (callback(arg)) {
  			// increcrent true key in count
        results.true += 1;
      }
  		// else
      else {
  			// increment false key in count
        results.false += 1;
      }
  		// return evaulated result of callback
      return callback(arg);
    }
  	// else
    else {
  		// return count variable
      return results;
    }
  }
}

const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); // ->  { true: 0, false: 0 }
// console.log(oddCounter(3)); // -> true
// console.log(oddCounter(2)); // ->  false
// console.log(oddCounter()); // -> { true: 1, false: 1 }


/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

function countChar(string, target) {
  
}

console.log(countChar('hello world', 'o')) // 2
console.log(countChar('javascript', 'j')) // 1
console.log(countChar('vastille', 'l')) // 2