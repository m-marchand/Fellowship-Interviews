// Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.
//const programmingLanguages = ['C++', 'Java', 'Python', 'Javascript', 'Swift']

// console.log(programmingLanguages)

/*
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/
// function containsJ(str){
//   //check to see if str is a 'string'
//   if(typeof str === 'string'){
//     //Loop through each letter
//     for (let i = 0; i < str.length; i++){
//       //
//       if(str[i].toUpperCase() === "J"){
//         return true
//       }
//     }
//     return false
//   } else return "Not a string"
//}






/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/

// function screen(array, callback){
// 	let newArray = [];
//   for (let i = 0; i < array.length; i++){
//     if(callback(array[i])){
//       newArray.push(array[i]);
// 		}
//   }
//   return newArray;
// }


// Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function

// console.log(screen(programmingLanguages, containsJ));


/*
Create a function "countTimes" that takes in two arguments (an array and a search value).
"countTimes" should return the number of times the search value is present in the array.
Example:
countTimes([1, 8, 9, 9, 10], 9) -> 2
*/

function countTimes(array, searchValue){
  let counter = 0
  // array.forEach(ele => if(ele === searchValue) {counter++})
  for (let i = 0; i < array[i]; i++){
    console.log(array[i])
    if (array[i] === searchValue){
      counter += 1;
    }
  }
  return counter
}

console.log(countTimes([1, 9, 9, 9, 10], 9))


/*
Create a function called "wordSearchLetterCounter" that takes two arguments (a 2 dimensional array of letters known as our word search, and a letter that we are going to search for).

"wordSearchLetterCounter" should use your "countTimes" function to count the total number of times a letter show up in the word search.
Example:
wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3
"D" shows up 3 times: twice in first row, once in third row.
*/

function wordSearchLetterCounter(arrays, letter){
  let totalCounter = 0;
  for (let i = 0; i < arrays.length; i++){
    totalCounter += countTimes(arrays[i], letter)
  }
  return totalCounter
}

console.log(wordSearchLetterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D"))