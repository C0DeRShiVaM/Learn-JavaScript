// async-await -> This is a special syntax to work with promises in javascript
// a function can be made async by using async keyword. An async function always returns a promise,
// other values are wrapped in a promise automatically. So async assures that the function returns a promise
// and wraps non promises in it.

// await -> There is another keyword called await that works only inside async functions.

// async function bite(){          // if you remove async you will get error
//     return 8;    
// }
// bite().then((message) =>{
//     console.log(message);
// })


async function data(){
    let darbhangaTem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree")
        }, 2000);
    })
}