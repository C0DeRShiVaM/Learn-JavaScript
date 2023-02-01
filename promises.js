//Async JS Programming
//Callbacks, Promises, Async & Await


// Quick revise of forEach
//[1]
//const datas = [
//    {name: "Shivam", profession: "frontend developer"},
//    {name: "Kakarot", profession: "Java developer"}
//];
//datas.forEach((n, i)=>{
//    console.log(n);
//})


//                                    Promises
//[2]
// let p = new Promise((resolve, reject) =>{
//     let a = 1 + 1;
//     if ( a == 2){
//         resolve('success');
//     }else{
//         reject('failed');
//     }
// })
// p.then((message)=>{
//     console.log('This is in the then ' +message);
// }).catch((message)=>{
//     console.log('This is in the catch ' + message);
// })


//[3]
// const userWtching = false;
// function youtube(){
//     return new Promise((resolve, reject) =>{
//         if (userWtching){
//             reject('user like our video');
//         }else{
//             resolve('user was an idiot');
//         }
//     })
// }
// youtube().then((message)=>{
//     console.log('Success ' + message);
// }).catch((message)=>{
//     console.log('Whyyyy ' + message);
// })



//                                    28-01-2023

//                                 setTimeout function
// console.log('hello');
// setTimeout(() => {
//     console.log('namaste');
// },2000);                             // run after 2 sec or 2000 milliseconds
// console.log(471);


//                                 when using resolve

// let p = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and I am fulfilled");
//         resolve(true);
//     }, 9000);
// })


//                      when using reject with new keyword new Error()

// let p = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and I am rejected");
//         reject(new Error('I am an error so,get lost'));
//     }, 8000);
// })


//      we use promises for parallel execution.. so here i will run two promises at the same time
//      and both the promises will be executed parallely or at the same time

// let p1 = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log('I am a promise and I am fulfilled');
//         resolve(true);
//     }, 7000);
// })
// let p2 = new Promise((resolve, reject) => {
//     console.log('promise is pending');
//     setTimeout(() => {
//         console.log('I am a promise and I am rejected');
//         reject(new Error('I am error, get lost'));
//     }, 9000);
// })


//                      using .then()  &  .catch()
//   .then() and .catch takes the values of resolve and reject

// let p1 = new Promise((resolve, reject) => {
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log('I am a promise and I am fulfilled');
//         resolve(true);
//     }, 7000);
// })
// let p2 = new Promise((resolve, reject) => {
//     console.log('promise is pending');
//     setTimeout(() => {
//         console.log('I am a promise and I am rejected');
//         reject(new Error('I am error, get lost'));
//     }, 9000);
// })
// p1.then((message)=>{
//     console.log(message);
// })
// p2.catch((error)=>{
//     console.log(error);
// })



//                                  Promise Chaining .then()

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('run after 4 seconds');
//     resolve(71);
//   }, 4000);
// })
// p1.then((message)=>{
//   console.log(message);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('run after 2 seconds');
//       resolve(67);
//     }, 2000);
//   }).then((message)=>{
//     console.log(message);
//   })
// })


