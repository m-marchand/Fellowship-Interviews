// Declare a variable 'number' and set it to the value 10.

const number = 10;


/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

//declare a function addNumbers that takes in one number argument
function addNumbers(num){
//declare a variable 'result' with the value of 0
let result = 0;
//iterate through every number leading up to the passed in number argument
for(let i = 0; i <= num; i++){
//add the current number to 'result'
	result += i;
	}
  //return result
  return result;
}
  
  
// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function
  
  
  
  //console.log(addNumbers(number))




/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

//declare a function between50And500 that takes in one number arg
function between50And500(num){
//if the passed in argument is between 50 AND 500 exclusive, then return true
  if(num > 50 && num < 500) return true;
//otherwise return false
	else return false;
}

// console.log(between50And500(45))
// console.log(between50And500(472))


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

//declare a function divBy100 that takes in one number argument
function divBy100(num){
//if the passed in number is divisible by 100, return true
  if(num % 100 === 0) return true;
//otherwise return false
	else return false;
}

// console.log(divBy100(120))
// console.log(divBy100(600))



/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

//declare a function negativeOrEven that takes in one number argument
function negativeOrEven(num){
//if the passed in number is a negative number OR an even number, return true
if(num < 0 || num % 2 === 0) return true;
//otherwise return false
else return false;
}

// console.log(negativeOrEven(7))
// console.log(negativeOrEven(-3))



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

//declare a function passAllTests that takes in two args: array of functions, and a value
function passAllTests(array, value){
//iterate through the array of functions
  for(let i = 0; i < array.length; i++){
//if the passed in value into each function does not pass a test, we want to return false
    if(!array[i](value)) return false;
  }
  //return true if all tests pass
  return true;
}


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/
// console.log(passAllTests([between50And500, divBy100, negativeOrEven], 300))
// console.log(passAllTests([between50And500, divBy100, negativeOrEven], 250))


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

//declare a function isPalindrome that takes in a string argument
function isPalindrome(string){
//declare a variable 'result' with the value of an empty string
let result = '';
//iterate from last letter to first 
	for (let i = string.length - 1; i >= 0; i--){
//add the current letter to 'result'
	result += string[i];
  }
  //if string is equal to result, return true
  if(string === result) return true;
//otherwise return false
  else return false;
}

// console.log(isPalindrome('level'))
// console.log(isPalindrome('hello'))



/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

//declare a function add with one number arg
function add(num){
//return an inner function that has one number arg
  return function innerFunc(number){
//return the sum of both args
    return num + number;
  }
}

const addBy10 = add(10)
// console.log(addBy10(20)) //-> 30


/*
Create a function "countChar" that takes two arguments (an input string and a target string).
"countChar" will return the number of times the target string is found in the input string.
Example:
countChar('hello world', 'o'); -> 2
countChar('javascript', 'j'); -> 1
Note: Do not use any native JS methods, or loops.
*/

//declare a function countChar that takes in two arguments: input string, and a target string, index equal to 0, counter equal to 0
function countChar(string, char, index = 0, counter = 0){
//base case: if string at index is equal to undefined, return counter
  if(string[index] === undefined) return counter;
//if string at index is equal to the target string, increment counter by 1
  if(string[index] === char) counter++;
//recursively call countChar with the arguments: input string, target string, increment index by 1, counter	
  return countChar(string, char, index += 1, counter);
}

// console.log(countChar('hoolo world', 'o')) //; -> 2
// console.log(countChar('javascript', 'j')) //; -> 1




/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

//declare a function called transpose that takes in a two dimensional array argument
function transpose(array){
//declare a const 'result' with the value of an empty array
  const result = [];
//iterate over the first elements of each array within the array
  for(let i = 0; i < array[0].length; i++){
    const row = []
//create an inner for loop to iterate over the next couple of arrays, within the same element
    for(let j = 0; j < array.length; j++){
//push the result into result
      row.push(array[j][i]);
    }
    result.push(row)
//return result
  }
  return result;
}


const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]