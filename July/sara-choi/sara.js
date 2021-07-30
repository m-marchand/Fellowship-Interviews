
// Declare a variable 'number' and set it to the value 10.
const number = 10;

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
	let sum = 0;
	function addNumbers(number){
    for(let i=1; i<=number; i++){
    	sum+=i;
      
    }return sum;
  }
 // console.log(addNumbers(4));
// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function



/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
function between50And500(number){
  if(number>=50 && number<=500){
    return true;
  } else{
    return false;
  }
}
//console.log(between50And500(3))


/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
function divBy100(number){
  if(number %100 ==0){
    return true;
  } else{
    return false;
  }
}

// console.log(divBy100(50));

/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/

function negativeOrEven(number){
  if(number<0 || number%2 == 0){
    return true;
  } else{
    return false;
  }
}

// console.log(negativeOrEven(277));

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/
function passAllTests(array, value){
  for(let i =0; i<array.length; i++){
    if(array[i](value) === false){
      return false;
    }
  }
  return true;
}  

const funcs = [negativeOrEven, divBy100, between50And500] ;

	

  /*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/
	// console.log(passAllTests(funcs, 600));


/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

function isPalindrome(string){
  const stringSplitted = string.split('');
  const reversedValue = stringSplitted.reverse();
  const reversedString = reversedValue.join('');
  
  if(string === reversedString){
    return true;
  } else{
    return false;
  }
}

// console.log(isPalindrome("DADD"));