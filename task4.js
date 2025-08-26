let numbers = [1,2,3,4,5];

// Adding 6 to the last
numbers.push(6);
console.log(numbers);

// removing the first number
numbers.pop()
console.log(numbers);

// Replacing 3 with 99
numbers.splice(2,2,(99));
console.log(numbers);
// the splice method works with using the index of where to start cutting and where to end so that it selects the number between that selected proportion and replaces it with the desired one