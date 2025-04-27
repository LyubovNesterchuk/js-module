

// function greet(name) {
//   return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}



// --------------------------------------

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// 							 // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"
                                

// --------------------------------------

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });






// ------------------------------------------------------------------------------

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// ---------------------------------------------------------

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Margarita",  deliverPizza));
// console.log(makeMessage("Margarita", makePizza));


// -------------------------------------------

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });





// ---------------------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// Index 0, value 5
// Index 1, value 10
// Index 2, value 15
// Index 3, value 20
// Index 4, value 25


// -----------------------------------------------------------------------------------
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));



// // ------------------------------------------------------------------------------------------

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//     return a + b + c;
// };


// const add = a => {
//   return a + 5;
// };

// const greet = () => {
//   console.log("Hello!");
// };


// const ExplicitReturn = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const ImplicitReturn = (a, b, c) => a + b + c;





// -----------------------------------------------------

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;


// const calculateTotalPrice2 = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };


// -------------------------------------------------------------------------------------

// const add2 = (...args) => {
//   console.log(args);
// };

// add2(1, 2, 3); // [1, 2, 3]


// ----------------------------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// // Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

// // Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);



// -------------------------------------------------------------------

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {totalPrice += item});

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));



// ------------------------------------------------------------------------------------

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4));

// -------------------------------------------

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number)=> {
//     if (number > value) {
//       filteredNumbers.push(number);
//      }
//   });

//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]





// --------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5];

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// // --------------------------------------------

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// ---------------------------------------------------------------------------------------------

// array.method(callback(currentValue, index, array))

// array.method((item, idx, array) => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });

// array.method(item => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });


// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });

// array.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });


// array.filter((element, index, array) => {
//   // Тіло колбек-функції
// });

// array.find((element, index, array) => {
  // Тіло колбек-функції
// });


// array.every((element, index, array) => {
//   // Тіло колбек-функції
// });

// array.some((element, index, array) => {
//   // Тіло колбек-функції
// });

// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);


// array.toSorted();

// array.toSorted((a, b) => {
//   // Callback function body
// });

// firstString.localeCompare(secondString);




// --------------------------------------------------------------------------------

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// const planetsLengths = planets.map(planet => planet.length);





// ---------------------------------------------------------------------------------

// const changeEven = (numbers, value) => {
//   return numbers.map(number => (number % 2 === 0 ? number + value : number));
// };




// ---------------------------------------------------------------------------------
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston


// Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// const averageScore = totalScore / students.length;
// console.log(averageScore);


// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);
                                        // 0: {name: 'Ajax', score: 37}
                                        // 1: {name: 'Poly', score: 59}
                                        // 2: {name: 'Houston', score: 64}
                                        // 3: {name: 'Mango', score: 83}
                                        // 4: {name: 'Kiwi', score: 94}
                                        // length: 5
                                        // [[Prototype]]: Array(0)


// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);


// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);
                                    // 0: {name: 'Ajax', score: 37}
                                    // 1:{name: 'Houston', score: 64}
                                    // 2: {name: 'Kiwi', score: 94}
                                    // 3: {name: 'Mango', score: 83}
                                    // 4: {name: 'Poly', score: 59}
                                    // length: 5
                                    // [[Prototype]]: Array(0)




// -------------------------------------------------

// const studentsCourses = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = studentsCourses.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = studentsCourses.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];



// --------------------------------------------------------------------------------

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore); 


// const names = sortedByAscendingScore.map(student => student.name);
// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]



// const names2 = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);
// console.log(names2); // ["Ajax", "Poly", "Mango", "Kiwi"]


// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]



// --------------------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//     genres: ["fiction"],
//     },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//       rating: 7.75,
//       genres: [],
//       },
//     {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//     genres: ["horror", "mysticism"],
//     },
//     {
//         title: "Enemy of God",
//         author: "Bernard Cornwell",
//         rating: 8.67,
//         genres: [],
//     },
// ];


// const titles = books.map(book => book.title);
// console.log(titles); //  ['The Last Kingdom', 'Beside Still Waters',
//                     // 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']



// const genres = books.flatMap(book => book.genres);
// console.log(genres); // ['adventure', 'history', 'fiction', 'horror', 'mysticism']



// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating > MIN_RATING);;
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);



// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle); // {title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75, genres: Array(0)}
// console.log(bookByAuthor);


