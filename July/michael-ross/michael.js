
/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

// input: number
// output: function (accepts 1 arg)

const add = (num) => {
  // add num to arg from inner func
  return function(arg) {
    return num + arg;
  }
}

// const addBy10 = add(10)
// // console.log(addBy10(20)) //
  // -> 30


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

// input: callback fxn
// output: function

// inner
// input & outputs depends on callback
const fastCacheMult = (callback) => {
  // declare cache obj
  const cache = {};
  
	//   accepts single arg
  return function(...arg){
    // remembers callback using a cache obj
    // check if arg exists as key in cache obj
    if (cache[arg]){ 
      console.log('in cache');
      return cache[arg];
    } else {
      // save arg and corresponding output to cache
      cache[arg] = callback(...arg);
      // return output
      return cache[arg];
    }
      // if we havne't saved callback input and output in cache, evaluate callback passing 
    	// in arg and return its output
  }
}

const multiplyBy2 = num => num * 2;
// const cachedMultiplyBy2 = fastCache(multiplyBy2);
// console.log(cachedMultiplyBy2(100)); // -> 200
// console.log(cachedMultiplyBy2(150)); // -> 300
// console.log(cachedMultiplyBy2(100)); 

const sumMultiplyBy2 = (num1, num2) => 2 * (num1 + num2);
// const cachedSumMultiplyBy2 = fastCacheMult(sumMultiplyBy2);
// console.log(cachedSumMultiplyBy2(5, 10)); // -> 30
// console.log(cachedSumMultiplyBy2(1, 2)); // -> 6
// console.log(cachedSumMultiplyBy2(5, 10)); // -> 30 // from the cache object





// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

// input: string
// output: number

function getLength(string, index = 0, length = 0) {
  // base case: if the string at current index is undefined
  // return the length
  if (string[index] === undefined) return length;
  // recursive case: call the function passing in next index, string and length 
  return getLength(string, index += 1, length += 1);
}

// console.log(getLength('Hello'))




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

// input/output: object/deep copy of object
const deepCopy = (input) => {
  // base case: if type of input isn't and object or array
  if (typeof input !== 'object') return input;
  
  // make copy of the input
  // recursive case: accessing one level deeper of nested object
  if (Array.isArray(input)) {
    let copy = [];
    // copy over elements of array to a new array
    for (const el of input) {
      // check for nested array or object
      if (typeof el === 'object') copy.push(deepCopy(el))
      else copy.push(el)
    } else { // object
      
    }
  }
}