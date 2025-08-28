// Question 1
// Print each friend’s name in uppercase using forEach().
let friends = ["Sonu", "Rohit", "Pranay", "Thor"];
let nameUpperCase = friends.forEach(function (friend ,index) {
    console.log(index + 1 +"."+friend.toUpperCase());
});

// Question 2
// Create a new array where each number is doubled. (Output should be [4, 8, 12, 16])

let numbers = [2, 4, 6, 8];

let squared = numbers.map(num => num * 2);
console.log(squared);


// Question 3
// Get only the passing marks (>= 40) in a new array.

let marks = [33, 45, 78, 90, 21, 55];


let passingStudentsMarks = marks.filter(marks => marks >=40);
console.log(passingStudentsMarks);

// Question 3
// Find the first age that is >= 18.

let ages = [12, 17, 19, 22, 15];

let Firstadult = ages.find(age => age >= 18);
console.log(Firstadult);

// Question 3
// Find the total cost using reduce

let prices = [100, 250, 50, 400];

let sumOfPrices = prices.reduce((total,num) => num + total, 0);

console.log(sumOfPrices);