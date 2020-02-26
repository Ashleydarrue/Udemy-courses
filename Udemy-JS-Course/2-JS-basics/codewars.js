// find names that start with S

// let peanuts = ["Sally", "Snoopy", "Char" , "lucy" , "Sam"]

// function startsWithS(array) {
//     var sArray=[]
//    array.forEach(function(element) {
//         if (element.startsWith('S')) {
//             sArray.push(element)
//         }
//     });

//     return sArray;
// }

// console.log(startsWithS(peanuts))

/* Welcome Codewars

function greet(language) {
	const start ={
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
  return start[language] || start.english;
}

*/

/* Largest 5 digit number in a series

function solution(digits){
  let answer = 0;
  
  for (let i=0; i<digits.length; i++){
    let number = digits.substr(i, 5);  
    if(Number(number) > answer){      
      answer = Number(number);
    }
  }
  return answer;
}

*/

/* Bumps in the Road
function bump(str)
{
  return str.replace(/_/g, "").length > 15 ? "Car Dead" : "Woohoo!";
}

// one liner: const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"
*/

/* Covfefe

function covfefe(str){
  if (str.includes("coverage")) return str.replace(/coverage/g,"covfefe")
  return str+" covfefe"
}
*/

/* calculate average 

function find_average(array) {
  return array.reduce((result, current) => result + current, 0) / array.length;
}
*/

/* find Something in an array
var find = function(string, array) {
  return array.includes(string)
};
*/

/* watermelon
function divide(weight){
 let a=weight-2
 let b=weight%2
 if (a>1&&b==0)return true
 return false
}
*/

/* Whtas up next?
const nextItem = (xs, item) => {
  let found = false
  let finalValue

  for (const i of xs) {
    if (found) {
      finalValue = i
      break
    }

    if (i === item) found = true
  }

  return finalValue
}

*/

/* Baby, repeat 
function babyRepeat(babble){
  return babble+' '+babble
}
*/

/* Average Scores 
 function average(scores) {
    return Math.round(scores.reduce((first,next)=>(first+next),0)/scores.length)
}
*/

/* All Inclusive?
function containAllRots(str, arr) {
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
      return false
    }
  }
  return true
}
*/

/* Alternate Square Sum
function alternateSqSum(arr){
  return arr.map((val, i) => i % 2 ? Math.pow(val, 2) : val)
    .reduce((a, v) => a + v, 0);
}

*/

/* are they square
var isSquare = function(arr){
  if (arr.length===0) return undefined;
  return arr.every(v=>Math.sqrt(v).toString().length<=v.toString().length)
}
*/

/* Boiled Eggs
function cookingTime(eggs) {
  return 5 * Math.ceil(eggs / 8);
}
*/

/* candy problem
function candies(kids){
   if (kids.length <= 1) return -1
  const maxCandies = Math.max(...kids)

  return kids.reduce((total, kid) => total + maxCandies - kid, 0)
}
*/

/* Bingo Card
function getCard()
{
  return [...'BINGO'].reduce((a, b, i) => {
    let s = new Set;
    while (s.size < 5) s.add(~~(Math.random() * 15 + 1 + i * 15))
    let nums = [...s]
    return a.concat([...Array(b == 'N' ? 4 : 5)].map(_ => b + nums.pop()))
  }, [])
}

*/

/*

*/

/*

*/