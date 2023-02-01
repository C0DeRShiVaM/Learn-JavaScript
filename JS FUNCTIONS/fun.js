/*
//[1]
function goType(){
    console.log(5+2);
}
goType()


//[2]
function him(){
    console.log("Jai");
    console.log("Shree");
    console.log("Ram");
}
him()
him()
him()
him()
him()


//[3]
function rant(message){
    console.log("woop".toUpperCase());
    console.log("woop".toUpperCase());
    console.log("woop".toUpperCase());
}
rant()


//[4]
function jut(firstName, lastName){
    console.log(`My name is ${firstName} ${lastName[0]}.`);
}
jut("Shivam", "Kumar")
jut("Hashirama", "Senju")


//[5]
function hut(a, b){
    console.log(a + b);
}
hut(2 , 5)


//[6]Print a string numTimes
function village(string, numTimes){
    for (let i = 1; i <= numTimes; i++){
        console.log(string);
    }
}
village("Tiger", 5)
village("Humans",20)


//[7]
function town(string, numTimes){
    let result = '';
    for (let i = 0; i <= numTimes; i++){
        result += string;
    }
    console.log(result);
}
town("result ", 5)


//[8]sum of n natural numbers
function nat(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum += i;
    }
    console.log(sum);
}
nat(4)


//[9]find factorial of a number
function fat(n){
    let facto = 1;
    if (n < 1){
        console.log("error..Negative nmbers dont have factorial");
    }
    for (let i = 1; i <= n; i++){
        facto *= i;
    }
    console.log(facto);
}
fat(3)
fat(9)


//[10] check whether a number is prime or not
function prime(n){
    let count = 0;
    if(n <= 0){
        console.log("negative number or zero");
    }
    for(let i = 1; i <= n; i++){
        if (n % i === 0){
            count++;
        }
    }
    if (count === 2){
        console.log("prime number");
    }else{
        console.log("composite numer");
    }
}
prime(5)
prime(10)


// Return Statement
function tum(a, b){
    let sum = a + b;
    console.log(sum);
    return sum;
}
tum(7, 8)
tum(8, 7)



// QUESTIONS
//[1]
function capitalize(a){
    const capitalize = a.charAt(0).toUpperCase() + a.slice(1);
    console.log(capitalize);
    return capitalize;
}
capitalize('huha')
capitalize('')


//[2] DISPLAY ARRAY ELEMENTS
function huha(at){
    for (let n = 0; n < at.length; n++){
        console.log(at[n]);
    }
}
huha([1, 2, 3, 4])



//[3]Please write a function called lastElement which accepts a single array argument.
//   The function should return the last element of the array (without removing the element).
//   If the array is empty, the function should return null.

function lastElement(gh){
    let a = gh.length;
    if (a === 0){
        return null;
    }
    console.log(a = gh.slice(3));
    return a = gh.slice(3);
}
lastElement([1,2,3,4])


//[4]Write a function called sumArray which accepts a single argument: an array of numbers.
//   It should return the sum of all the numbers in the array.
//   sumArray([1,2,3]) // 6
//   sumArray([50,50,1]) // 101

function sumArray(ns){
    let sum = 0;
    for (let n = 0; n < ns.length; n++){
        sum += ns[n];
    }
    console.log(sum);
    return sum;
}
sumArray([1,2,3,4])



//[5] Write a function called returnDay.
//    this function takes in one parameter (a number from 1-7)
//    and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)
//    If the number is less than 1 or greater than 7, the function should return null.
//    In some countries Sunday is treated as the first day of the week,
//    but for this exercise we will use Monday as the first day.
//    Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.
//returnDay(1) // "Monday"

function returnDay(num){
    if (num < 1 || num > 7){
        return null;
    }else if(num==1){
        return "Monday";
    }else if(num == 2){
        return "Tuesday";
    }else if(num == 3){
        return "Wednesday";
    }else if(num == 4){
        return "Thursday";
    }else if(num == 5){
        return "Friday";
    }else if(num == 6){
        return "Saturday";
    }else if(num == 7){
        return "Sunday";
    }

}


//NEW TOPIC IN FUNCTION
//FUNCTION SCOPE
let totalEggs = 0;
function eggs(hen){
    totalEggs = 6;
}
console.log(totalEggs);
eggs();
console.log(totalEggs);


//LEXICAL SCOPE
function huha(){
    const heroes = ['Shaktiman', 'Karma', 'Garud Sf'];
    function jadu(){
        for (let hero of heroes){
            console.log(`Please Help Us, ${hero.toUpperCase()}`);
        }
    }
    jadu()
}
huha()


//Function Expression
const sum = function(num){
    return num + num;
}
sum(18);


//    Higher Order Function
// -> Function that operates on/with other functions are known as Higher Order Functions.
//    Higher order function accept other functions as arguments.
//    It returns a function

function callTwice(twice){
    twice();
    twice();
}
function dice(){
    const n = Math.floor(Math.random()*10);
    console.log(n);
}
callTwice(dice);

//Returning Function
function makeMysteryFunc(){
    const ra = Math.random();
    if(ra > 0.5){
        return function(){
            console.log("You can become Autonomous Ultra Instinct");
            console.log("You can beat Jiren");
        }
    }else{
        return function(){
            alert("Danger! Jiren is going to destroy you");
            alert("Surrender or run away");
        }
    }
}


//      ARROW FUNCTIONS
//single statement arrow function
let x = (z,y) => z * y;               // here x is the name of the function, (z,y) are the arguments and z*y is the statement
*/
