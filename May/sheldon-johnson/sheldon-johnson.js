/*
Create a function "changeCase" that takes in a letter as an argument, and returns the letter in the opposite case.
Examples:
changeCase('a') -> 'A'
changeCase('B') -> 'b'
*/
  // createa  function change case
  const changeCase = (str) =>{
    if (str === str.toUpperCase()){
      return str.toLowerCase()
    }
    return str.toUpperCase()
  }
  // console.log(changeCase(`a`))
  //console.log(changeCase(`B`))
  // create a conditonal statement to check what case its in 
  
  
  
  /*
  Create a function "effectString" that takes in two arguments (a string and a callback function).
  "effectString" should apply that callback function to each letter in the string and return out a new string.
  */
  
  const effectString = (str, call) =>{
    const arr =[]
    
    for(let i = 0; i < str.length; i++){
      arr.push(call(str[i]))
    }
    
    return arr.join(``)
  }
  //split string 
  //create a function effect string
  
  //create a for loop to iterate across string
  
  //apply callback to each lletter of string and push into array
  
  // join strings togetrher
  
  // Check to that your "effectString" is working properly by passing it the string "hello WORLD" and the callback function "changeCase"
  
  //console.log(effectString("hello WORLD", changeCase))
  
  
  /*
  Create a function "checkerLogger" that takes one argument (a function that returns a boolean value) The returned function should have the following behavior:
  If the function is invoked with an argument, the checker callback function is invoked and its boolean result is returned.
  If the function is invoked without any arguments, instead return a count of the number of times the callback function has been invoked and evaluated true or false.
  Example:
  const isOdd = num => num % 2 === 1
  const oddCounter = checkerLogger(isOdd);
  oddCounter(); ->  { true: 0, false: 0 }
  oddCounter(3); -> true
  oddCounter(2); ->  false
  oddCounter(); -> { true: 1, false: 1 }
  */
  
  // create a function checkerlogger
  const checkerLogger = (func) =>{
    const obj = {}
    
    return function (num){
      if (num === undefined){
        return obj
      } else{
        if (obj[func(num)] === undefined){
          obj[func(num)] = 1
          return func(num)
        } else{
          obj[func(num)] += 1
          return func(num)
        }
      }
      
    }
  }
  
  const isOdd = num =>  num % 2 === 1
  const oddCounter = checkerLogger(isOdd)
  
  // console.log(oddCounter(3))
  // console.log(oddCounter(7))
  // console.log(oddCounter(2))
  // console.log(oddCounter(1))
  // console.log(oddCounter())
  // create a obj
  
  //create a return function with the other function
  
  //if invoked without an argument return obj
  
  //else return the value and add the thing into object
  
  
  
  /*
  Create a function "countChar" that takes two arguments (an input string and a target string).
  "countChar" will return the number of times the target string is found in the input string.
  Example:
  countChar('hello world', 'o'); -> 2
  countChar('javascript', 'j'); -> 1
  Note: Do not use any native JS methods, or loops.
  */
  
  // create a function countChar that takes in two arguments
  function countChar (inpStr, targetStr, i = 0, count = 0) {
    if (inpStr[i] === undefined){return count}
    
    if (inpStr[i] === targetStr){
      count += 1
    }
    
    return countChar(inpStr, targetStr, i + 1, count)
  }
  //create basecase if string i is undefined
  
  //create a conditional statement to check if element of of string is equal to target
  
  //return fuction within itself
   console.log(countChar('hello world', 'o'))
  console.log(countChar('javascript', 'j'))
  
  
  
  /*
  Write a function called 'transpose' that accepts a two dimensional array and returns a transposed version of that array.
  Example:
  const twoDimArray = [ ['fred', 'barney'], [30, 40], [true, false] ]
  console.log(transpose(twoDimArray)); // -> [['fred', 30, true], ['barney', 40, false]]
  */
  
  //create a function transpose that accepts a 2d array
  const transpose = (arr) => {
    let count = 0
    const newArr = []
    let tempArr = []
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      count += 1
      }
    for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      tempArr.push(arr[i][j])
      if(tempArr.length === count/ 2){
        newArr.push(tempArr)
        let tempArr = []
      }
    }
    
    
  }  
    return newArr
  
  }
    
  function transpose(arr) {
    if (!arr.length) return arr;
  
    const transposed = [];
  
    for (let i = 0; i < arr[0].length; i += 1) {
      const row = [];
      for (let j = 0; j < arr.length; j += 1) {
        row.push(arr[j][i]);
      }
      transposed.push(row);
    }
  
    return transposed;
  }
    
    
    
    console.log(transpose([ ['fred', 'barney'], [30, 40], [true, false] ]))
  // use nested for loop to iterate across array
  
  // count total amount of elements in array
  
  //check if elements are even 
  
  // if odd return array as is
  
  //if it is even spli