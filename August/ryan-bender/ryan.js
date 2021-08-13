
// Declare a variable 'number' and set it to the value 10.

let number = 10;
// console.log(number);


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
function addNumbers(num) {
  //create variable to store each sum
  let sum = 0;
  let counter = 1
  //while loop counts up to num
  while (counter <= num) {
  //add last total to latest integer
    sum += counter;
  ++counter;
  }
  return sum;
}

// console.log(addNumbers(4));

// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function



/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

function between50and500(num) {
  if ((num > 50) && (num < 500)) {
    return true
  }
    else {return false};
}
// 
//console.log(between50and500(800))




/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

function divBy100(num) {
  if (num % 100 === 0) {
    return true;
  }
		else {return false};
}

// console.log(divBy100(320))



/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(num) {
  if ((num < 0) || (num % 2 === 0)) {
    return true;
  }
  else return false;
}

// console.log(negativeOrEven(-3))



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

function passAllTests(arrayOfFuncs, value) {
  //declare a tracking boolean
  let passed = 0;
  //iterate through functions in array
  //test value in each function
  arrayOfFuncs.forEach(function(el) {
    if (el(value)) {
      passed++
        }
  })
  //only if ALL tests are passed, return true
  if (passed === arrayOfFuncs.length) {
    return true;
  }
  else {return false};
}

// console.log(passAllTests([between50and500, divBy100, negativeOrEven], 250))




/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

function isPalindrome(string) {
  //declare variable to store reversed string
  let reversed = '';
  //pop each letter off the end of the string and push to reversed string
  for (let i = (string.length - 1); i >= 0; i--) {
    reversed += string[i];
  }
	//check if they are equivalent
  if (string === reversed) {
    return true;
  }
  else return false;
}

// console.log(isPalindrome('florida'))



/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

function add(num1) {
  return function(num2) {
    return (num1 + num2)
  }
}

const addBy10 = add(10)
// console.log(addBy10(20))



// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

function getLength(string, length = 0) {
  if (string[length + 1] === undefined) return length;
  ++length;
  return getLength(string, length)
}

console.log(getLength('testing'))