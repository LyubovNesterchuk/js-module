

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
  
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
  
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
// };

// console.log(pizzaPalace.checkPizza("Smoked"));
// console.log(pizzaPalace.order("Smoked"));
// console.log(pizzaPalace.order("Margarita"));

// // --------------------------------------------------------------------------

// // foo.call(thisArg, arg1, arg2, ...);

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mangoo = {
//   username: "Mangoo",
// 	room: 27
// };

// const polyy = {
//   username: "Polyy",
// 	room: 191
// };
// greet.call(mangoo, "Welcome"); // "Welcome, Mangoo, your room is 27!"
// greet.call(polyy, "Aloha"); // "Aloha, Polyy, your room is 191!"


// // --------------------------------------------------------------------------------
// class User {
//    name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
  
// }

// const mango = new User({
// 	name: "Mango",
// 	email: "mango@mail.com"
// });

// console.log(mango.name); // "Mango"
// // console.log(mango.#email); // Виникне помилка, це приватна властивість

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"


// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// // mango.#validateEmail('test'); // Помилка

// // ------------------------------------------------------------------------


// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
// 		basic: "basic"
//   };

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"

// // -------------------------------------------------------------------

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true



// // ---------------------------------------------------------------------
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   access;

//   constructor(params) {
//     super(params.email);      // Викликаємо конструктор User
//     this.access = params.access; // Додаємо нову властивість
//   }
// }


// // // Приклад використання:
// console.log(Admin.role.BASIC);       // "basic"
// console.log(Admin.role.SUPERUSER);   // "superuser"

// // Перевірка
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email);  // "mango@mail.com"
// console.log(mango.access); // "superuser"


// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
// 	email: "mango@mail.com",
// 	posts: []
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']



// // ---------------------------------------------------------------------------
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   blacklistedEmails;

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = []; // Ініціалізація чорного списку
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// // Перевірка:
// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com"));  // true





// // ---------------------------------------------------------------------------
// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// // -----------------------------------------------------------------------------
// class Car {
//   static maxPrice = 50000; // Публічна статична властивість

//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//     // Якщо більше — нічого не робимо
//   }
// }

// // Перевірка
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000; // > maxPrice, не зміниться
// console.log(audi.price); // 49000



// // -----------------------------------------------------------------------------
// class Car {
//   static #maxPrice = 50000;

//   constructor(params) {
//     this.price = params.price;
//   }

//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return "Error! Price exceeds the maximum";
//     } else {
//       return "Success! Price is within acceptable limits";
//     }
//   }
// }

// // Перевірка
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price));  // "Error! Price exceeds the maximum"





// -----------------------------------------------------------------------------
// class MyClass {
// 	static b = 5;

// 	constructor(value) {
// 		this.a = value;
// 	}
// }

// const instance = new MyClass(10);
// console.log(instance.b);




























