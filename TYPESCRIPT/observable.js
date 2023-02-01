// function hu(ha) {
//     let p = new Promise((resolve, reject) => {
//         if (ha >= 5){
//             setTimeout(() => {
//                 resolve("number is greater than 5");
//             }, 2000);
//         }else{
//             setTimeout(() => {
//                 reject('number smaller than 5');
//             }, 5000);
//         }
//     });
//     p.then((message)=>{
//         console.log(message);
//     })
//     p.catch((message)=>{
//         console.log(message);
//     })
// }
// hu(7);
// hu(3);


//                                  OBSERVABLES
const oo = new Rx.Observable((observer)=>{
    setTimeout(() => {
        observer.next('lion');
        observer.next('cat');
        observer.next('mouse');
    }, 5000);
});
oo.subscribe((message)=>{
    console.log(message);
})