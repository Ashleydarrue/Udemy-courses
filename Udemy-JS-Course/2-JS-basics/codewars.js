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


// work from here down

/* Build a pile of cubes
 function findNb(m) {
  let i = 1;
  let count = 0;
  while (m > 0) {
    m -= Math.pow(i, 3);
    i++;
    count++;
  }

  return m === 0 ? count : -1;
}
*/

/* a is for apple
function a(n){
  if (n%2!==0) n--
  if (n<=2) return ''
  let str = ''
  for (let i=0;i<n;i++){
   if (i===0){
     str+=' '.repeat(n-i-1)+'A'+' '.repeat(n-i-1)+'\n'
   }else if (i===1){
     str+=' '.repeat(n-i-1)+'A'+' '+'A'+' '.repeat(n-i-1)+'\n'
   }else if (i===(n/2)){
     str+=' '.repeat(n-i-1)+'A'+' A'.repeat(n/2)+' '.repeat(n-i-1)+'\n'
   }else {
     str+=' '.repeat(n-i-1)+'A'+' '.repeat(i*2-1)+'A'+' '.repeat(n-i-1)+'\n'
   }
 }
  return str.slice(0,-1)
}
*/

/* Color Choice
 function checkchoose(m, n) {
  let x = 1;
  for (let i = 1; i < n; i++) {
    x = Math.round((x * (n + 1 - i)) / i);
    if (x == m) return i;
  }
  return -1;
}
*/

/* Free pizza
function pizzaRewards(customers, minOrders, minPrice) {
  let arr = [];
  for (let i in customers) {
    if (customers[i].filter(v => v >= minPrice).length >= minOrders)
      arr.push(i);
  }
  return arr;
}
*/

/* Mix fruit juice
function mixFruit(arr) {
  let reg = ["banana", "orange", "apple", "lemon", "grapes"];
  let spec = ["avocado", "strawberry", "mango"];
  return Math.round(
    arr.reduce((a, b) => {
      b = b.toLowerCase();
      if (reg.includes(b)) return a + 5;
      if (spec.includes(b)) return a + 7;
      return a + 9;
    }, 0) / arr.length
  );
}

*/

/* HTML Complementary Color
function getReversedColor(hex) {
  if (typeof hex !== "string" || !/^(\d|[a-fA-F]){0,6}$/.test(hex))
    throw new Error();
  return "#" + (0xffffff ^ parseInt(hex, 16)).toString(16).toUpperCase();
}
*/

/* Letter change
function letterChange(str) {
  let l = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let u = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str.split("").map(v => {
    if (l.indexOf(v) > -1) return (v = l[l.indexOf(v) + 1]);
    if (u.indexOf(v) > -1) return (v = u[u.indexOf(v) + 1]);
    else return v;
  }).join``;
}
*/

/* Mirror , Mirror
function evilTwin(obj) {
  let twin = Object.create(obj);
  twin.hasGoatee = true;
  return twin;
}
*/

/* Sort and star
function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

*/

/* Broken Counter
class Counter {
  constructor() {
    this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}

*/

/* do i get a bonus
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/