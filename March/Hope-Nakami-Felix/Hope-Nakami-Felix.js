// Declare a variable 'names' and set it to an array with the values 'Chris', 'Samantha', 'Richard', and  'Kyle' in it.

const names = ['Chris', 'Samantha', 'Richard'];

/*
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
Create a function 'societyName' that takes in an array of names and returns the name of the secret society.
For example, if our input is ['Adam', 'Sarah', 'Malcolm'] then 'societyName' should return the string 'AMS'
*/

// define fucntion input, (array) output string
const societyName = (arr) => {
  //create new string varible
  let output = '';
  //iterate over array
  for (const el in arr){
    //push the first letter of each name to new string
    output += arr[el][0]
  };
  //return new string
  return output.split('').sort().join('')
};

// console.log(societyName(names)); //'CSR'



/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

//define func
const countTimes = (arr, num) => {
//create count var
  let count = 0;
  //interate over array
  for (const el in arr){
  //cehck if number is preasent
    if(arr[el] === num){
  //increment counter if so
      count += 1
    };
  };
  //return count
  return count
};

// console.log(countTimes([1, 8, 9, 9, 10], 9))// -> 2
// console.log(countTimes([1, 8, 9, 9, 10], 10)) // 1
// console.log(countTimes([1, 8, 9, 9, 10, 1, 1], 1))// 3


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

//define func
const wordSearchLetterCounter = (arr, char) => {
  //create another count var to store amount of times found
  let count2 = 0;
  //loop over the 2d array, and pass the results back to the count var
  for (const el in arr){
    count2 += countTimes(arr[el], char);
  };
  //return count
  return count2
};

//console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D"));// 3


/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

//define func
const changeCase = (char) =>{
//check if input is upper, if so revese
  if (char === char.toUpperCase()){
    return char.toLowerCase()
  } else {
    return char.toUpperCase()
  };
};

// console.log(changeCase('a'))// -> 'A'
// console.log(changeCase('B'))// -> 'b'


/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

const effectString = (str, func) => {
  //create empty string
  let output = '';
  const split = str.split('')
  //iterate over each letter 
  for (const el in split){
    output += func(split[el])
  };
  //return new string
  return output
};


// Check that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"

//console.log(effectString('hello World', changeCase)); // HELLO wORLD;


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

const checkerLogger = (func) =>	{
  //create cashe object to save results 
const cache = {trues: 0,
              falses: 0};
  //Create inner function
const inner = (num) => {
    //check if func has been run
	if(num) {
      //return value if so
		if(func(num)) {
      cache['trues'] += 1
    	return func(num)
    } else {
      cache['falses'] += 1
      return func(num)
    };
  } else {
      return cache
  }
};	
  //Return inner function
return inner
};

const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter());// ->  { true: 0, false: 0 }
console.log(oddCounter(3));// -> true
console.log(oddCounter(2));// ->  false
console.log(oddCounter()); //-> { true: 1, false: 1 }