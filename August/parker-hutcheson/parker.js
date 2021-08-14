/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

function countTimes(arr, target) {
  let count = 0;
  
  // iterate
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

//console.log(countTimes([1, 8, 9, 9, 10], 9)) //-> 2




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


const wordSearchLetterCounter = (arrOfArrays, target) => {
  let count = 0;
  // use forEach to apply countTimes on each subArray
  arrOfArrays.forEach(arr => {
    count += countTimes(arr, target);
  })
  // return count variable
  return count;
};


// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "D", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D"))



/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

function changeCase(letter) {
  if (letter === letter.toLowerCase()) {
    return letter.toUpperCase();
  } else {
    return letter.toLowerCase();
  }
}

// console.log(changeCase('a')) // -> 'A'
// console.log(changeCase('B')) // -> 'b'


/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

function effectString(string, callback) {
  // accumulator string 
    let accumulator = "";
    //iterate over the string
      for (let i = 0; i < string.length; i++) {
        //call the callback on each character
        accumulator+= callback(string[i]);
        //concat to the accumulator
      }
  return accumulator;
}

// Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"

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

// store data in backpack

function checkerLogger(func) {
  // obj to store trues and falses
  const obj = {true: 0, false: 0};
  
  return function(arg) { // arg is number being inputted to func
    // if no arg passed return object
    if (!arg) return obj;
    // if arg, invoke func with arg and store result in obj
    const result = func(arg);
    obj[result] += 1;
    return result;
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

function countChar(string, target, i = 0, count = 0) {
  //check if string at i(incrementer) is undefined
    // if current character is the target, increment count variable
  //recursive case: increment i variable
  if (!string[i]) {
    return count;
  }
  if (string[i] === target) {
    count += 1;
  }
  return countChar(string, target, i+1, count);
}

// console.log(countChar('hello world', 'o')); // -> 2
// console.log(countChar('javascript', 'j'));  // -> 1



/*
Create a function "fastCache" that takes one argument (a function) and returns a function. When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
example:
SINGLE ARGUMENT CASE
const multiplyBy2 = num => num * 2;
const cachedMultiplyBy2 = fastCache(multiplyBy2);
cachedMultiplyBy2(100); // -> 200
cachedMultiplyBy2(150); // -> 300
cachedMultiplyBy2(100); // -> 200 // from the cache object

MULTIPLE ARGUMENTS CASE
const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedSumMultiplyBy2 = fastCacheMult(sumMultiplyBy2);
cachedSumMultiplyBy2(5, 10); // -> 30
cachedSumMultiplyBy2(1, 2); // -> 6
cachedSumMultiplyBy2(5, 10); // -> 30 // from the cache object
*/


const fastCache = (func) => {
  const cache = {};
  
  return function(...args) {
    const input = JSON.stringify(args)
    if (cache[input]) {
      console.log('found in cache');
      return cache[input];
    }
    console.log(cache)
    cache[input] = func(...args);
    return cache[input];
  }
}


const multiplyBy2 = (num1, num2) => 2 * (num1 + num2);
const cachedMultiplyBy2 = fastCache(multiplyBy2);
console.log(cachedMultiplyBy2(5, 10)); // -> 200
console.log(cachedMultiplyBy2(1, 2)); // -> 300
console.log(cachedMultiplyBy2(5, 10)); // -> 200 