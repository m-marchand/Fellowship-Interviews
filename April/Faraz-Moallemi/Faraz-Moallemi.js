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

// create a function checkerLogger that takes in a function
const checkerLogger = (callback) => {
	// create an empty object named boolStorage
	const boolStorage = {true: 0, false: 0};
	// return a function that takes in 1 number
	const boolChecker = (num) => {
		// if num exists, 
		if(num) {
      // increment value by 1
			boolStorage[callback(num)]++;
			//then return the result invoking the callback on the num
      return callback(num);
    }
	// else if num doesn't exist, return the object
    return boolStorage;
  }
  return boolChecker;
}

const isOdd = num => num % 2 === 1
const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); //->  { true: 0, false: 0 }
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

// create a function countChar that takes in 2 strings, and a default param named total, set to 0, index set to 0
	const countChar = (inputString, targetString, total = 0, index = 0) => {
	// base case: if there are no characters left to count in the input string
	if(!inputString[index]) {
		return total;
  }
	// if the target string does exist inside of input
	if(targetString === inputString[index]) {
		// increment total by 1
    total++;
  }
	// return recursive call: pass in input string, target string, total, increment index by1
  return countChar(inputString, targetString, total, index + 1);
}

// console.log(countChar('hello world', 'o')); // -> 2
// console.log(countChar('javascript', 'j')); // -> 1
  


  
/*
Write a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter deep the object is nested.
Example:
const tools = [{ editor: { favorite: { mine: { name: 'vscode' } } } }, { shell: 'zsh' }];
const copyOfTools = deepCopy(tools);
console.log(copyOfTools === tools);                                        // -> false
console.log(copyOfTools[0] === tools[0]);                                  // -> false
console.log(copyOfTools[0].editor === tools[0].editor);                    // -> false
console.log(copyOfTools[0].editor.favorite === tools[0].editor.favorite);           // -> false
console.log(copyOfTools[0].editor.favorite.mine === tools[0].editor.favorite.mine);      // -> false
console.log(copyOfTools[0].editor.favorite.mine.name === tools[0].editor.favorite.mine.name); // -> true
*/
  
// create a function deepCopy that takes in object/array named original 
  const deepCopy = (originalData) => {
  // create an empty array to store copies
  const copyArray = [];
  // create an inner function copyOriginal that takes in no parameters
  return () => {
  	// iterate through the originalData
  	for(const element in originalData) {
  		// push the current element into the copyArray
      copyArray.push(originalData[element]);
    }
  	return copyArray;
  }
}
  	