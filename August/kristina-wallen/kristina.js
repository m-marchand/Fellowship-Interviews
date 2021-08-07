
/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/

//create a function 'changeCase' that takes in a letter as an argument
//we are going to use an if else statement to check our condition
//letter is strictly equal to lower-cased letter, we will convert the letter to uppercase, and return it from the function
//ese, return letter converted to lower-case from the function

function changeCase(letter) {
  if (letter === letter.toLowerCase()) return letter.toUpperCase()
  return letter.toLowerCase();
}

// console.log(changeCase('a'))// -> 'A'
// console.log(changeCase('B'))// -> 'b'


/*
Create a function "effectString" that takes in two arguments (a string and a callback function).
"effectString" should apply that callback function to each letter in the string and return out a new string.
*/

//create a function effectString that takes in a string and a callback as its parameters
//split to the string to an array
//assign a variable new string to the result of the mapped array
//and use the built-in map object to apply our callback to each element in the array
//return that array, joined back as a string

function effectString(string, callback) {
  string = string.split('');
  let newString = string.map(x => callback(x));
  return newString.join('');
}


// Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"
// console.log(effectString("hello WORLD", changeCase))




/*
Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
Example:
sumAllElements([1,2,3,4], 10) -> 20
Note: Do NOT use any native JS methods, or loops
*/

//create a function sumAllElements that takes in an array and a fixed value as paramenters
//add a couple to default paramenters - add an index variable and assign it the inital value of zero, to move through the array, and I'm going to add a result variable and initialize it to zero to store the sum
//create our base case: if the item at the index of the array is undefined (meaning we have gone past the items present in the array), we will return result plus value
//add the item at the array index to our result variable
//increment our index by one
//use the return keyword to recursively call our sumAllElements function with the parameters array, value, index, and result
//sumAllElements will continue to call itself until the base case is met, and it will return the final result plus our value variable;

function sumAllElements(array, value, index = 0, result = 0) {
  if (array[index] === undefined) return result + value;
  result += array[index]
  index++
  return sumAllElements(array, value, index, result)
}


// console.log(sumAllElements([1,2,3,4], 10))// -> 20)


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

//create a function checkerLogger that takes in a callback, that returns a boolean value
//built an obj boolObj, and assign it the keys true, and false, and both values will be set to zero
//create and return an innerfunction boolChecker, that accepts an input
//if the input is not present, we will return boolObj
//we will run the callback on the input
//if the evaluated result of the callback function with the parameter input evaluates to true, we will increment our value of our key-value pair true in the boolObj by one
//return the boolean from the function
//else increment our false value in the key value pair in our bookObj by one
//return the boolean from the function

function checkerLogger(callback) {
  const boolObj = {true: 0, false: 0};
  return function boolChecker(input) {
    if (!input) return boolObj
    if (callback(input)) {
      boolObj.true++
      return true;
    } else {
      boolObj.false++
      return false;
    }
  }
}

const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter())//; ->  { true: 0, false: 0 }
// console.log(oddCounter(3))//; -> true
// console.log(oddCounter(2))//; ->  false
// console.log(oddCounter())//; -> { true: 1, false: 1 }




/*
Write a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.

Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];

const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools); // -> false
console.log(copyOfTools[0] === tools[0]); // -> false
console.log(copyOfTools[0].editor === tools[0].editor); // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite); // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine); // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/


//create a function deepCopy that accepts an array or an object as a parameter
//create two base cases:
//if (type of is not array or object) return the input
//if Array.isArray(variable) => iterate over the array until there are no more element present, and then return the copied array
//else => iterate over the object until there are no more keys, and then return the copied object
//test each element to see if it is an array, if it is, run the recursive callback on that element, and push to the array
//else, the inverse for objects

function deepCopy(reference) {
  if (typeof reference !== 'object') return reference;
  
  let copy = reference;
  
  if (Array.isArray(reference)) {
      copy = []
      for (let i = 0; i < reference.length; i++) {
    	if (typeof reference[i] === 'object') {
      		copy.push(deepCopy(reference[i]))
      	}	
        else copy.push(reference[i])
  		}
    } else if (typeof reference === 'object') {
      copy = {};
      for (let key in reference) {
        if (typeof reference[key] === 'object') {
          copy[key] = deepCopy(reference[key])
        }
        else copy[key] = reference[key]
      }
    }
  	
  return copy;
}


const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];

const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools); // -> false
console.log(copyOfTools[0] === tools[0]); // -> false
console.log(copyOfTools[0].editor === tools[0].editor); // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite); // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine); // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true