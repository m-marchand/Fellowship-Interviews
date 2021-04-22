
// Declare a variable 'randomNums' and set it equal to an array that contain the numbers 1, 14, 7, 21, and -6.

//declare variable
let randomNums = [1, 14, 7, 21, -6];

/*
Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.
NOTE: do not use the native Math.min or Math.max methods. For example minAndMax([7, 68, 2, 19]) should return the array  [2, 68]
*/

//create function: function input will be an array
function minAndMax(arr) {
//declare max, min variables
	let min = arr[0];
  let max = arr[0];
  let result = [1,2];
  let newArr = [];
  
//for loop to iterate through given array
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
      
  } // end for loop
  result[0] = min;
  result[1] = max;
  return console.log(result);
  
  
    /*
    newArr.push(arr[i]);
    // console.log(newArr);
    if (arr[i] < arr[i + 1]) {
      min = arr[i];
    } else {
      	max = arr[i];
    }
    console.log(min);
		*/

  
}

minAndMax(randomNums);

//for loop to iterate through given array

//return result, which will be array consisiting of those two values







/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/


//creating function with input
function addNumbers(num){
  let result;
  while (num > 0) {
    num += (number-1);
    num--;
  }
}
//