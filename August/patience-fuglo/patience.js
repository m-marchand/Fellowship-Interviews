// Declare a variable 'myRandomString' and set it to the value 'Codesmith'

var myRandomString = 'Codesmith';

   

/*
Create a function 'doubleChar' that takes a string as an argument and returns a string in which each character is repeated once.
For example, if we pass the string 'Hello World!!' to 'doubleChar' it should return the string 'HHeelllloo  WWoorrlldd!!'
*/

function doubleChar(char){
   let double = ''
  for(let i = 0; i< char.length; i++){
    double += char[i] + char[i]
  }
  return  double
  
}

// HH + ee + ll + oo = HHeelloo

// console.log(doubleChar(myRandomString))
 
// Check that your 'doubleChar' function is working correctly by passing the value of 'myRandomString' to it



// Declare a variable 'programmingLanguages' and set it to an array that contains the values 'C++', 'Java', 'Python', Javascript', and 'Swift'.





var programmingLanguages = ['C++', 'Java', 'Python', 'Javascript', 'Swift' ]
                             
                            
/*
Create a function 'containsJ' that takes a string as an argument
'containsJ' should return a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
For example, if the input is 'Cat' then your function should return false, and if the input is 'Jaguar' it should return true.
*/                        

                            
function  containsJ (input){
  let flag = false;
   for(let i = 0; i < input.length; i++){
     if (input[i] === 'J') {
      flag = true;
     }
   }
  return flag;
}   

// a
// flag = true
                         
//console.log(containsJ('AJa'))


/*
Create a function 'screen' that takes in two arguments an array and a callback function that will be applied to every element in the array.
The callback function will return a boolean value. When 'screen' is called it will apply the callback function on every element in the array.
If the result of the callback function is true then that element in the array will be added to a new array. The 'screen' function will return that new array.
For example, if we were to call 'screen' and pass to it an array containing the elements 1, 2, 3, 4, 5, and 6 as the first argument and a callback function that tested if its argument was even for the second argument, then we should get the result [2, 4, 6] from our call to 'screen'
*/
                            

function screen (array, callback){
  const newArray = [];
  for(let i =0; i<array.length; i++){
     if(callback(array[i]) === true) {
       newArray.push(array[i])
     }
  }
  return newArray
}

console.log(screen(programmingLanguages, containsJ))