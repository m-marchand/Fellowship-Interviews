
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
//declare function checkerLogger
//input: callback (return a boolean)
//output: function -- 
//        behavior: if invoked with arg, invoke callback passing in arg, return boolean (store that result, add to existing tally)
//                  if invoked without arg, return the object with the true/false count.
//
function checkerLogger(callback){
  
  //handle edges cases -- is the passin arg a function
  //if callback not a function, return undefined
  if (typeof(callback) !== 'function') return undefined;
  
  //declare evalStore, intialize to object with properties true and false, with counts 0
  const evalStore = {
    true: 0,
    false: 0
  }
  
  //return function (arg)
  return function(arg){
  //handle edge cases -- data validation
  
    //if arg is undefined, return the evalStore
    if (arg === undefined){
      return evalStore;
    } else {
    	//else
      	// if eval result of callback passing arg is 
      //store eval result of callback passing arg in a temp var
      const result = callback(arg)
        //true - increment the count val of propery true in evalStore by 1
      	//false - increment the count val of propery false in evalStore by 1
      result ? evalStore.true++ : evalStore.false++;
      
      //return result
      return result;
    }
    
  } // end of closure func
  
} // end of checkerLogger()

// ---- TEST CASES ---- //
console.log('---- ---- checkerLogger ---- ----');

const isOdd = num => num % 2 === 1;
const oddCounter = checkerLogger(isOdd);
console.log(oddCounter()) 
console.log( '-->');
console.log('{ true: 0, false: 0 }' ); // ->  { true: 0, false: 0 }
console.log( oddCounter(3) + ' --> true'); //-> true
console.log( oddCounter(2)  + ' --> true'); //->  false
console.log( oddCounter()); 
console.log('-->');
console.log('{ true: 1, false: 1 }');
console.log(checkerLogger(123) + ' --> undefined');


/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

//declare function countChar
//input: two strings -- inputString and targetString
//output: number --- number of times targetString is found within inputString
function countChar(inputString, targetString, index = 0, count = 0){
  
  //handle edge cases -- not strings, less than two args
  
  //BASE case:
  //if inputString at index is undefined, then we've reached the end of string, return count
  if (inputString[index] === undefined) return count;
  
  //RECURSIVE case:
  //if inputString at index === targetString, increment count++
  if (inputString[index] === targetString) count++;
  //recursive call
  //invoke countChar(inputString, targetString, index+1, count)
  return countChar(inputString, targetString, index+1, count);
  
}

// ---- TEST CASES ----//
console.log('---- ---- countChar ---- ----');
console.log( countChar('hello world', 'o') + ' --> 2');
console.log( countChar('javascript', 'j') + ' --> 1');
console.log( countChar('javascript', '!') + ' --> 0');


/*
Write a function 'deepCopy' that creates a deep copy of every level of a given object or array, and returns it, no matter how deeply the object is nested.
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
//declare function deepCopy
//input: whatever
//output: is a deep copy of input
function deepCopy(input, debug=false){
  
  //handle edge case --- non-object -- response
  
  function deepDive(){
  //BASE case:
  //if the element is a primitive, return the element
  if (input)
  
  //RECURSION
  //if input is array
  	//declare output, intialize as empty array
  	//iterate over input using for...of
    //
  
  //if input is object
  	//declare output, intialize as empty object
  	//iterate over input using for...in
  }
  
  //returning deepDive()
  
}