// Declare a variable 'number' and set it to the value 10.
var num = 10;

/*
Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
*/

function addNumbers(num)
{
  let total = 0;
  for(let i = 0; i<=num; i++)
    {
      total += i;
    }
  return total;
}

// console.log(addNumbers(4))

// Create a function "addOne" that takes a number as and argument and returns that number plus one

function addOne(num)
{
  return num + 1;
}

// Create a function "subtractOne" that takes a number as and argument and returns that number minus one

function subtraactOne(num)
{
  return num - 1;
}

/*
There are two types of potions:
Growing potion: "A"
Shrinking potion: "B"
If "A" immediately follows a digit, add 1 to the digit using your "addOne" function
If "B" immediately follows a digit, subtract 1 from the digit using your subtractOne function
Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.
Example:
usePotions("3A78B51") ➞ "47751"
  3 grows to 4, 8 shrinks to 7
usePotions("9999B") ➞ "9998"
usePotions("9A123") ➞ "10123"
usePotions("567") ➞ "567"
*/

//input as a string, split into single characters.
// once I hit a letter, look at previous character and apply the correct function
// create a new string with all numbers and no letters.

function usePotions(string)
{
  let arrChar = string.split("");
  console.log(arrChar);
  let result = [];
  for(let i = 0; i<arrChar.length; i++)
    {
      console.log(arrChar[i]);
      if( arrChar[i] == 'A'|| arrChar[i] == 'B')
        {
          if(arrChar[i] == 'A')
            {
              result[i-1] += 1;
            }
          else
            {
              result[i-1] -= 1;
            }
        }
      else
        {
          result.push(parseInt(arrChar[i]));
        }
    }
  return result.join("");
}

//console.log(usePotions("9A123"));

/*
Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
*/

function isPalindrome(string)
{
  let reversedString = "";
  for (let i = string.length - 1; i>=0; i--)
    {
      reversedString += string[i];
    }
  return reversedString == string;
}

// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("test"))


/*
Create a function "add" that takes an argument (a number) and returns a function.
The returned function should also take one argument (a number) and return the sum of its argument and the argument that was originally past to "add"
Example:
const addBy10 = add(10)
addBy10(20) -> 30
*/

function add(num)
{
  function output(otherNum)
  {
    return num+otherNum;
  }
  return output;
}

const addBy10 = add(10);
// console.log(addBy10(20));


// Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.

function getLength(string, counter = 0)
{
  if(!string[counter])
    {
      return counter;
    }
  else{ 
  	return getLength(string, counter+=1);
  }
}

console.log(getLength("Hello"))