

//8.1

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}


//----------------------------------------------------------------------------------------

const user = { 
	name: "Jacob", 
	age: 32 
};

// console.log(user.name); // Jacob
// console.log(user.age); // 32

const { name, age } = user;
console.log(name); // Jacob
console.log(age); // 32


//-----------------------------------------------------------------------------------------

const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };
  
//   const accessType = book.isPublic ? "pulbic" : "private";
//   const message = `Book ${book.title} by author ${book.author} with rating ${book.rating} is in ${accessType} access!`;
  
// Деструктуризуємо
// const {title, author, isPublic, bookTitle, coverImage = "https://via.placeholder.com/640/480", rating: bookRating  } = book;

// const accessType = isPublic ? "pulbic" : "private";
// const message = `Book ${title} by author ${author} is in ${accessType} access!`;
// console.log(message);

// console.log(bookTitle); // undefined
// console.log(bookRating); // 8.38
// console.log(coverImage); // "https://via.placeholder.com/640/480"

//----------------------------

const book2 = {
    title: "The Dream of a Ridiculous Man",
  };
  
  const {
    title,
    coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
  } = book;
  
  console.log(title); // "The Dream of a Ridiculous Man"
  console.log(bookCoverImage); // "https://via.placeholder.com/640/480"



//------------------------------

const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
  ];
  
  for (const book of books) {
    console.log(book.title);
    console.log(book.author);
    console.log(book.rating);
  }

  for (const book of books) {
    const { title, author, rating } = book;
    console.log(title);
    console.log(author);
    console.log(rating);
  }
  

  for (const { title, author, rating } of books) {
    console.log(title);
    console.log(author);
    console.log(rating);
  }
  

//--------------------------------------------------------------------------------------------------

function printUserInfo(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
  }
  
  printUserInfo({ 
      name: "Alice", 
      age: 25, 
      hobby: "dancing" 
  }); // Name: Alice, Age: 25, Hobby: dancing

  function printUserInfo(user) {
    const { name, age, hobby } = user
      console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
    }
    
         
//----------------------------------------------------------------------------------
      
doStuffWithBook({
    title: "The Last Kingdom",
    pages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
});
  
  function doStuffWithBook(book) {
    const { title, pages, downloads, rating, isPublic } = book;
    console.log(title);
    console.log(pages);
  }

  function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
    console.log(title);
    console.log(pages);
  }

  
//-------------------------------------------------------------------------------
  
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   const { name, tag, stats } = user;

//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }

  
//   const {
//     name,
//     tag,
//     stats: { followers, views, likes },
//   } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(views); // 4827
//   console.log(likes); // 1308


//   const {
//     name,
//     tag,
//     stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
//   } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
// console.log(userLikes); // 1308

  
//-----------------------------------------

// const user = {
// 	name: "Jacob",
// 	age: 32,
// 	email: "j.cob@mail.com",
// 	isOnline: true
// };

// const { name, isOnline, ...otherProps } = user;

// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}



//--------------------------------------------------------------------------------------------

// const color = [200, 100, 255];
// const [ red, green, blue, alfa = 0.3 ] = color;

// console.log(`rgba(${red}, ${green}, ${blue}, ${alfa})`); // “rgba(200, 255, 100, 0.3)"


//------------------------------------------

const color2 = [200, 255, 100];

const [ red, ...otherColors ] = color2;

console.log(red); // 200
console.log(otherColors); // [255, 100]


//---------------------------------------------

const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`); // "Blue: 255"


//--------------------------------------------------------------------------------------------------

function printFruits(fruits) {
    console.log(fruits[0], fruits[1], fruits[2]);
  }
    printFruits(["apple", "banana", "orange"]); // "apple banana orange"
  

  //Із деструктуризацією в місці оголошення параметрів:

  function printFruits([firstFruit, secondFruit, thirdFruit]) {
    console.log(firstFruit, secondFruit, thirdFruit);
  }
  printFruits(["apple", "banana", "orange"]); // "apple banana orange"
