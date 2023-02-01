/*
let one = "hello";
let two = "shivam";
const three = `${one} ${two}`;
console.log(three.toUpperCase());


let h = "hello";
let f = 765;
console.log(`${h} ${f}`);



let song = "zamasu";
let score = 9;
let highestScore = 10;
let output = `I like the theme song of ${song}. I gave it a score of ${score / highestScore * 100}%.`;
console.log(output);



function hog(x, y){
    return (x + y) / 2
}
let x = 2;
let y = 4;
console.log("average of x and y is " ,hog(x,y));




//                                     27-01-2023


//                                           isArray()
//We often want to check if the variable is Array or not there are multiple ways to doing it
//most common way is the use of instanceof or Array.isArray()
let a = [1,2,3,4,5];
let b = {"hu": "hi"};
console.log(Array.isArray(a));
console.log(Array.isArray(b));



//                                       map()
const employee = [
    {name: "shivam", id: 71014, salary: 400000},
    {name: "kumar", id: 41017, salary: 450000},
    {name: "Thakur", id: 19988, salary: 1100000}
];

let ids = employee.map((idi)=>{
    return `${idi.id}`
});
console.log(ids);

// let ids = employee.map(function(idi,f){
//     console.log(idi,f);
// })



//                                    filter()
//get the array of an employee whose salary is greater than 40000.
const employee = [
    {name: "shivam", id: 71014, salary: 400000},
    {name: "kumar", id: 41017, salary: 450000},
    {name: "Thakur", id: 19988, salary: 1100000}
];
let kuk = employee.filter((sal)=> sal.salary > 400000)
console.log(kuk);

//regular way
// let kuk = employee.filter(function(sal){
//     if(sal.salary > 400000){
//         console.log(sal);
//     }
// })



//                                  reduce()
//try to find out the total sum of all the salaries
const employee = [
    {name: "shivam", id: 71014, salary: 400000},
    {name: "kumar", id: 41017, salary: 450000},
    {name: "Thakur", id: 19988, salary: 1100000}
];
// Using regular for loop
// let totalSalary = 0;
// for (let i = 0; i < employee.length; i++){
//     totalSalary = totalSalary + employee[i].salary;
// }
// console.log(totalSalary);

//using reduce() function
let totalSalary = employee.reduce((guga, huga)=> guga + huga.salary, 0)
console.log(totalSalary);



//Now try to find out the employee whose salary is the highest
// reduce is trash... lets use filter instead of trash
const employee = [
    {name: "shivam", id: 71014, salary: 400000},
    {name: "kumar", id: 41017, salary: 450000},
    {name: "Thakur", id: 19988, salary: 1100000}
];
let kira = employee.filter((light)=> light.salary > 450000)
console.log(kira);
*/

const anime = [
    {name: 'Naruto', strongestCharacter: 'Hashirama Senju', Rival: 'Madara Uchiha'},
    {name: 'Dragon ball z', strongestCharacter: 'Perfect Cell', Rival: 'Gohan'},
    {name: 'Death Note', strongestCharacter: 'L', Rival: 'Kira'}
];
let n = anime.filter((hu)=>hu.name === 'Naruto')
console.log(n);

// let p = new Promise((resolve, reject) => {
//     if (anime.name === 'Naruto'){
//         resolve('best anime');
//     }else{
//         reject('error');
//     }
// })
// p.then((message)=>{
//     console.log(message);
// }).catch((message)=>{
//     console.log(message);
// })
