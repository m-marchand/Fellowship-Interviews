// // Declare a variable 'number' and set it to the value 10.
// //declare variable named number and assign it the value 10
const number = 10;

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/
//create a function with a number as an argument
function addNumbers(number){
//declare a variable count that keeps track of addition
  let count = 0;
//iterate through 1- number 
  for(let i = 1; i <= number; i+=1){
    //add iteration to count
    count += i
  }
// return count
  return count
};
// // console.log(addNumbers(number))
// Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function


/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return a true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/
//create function between50And500 that passes a number as an argument
function between50And500(number){
  //if number is between 50 & 500 return true
  if(number > 50 && number <500){
    return true
  }
  return false
};
// console.log(between50And500(150))

/*
Create a function "divBy100" that takes a number as an argument.
"divBy100" should return a true if the number passed to it is divisible by 100.
For example, if the input is 120 then your function should return false and if the input is 600 it should return true.
*/
function divBy100(number){
  if(number % 100 === 0){
    return true;
  }
  return false
};
// // console.log(divBy100(200))


/*
Create a function "negativeOrEven" that takes a number as an argument.
"negativeOrEven" should return a true if the number passed to it is a negative number OR it is an even number.
For example, if the input is 7 then your function should return false and if the input is -3 it should return true.
*/
function negativeOrEven(number){
  if(number < 0 || number %2 === 0){
    return true;
  }
  return false;
};
// console.log(negativeOrEven(30))

/*
Create a function "passAllTests" that takes an array of functions and another value as arguments.
Each function in your array will return a boolean value. "passAllTests" should pass your value argument to each function.
If all functions in your array return true then "passAllTests" will return true. Otherwise "passAllTests" should return false
*/
function passAllTest(arrayOfFunc,value){
 for(let i =0; i<arrayOfFunc.length; i+=1){
   if(!arrayOfFunc[i](value)){
     return false;
   }
 } 
  return true;
};


/*
Use your "passAllTests" function to test if the number 300 is greater than the number 50 and less than the number 500,
divisible by the 100, and a negative number OR even. Then test the number 250.
*/
// console.log(passAllTest([between50And500,divBy100,negativeOrEven],250))



/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/
function add(number) {
  return function innerFunc(arg) {
    return number + arg;
  }
}


const addBy6 = add(6);
console.log(addBy10(20))