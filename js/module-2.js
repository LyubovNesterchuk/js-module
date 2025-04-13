function getPrice(subscription) {
  let price = 0;
	
  if (subscription === "pro") {
	price = 100;
  }
	
  return price;
}
console.log(getPrice("free")); // 0	
console.log(getPrice("pro")); // 100



if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}
console.log(checkGrade(40)); // Unsatisfactory
console.log(checkGrade(75)); // Satisfactory


let type;
const age = 20;
if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}
console.log(type); // 'adult'

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // 'adult'



// const a = 5;
// const b = 10;
// let biggerNumber;
// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }
// console.log(biggerNumber); // 10



// const a = 5;
// const b = 10;
// const biggerNumber = a > b ? a : b;
// console.log(biggerNumber); // 10


function getBiggerNumber(a, b) {
  return a > b ? a : b;
}
console.log(getBiggerNumber(5, 10)); // 10
console.log(getBiggerNumber(20, 15)); // 20
console.log(getBiggerNumber(7, 7)); // 7



const fruit = 'apple';

switch (fruit) {
  case 'apple':
    console.log('Apple selected');
    break;
  case 'banana':
    console.log('Banana selected');
    break;
  case 'orange':
    console.log('Orange selected');
    break;
  default:
    console.log('The fruit is unknown');
}



const day = 3;

switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('This is a working day');
    break;
  case 6:
  case 7:
    console.log('It is a day off');
    break;
  default:
    console.log('Invalid');
}


function getSubscriptionPrice(type) {
  switch (type) {
    case "starter": 
      return 0;
    case "professional":
      return 20;
    case "organization":
      return 50;
    default:
      return "Invalid subscription type!";
  }
}

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true

if(null) {
	console.log("Block if")
} else {
	console.log("Block else")
}

if(0) {
	console.log("Block if")
} else {
	console.log("Block else")
}

if(5) {
	console.log("Block if")
} else {
	console.log("Block else")
}


console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

if("") {
	console.log("Block if")
} else {
	console.log("Block else")
}
if("batman") {
	console.log("Block if")
} else {
	console.log("Block else")
}


console.log("hello" && 5); // 5
console.log(5 && "hello"); // "hello"

console.log("mango" && "poly"); // "poly"
console.log("poly" && "mango"); // "mango"

console.log(3 && true); // true
console.log(true && 3); // 3

console.log("hello" && 0); // 0
console.log(0 && "hello"); // 0

console.log(3 && false); // false
console.log(false && 3); // false

console.log(0 && ""); // 0
console.log("" && 0); // ""

// const a = 20;
// console.log(a > 10 && a < 30); // true && true -> true

// const b = 50;
// console.log(b > 10 && b < 30); // true && false -> false
// console.log(b > 80 && b < 120); // false && true -> false


function getScreenType(screenWidth) {
  const sm = 320;
  const md = 768;
  const lg = 1200;

  if (screenWidth <= sm) {
    return "Mobile screen";
  } else if (screenWidth > sm && screenWidth <= md) {
    return "Tablet screen";
  } else if (screenWidth > md && screenWidth <= lg) {
    return "Desktop screen";
  } else {
    return "Godzilla screen";
  }
}

console.log(getScreenType(700));  // "Tablet screen"
console.log(getScreenType(1200)); // "Desktop screen"
console.log(getScreenType(1500)); // "Godzilla screen"
console.log(getScreenType(320));  // "Mobile screen"



function isNumberInRange(start, end, number) {
  if (number > start && number < end) {
    return true;
  } else {
    return false;
  }
}


console.log(true || false); // true
console.log(false || true); // true

console.log(5 || false); // 5
console.log(false || 5); // 5

console.log("hello" || 0); // "hello"
console.log(0 || "hello"); // "hello"

console.log(5 || 3); // 5
console.log(3 || 5); // 3

console.log("mango" || "poly"); // "mango"
console.log("poly" || "mango"); // "poly"
console.log(0 || false); // false
console.log(false || 0); // 0

console.log(null || ""); // ""
console.log("" || null); // null
// const a = 5;
// console.log(a < 10 || a > 30); // true || false -> true

// const b = 50;
// console.log(b < 10 || b > 30); // false || true -> true

const c = 20;
console.log(c - 20 || c * 2); // 0 || 40 -> 40
const screenWidth = 700;
const sm = 320;
const md = 768;
const lg = 1200;

// У консолі буде пусто, якщо жодна з умов не перетворилась на true
if(screenWidth <= sm || screenWidth > md) {
	console.log("Mobile or Desktop screen");
}

function checkAccess(subType) {
  if (subType === "pro" || subType === "vip") {
    return true;
  } else {
    return false;
  }
}

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Mango"); // !"Mango" -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !"" -> !false -> true
console.log(!null); // !null -> !false -> true



// const isBlocked = false;
// const canChat = !isBlocked; // !false -> true

// const isBlocked = true;
// const canChat = !isBlocked; // !true -> false

const isOnline = true;
const isBlocked = false;
const canChat = isOnline && !isBlocked; 
// true && !false -> true && true -> true

function canUserChat(isOnline, isBlocked) {
  const canChat = isOnline && !isBlocked;

  if (canChat) {
    return "Can type in chat!";
  } else {
    return "Blocked from typing in chat!";
  }
}

