// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function minNum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Not a number!';
    }
    return a < b ? a : b;
}

console.log(minNum(5, 8));    // 5
console.log(minNum(10, 'x')); // 'Not a number!'


function minNum(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Not a number!';
    }
    return a < b ? a : b;
}