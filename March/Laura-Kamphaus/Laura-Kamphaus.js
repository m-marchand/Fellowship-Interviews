// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

let randomNums = [1, 14, 7, 21, -6];

// console.log(randomNums);


/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

function minAndMax(arrayOfNums) {
  let smallestNum = arrayOfNums[0];
  let largestNum = arrayOfNums[0];
  
  for (let i = 0; i < arrayOfNums.length; i++) {
    if (smallestNum > arrayOfNums[i]) {
      smallestNum = arrayOfNums[i];
    }
    
    if (largestNum < arrayOfNums[i]) {
      largestNum = arrayOfNums[i];
    }
  }
  
  return [smallestNum, largestNum];
}

// console.log(minAndMax([7, 68, 2, 19]));


//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function

// console.log(minAndMax(randomNums));


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

function between50And500(num) {
  if (num > 50 && num < 500) {
    return true;
  }
  
  return false;
}

// console.log(between50And500(45));

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

function divBy100(num) {
  if (num % 100 === 0) {
    return true;
  }
  
  return false;
}

// console.log(divBy100(600));


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(num) {
  
  if ((num < 0) || (num % 2 === 0)) {
    return true;
  }
  
  return false;
}

// console.log(negativeOrEven(-3));


/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

function passAllTests(arrayOfFunc, arg) {

	//iterate over the array of functions 
	for (let i = 0; i < arrayOfFunc.length; i++) {
		//use a conditonal to check if the passed in argument to the current array element/function is equal to false
    if (arrayOfFunc[i](arg) === false) {
		//return false
    return false;
    }
  }
	//return true
	return true;
}


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

const arrayOfFuncTest = [between50And500, divBy100, negativeOrEven];
const inputNum = 300;
// console.log(passAllTests(arrayOfFuncTest, inputNum));
//true
//true
//true



const arrayOfFuncTest1 = [between50And500, divBy100, negativeOrEven];
const inputNum1 = 250;
// console.log(passAllTests(arrayOfFuncTest1, inputNum1));
//true
//false
//true


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

function isPalindrome(str) {
  if (str === reverse(str)) {
    return true;
  }
  
  return false;
}


//helper function
function reverse(str) {
  let reseveredOrder = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    reseveredOrder += str[i];
  }
  
  return reseveredOrder;
}

// console.log(isPalindrome('LEVEL'));


/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

function add(num1) {
  return function (num2) {
    return num1 + num2;
  }
}

const addBy10 = add(10)

console.log(addBy10(20));