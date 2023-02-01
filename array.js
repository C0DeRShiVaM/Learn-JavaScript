/*
let days = ['monday', 'tuesday', 'wednesday'];
console.log(days.length);
console.log(days[1]);
console.log(days[2][0]);


//changing elements of array
let month = [1, 2, 3, 4];
month[0] = 78;
console.log(month);

// push -> it adds an element at the end
let days = ['sunday', 'monday', 'tuesday', 'wednesday'];
days.push('brihaspatiwar', 'sukrawar');
console.log(days);


//pop -> it removes an element from end
let warriors = ['Pain', 'Madara Uchiha', 'Hashirama Senju', 'BollywoodisTrash'];
warriors.pop();
console.log(warriors);


//shift -> remove from start
let fighters = ['jf-17', 'tejas', 'su-30 mki', 'mig 29', 'f-35'];
fighters.shift();
console.log(fighters);


//unshift -> add to start
let soldiers = ['Vegeta', 'Jiren', 'Hit', 'Android 17'];
soldiers.unshift('picollo', 'goku');
console.log(soldiers);
//hello there



//concat() -> it adds two arrays
let insects = ['ant', 'grasshoper', 'cockroaches'];
let fish = ['rehu', 'singhi', 'mangur'];
let small_animals = insects.concat(fish);
console.log(small_animals);



//include = include() method determines whether an array includes a certain value or not, returning true and false as appropriate.
const insects = ['ant', 'frog', 'fish'];
console.log(insects.includes('elephant'));


//reverse() -> It reverses an array
const juh = ['ku', 'ka', 'ki'];
juh.reverse();
console.log(juh);


//reference type and equality testing
let jhu = [8,9,0]
let juk = jhu;
console.log(juk);
jhu === juk;


//Nested array -> we can store arrays inside array!
const tic = [['o','x','o'], ['x', null, 'o'], ['o','x','x']];
console.log(tic);
console.log(tic[1]);



//slice -> The slice() method returns selected elements in an array, as a new array.
           The slice() method selects from a given start, up to a (not inclusive) given end.
           The slice() method does not change the original array.

const huh = ['jan', 'feb', 'mar', 'april', 'may'];
const juh = huh.slice(1,3);
console.log(huh);
console.log(juh);


//splice -> The splice() method adds and/or removes array elements.
//          The splice() method overwrites the original array.

//Add new feb using splice
const huh = ['jan', 'mar', 'april', 'may'];
huh.splice(1,0, 'feb');
console.log(huh);


// remove 'may' and 'april' using splice
const huh = ['jan', 'mar', 'april', 'may'];
huh.splice(2, 2, 'deleted');
console.log(huh)

// REVISION BEGINS

//[1] DISPLAY ARRAY ELEMENTS
const at = [1, 3, 4, 7, 8];
for (let n = 0; n < 5; n++){
    console.log(at[n]);
}


//[2] DISPLAY SUM OF ARRAY ELEMENTS
const at = [1, 3, 5, 7, 9];
let sum = 0;
for (let n = 0; n < 5; n++){
    sum = sum + at[n];
}
console.log(sum);


//[3]
function sumArray(ar){
    let sum = 0;
for (let n = 0; n < ar.length; n++){
    sum += ar[n];

}
return sum;
}
sumArray([5,5,5,5,5]);


//[4] Sorting elements in the alphabetical order
let dailyActivities = ['sleep', 'work', 'exercise'];
dailyActivities.sort();
console.log(dailyActivities);
//finding the index position of string
const position = dailyActivities.indexOf('work');
console.log(position);
//slicing the array elements
const cut = dailyActivities.slice(0,1);
console.log(cut);
//concatenating two arrays
let n = [1,2,3,4];
const con = dailyActivities.concat(n);
console.log(con);
*/


//JavaScript Multidimensional array
