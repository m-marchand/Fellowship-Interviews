// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

let randomNums = [1,14,7,21,-6];

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]

*/

const minAndMax = (arg) => {
  let array = [100, 0];
  for(let i = 0; i < arg.length; i++) {
    if(arg[i]<array[0]) {
      array[0]=arg[i];
    }
    if(arg[i]>array[1]) {
      array[1]=arg[i];
    } 
  }
  return array;
}

//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function

//console.log(minAndMax(randomNums));  //[-6,21]

/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.

INPUT: number
OUTPUT: boolean
straegy: use decision-structure statements to determine whether the input is between 50 and 500
*/

const between50and500 = (arg) => {
  if(arg<50) {
    return false;
  }
  else if(arg > 49 && arg<501) {
    return true
  }
  else {return false}
}

//console.log(between50and500(29)); //f
//console.log(between50and500(51)); //t
//console.log(between50and500(501)); //f


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
INPUT Number
OUTPUT boolean
Straegy: use modulo to determine whether devisible by 100
*/

const divBy100 = (arg) => {return (arg%100===0) ? true : false;}


 //console.log(divBy100(120))//false
 //console.log(divBy100(600))//true


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.

INPUT Number
OUTPUT boolean
Strategy 
*/

const negativeOrEven = (arg) => {
  if(arg%2===0 || arg<0) { return true}
  else {return false}
}

//console.log(negativeOrEven(-2))//true
//console.log(negativeOrEven(2))//true
//console.log(negativeOrEven(3))//f
//

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false

INPUT array of function, value
OUTPUT boolean in each array
Low-level strategy pass the value into each callback function in the array of functions
Overall Straegy if each function is true, it returns true; otherwise false
Iterate through the array of functions utilizing a loop and decision structures
*/

const passAllTests = (arg1, val) => {
  let switcher = null;
    
  for(let i=0; i<arg1.length; i++){   
  
    if(arg1[i](val)) {      
      switcher = true;
    }
    
    else {
      switcher = false;
      break;
    }
}  
    if(switcher===true) {
    	return true
    } 
  	else {
      return false
    }
}


/*     
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500, divisible by 100, and a negative number OR even. Then test the number 250.
*/

//console.log(passAllTests([between50and500,divBy100,negativeOrEven], 300));//true
//console.log(passAllTests([between50and500,divBy100,negativeOrEven], 250));//false



/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
INPUT String
OUTPUT Boolean
Strategy By comparing the first and last character in the given string, we will determine whether they match.  They we will remove the first and last character of the string and repeat the process through iteration.  If only one character of the string is left, we will assume true.  If no characters are left, we will assume true.
Setup basecase: string.length = 0; return true

*/

const isPalindrome = (arg) => {
  console.log(arg)

  for (let i = 0; i < arg.length+1; i++) {
    console.log(arg);
    if (arg.length === 0 || arg.length === 1) {
      return true
    }
    console.log(arg.length)
    if (arg[0] === arg[arg.length - 1]) {
      arg = arg.slice(1);
      console.log(arg);
      console.log(arg.length)
      arg = arg.substring(0, arg.length - 1)
      console.log(arg);
      console.log(arg.length)
    }

  }
  return false;
}

console.log(isPalindrome("eye"));
console.log(isPalindrome("level"));