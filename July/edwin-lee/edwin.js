// Declare a variable 'number' and set it to the value 10.

var number = 10


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

//create a function with input - number
//set a condtional if num is less than or equal to 1
	//return num
//recursive call - return 

function addNumbers(num) {
  if(num <= 1) {
    return num
  }
  return num + addNumbers(num - 1)
}
// console.log(addNumbers(5))


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

//create a function with input - number
	//initialize for loop with index starting at 1, and go up until num
	//set condition - if it's true return true
	//if false return false
//output should be boolean true or false

function between50and500(num) {
  for(let i = 1; i <= num; i++) {
    if(num > 50 && num < 500) {
      return true
    } else {
      return false
    }
  }
}
// console.log(between50and500(61), 'this is for 50and500')
// console.log(between50and500(31), 'should return false')
            

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

//create a function with input - num
	//set modular 100;
	//if equals 0; return true
	//else return false

function divBy100(num) {
  if(num % 100 === 0) {
    return true
  } else {
    return false
  }
}
// console.log(divBy100(710))
// console.log(divBy100(700))


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

//create a function with input - number
	//set two conditions; check if the number is less than zero, or if the number mod 2 equals 0
//output will be a boolean

function negativeOrEven(num) {
  if(num < 0 || num % 2 === 0) {
    return true
  } else {
    return false
  }
}
// console.log(negativeOrEven(20))
// console.log(negativeOrEven(-87))


/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

//create a function with input - array and value
//initialize a variable to true
//loop through the array, 
//set conditional pass each index to the value
	//if true; variable stays true
	//if false; reassign the variable to be false
//return variable

function passAllTests(arrFuncs, valueArg) {
  let isTrue = true
  for(let i = 0; i < arrFuncs.length; i++) {
    if(arrFuncs[i](valueArg) === true) {
      isTrue = true
    } else {
      return false;
    }
  }
  return isTrue
}


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

let functionsArr = [between50and500, negativeOrEven, divBy100]
// console.log(passAllTests(functionsArr, 250))
// console.log(passAllTests(functionsArr, 300))


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

//create function - that reverses, splits, joins input string
	//set new string varialbe to an empty string
	//split, reverse, then join
//return the newstring

//create palindrome function with input string 
	//set condtional with string and see if it equals invoking reverse funtion with string passed in


function reverse(string) {
  let split = ""
  split = string.split('').reverse().join('')
  return split
}

function isPalindrome(string) {
  if(string === reverse(string)){
    return true
  } else {
    return false
  }
}

// console.log(isPalindrome("LEVEL"))
// console.log(isPalindrome("hello"))



/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

//create a function with input -number
//output should return a function which takes one argument (number)
	//returns sum of it's argument and the argument in the previous function

function addTen(num) {
  return function addNum(n) {
    return num + n;
  }
}
let added10 = addTen(10)
// console.log(added10(5))


// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

//create a function with input- string
//set base case - through string length counting down by 1 until string length is = 1
//
//output - string length

function getLength(string, index = 0) {
  if(string[index] === undefined) {
    return index;
  }
  return getLength(string, index + 1)
}