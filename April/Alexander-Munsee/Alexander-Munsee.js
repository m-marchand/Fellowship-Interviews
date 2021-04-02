
/*
Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.

Example:

*/

const checkerLogger = (callback) =>
{
  //counter for the number times i run this tally false and true
	let pairs = new Object();
  pairs["true"] = 0;
  pairs["false"] = 0;
  
  //innerfunction
  const innerFunc = (...args) =>
  {
    	//if arg = 0
    if(args.length === 0)
      {
        //return my counter
        return pairs;
      }
  		
  
  //else if args is greater  0
    else
      {
      	//returned my callback(args)
        let value = callback(args);
        
        //if that value is false
        if (value === false)
          {
          //increment my false value for obj pair
            pairs["false"] = pairs["false"] + 1;
        	//return false
            return false;
          }
      
        
        //else 
        else
          {
            //increment my true pair
            pairs["true"] = pairs["true"] + 1;
        	//return true
            return true;
          }
        	
      }

  }
  
  //return the inner function  
  return innerFunc;
}

// const isOdd = num => num % 2 === 1
// const oddCounter = checkerLogger(isOdd);
// console.log(oddCounter()); //->  { true: 0, false: 0 }
// console.log(oddCounter(3)); //-> true
// console.log(oddCounter(2));// ->  false
// console.log(oddCounter()); //-> { true: 1, false: 1 }



/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/



const countChar = (input, target, counter = 0, position = 0) =>
{
  //console.log(position);
	
  //base case of if current position in input is undefined
  if(input[position] === undefined)
    {
      //return my counter
      return counter;
    }
   
  
  //if input at 0 index = target
  else if(input[position] === target)
    {
      //increment my counter
      counter++;
  	     
  	//recursively call the next iteration with substring and counter updated
    }
  position++;
  return countChar(input, target, counter, position);
  	
}


// console.log(countChar('hello world', 'o')); //-> 2
// console.log(countChar('javascript', 'j')); //-> 1


/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

const transpose = (array) =>
{
  
}