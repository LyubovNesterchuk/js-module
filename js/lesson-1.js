// 1
// Написати функцію findFirstOccurrence, яка приймає два аргументи: рядок str і підрядок substr.
//  Функція повинна повертати індекс першого входження підрядка в рядок.
//  Якщо підрядок не знайдено, функція повинна повертати - 1.

// Приклади використання:


console.log(findFirstOccurrence('Hello, world!', 'world')) // 7
console.log(findFirstOccurrence('Hello, world!', 'JavaScript')) // -1
console.log(findFirstOccurrence('Hello, world!', 'Hello')) // 0


// 2
// Написати функцію getSubstring, яка приймає три аргументи: рядок str,
// індекс початку start та індекс кінця end.
// Функція повинна повертати підрядок, що починається з індексу start
// і закінчується індексом end(не включаючи його).

// Приклади використання:



console.log(getSubstring('Hello, world!', 7, 12)) // "world"
console.log(getSubstring('JavaScript', 4, 10)) // "Script"
console.log(getSubstring('Slice method', 0, 5)) // "Slice"

// 3
// Написати функцію extractAfterSubstring,
// яка приймає два аргументи: рядок str і підрядок substr.
// Функція повинна повертати частину рядка, що йде після першого входження підрядка.
// Якщо підрядок не знайдено, функція повинна повертати порожній рядок.


// function extractAfterSubstring(str, substr) {
//     if (str.includes(substr)) {
//         return str.slice(str.indexOf(substr), str.indexOf(substr) + substr.length);
//     } else {
//         return "";
//     }
// }

function extractAfterSubstring(str, substr) {
    idx = str.indexOf(substr);
    if (idx !== -1) {
        return str.slice(idx, idx + substr.length);
    } else {
        return "";
    }
}
// Приклади використання:
console.log(extractAfterSubstring('Hello, world!', 'world')) // "!"
console.log(extractAfterSubstring('Hello, world!', 'JavaScript')) // ""
console.log(extractAfterSubstring('Hello, world!', 'Hello')) // ", world!"
console.log(extractAfterSubstring("I love you!", "love"));




// 4
// Написати функцію removeSubstring, яка приймає два аргументи:
// рядок str і підрядок substr.Функція повинна повертати новий рядок,
//   у якому перше входження підрядка буде видалено.Якщо підрядок не знайдено,
//     функція повинна повертати оригінальний рядок.

// Приклади використання:
console.log(removeSubstring('Hello, world!', 'world')) // "Hello, !"
console.log(removeSubstring('Hello, world!', 'JavaScript')) // "Hello, world!"
console.log(removeSubstring('Hello, world!', 'Hello')) // ", world!"




// 5
// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

// Приклади використання:
console.log(extractBetween('Hello, [world]!', '[', ']')) // "world"
console.log(extractBetween('Hello, [world]!', '{', '}')) // ""
console.log(extractBetween('Hello, {world}!', '{', '}')) // "world"



// 6
// Написати функцію removeVowelsFromWords,
//   яка приймає рядок str і повертає новий рядок,
//     у якому з кожного слова видалені всі голосні букви.

const vowels = "aoieyuAOIEYU";

function removeVowelFromWords(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++){
     if (vowels.includes(str[i])) {
        continue;
    } else {
        newStr += str[i];
    }   
    }
        return newStr;
}

console.log(removeVowelFromWords("qwertyuiop[]][poiuytrewqwertyuiop["))
// Приклади використання:
console.log(removeVowelsFromWords('Hello, world!')) // "Hll, wrld!"
console.log(removeVowelsFromWords('JavaScript is awesome!')) // "JvScrpt s wsm!"
console.log(removeVowelsFromWords('Remove vowels from words')) // "Rmv vwls frm wrds"






// 7
//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

function inputNumber() {
    let num;
    do {
        num = prompt("Введіть число більше 100");
        if (num === null) return "Відміна"; // натиснув "Скасувати"
    } while (Number(num) <= 100 || isNaN(num));
    return num;
}

let results = inputNumber();
console.log(results);


// 8
// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

// Приклади використання:
console.log(removeCharacter('Hello, world!', 'o')) // "Hell, wrld!"
console.log(removeCharacter('JavaScript', 'a')) // "JvScript"
console.log(removeCharacter('12345', '3')) // "1245"



// 9
//Дано рядок, який складається із символів.Напишіть функію
// яка перевіряє, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

const string = 'abcde' // тестовий рядок 1
const stringSecond = 'bcde' // тестовий рядок 2


// 10
// Написати функцію countOccurrences, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати кількість входжень
// символу char у рядку str.

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Приклади використання:
console.log(countOccurrences('Hello, world!', 'o')) // 2
console.log(countOccurrences('JavaScript', 'a')) // 2
console.log(countOccurrences('12345', '3')) // 1


// 11
// Написати функцію extractNumber,
// яка приймає рядок str і повертає перше число,
// знайдене в рядку.Якщо число не знайдено,
// функція повинна повертати null.

// Приклади використання:
console.log(extractNumber('abc123def')) // 123
console.log(extractNumber('no numbers here')) // null
console.log(extractNumber('42 is the answer')) // 42


// 12
// Написати функцію findLongestWord,
//     яка приймає рядок str і повертає найдовше слово в цьому рядку.
// Якщо таких слів кілька, повернути перше знайдене.

// Приклади використання:
console.log(findLongestWord('The quick brown fox jumps over the lazy dog')) // "jumps"
console.log(findLongestWord('JavaScript is awesome')) // "JavaScript"
console.log(findLongestWord('I love coding')) // "coding"


// 13
// Написати функцію capitalizeEverySecondChar,
// яка приймає рядок str і повертає новий рядок,
// у якому кожен другий символ є великим.

// Приклади використання:
console.log(capitalizeEverySecondChar('hello world')) // "hElLo wOrLd"
console.log(capitalizeEverySecondChar('javascript')) // "jAvAsCrIpT"
console.log(capitalizeEverySecondChar('1234567890')) // "1234567890"


// 14
// Написати функцію hasUniqueChars,
//     яка приймає рядок str і повертає true,
//     якщо всі символи в рядку унікальні, і false в іншому випадку.

// Приклади використання:
console.log(hasUniqueChars('abcdef')) // true
console.log(hasUniqueChars('hello')) // false
console.log(hasUniqueChars('1234567890')) // true




