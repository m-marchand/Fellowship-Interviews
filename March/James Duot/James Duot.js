// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

var randomNums = [1, 14, 7, 21];

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

// returns [min, max]
function minAndMax(numArr) {
  const sorted = numArr.sort((a, b) => a - b)
  const first = sorted[0];
  const length = sorted.length
  const last = sorted[length - 1];
  return [first, last];
}

// console.log(

// minAndMax([7, 68, 2, 19]) // [2, 68]
// )


//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function
// console.log(
// minAndMax(randomNums)) ///


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

// num => boolean
function between50And500(num) {
  if (num >= 50 && num <= 500) {
    return true
  }
  
  return false
}

// console.log(
// between50And500(45), // false
// between50And500(472)// true
// )


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

//divBy100 (num) => boolean if evenly div by 100

function divBy100(num) {
  if ((num % 100) === 0) {
    return true
  }
  
  return false
}
// console.log(
//   divBy100(120), //false
//   divBy100(600) //true
// )

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
// (num) => boolean: true if negative, and true if even number
function negativeOrEven(num) {
  if (num % 2 === 0) return true;
  
  if (num < 0) return true;
  
  return false;
}
// console.log(

// negativeOrEven(7), //false
// negativeOrEven(-3)///true
// )



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

// fnArr: (num) => boolean
// true: if map num to all fnarry
// fnArr.each(f => f(value))


function passAllTests(fnArr, value) {
  let passed = true
  fnArr.forEach((f) => {
    if (!f(value)) {
      passed = false
    }
  })
  
  return passed
}

/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

// 300 > 50 < 500
/// divBy100


let tests = [between50And500, divBy100, negativeOrEven];

// console.log(
// passAllTests(tests, 300), // true
// passAllTests(tests, 250), // false
// )


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/
// str => boolean; true if palindrome
// ispalindrome: (str) => boolean: str === str.reverse()
// arr === ar2.reveres()
// 
function isPalindrome(str) {
  const ar1 = str.split('')
	const ar2 = [...ar1].reverse()
  
  for(let i = 0; i < ar1.length; i += 1) {
    if (ar1[i] !== ar2[i]) return false
  }
  
  return true
}

console.log(
isPalindrome("LEVEL"),
isPalindrome("RACECAR"),
isPalindrome("AND")
)