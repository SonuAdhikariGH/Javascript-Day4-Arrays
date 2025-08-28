// Foreach
// Loops through arrays but easier and musch reliable


let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function(fruit,index) {
    console.log(index + 1,fruit);
    //  Added one in the log function so that it deosnt get the index unclear
});



// Map, it uses and loops through every element in the array and updates them as per the users desired
// Forms a new array afterhands

let numbers = [1, 2, 3, 4];
// Make the function here now

let squared = numbers.map(num => num * num);
console.log(squared);
// doesnt change the array just return the updated array


// .filter
// Picks only matching values

let ages = [12,14,16];
let filteredAges = ages.filter(age => age >= 13);
console.log(filteredAges);

// find(), finds the first matching element

let Numbers = [1, 2, 3, 4];
let  Firstabove1 = Numbers.find(num => num > 1);
console.log(Firstabove1);

// reduce, reuce trasnforms the arrays into a final single number
let nums = [20, 5, 100, 50];
let addedNumbers = nums.reduce((total, num) => total + num, 0);
console.log(addedNumbers);

//sort() ,sort values
let decSum = nums.sort((a ,b) => a - b);
console.log(decSum);

let AscSum = nums.sort((a ,b) => b - a);
console.log(AscSum);