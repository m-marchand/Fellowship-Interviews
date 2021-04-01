// console.log("Hello World!");
  
  // Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

  let randomNums = [1, 14, 7, 21, -6];

  ;/*
  Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
  NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
  */
  
  function minAndMax(array){
    let min = array[0];
    let max = array [0];
    
    let output = [];
    
    for (let i = 0; i < array.length; i++){
      if (array[i] > max){
        max = array[i];
      } else if (array[i] < min){
        min = array[i];
      }
    }
    
    output.push(min, max);
    return output;
    
  }
  
  //create a min variable
  //create a max variable
  //iterate over the array
    //check if current number is greater than current max
      //if true, reassign max
    //check if current number is less than current min
      //if true, reassign min
  //return array of smallest and largest in that order
  
  
  //  Check that your 'minAndMax' function is working correctly by passing your variable 'randomNums' to the 'minAndMax' function
  
  //console.log(minAndMax(randomNums)) // [-6, 21]
  
  
  /*
  Create a function "between50And500" that takes a number as an argument.
  "between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
  For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
  */
  
  function between50And500(num){
    if (num > 50 && num < 500){
      return true;
    } else {
      return false;
    }
  }
  
  const myNum = 75;
  
  //console.log(between50And500(myNum))
  
  /*
  Create a function "divBy100" that takes a number as an argument.
  "divBy100" should return a true if the number passed to it is divisible by 100.
  For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
  */
  
  function divBy100 (num){
    if (num % 100 === 0){
      return true;
    } else {
      return false;
    }
  }
  
  const myTest = 333;
  
  //console.log(divBy100(myTest))
  
  
  /*
  Create a function "negativeOrEven" that takes a number as an argument.
  "negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
  For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
  */
  
  function negativeOrEven (num){
    if (num < 0 || num % 2 === 0){
      return true;
    } else {
      return false;
    }
  }
  
  const anotherTest = -1;
  const anotherTest2 = 5;
  const anotherTest3 = 2;
  
  // console.log(negativeOrEven(anotherTest3))
  
  
  /*
  Create a function "passAllTests" that takes an array of functions and another value as arguments.
  Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
  If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
  */
  
  
  function passAllTests (array, value){
    let passedAll = true;
    //iterate over the array of functions
    for (let i = 0; i < array.length; i++){
      if (array[i](value) === false){
        passedAll = false;
        break;
      }
    }
    return passedAll;  
  }
  
  /*
  Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
  divisible by the 100, and a negative number OR even. Then test the number 250.
  */
  
  
  const allFuncs = [between50And500, divBy100, negativeOrEven]
  const first = 300;
  const second = 250;
  
  //console.log(passAllTests(allFuncs, first))
  //console.log(passAllTests(allFuncs, second))
  
  
  /*
  Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
  (a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
  
  */
  
  function isPalindrome(string){
    let array = string.split('');
    let reversedArray = array.reverse();
    let reversed = reversedArray.join('');
    
    if (reversed === string){
      return true;
    } else {
      return false;
    }
  }
  
  
  const palindrome = 'LEVEL';
  const notPalindrome = 'leveel';
  // console.log(isPalindrome(palindrome)) //true
  //console.log(isPalindrome(notPalindrome)) //false
  
  //reverse passed in string
   //convert to array
   //reverse array
   //join elements into a string
  //compare reversed string to passed in string
  
  
  /*
  Create a function "add" that takes an argument (a number) and returns a function.
  The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
  Example:
  const addBy10 = add(10)
  addBy10(20) -> 30
  */
  
  function add (num){
    
    return function (numb){
      return numb + num;
    }
  }
  
  
  const addBy10 = add(10)
  // console.log(addBy10(20)) // -> 30
  
  // Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
  
  function getLength (string, length = 0){
    //base case - when string is empty
    if (string[0] === undefined){
      return length;
    }
    
    //progress towards that base case
      //keep count
    
    //return recursive function with updated parameters
    //return length of string
    return getLength(string.slice(1))
  }