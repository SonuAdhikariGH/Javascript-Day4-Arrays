let friendNames = ["Sonu", "Rohit", "Pranay", "GptBro", "Thor"];

// Adding new friend at the end
friendNames.push("Itachi");
console.log(friendNames);

// Removing the first friend
friendNames.shift();
console.log(friendNames);

//Replace the third friend with bestie
friendNames.splice(2,1,"Bestie");
// The first number in the formula 2 is for selecting the index and then selecting the numbers of element and at last we have to select the string or number that we have to replace 
console.log(friendNames);

// Print the updated array
console.log(friendNames);

// print only the mid three colors
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

let onlyThreeColors = colors.slice(1,4);
console.log(onlyThreeColors);