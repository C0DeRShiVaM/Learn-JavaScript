/*
//For Loop
//print "Da ba dee da ba daa" 6 times
for (let i = 1; i <= 6; i++){
    console.log("Da ba dee da ba daa");
}


//print even numbers from 0 to 20
for (let i =0; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}


//print table of 5 backwards
for (let i = 50; i >= 5; i-=5){
    console.log(i);
}


//print sum of all numbers between 1 to 50
let n = 50;
let sum = 0;
for (let i = 1; i <= n; i++){
    sum += i;
}
console.log(sum);


//print factorial of 10
let n = 10;
let facto = 1;
for (let i = 1; i <= n; i++){
    facto *= i;
}
console.log(facto);



//looping over arrays
const animals = ['lion', 'tiger', 'elephant'];
for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}



//Nested loops
for(let i = 1; i < 10; i++){
    console.log("/n");
    for(let j = 1; j < 4; j++){
        console.log(`        j is: ${j}`);
    }
    
}
*/

//nested arrays in nested loop
 const decoy = [
    ['jarbon', 'qui', 'captain ginyu'],
    ['nappa', 'vegeta', 'raditz'],
    ['krillin', 'tien', 'goku', 'picollo']
 ]

 for(let i = 0; i < decoy.length; i++){
    const row = decoy[i];
    console.log(`   ROW #${i + 1}`);
    for (let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
 }

 
































































