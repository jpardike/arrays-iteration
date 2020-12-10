
// Array Literal
// []

// Array Constructor
// new Array()

const favFoods = [
    'Pizza',
    'Hamburgers',
    'Steak',
    'Tacos',
    'Cake',
    'Spaghetti'
];


//  Accessing Array Values - Bracket Notation

console.log(favFoods[1]);


const numberList = [1, 2, 3, 4];

for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
        console.log(numberList[i] = numberList[i] * 2);
    } else {
        console.log(numberList[i]);
    }
}


// ------------- Multi Dimentional Array

const matrix = [['username', 'jdoe'], ['username', 'ksmith']];

// Accessing nested arrays
console.log(matrix[1][1]);



