
/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/
//create variable to store occurences
//inside function body, loop over the input
//with each iteration, check if current element is the target
  //if it is, increment the occurences variable
//return occurences


function countTimes(array, searchValue) {
  let occurences = 0;
  array.forEach(element => {
    if (element === searchValue){
      occurences++;
    }
  })
  return occurences;
}

const test = countTimes([1, 8, 9, 9, 10], 9) // -> 2
// console.log(test);

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

function wordSearchLetterCounter(wordSearch, letter) {
  let totalCount = 0;
  
  //iterate over word search (array of arrays)
    //use countTimes to count occurences of letter within the individual array
    //add evalueated value of countTimes to totalCount
  wordSearch.forEach(currentArray => {
    totalCount += countTimes(currentArray, letter);
  })
  return totalCount;
}

const wordSearchTest = wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") //➞ 3
// console.log(wordSearchTest);


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

// without a value return object
// with value return boolean
// use closure 

function checkerLogger(func) {
  // create result object to store calls to func (boolean)
  const result = {true: 0, false: 0};
  
  // create inner function, accepts 1 arg
  function inner(arg) {
  	// if func has an argument
    if (arg) {
  		// invoke func and store in result object
      result[func(arg)]++;
      return func(arg)
    }
  	// if no argument, return result object
    // result['false']++;
    return result;
  }
  return inner;
}

// function multBy2 = (num) => num * 2;
// const times2Counter = checkerLogger(multBy2);
// console.log(times2Counter)

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

function countChar(input, target, occur = 0, i = 0) {
//use recursion to iterate over the input string
//base case: when the current character is undefined, return occurences
  if (input[i] === undefined) {
    return occur;
  }
//if input at i is equal to target, increment occurences
  if (input[i] === target) {
    occur++;
  }
//recursive case: call countChar, pass in input, target, and occurences
  return countChar(input, target, occur, ++i)
  
}

// console.log(countChar('hello world', 'o')); //-> 2
// console.log(countChar('javascript', 'j')); //-> 1



/*
Declare function "itemRetriever" that returns function that when called,  will return one of my favorite authors.
The function "itemRetriever" will take two argument (an array of objects and a string that will represent a key).
When the returned function is called it should return the next object in the array at the key that was passed to "itemRetriever".
example.
const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
nextAuthor() -> 'Earnest Hemingway'
nextAuthor() -> 'Agatha Christie'
*/

function itemRetriever(arrOfObjs, key) {
  let index = 0;
  function inner() {
    // returns the next object in input array at key
    const val = arrOfObjs[index][key];
    index++;
    return val;
  }
  return inner;
}

const favoriteAuthors = [
  { name: 'Earnest Hemingway' },
  { name: 'Agatha Christie' },
  { name: 'J.K. Rowling' },
  { name: 'Steven King' },
];
const nextAuthor = itemRetriever(favoriteAuthors, 'name');
console.log(nextAuthor()) // -> 'Earnest Hemingway'
console.log(nextAuthor()) // -> 'Agatha Christie'


