/*
let random = Math.random();
if (random < 0.5){
    console.log("your number is less than 0.5:");
    console.log(random);
}
if (random >= 0.5){
    console.log("your number is greater than 0.5:");
    console.log(random);
}



const dayOfWeek = 'Monday';
if (dayOfWeek === 'Monday'){
    console.log("I love Monday:");
}else if(dayOfWeek === 'Sunday'){
    console.log("I hate Sunday");
}


//NESTING CONDITIONALS
const password = prompt("please enter a new password");
if (password.length >= 6){
    console.log("Long enough password");
}else{
    console.log("password too short! must be 6+ characters");
}
//password cannot include space
if (password.indexOf(' ') === -1){
    console.log ("good job! no space!");
}else{
    console.log ("password cannot contain spaces");
}


const password = prompt("please enter a new password");
if (password.length >= 6){
    if (password.indexOf(" ") === -1){
        console.log("valid password!");
    }else{
        console.log("password cannot contain spaces");
    }
}else{
    console.log("password too short");
}


//Using And logical operator
const password = prompt("please enter a new password");
if (password.length >= 6 && password.indexOf(" ") === -1){
    console.log("valid password!");
}else{
    console.log("Incorrect format for password");
}
*/