console.log(canUserChat(true, false));  // "Can type in chat!"
console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
console.log(canUserChat(false, true));  // "Blocked from typing in chat!"


function toggleModalVisibility(isVisible) {
  return !isVisible;
}


const message = "JavaScript is awesome";
console.log(message.length); // 21
console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

const fullName = "Jacob Mercer";
console.log(fullName.slice(0, 4)); // 'Jaco'
console.log(fullName.slice(3, 9)); // 'ob Mer'
console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
console.log(fullName.slice(1)); // 'acob Mercer'
console.log(fullName.slice(3)); // 'ob Mercer'
console.log(fullName.slice()); // 'Jacob Mercer'

const firstName = fullName.slice(0, 5);
const lastName = fullName.slice(6);
console.log(fullName); // "Jacob Mercer"
console.log(firstName); // "Jacob"
console.log(lastName); // "Mercer"

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

console.log('saMsUng' === 'samsung'); // false
console.log('saMsUng' === 'SAMSUNG'); // false

const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();

console.log(brandName); // 'samsung'
console.log(userInput); // 'saMsUng'
console.log(userInput === brandName); // false
console.log(lowercaseInput); // 'samsung'
console.log(lowercaseInput === brandName); // true

function normalizeInput(input, to) {
if (to === "lower") {
  return input.toLowerCase();
} else if (to === "upper") {
  return input.toUpperCase();
}
}
 
const username = 'Jacob Mercer';

console.log(username.includes('Jacob')); // true
console.log(username.includes('John')); // false
console.log(username.includes('Mercer')); // true
console.log(username.includes('Doe')); // false

// const message = "Please buy our stuff!";
// const hasSpam = message.includes("buy");

if (hasSpam) {
  console.log("Warning: This message contains forbidden words.");
} else {
  console.log("You can safely open this message.");
}

function checkForName(fullName, firstName) {
  if (fullName.toLowerCase().includes(firstName.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("hello")); // false (метод чутливий до регістру)
console.log(str.endsWith("world!")); // true
console.log(str.endsWith("World!")); // false (метод чутливий до регістру)


function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return "File extension matches";
  } else {
    return "File extension does not match";
  }
}


// const message = "Welcome to Bahamas!";
// const index = message.indexOf("to");
// console.log(index); // 8

// const message = "Welcome to Bahamas!";
// const index = message.indexOf("hello");
// console.log(index); // -1

 function getFileName(file) {
    let dotIndex = file.indexOf('.');
    if (dotIndex === -1) {
        return file;
    }// Якщо крапка не знайдена, повертаємо ім'я файлу без змін
        return file.slice(0, dotIndex);
}

const input = " JavaScript is awesome!    ";
const trimmedInput = input.trim();
console.log(trimmedInput); // "JavaScript is awesome!"
console.log(input); // " JavaScript is awesome!    "

function createFileName(name, ext) {
  if (createFileName = name.trim() + '.' + ext.trim()) {
    return createFileName
  }
}


let count = 0;
while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}

let clientCounter = 18;
const maxClients = 25;
while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}


function countClients(clientCounter, maxClients) {
  let counter = clientCounter; // створюємо локальну змінну
  while (counter < maxClients) {
    console.log(counter);
    counter += 1;
  }
}
countClients(18, 25);


function calculateTotal(number) {
    let total = 0; // Ініціалізуємо змінну для збереження суми
      for (let i = 1; i <= number; i++) { // Цикл від 1 до number включно
      total += i; // Додаємо поточне число i до total
    }
    return total; // Повертаємо підсумкове значення
}


// let count = 0;
// do {
// 	console.log(`Count: ${count}`);
// 	count += 1;
// } while (count < 5);



for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}




function sumUpTo(number) {
  let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}
console.log(sumUpTo(5)); // 15
console.log(sumUpTo(10)); // 55
console.log(sumUpTo(0)); // 0


function calculateTotal(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
}

// let x = 5;
// const y = ++x;
// console.log(x); // 6
// console.log(y); // 6


// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5

// let x = 5;
// const y = --x;
// console.log(x); // 4
// console.log(y); // 4

let x = 5;
const y = x--;
console.log(x); // 4
console.log(y); // 5

for (let i = 0; i <= 5; i++) {
  console.log(i);
}


function calculateEvenTotal(number) {
    let total = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) { 
            total += i;
        }
    }
    return total;
}


for (let i = 0; i < 10; i+=1) {
  console.log(i);
  if (i === 5) {
    console.log('Met the number 5, interrupt the execution of the cycle');
    break;
  }
}
console.log('Log after cycle');


const start = 6;
const end = 17;
let number;
for (let i = start; i <= end; i++) {
    if (i % 5 === 0) { // Перевіряємо, чи число ділиться на 5 без остачі
        number = i;
        break; // Зупиняємо цикл після знаходження першого такого числа
    }
}



function findNumber(max, target) {
	console.log("Log in the body of the function before the cycle");

	for (let i = 5; i <= max; i += 1) {
	    console.log("Current counter value i:", i);
	
	    if (i === target) {
	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
				return i;
	    }
	  }

  // Цей console.log не виконується
  console.log("Log in body function after cycle");
}

const result = findNumber(10, 6);
console.log("Log after exiting function");
console.log(`Result of function execution ${result}`);



function findNumber(start, end, divisor) {
for (let i = start; i <= end; i++) {
    if (i % divisor === 0) { 
      return  number = i;
    }
}
}