// const sortedByAuthorName = books.toSorted(
//   (firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author)
// );
// console.log(sortedByAuthorName);

 
// const sortedByReversedAuthorName = books.toSorted(
//   (firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author)
// );
// console.log(sortedByReversedAuthorName);
 

// const sortedByAscentingRating = books.toSorted(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );
// console.log(sortedByAscentingRating);
 

// const sortedByDescentingRating = books.toSorted(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );
//  console.log(sortedByDescentingRating);
 


// const MIN_BOOK_RATING = 8;
// const namesAuthors = books
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(namesAuthors);// ['Bernard Cornwell', 'Bernard Cornwell', 'Robert Sheckley']





// ---------------------------------------------------------------------------------------------

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserEmails = (users) => {
//   return users.map(user => user.email);
// };

// console.log(getUserEmails(users));

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
                                                                    // // {
                                                                    //     "name": "Sheree Anthony",
                                                                    //     "email": "shereeanthony@kog.com",
                                                                    //     "eyeColor": "brown",
                                                                    //     "friends": [
                                                                    //         "Goldie Gentry",
                                                                    //         "Briana Decker"
                                                                    //     ],
                                                                    //     "isActive": true,
                                                                    //     "balance": 2764,
                                                                    //     "skills": [
                                                                    //         "lorem",
                                                                    //         "veniam",
                                                                    //         "culpa"
                                                                    //     ],
                                                                    //     "gender": "female",
                                                                    //     "age": 39
// }
                                                                    

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };
// console.log(getUsersWithEyeColor(users, "brown")); // {name: 'Sheree Anthony', email: 'shereeanthony@kog.com', eyeColor: 'brown', friends: Array(2), isActive: true, …}


// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
//     };
// console.log(getUsersWithAge(users, 35, 40));


// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive === true)
// };
// console.log(isEveryUserActive(users));

// const isAnyUserActive = (users) => {
//   return users.some(user => user.isActive === true);
// };
// console.log(isAnyUserActive(users));


// const calculateTotalBalance = (users) =>{ return users.reduce((total, user) => total + user.balance, 0); };
// console.log(calculateTotalBalance(users));










// ---------------------------------------------------------------------------------------------

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// // Оригінальний масив values не змінився



// -----------------------------------------------------------

// const num = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = num.filter(number => number % 2 === 0);
// const oddNumbers = num.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);



// ---------------------------------------------------------------------------------------------

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find((option) => option.label === "blue")); // { label: "blue", color: "#2196F3" }
// console.log(colorPickerOptions.find((option) => option.label === "pink")); // { label: "pink", color: "#E91E63" }
// console.log(colorPickerOptions.find((option) => option.label === "white")); // undefined



// ---------------------------------------------------------------------------------------------------

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false



// -------------------------------------------------------------------------------------

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true




// -------------------------------------------------------------------------------------

// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12




// -----------------------------------------------------------------------------------------

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, playtime) => previousValue + playtime, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;


// ------------------------------------------------

// const playersArray = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = playersArray.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);




// -----------------------------------------------------------------------------------------

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// const scores2 = [27, 2, 41, 4, 7, 3, 75];
// console.log(scores2.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

// const ascendingSCores = scores.toSorted((a, b) => a - b);
// console.log(ascendingSCores); // [19, 35, 56, 61, 74, 92]

// const descendingSCores = scores.toSorted((a, b) => b - a);
// console.log(descendingSCores); // [92, 74, 61, 56, 35, 19]



// --------------------------------------------------------------------------------

// const friends = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// console.log(friends.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const letters = ["b", "B", "a", "A", "c", "C"];
// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]


// const inAlphabetOrder = friends.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = friends.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]




// --------------------------------------------------------------------------------------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();
// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]

// const alphabeticalAuthors = authors.toSorted();
// console.log(alphabeticalAuthors); // ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']

// const ascendingReleaseDates2 = releaseDates.toSorted((a, b) => a - b);
// console.log(ascendingReleaseDates2);// [1967, 1973, 1984, 1997, 2008, 2012, 2016]

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);
// console.log(descendingReleaseDates);// [2016, 2012, 2008, 1997, 1984, 1973, 1967]


// const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder); // ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']

// const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder); // ['Tanith Lee', 'Robert Sheckley', 'Fyodor Dostoevsky', 'Bernard Cornwell']


// -----------------------------------------------------------------------------------------------


