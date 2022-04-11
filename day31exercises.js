// Write a function that reverses a number
const reverse = n => (Array.from(n.toString()).reverse().join(""));

// Write a function that returns a passed string with letters in alphabetical order
const toAlpha = str => Array.from(str).sort().join("");

// Write a function that accepts a string as a parameter and converts the first letter of each word of the string to uppercase
const toCap = str => str.split(" ").map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" ");

// Write a function that accepts a number as a parameter and check the number is prime or not
const checkPrime = n => {
    if (n <= 1) {
        return "only numbers greater than 1 can be considered prime";
    } else if (n == 2) {
        return "2 is the only even prime";
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return n + " is not prime";
                break;
            }
            return n + " is prime";
        }
    }
};

// Write a function to extract unique characters from a string
const uniqueChars = str => [...new Set(Array.from(str))].join("");

// Write a function that will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
const secondHiLo = arr => {
    let newArr = arr.sort();
    return `${newArr[1]},${newArr[newArr.length - 2]}`;
};

// Write a function to apply the Bubble Sort algorithm to a given array
const bubbleIncrease = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    } return arr;
};

const bubbleDecrease = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    } return arr;
};

console.log(bubbleDecrease([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));