/************************
 * Lesson 1
 Variable and data types
*/


// var firstName = 'John';
// console.log(firstName);

// var lastName = "Smith";
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// // Variable naming rules
// var _3years = 3;
// var johnMark = "Jpohn and Mark";
// var if = 23;


/************************
 * Lesson 2
 Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' +  age);

var job, isMarried;
job= 'teacher';
isMarried = false;

console.log(firstName + 'is a' + age + 'year old' + job 
+ '. Is he married? ' + isMarried);

// Variable mutation 
age = 'twenty eight';
job = 'driver'

alert(firstName + 'is a' + age + 'year old' + job 
+ '. Is he married? ' + isMarried);

var lastName = prompt ('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*********************
 * Lesson 3
 * Basic operators
 */

 /*
 var year, yearJohn, yearMark;
 now = 2018;

 // Math operators
 yearJohn = now - 28;
 yearMark = now - 33;
 console.log(yearJohn);

 console.log(now + 2);
 console.log(now + 2);
 console.log(now / 10);

 //Logical operators
 var johnOlder = ageJohn < ageMark;
 console.log(johnOlder);

 //typeof operator
 console.log(typeof johnOlder);
 console.log(typeof ageJohn);
 console.log(typeof 'Mark is older than John');
 var x;
 console.log(typeof x);
*/

// Task: Sum of numbers from 1-10
/* let total = 0, count = 1;
while (count <= 10) {
  total += count;
 count += 1;
}
 console.log(total);
 */
// → 55

/*
  Task: Are the numbers in order?
  Description:
    In this Kata, your function receives an array of positive integers as input.
    Your task is to determine whether the numbers are in ascending order.
    For the purposes of this Kata, you may assume that all inputs are valid (i.e. arrays containing only positive integers with a length of at least 2).

    //SOLUTION

    // const inAscOrder = arr => arr.every((_, i) => i === 0 || arr[i] > arr[i - 1])
*/


/*
  Task: Building a calculator
  Description:
    Let's build a calculator.
    This is very basic Javascript kata.
    The test expects you to provide a Calculator object with the following methods:
    Calculator.add()
    Calculator.subtract()
    Calculator.multiply()
    Calculator.divide()
    Each method expects two arguments, so for instance:
    Calculator.add(1,4) should return 5.
    Only integers are expected to be passed in as arguments,
    and the divide method should return 'false' when trying the divide by zero.

    //SOLUTION
      const Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => (y === 0 ? false : x / y),
}

    */



    /*
  Task: Calculating averages
  Description:
    Let's build a calculator that can calculate the average for an arbitrary number of arguments.
    The test expects you to provide a Calculator object with an average method:
    Calculator.average()
    The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
    It expects Calculator.average(3,4,5) to return 4.

    //SOLUTION
    const Calculator = {
  average() {
    const numbers = [...arguments]
    const totalNumbers = numbers.length

    if (!totalNumbers) return 0

    return numbers.reduce((total, value) => total + value, 0) / totalNumbers
  },
}
    */

    /*
  Task: Basic Math (Add or Subtract)
  Description:
    In this kata, you will do addition and subtraction on a given string.
    The return value must be also a string.
  Examples:
    "1plus2plus3plus4"  --> "10"
    "1plus2plus3minus4" -->  "2"
  Notes:
    The input will not be empty.

    //SOLUTION

    const calculate = str =>
  String(
    str
      .split('plus')
      .join(' ')
      .split('minus')
      .join(' -')
      .split(' ')
      .reduce((total, num) => total + Number(num), 0)
  )

  */
/*
  Task: Check three and two
  Description:
    Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran),
    check if the array contains three and two of the same values.
  Examples:
    ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
    ["a", "b", "c", "b", "c"] ==> false // 1x "a", 

    //SOLUTION
    const totalLetters = (array, string) =>
  array.filter(element => element === string).length

const checkThreeAndTwo = array => {
  const totalA = totalLetters(array, 'a')
  const totalB = totalLetters(array, 'b')
  const totalC = totalLetters(array, 'c')

  if (totalA === 3 && (totalB === 2 || totalC === 2)) return true
  if (totalB === 3 && (totalA === 2 || totalC === 2)) return true
  if (totalC === 3 && (totalA === 2 || totalB === 2)) return true

  return false
}

*/

/*
  Task: Who likes it?
  Description:
    You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.
    We want to create the text that should be displayed next to such an item.
    Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.
  Examples:
    It must return the display text as shown in the examples:
    likes [] // must be "no one likes this"
    likes ["Peter"] // must be "Peter likes this"
    likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
  Notes:
    For more than 4 names, the number in and 2 others simply increases.

    //SOLUTION
    const likes = (names = []) => {
  if (names.length === 0) return `no one likes this`
  if (names.length === 1) return `${names[0]} likes this`
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`

  return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

*/

/*
  Task: Multiples of 3 and 5
  Description:
    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
    
    //Solution
    function solution(number) {
      let result = 0
      for (let i = 0; i < number; i++) if (i % 3 === 0 || i % 5 === 0) result += i
      
      return result
    }
    */