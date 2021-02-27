// console.log("Hello World!");


// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

var randomNums = [1, 14, 7, 21, -6]

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

function minAndMax(arr){
  var min = arr[0]
  var max = arr[0]
  arr.forEach( function(el){
    if (el > max) {
      max = el
    }
    if (el < min) {
			min = el
    }
  })
  
  // console.log([min,max])
  return [min,max]
}


//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function
minAndMax(randomNums)




/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

function between50and500(num){
  // console.log(num > 50 && num < 500)
  return (num > 50 && num < 500)
}


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

function divBy100(num) {
  return (num % 100 === 0)
}



/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(num) {
  return (num % 2 === 0 || num < 0)
}



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

function passAllTests(arr,num) {
	  var passTest = true
  	arr.forEach( function(test) {
      if (test(num) === false) {
        passTest = false
      }
    })
    // console.log(passTest)
  	return passTest
}


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

var arr = [between50and500, divBy100, negativeOrEven]
// console.log(passAllTests(arr,300))
// console.log(passAllTests(arr,250))



/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

function isPalindrome(str){
  var newStr = []
  
  str.split('').forEach( function(letter) {
    newStr.unshift(letter)
  })

  return newStr.join('') === str
}

console.log(isPalindrome('LEVEL'))
console.log(isPalindrome('RACECAR'))



/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

function add(num1) {
  return function secondAdd(num2) {
    return (num1 + num2)
  }
}

const addBy10 = add(10)
console.log(addBy10(20))
