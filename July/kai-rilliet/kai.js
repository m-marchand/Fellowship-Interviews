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


// input: arr or object (could be nested)
// output: deep copy of input

const deepCopy = (input) => {
  // base case: if current element is not an array or object, return out output
  if (typeof input !== 'object') return input; 
  
  // keep checking until we hit something that isn't an array or object -> recursion
  
  // define new input variable
  
  // check data type of this new input
  
  // recursive case: we have an object or array
  // return deep copy 
  
  let copy = input;

  if (Array.isArray(copy)) {
    copy = [];
    for (const element of object) {
      if (typeof element === 'object') copy.push(deepCopy(element));
      else copy.push(element);
    }
  } // else 
  
}