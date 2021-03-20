// console.log("Hello World!");

// Declare a variable 'names' and set it to an array with the values 'Chris', 'Samantha', 'Richard', and  'Kyle' in it.
let names = ['Chris', 'Samantha', 'Richard', 'Kyle'];

/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function 'societyName' that takes in an array of names and returns the name of the secret society.
For example, if our input is ['Adam', 'Sarah', 'Malcolm'] then 'societyName' should return the string 'AMS'
*/
//input: array of names
//output: alphatebetically sorted first initals in uppercase

function societyName(array) {
  let newStr = ''
  array.sort();
  array.forEach(function(name) {
    newStr+= name.charAt(0);
  })
  return newStr;
}

//console.log(societyName(names));
//create a function that takes array
//sort that Array alphatetically 
//take first letter of each element in array and assign to new string

// Check that your 'societyName' function is working correctly by passing the value of 'names' to the function 'societyName'



/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

//input: array and search value
//output: frequency of search value in array

//create function that takes array and search value
function countTimes(array, srch) {
  let counter = 0;
  array.forEach(function(el) {
    if (el === srch) {
      counter++;
    }
  })
  return counter
}


//console.log(countTimes([1, 8, 9, 9, 10], 9))

//.log(countTimes([1, 7, 7, 8, 7, 9, 20], 7))
//initialize counter variable
//interate through array
//if current element equals search value, increment counter/
//return the counter


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

//input: 2d array, search letter
//output: total frequency of search letter in word search

function wordSearchLetterCounter(array, letter) {
  letter = letter.toUpperCase();
  let counter = 0;
  array.forEach(function(el) {
    counter += countTimes(el, letter);
    
  })
  return counter;
}

let boggle = [["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]]

// console.log(wordSearchLetterCounter(boggle, 'D'))

//create function taking 2d array and search letter
//initialize a counter
//iterate through array of arrays
//for each inner array, invoke counttimes function on inner array, passing in word search value from parameters
//add returned value of counttimes to counter
//return the counter


/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

function changeCase(letter) {
  if (letter.toLowerCase() == letter) {
    return letter.toUpperCase();
  } else if (letter.toUpperCase() == letter) {
    return letter.toLowerCase();
  }
}

//console.log(changeCase('A'))
//console.log(changeCase('b'))

/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/


//input: string and callback
//output: new String with callback applide to each letter
function effectString(string, callback) {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    newStr += callback(string[i]);
  }
  return newStr;
}


//create function that takes in callback and string
//initialize a variable that will hold the new String 
//for loop through string
//for every letter, invoke callback with letter as arg and concat to new string
//return new string


// Check that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"

//console.log(effectString('hello WORLD', changeCase));


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

//input: function returning boolean
//output: if arg passed, true or false. if no arg passed, cache of true and false.

//create function that takes 1 callback as arg
function checkerLogger(callback) {
  const obj = {true: 0, false: 0};
  return function inner(arg) {
    if (arg) {
      obj[callback(arg)]++;
      return callback(arg);
    }
    return obj;
  }
}

const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter());
console.log(oddCounter(3));
console.log(oddCounter(2));
console.log(oddCounter());
// console.log(checkerLogger())
//initialize obj cache
//return a function that takes 1 arg, 
//if arg is passed, invoke callback with input as arg
//if no arg is passed, return cache obj