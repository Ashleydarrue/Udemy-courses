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