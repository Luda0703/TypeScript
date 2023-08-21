let age: number;
age = 50;

let str: string;
str = 'Max';


let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

// let callback = (a) => { return 100 + a };

// any 

let anything:any;
anything = -20;
anything = 'Text';
anything = {};

// unknown
// За змістом це те саме, що й any, тільки коли ми будемо намагатися його зберегти в іншу змінну, ми отримаємо помилку.

let some: unknown;
some = 'Text';

let strn: string;
if(typeof some === "string") {
    strn = some;
}

// Tuple
// Це кортеж, особливо популярний у таких мовах як python. Одним словом - це незмінний масив.

let fixed: [string, number];

fixed = ['Text', 10];

// Enum 
// Це навіть патерн, але він такий популярний, що в typeScript вирішили додати його як тип даних.
// За правилами гарного тону змінна, яка в enum, починається з великої літери.

enum Role {ADMIN, USER};

const person = {
  role: Role.ADMIN,
}

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}

// Union Type
// Це коли ми говоримо, що змінна або аргумент може містити кілька типів. Типи перелічуються через |

let union: string | number;

union = 'Text';
union = 10;

function combine(param1: number | string, param2: number | string) {
    if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }

// Literal Type
// Чимось схоже на Union Type, але тільки замість типів ми передаємо рядки.

let literal: 'first' | 'second';

literal = 'first';

function greeting (action: 'hello' | 'bye') {
    if (action === 'hello') {
      console.log('Hello user!');
    } else {
      console.log('Bye user!');
    }
  }

// Типи для методів і функцій

// Return Type
// Ми можемо вказувати тип, який повернеться з функції.

function returnResult (num: number): number {
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


function generateError (message: string, status: number): never {
    throw {message, status};
  }
  
  generateError('An error', 500);

// Function Type
// Ми можемо описати функцію як тип, це особливо актуально для callback або, 
// коли ми просто прокидаємо функцію.
// Сам синтаксис практично такий самий, як і для arrow function

let callback: (num:number ) => void

callback = (num) => {
  console.log(num);
}

function calc (param1: number, param2: number, callback: (num1: number, num2: number) => number):void {
    console.log('Result:', callback(param1, param2));
  }
  
  calc(1,1, (num1, num2) => num1 + num2);
  
  calc(10,5, (num1, num2) => num1 - num2);


// Custom Types
// Ми можемо створювати свої типи, це дуже спрощує розробку.

// Опишемо тип
type DatabaseDate =  {
    id: number;
    price: number;
    permission: string[];
    details: {
      title: string;
      description?: string;
    }
  }
  
  // Призначимо тип для об'єкта
  const data: DatabaseDate = {
    id: 1,
    price: 10.99,
    permission: ['read', 'write'],
    details: {
      title: 'New product',
      description: 'This is awesome product!'
    }
  }






