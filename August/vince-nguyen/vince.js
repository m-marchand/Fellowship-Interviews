
/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
*/
  
function countTimes(arr, val){
  // return the # of times val is present in the array
  
  let count = 0;
  
  arr.forEach(el => {
    if(el === val)
      count++;
  });
  
  return count;
}


// console.log(countTimes([1, 8, 9, 9, 10], 9) + '-> 2');
// console.log(countTimes([1, 8, 9, 9, 10, 11, 12, 12], 12) + '-> 2');


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

function wordSearchLetterCounter(arrOfArrs, char){
  
  let count = 0;
  
	arrOfArrs.forEach(arr => {
    count += countTimes(arr, char);
  });  
  
  return count;
}

// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "D") + '➞ 3');

// console.log(wordSearchLetterCounter([
//   ["D", "E", "Y", "H", "A", "D"],
//   ["C", "B", "Z", "Y", "J", "K"],
//   ["D", "B", "C", "A", "M", "N"],
//   ["F", "G", "G", "R", "S", "R"],
//   ["V", "X", "H", "A", "S", "S"]
// ], "E") + '➞ 1');



/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

function changeCase(char){
  return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase(); 
}

// console.log(changeCase('a') + ' -> A');
// console.log(changeCase('A') + ' -> a');


/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

function effectString(str, cb){
  // applies cb to each char in str and return new string
  
  let result = '';
  
  for(let char of str){
    result += cb(char);
  }
  
  return result;
}


// Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"

// console.log(effectString('hello WORLD', changeCase) + ' should return HELLO world');




/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
Example:
*/

function checkerLogger(cb){
  // cb is a predicate
  // returns a function that
  	// invokes the cb and return the output when invoked with an argument
  	// return the number of times the cb has been invoked when invoked with no arguments
  
	let outputs = {
    true: 0, 
    false: 0};
  
  return function(arg){
    if(arg){
      outputs[cb(arg)]++;
      console.log(cb(arg));
      return cb(arg);
    }
    
		console.log(outputs);
    return outputs;
  }
}


// const isOdd = num => num % 2 === 1
// const oddCounter = checkerLogger(isOdd);
// oddCounter(); // ->  { true: 0, false: 0 }
// oddCounter(3); // -> true
// oddCounter(2); // ->  false
// oddCounter(); // -> { true: 1, false: 1 }




/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
Note: Do not use any native JS methods, or loops.
*/


function countChar(str, target, index = 0, count = 0){
  // base case
  if(!str[index])
    return count;
  
  // recursive case
  if(str[index] === target)
    count++;
  
  return countChar(str, target, index + 1, count);
  
}

// console.log(countChar('hello world', 'o') + " -> 2");
// console.log(countChar('javascript', 'j') + " -> 1");



/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
*/

// [ ['fred', 'barney'],
//	 [30, 40],
//	 [true, false] ]

// [['fred', 30, true],
//	['barney', 40, false]];

function transpose(twoDimArr){
  
	let transposedArr = [];
  
	
	for(let i = 0; i < twoDimArr[0].length; i++){
    
		let tempArr = [];

    for(let j = 0; j < twoDimArr.length; j++){
      // get elements by row 
      // push them to an array
      // push the array into transposedArr
    	tempArr.push(twoDimArr[j][i]);
    }
    
    transposedArr.push(tempArr);
  }
  
  return transposedArr;
} 

const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]

console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
