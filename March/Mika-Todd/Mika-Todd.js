//console.log("Hello World!");
// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.
const randomNums = [1, 14, 7, 21, -6];

//console.log(randomNums); // [1, 14, 7, 21, -6]

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

//declare a function minAndMax, takes in arr
function minAndMax (arr) {
	//declare a var, smallest set to Infinity
	let smallest = Infinity;
	//declare a var, largest set to -Infinity
	let largest = -Infinity;
	//iterate over arr
  for (let i = 0; i < arr.length; i++) {
		//check if current ele is less than smallest
    if (arr[i] < smallest) {
			//if true, reassign to smallest
      smallest = arr[i];
      //check if current ele is larges than largest
    } else if (arr[i] > largest) {
      //if true, reassign to largest
      largest = arr[i];
    }
  }
	//declare a result var, which will be set to an array literal contain smallest and largest
  const result = [smallest, largest];
  return result;
};


//console.log(minAndMax(randomNums)); // [-6, 21]


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/

//declare a function between50And500, takes in a num param
	//check to see if num > 50 && < 500

const between50And500 = num => num > 50 && num < 500 ? true : false;

// console.log(between50And500(45)); //false
// console.log(between50And500(472)); //true

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

//declare function divBy100, takes in a num param
	//check to see if num divisible by 100

const divBy100 = num => num % 100 === 0 ? true : false;

// console.log(divBy100(120)); // false
// console.log(divBy100(600)); // true



/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

//declare a function negativeOrEven, takes in a num param
	//check if num is less than 0 or num is even, return true

const negativeOrEven = num => num < 0 || num % 2 === 0 ? true : false;

// console.log(negativeOrEven(-3)); //true
// console.log(negativeOrEven(10)); //true
// console.log(negativeOrEven(7)); //false



/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

//declare a function passAllTests, takes in arrOfcb and input
function passAllTests (arrOfcb, input) {
	//declare a counter var, set to 0
	let counter = 0;
	//iterate over our arrOfcb
  for (let cb of arrOfcb) {
		//check to see if invoking that current cb with input return true
    if (cb(input) === true) {
			//increment counter
      counter++;
    }
  }

	//check if counter is equal to the length of arrOfcb
  if (counter === arrOfcb.length) {
    //return true
    return true;
    //else return false
  } else {
    return false;
  }
};



const arrOfFunc = [between50And500, divBy100, negativeOrEven];

/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

// console.log(passAllTests(arrOfFunc, 300)); // true
// console.log(passAllTests(arrOfFunc, 250)); // false


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

//declare a function isPalindrome, takes in a str param
function isPalindrome (str) {
	//base case: checks if length of str is 1 or 0, return true
	if (str.length === 1 || str.length === 0) return true;
	//check if first letter and last letter of str are the same
	if (str[0] === str[str.length -1]) {
		//recursive: arg sliced first and last letter of str
    return isPalindrome (str.slice(1, -1));
  }
	//return false
  return false;
};

// console.log(isPalindrome("LEVEL")); // true
// console.log(isPalindrome("RACECAR")); //true
// console.log(isPalindrome("CODESMITH")); //false


/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

//declare a function add, takes in a num param n
function add (n) {
	//declare function inner, takes in a num param x
  function inner (x) {
		//n + x
    return n + x;
	}
	//return inner
  return inner;
}; 

const addByX = add(5); // func def
// console.log(addByX(10)); //15
// console.log(addByX(25)); //30


// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

//declare function getLength, takes in a str param
function getLength (str, count = 0) {
	//base case: check if string is empty, return count
	if (str[0] === undefined) return count;
	//recursive: modify str passed slicing first char and adding that to count
	return getLength (str.slice(1), count + 1);
};

console.log(getLength("mika")); // 4
console.log(getLength("codesmith")); //9


/*
Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
Example:
const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
*/

//declare a function transpose, takes in an arrOfArr
function transpose (arrOfArr) {
	//declare a var arr1, set to empty arr
	const arr1 = [];
	//declare a var arr2, set to empty arr
	const arr2 = [];
	//iterate over arrOfArr
  for (let i = 0; i < arrOfArr.length; i++) {
		//push first ele into arr1
    arr1.push(arrOfArr[i][0]);
		//push second ele into arr2
    arr2.push(arrOfArr[i][1]);
  }
	//declare a result var as an arr literal, storing arr1 and arr2
	const result = [arr1, arr2];
	//return
	return result;
};

const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ];
console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]