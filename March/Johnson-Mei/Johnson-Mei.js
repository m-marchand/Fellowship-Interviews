// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

let randomNums = [1, 14, 7, 21, -6];
// console.log(randomNums);

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

function minAndMax(arrNum) {
  let min = arrNum[0];
  let max = arrNum[0];
  
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] < min) {
      min = arrNum[i];
    }
    
    if (arrNum[i] > max) {
      max = arrNum[i]
    }
    
  }
  
  return [min, max];
  
  
}


//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function
//console.log(minAndMax(randomNums));



/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

function between50And500(num) {
  return (num > 50 && num < 500);

}

// console.log(between50And500(365));
// console.log(between50And500(35));


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/


function divBy100(num) {
  return (num%100 === 0);
  
}

// console.log(divBy100(700));
// console.log(divBy100(750));


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(num) {
  return (num < 0 || num % 2 === 0);
  
}

// console.log(negativeOrEven(-6));
// console.log(negativeOrEven(15));
// console.log(negativeOrEven(10));


/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

function passAllTests(arrFunc, val) {
  let flag = true;
  
  for (let i = 0; i < arrFunc.length; i++) {
    if (!arrFunc[i](val)) {
      flag = false;
    }
  }
  
  return flag;
  
}


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

let arrFunc = [between50And500, divBy100, negativeOrEven];
//console.log(passAllTests(arrFunc, 300));
//console.log(passAllTests(arrFunc, 250));


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

function isPalindrome(str) {
  let s = "";
  
  for (let i = str.length-1; i >= 0; i--) {
    s += str[i];
    
  }
  
  return s === str;
  
}

// console.log(isPalindrome('racecar'));
// console.log(isPalindrome('apple'));



/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

function add(num) {
  
  function inner(x) {
    return x + num;
    
  }
  
  return inner;
}

const addBy10 = add(10);
// console.log(addBy10(40));


// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.


let index = 0;
function getLength(str) {
  let length = index;
  if (!str[index]) {index = 0; return length;}
  index++;
  return getLength(str);
}

// console.log(getLength('apple'));


/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

function transpose(arr) {
  let output = [];
  
  for (let i = 0; i < arr[0].length; i++) {
    let subArr = [];
    
    for (let j = 0; j < arr.length; j++) {
      subArr.push(arr[j][i]);
    }
    
    output.push(subArr);
  }
  
  return output;
}

const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
// console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]


/*
Write a function 'rotateGrid' that is given an NxN grid of elements represented by a 2D array, and outputs a grid equivalent to the same grid rotated 90 degrees clockwise.
Example:
const sampleGrid = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(rotateGrid(sampleGrid)); // -> [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]
*/

// [ 1 2 3 ]    [ 7 4 1 ]
// [ 4 5 6 ]    [ 8 5 2 ]
// [ 7 8 9 ]    [ 9 6 3 ]

// 1 -> [0][0]  ->  [0][2]
// 2 -> [0][1]  ->  [1][2]
// 3 -> [0][2]  ->  [2][2]

// 4 -> [1][0]  ->  [0][1]
// 5 -> [1][1]  ->  [1][1]
// 6 -> [1][2]  ->  [2][1]

// 7 -> [2][0]  ->  [0][0]
// 8 -> [2][1]  ->  [1][0]
// 9 -> [2][2]  ->  [2][0]

function rotateGrid(array) {
  let output = [];
  
  

  
}