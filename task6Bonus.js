let animals = ["Dog","Cat","Tiger","Elephant"];

// Print only "Cat" and "Elephant" using slice.

let animalsSpecifiedfirst = animals.slice(1,2);
let animalsSpecifiedsecond = animals.slice(2,3);
let newArr = [animalsSpecifiedfirst, animalsSpecifiedsecond];
console.log(newArr);