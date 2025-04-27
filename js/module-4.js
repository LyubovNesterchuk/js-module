// // ---------------------------------------------book

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// console.log(book.title); // "The Last Kingdom" 
// console.log(book["title"]); // "The Last Kingdom" 

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];
// book.price = {
//   hardcover: 39,
//   softcover: 29,
// };

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"
// console.log(book.translations); // ["ua", "ru"]


// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }

// // const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const keyss = Object.keys(book);
// console.log(keyss); // ["title", "author", "rating"]

// const valuess = Object.values(book);
// console.log(valuess); // ["The Last Kingdom", "Bernard Cornwell", 8.38]







// // -----------------------------------------apartment

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
// name: "Henry",
// phone: "982-126-1588",
// email: "henry.carter@aptmail.com",
//   },
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;

// // const aptRating = apartment["rating"];
// // const aptDescr = apartment["descr"];
// // const aptPrice = apartment["price"];
// // const aptTags = apartment["tags"];

// const aptTags = apartment.tags;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;

// apartment.owner.name = "Henry Sibola";
// apartment.rating = 4.7;
// apartment.price = 5000;
// apartment.tags.push("trusted");

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
//     };

// // const keys = [];
// // const values = [];
// for (const key in apartment) {
//   keys.push(key);      // Додаємо ключ у масив keys
//   values.push(apartment[key]); // Додаємо значення у масив values
// }

// const keys = Object.keys(apartment); // Отримуємо масив ключів
// const values = [];
// for (const key of keys) {
//   values.push(apartment[key]); // Додаємо значення у масив values
// }


// const keysc = Object.keys(apartment);
// const valuesc = Object.values(apartment);



// // --------------------------------------------------user

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3



// // ------------------------------------------

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };



// // ----------------------------------------

// const propName = "name";
// const useR = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };
// console.log(useR.name); // "Henry Sibola"




// // -----------------------------------

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
// [emailInputName]: "henry.carter@aptmail.com",
//  [passwordInputName]: "jqueryismyjam",
// };



// // -------------------------------

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// function countProps(object) {
//   return Object.keys(object).length;
// }
// function countProps(object) {
//     return Object.keys(object).length;
// }


// // -------------------------------------------------

// function countTotalSalary(salaries) {
//   let totalSalary = 0; // Ініціалізуємо змінну для підрахунку загальної суми зарплат

//   const salaryValues = Object.values(salaries); // Отримуємо масив значень (зарплат)

//   for (const salary of salaryValues) {
//     totalSalary += salary; // Додаємо кожну зарплату до загальної суми
//   }

//   return totalSalary; // Повертаємо загальну суму зарплат
// }


// // ------------------------------------------------------------------


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   // Перебираємо масив продуктів
//   for (const product of products) {
//     if (product.name === productName) {
//       // Якщо знайдено продукт, повертаємо загальну вартість (ціна * кількість)
//       return product.price * product.quantity;
//     }
//   }

//   // Якщо продукт не знайдений, повертаємо повідомлення
//   return `Product ${productName} not found!`;
// }


// // ------------------------------------------------------

// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"




// // --------------------bookShelf

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]


// const bookShel = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//     },
  
//  	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };

// changeRating("The Mist", 9);
// changeRating("The Last Kingdom", 4);

// bookShel.getAvarageRating(); 



// // ---------------------------------------atTheOldToad

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName)
//   },
// };



// const atTheOldToads = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;

//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }

//     return totalPrice;
//   },
  
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions) {
// 		if (potion.name === oldName) { // Порівнюємо з переданим oldName
//         potion.name = newName; // Змінюємо ім'я зілля
//       }
//     }
//   },
// };



// // ----------------------------------------------------

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2); // [1, 2]
// multiply(1, 2, 3); // [1, 2, 3]
// multiply(1, 2, 3, 4); // [1, 2, 3, 4]


// function multiplys(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiplys(1, 2); // 1 2
// multiplys(1, 2, 3); // 1 2 [3] 
// multiplys(1, 2, 3, 4); // 1 2 [3, 4]



// // ----------------------------------------------------

// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };



// // -----------------------------------------

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (value < arg) { 
//       total += arg;
//     }
//   }
//     return total;

// }

// // ------------------------------------
// const temps = [14, -4, 25, 8, 11];

// console.log(temps); // [14, -4, 25, 8, 11]
// console.log(Math.max(temps)); // NaN

// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел 
// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25




// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]


// // ----------------------------
// function getExtremeScores(scores) {
//   return {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
// }

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// // ------------------------------------

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }


// // ----------------------------------------------------------
// const objA = { 
// 	x: 1, 
// 	y: 2, 
// };

// const objB = { 
// 	y: 3, 
// };

// const result = {
//     x: 5,
//     ...objA,
//     y: 10,
//     ...objB,
//     z: 15
// };

// console.log(result); // { x: 1, y: 3, z: 15 }


// // ------------------------------------------

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};
