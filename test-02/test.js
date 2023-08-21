var age;
age = 50;
var str;
str = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
// let callback = (a) => { return 100 + a };
// any 
var anything;
anything = -20;
anything = 'Text';
anything = {};
// unknown
// За змістом це те саме, що й any, тільки коли ми будемо намагатися його зберегти в іншу змінну, ми отримаємо помилку.
var some;
some = 'Text';
var strn;
if (typeof some === "string") {
    strn = some;
}
// Tuple
// Це кортеж, особливо популярний у таких мовах як python. Одним словом - це незмінний масив.
var fixed;
fixed = ['Text', 10];
// Enum 
// Це навіть патерн, але він такий популярний, що в typeScript вирішили додати його як тип даних.
// За правилами гарного тону змінна, яка в enum, починається з великої літери.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
;
var person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log('Role: ', Role.ADMIN);
}
// Union Type
// Це коли ми говоримо, що змінна або аргумент може містити кілька типів. Типи перелічуються через |
var union;
union = 'Text';
union = 10;
function combine(param1, param2) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
// Literal Type
// Чимось схоже на Union Type, але тільки замість типів ми передаємо рядки.
var literal;
literal = 'first';
function greeting(action) {
    if (action === 'hello') {
        console.log('Hello user!');
    }
    else {
        console.log('Bye user!');
    }
}
// Типи для методів і функцій
// Return Type
// Ми можемо вказувати тип, який повернеться з функції.
function returnResult(num) {
    return num;
}
// Void
// Це коли функція нічого не повертає.
// function print (): void {
//     console.log('Print some text');
//   }
// Never
// Це коли функція ніколи не закінчується та нічого не повертає. 
// Наприклад, listen в express, оскільки підключення до сервера постійне, 
// або якщо ми повертаємо throw, оскільки це помилка, можна сказати, що функція ніколи не закінчується.
function generateError(message, status) {
    throw { message: message, status: status };
}
generateError('An error', 500);
// Function Type
// Ми можемо описати функцію як тип, це особливо актуально для callback або, 
// коли ми просто прокидаємо функцію.
// Сам синтаксис практично такий самий, як і для arrow function
var callback;
callback = function (num) {
    console.log(num);
};
function calc(param1, param2, callback) {
    console.log('Result:', callback(param1, param2));
}
calc(1, 1, function (num1, num2) { return num1 + num2; });
calc(10, 5, function (num1, num2) { return num1 - num2; });
// Призначимо тип для об'єкта
var data = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
        title: 'New product',
        description: 'This is awesome product!'
    }
};
