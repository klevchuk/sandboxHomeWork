


let a = 42 
let b = "42" 
console.log(a == b); 
console.log(a === b); 

const color = 'red' 
if (color === 'red') { 
    console.log('ok!'); 
} else { 
    console.log('give me my color!'); 
} 
 
 
if (color === 'red') { 
    console.log('ok!'); 
} else if (color === 'black') { 
    console.log('NOT ok!'); 
} else { 
    console.log('give me my color!'); 
} 
 
const age = 19 
age > 18 ? console.log(true) : console.log(false); 

let x = 2;
let y = '42';
if (x === y) {
    console.log( "x и y равны по значению и типу");
} else if (x == y) {
    console.log("x и y равны по значению, но не по типу");
} else if ( x != y) {
    console.log("x и y не равны ни по значению, ни по типу");
}

let myVariable = 32;
if (myVariable === null) {
    console.log("Переменная содержит значение null");
} else {
    console.log("Переменная содержит " + myVariable );
}

let myVariable1 = 33;
if (myVariable1 === null) {
    console.log("Значение переменной не было присвоено");
} else {
    console.log("Значение переменной было присвоено");
}

let n = 4;
if (n%2 != 1) {
    console.log("Число " + n + " четное");
} else if (n%2 == 1) {
    console.log( "Число " + n + " нечетное");
}

// ​let count1 = 10; 
// let count2 = 20; 
// let total = 0 

// total = (ПРИБАВЬ К count1 ТРОЙКУ ) умножь (ОТНИМИ ОТ count2 ПЯТЕРКУ) 
// console.log(total);

let count1 = 10;
let count2 = 20;
let total = 0;
total = (count1+3) * (count2-5);
console.log(total);

let str = 'One'; 
let str2 = 'Two'; 
console.log(str); 
console.log(str[0]); 
console.log(str.length); 
console.log(str.toLowerCase()); 
console.log(str + str2); 

let str21 = 'iop';
let str22 = 'hjk';
let str2122 = str21[1] + str22[2];
console.log(str2122.toUpperCase() + "!");


// Дана переменная dayOfWeek, которая содержит день недели на английском языке. 
// Используя switch,===,=,||,if else напишите код, который выводит на экран сообщение, соответствующее дню недели:

// (Если что встретилось непонятно-новенькое,к примеру || -гуглим)

// Если dayOfWeek равна "Monday", "Tuesday", "Wednesday", "Thursday" или "Friday", выведите на экран сообщение "Будний день".
// Если dayOfWeek равна "Saturday" или "Sunday", выведите на экран сообщение "Выходной день".
// Если значение переменной dayOfWeek не соответствует ни одному из вышеперечисленных случаев, выведите на экран сообщение "Некорректное значение дня недели".





const simpleSumm = (o, p) => console.log(o + p);
simpleSumm(7, 12);

function isPositive1(r) {
    if (r > 0) {
        return true;
    }
    if (r < 0) {
        return false;
    }
}
console.log(isPositive1(-97));

const isPositive = (r) => {
    if (r > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isPositive(78));



// let dayOfWeek = "Thutsday";
// switch (dayOfWeek) {
//     case "Monday":
//     case "Thutsday":
//     case "Wednsday":
//     case "Thursday":
//     case "Friday": {
//         console.log("Будний день");
//         break;
//         }

//     case "Saturday":
//     case "Sunday": {
//         console.log("Выходной день");
//         break;
//     }
//     default: {
//         console.log("Некорректное значение дня недели");
//     }
// }

// Перепеши  (заверни) наше старое задание 
// создав функцию giveMeResult(),
//  в которую будешь передавать день недели


function giveMeResult(dayOfWeek) {
    switch (dayOfWeek) {
        case "Monday":
        case "Thutsday":
        case "Wednsday":
        case "Thursday":
        case "Friday": {
            console.log("Будний день");
            break;
            }
    
        case "Saturday":
        case "Sunday": {
            console.log("Выходной день");
            break;
        }
        default: {
            console.log("Некорректное значение дня недели");
        }
    }
}

giveMeResult("Sunday");


// Напишите функцию isInRange,
//  которая принимает один аргумент - число,
//   и возвращает true, если число находится
//    в диапазоне от 10 до 20 включительно или равно 0 или равно 100,
//     и false в противном случае. Используйте логические операторы && и ||.

// function isInRange(q) {
//     if (q >= 10  && q <= 20) {
//         return true;
//     } else if (q == 0 || q == 100) {
//         return true;
//     } else {return false}
// }


// console.log(isInRange(15));

// function isInR (c) {
//     switch (c) {
//         case c >=
//     }
// }


function isInRange(q) {
   return q >= 10 && q <= 20 || q === 0 || q === 100;
}

console.log(isInRange(0));
console.log(isInRange(100));
console.log(isInRange(10));
console.log(isInRange(20));
console.log(isInRange(15));
console.log(isInRange(33));





// const rps = (p1, p2) => {
//     switch (p1, p2) {
//         case ("scissors", "paper"):
//         case ("paper", "rock"):
//         case ("rock", "scissors"): {
//           return ("Player 1 won!");
//           break;
//         }
        
//         case ("paper", "scissors"):
//         case ("rock", "paper"):
//         case ("scissors", "rock"): {
//           return ("Player 2 won!");
//           break;
//         }
        
//         case ("paper", "paper"):
//         case ("rock", "rock"):
//         case ("scissors", "scissors"): {
//           return ("Draw!");
//           break;
//         }    
//     }
//   };
/* rjvvtyn */
const rps = (p1, p2) => { 
    if ((p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock") || (p1 == "rock" && p2 == "scissors")) {
      return "Player 1 won!";
    } else if ((p1 == "paper" && p2 == "scissors") || (p1 == "rock" && p2 == "paper") || (p1 == "scissors" && p2 == "rock")) {
      return "Player 2 won!";
    } else if (p1 == p2) {
      return "Draw!";
    }
}