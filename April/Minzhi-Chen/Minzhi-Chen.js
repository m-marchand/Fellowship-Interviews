// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

let randomNums = [1,14,7,21,0,-6];

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/
let minAndMax = function(array){
  let min = array[0];
  let max = array[0];
  
  for (let i = 1; i<array.length; i++){
    if (array[i] < min){
        min = array[i];
        }
    if (array[i] > max){
        max = array[i];
        }
  }
  
  return [min,max];//[min, max]
}

//  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function
// console.log(minAndMax(randomNums));


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
let between50And500 = function(num){
  if (num <= 50 || num >= 500){
      return false;
      }else{
        return true;
      }
};

//console.log(between50And500(10000));

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/

let divBy100 = function(num){
  if (num % 100 == 0){
      return true;
      }
	else{
    return false;
  }
};

// console.log(divBy100(600),divBy100(120));


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
let negativeOrEven = function(num){
  if (num < 0 || num % 2 == 0){
      return true;
      
  }
  else{
    return false;
  }
  
};

// console.log(negativeOrEven(9),negativeOrEven(-3));

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/

let passAllTests = function(arr_func, value){
  
  for (let i = 0;i < arr_func.length; i++ ){
    let curr_func = arr_func[i];
    if (curr_func(value) == false){
      return false;
    }
  }
  return true;
  
};


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/

let array_func = [between50And500,divBy100,negativeOrEven];

// console.log(passAllTests(array_func, 10000));


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

let isPalindrome = function(s){
  let strLength = s.length;
  let left = 0;
  let right = strLength - 1;
  while (left <= right){
         if (s[left] != s[right]){
             return false;
        }
    left += 1;
    right -= 1;
  }
  return true;
};

// console.log(isPalindrome("LEVEL"), isPalindrome("RACECAR"), isPalindrome("bb"));



/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally passed to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

let add = function(num){
  
  return (element) => {
    num += element;
    return num;
  }
}
const addBy10 = add(10);
// console.log(addBy10(20));
// console.log(addBy10(20));


// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

let getLength = function(s, pointer = 0){
  let pointer = 0;
  if (s[pointer] != undefined ){
    pointer += 1;

  }
  // make recursive call
  return getLength(s, pointer);
}