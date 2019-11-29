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
