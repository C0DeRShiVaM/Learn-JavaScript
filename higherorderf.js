//Higher order function
//forEach loop
//map
//reduce
//filter
/*

//regular for loop
for (let i = 0; i <= companies.length; i++){
    console.log(companies[i]);
}

//                       forEach Loop
//[1]
const companies = [
    {name: "Google", category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
    {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
    {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
    {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
];
companies.forEach((n, i, companies)=>{
    console.log(i);
})



//                     Filter Function
//[2]
const companies = [
    {name: "Google", category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
    {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
    {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
    {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//let hu = companies.filter((company)=> company.category === "Service Based");
//console.log(hu);

let ju = companies.filter(function(company){
    if (company.name === "Paytm"){
        console.log(company);
    }
});

//Using regular for loop
//for (i = 0; i <= ages.length; i++){
//    if (ages[i] <= 20){
//        console.log(ages[i]);
//    }
//}





//                       MAP FUNCTION
//[3]
const companies = [
    {name: "Google", category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
    {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
    {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
    {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Using arrow function
let hu = companies.map((n, index)=>{
    console.log(n, index);
});

// Using regular function
//let hu = companies.map(function(n, index){
//    console.log(n, index);
//});

let hu = companies.map(function(company){
    return `${company.name} ${company.category}`        //using string template literal... instead of
});                                                     //using this you can use filter function to solve this problem
console.log(hu);



//                                    Reduce Function
//[4]
const companies = [
    {name: "Google", category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
    {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
    {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
    {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

Using regular for loop
let sum = 0;
for (let i = 0; i < ages.length; i++){
   sum = sum + ages[i];
}
console.log(sum);

//     Using Map function in regular way
let produce = ages.reduce(function(sum, age){
    return sum + age;
},0);
console.log(produce);

//   Using Map Function in arrow function
let produce = ages.reduce((sum,age) =>{
   return sum + age;
},0);
console.log(produce);
*/

// Revision
// const companies = [
//     {name: "Google", category: "Product Based", start: 1981, end: 2004},
//     {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
//     {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
//     {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
//     {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
// ];

// // let huga = companies.filter((byakugan) => byakugan.category === "Product Based")
// // console.log(huga);

// let huga = companies.map((byakugan, i) =>{
//     console.log(byakugan, i);
// })


// [mark 2]

const huha = [
    {name: "naruto", powerLevel: "1 trillion", clan: "uzumaki"},
    {name: "kakarot", powerLevel: "1 septrillion", clan: "saiyan"},
    {name: "vegeta", powerLevel: "1 octillion", clan: "saiyan"},
    {name: "cell", powerLevel: "500 trillion", clan: "android"},
];

let doha = huha.map((juha)=>{
    console.log(juhas);
})
