

/************************
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

/************************
 * Operator precedence
 */
/*
 var now = 2018 ;
 var yearJohn = 1989;
 var fullAge = 18;
 
 //Multiple operators
 var isFullAge = now - yearJohn >= fullAge; //true 
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

//More operators 
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI 
higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 45; //kg
var heightMark = 2.00; //meters

var massJohn = 56; // kg
var heightJohn = 1.45; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher thans John\'s? + markHigherBMI');
*/


/*****************************
 * If / else statements
 */

 /*

var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
  //this is the block of the if the if statement
  console.log(firstName + ' is married!');
} else {
  // this the block of the else statement
  console.log(firstName + 'will hopefully marry soon :)');
}

var isMarried = true;
if(isMarried){
  //this is the block of the if the if statement
  console.log(firstName + ' is married!');
} else {
  // this the block of the else statement
  console.log(firstName + 'will hopefully marry soon :)');
}

var massMark = 45; //kg
var heightMark = 2.00; //meters

var massJohn = 56; // kg
var heightJohn = 1.45; //meters

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

  if (BMIMark > BMIJohn){
    console.log('Mark\'s BMI is hogher than John\'s.')
  } else {
    console.log('Johns\'s BMI is hogher than Mark\'s.')
  }

*/

/**********************
 * Boolean logic
 */

 /*
 var firstName = 'John';
 var age = 20;

 if (age < 13){
   console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {// between 13 and 20
  console.log(firstName + ' is a teenager.');
 } else if (age >= 20 && age < 30){
  console.log(firstName + ' is a young man.');
 } else {
  console.log(firstName + ' is a Man.');
 }
 */

/*****************************
* The Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log(firstName + 'drinks beer.') : console.log(firstName + ' drinks juice.')

