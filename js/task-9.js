// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
    if (typeof age !== 'number') {
        return false;
    }

    if (age >= 18) {
        return true;
    } else {
        return confirm('Вам менше 18. Ви впевнені, що хочете продовжити?');
    }
}

console.log(isAdult(6));