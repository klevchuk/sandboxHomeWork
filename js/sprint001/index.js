


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

let dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Monday" || "Thutsday" || "Wednsday" || "Thursday" || "Friday":{
        console.log("Будний день");
        break;
    }
    case "Saturday" || "Sunday":{
        console.log("Выходной день");
        break;
    }
    default: {
        console.log("Некорректное значение дня недели");
    }
}


function pow(x,n) {
    if ((x > 0) & (n > 0)) {
     console.log(x**n);
    } else {
        console.log('jnvtyf')
    }
} 
pow(2,-4) ;
