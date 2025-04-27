// const numbers = [1, 2, 3, 4, 5]; // масив чисел
// const mixed = ['apple', 10, true]; // масив з елементами різних типів

// const planets = ['Earth', 'Mars', 'Venus', 'Uranus']; // масив рядків

// console.log(planets[0]); // 'Earth'
// console.log(planets[1]); // 'Mars'
// console.log(planets[2]); // 'Venus'
// console.log(planets[3]); // undefined
// console.log(planets[999]); // undefined

// const firstElement = planets[0];
// console.log(firstElement); // 'Earth'

// planets[0] = 'Jupiter';
// planets[2] = 'Neptune';
// console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

// console.log(planets.length); // 4

// if(planets.length >= 3) {
// 	console.log("3 or more elements");
// } else {
// 	console.log("less then 3 elements");
// }

// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // 'Uranus'

// function getLastElementMeta(array) {
//     let lastIndex = array.length - 1;
//     let lastValue = array[lastIndex];
    
//     return [lastIndex, lastValue];
// }

// function getExtremeElements(array) {
//   let firstValue = array[0];
//   let lastIndex = array.length - 1;
//     let lastValue = array[lastIndex];
    
//     return [firstValue, lastValue];
// }


// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Присвоєння за значенням, у пам'яті буде створено ще
// // одну ячейку, в яку буде скопійовано значення 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// console.log(b); // 5 Значення b не змінилося, оскільки це окрема копія


// const c = ["Mango", "Poly"];
// const d= c;
// console.log(c); // ["Mango", "Poly"]
// console.log(d); // ["Mango", "Poly"]

// c[1] = "Jacob";
// console.log(c); // ["Mango", "Jacob"]
// console.log(d); // ["Mango", "Jacob"]

// d[0] = "Ajax";
// console.log(c); // ["Ajax", "Jacob"]
// console.log(d); // ["Ajax", "Jacob"]

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2); // false
// // console.log([] === []); // false

// const arr3 = [1, 2, 3];
// const arr4 = arr3;
// arr3[1] = 1;
// arr4[2] = 1;
// // arr4 буде [1, 1, 1]

// const arr5 = [1, 2, 3];
// const arr6 = [1, 2, 3];
// const result = arr5 === arr6;
// // false

// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// // const array= [false];
// // const result = array ? "A" : "B";
// // A

// // const words = ["JavaScript", "is", "amazing"];
// // console.log(words.join("")); // 'JavaScriptisamazing'
// // console.log(words.join(" ")); // 'JavaScript is amazing'
// // console.log(words.join("-")); // 'JavaScript-is-amazing'

// // function transformString(string) {
// //     const words = string.split("_");
// //     return words.join("-");
// // }

// transformString("user_age"); // "user-age"
// transformString("price_per_droid"); // "price-per-droid"

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]


// function calculateEngravingPrice(message, pricePerWord) {
//  return message.split(" ").length * pricePerWord;
// }


// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// const res = planets.slice(1, 3);
// console.log(res); // ["Mars", "Venus"]

// console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const r = firstArray.concat(secondArray);
// console.log(r); // ["Mercury", "Venus", "Mars", "Jupiter"];

// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray)); 
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray)); 
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

// const oldClients = ["Mango", "Ajax", "Poly", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients);

// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// function getSlice(array, value) {
//     const index = array.indexOf(value);
//     return index !== -1 ? array.slice(0, index + 1) : [];
// }

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// const tags = [];

// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const item of order) {
//     total += item;
//   }

//   return total;
// }


// function getEvenNumbers(start, end) {
//   const evenNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
// }


// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupit")); // false


// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }


// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//   return ` ${item} is available to order!`;
// } else {
//    return "Sorry! We are out of stock!";
// }
  
// }



// function getCommonElements(array1, array2) {
//   const commonElements = [];

//   for (const element of array1) {
//     if (array2.includes(element)) {
//       commonElements.push(element);
//     }
//   }

//   return commonElements;
// }


// for (const planet of planets) {
//   console.log(planet);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   for (const price of order) {
//     total += price;
//   }
//   return total;
// }

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);



// function multiply() {
//   let total = 1;

//   for (const arg of arguments) {
//     total *= arg;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
// 	return args.join("-");
// }

// foo(1, 2, 3); // Поверне "1-2-3"

// function createReversedArray(...args) {
//   return args.toReversed();
// }


// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet();        // "Hello, Guest!"


// function count(from, to, step = 1) {
//   console.log(`from: ${from}, to: ${to}, step: ${step}`);

//   for (let i = from; i <= to; i += step) {
//   // ... 
//   }
// }

// count(1, 15, 4); // "from: 1, to: 15, step: 4"
// count(1, 15); // "from: 1, to: 15, step: 1"


// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i+=1) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

