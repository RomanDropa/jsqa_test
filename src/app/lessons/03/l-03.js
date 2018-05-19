/** 
 * JavasScrip Lesson 3
 *
 *  - Complex data types: Object, Array, Function
 *  - Variables scope, variables hoisting, var vs. let vs. const
 *
 * To run this file: node src/app/lessons/03/l-03.js
 */

// Спочатку було слово, і воно було:
'use strict';

// Пригадаємо прості типи:

// String:
const lessonName = 'Javascript Lesson 3. Deeper to data types.';

// Number:
const lessonId = 2;

// Boolean
const isSkyBlue = true;

// Спеціальні типи:
// Null
const empty = null;

// Undefined
let notInitialized; // undefined

// Складний тип: Object

// Створення об'єктів:
// 1. Через літерал:
let myObj = {};

// 2. Через Object Constructor
myObj = new Object();

const lesson = {
    name: 'Lesson 03 - Data Types (continued)',
    id: 3,
    folder: null,
    checkHomework: function (students) {
        // TODO
    }
};

// Об'єкт є колекцією значень (як простих, таких як числа і рядки, так і складних — наприклад об'єктів).
// Об'єкт може бути представлений як неупорядкована колекція іменованих значень 
// або як упорядкована колекція пронумерованих значень (масив) (array).
// 

// Об'єкт - це колекція іменованих значень, які зазвичай називають властивостями (properties) об'єкта.

// Властивості об'єктів багато в чому схожі на змінні: вони можуть містити будь-який тип даних, 
// включаючи масиви, функції та інші об'єкти.

// Об'єкти в JavaScript можуть виступати в якості асоціативних масивів, тобто асоціювати 
// довільні значення з довільними рядками. 
// При такій роботі з об'єктом використовується спеціальний синтаксис 
// для доступу до властивостей: рядок, що містить ім'я потрібної властивості, записується всередині квадратних дужок:

console.log(lesson.name);
console.log(lesson['name']);

// 
// Тип масив — Array
// 
// Масив (array), як і об'єкт, є колекцією значень. Але якщо кожне значення, що міститься в об'єкті, 
// має ім'я, то в масиві кожне значення має номер, або індекс. У JavaScript можна брати значення з масиву, 
// вказавши після імені масиву індекс, укладений у квадратні дужки:

const plainNumbersArray = [1, 2, 3, 5, 7, 11, 13, 17, 19];
const firstElement = plainNumbersArray[0]; // 1
const thirdElement = plainNumbersArray[2];

console.log('Third element = ' + thirdElement);

// Нумерація елементів масиву починається з нуля, тому у прикладі вище написано [2], 
// а не [3] для отримання третього елементу.

// Масиви можуть містити будь-який тип даних JavaScript, в тому числі посилання на 
// інші масиви або на об'єкти або функції.

const people = [];
people['Anya'] = new Object();
people['Marichka'] = new Object();
people['Taras'] = new Object();

// Can use spaces here:
// console.log( people['Anya 1'] ); 

// And can't use spaces there:
// console.log( people.Anya 1); // 

// Крім функцій і масивів в базовій мові JavaScript визначено ще 
// кілька спеціальних видів об'єктів.

// Ці об'єкти являють собою не нові типи даних, а лише класи об'єктів.

// Клас Date визначає об'єкти, що представляють дати, 
// Клас RegExp – об'єкти, регулярних виразів, 
// Класс Error – об'єкти, що представляють синтаксичні помилки і помилки часу виконання.

// 
// Тип 'функція' — Function
// 

// Функція - це фрагмент коду, який визначений програмістом або визначений 
// заздалегідь у реалізації JavaScript (наприклад, Math.abs())

// У функції можуть передаватися параметри (аргументи) для 
// подальшої обробки даною функцією (наприклад, обчислень); 
// також функція може повертати значення-результат.

// Функції можуть зберігатися в змінних, масивах та об'єктах, 
// а також передаватися у якості аргументів інших функцій 
// (тоді вони називаються callbacks - функції зворотнього виклику).

function getMinValue(a, b, c) {
    const result = a;

    if (result > b) {
        result = b;
    }

    if (result > c) {
        result = c;
    }

    return result;
}

// 1. 
function checkHomework(students, moreParams) {
    return students + moreParams;
}

// 2. 
const checkHomework2 = function (students, moreParams) {
    return students + moreParams;
}

// 
// Reference to Function v.s. Function Execution
// 

// 1. Reference to Function, no braces:
console.log(checkHomework);

// 2. Function Execution, braces used: ()
console.log(checkHomework());

// 1. Reference to Function, no braces:
let myNumber = Math.random;

console.log(myNumber); // NaN 

// 2. Function Execution, braces used: ()
myNumber = Math.random();

// () - Function Call

console.log(myNumber);

console.log(checkHomework(['Nastya', 'Taras'], null));

// 
// Scope - області видимости: Global v.s. Local
//

// 1. Global variable:
const myName = 'Rost';

function getMyName() {
    var myName;
    // 2. Local variable:
    console.log(myName); // undefined
    myName = 'Mykyta';
    console.log(myName); // Mykyta
}

getMyName();

console.log(myName); // Rost

// 
// Variables Hoisting: moving declarations to the top;
// 

console.log(pi); // undefined
var pi = 3.14;
console.log(pi); // 3.14

//
// Домашня робота:
//

const student = {
    name: 'name_value',
    surname: 'surname_value'
};

console.log(student.name); // 'name_value'

console.log('\nLesson 03 - Homework');

console.log('\nTask 03.01:');
// Task 03.01
// Points: 2
// In code above, we created 'lesson' object. Add 'date' property to it, having null value.
// TODO: write code here

console.log('\nTask 03.02');
// Task 03.02
// Points: 3
// Add getInfo method to the lesson object, it should log lesson info to the console: lesson name, id and date.
// TODO: write code here

console.log('\nTask 03.03');
// Task 03.03
// Points: 2
// In code above, we defined the 'student' object. 
// Add 'birthday' property to it, set it's value to new Date(1991,8,24);
// TODO: write code here

console.log('\nTask 03.04: TODO: Review this file and make sure you understand it.');
// Task 03.04
// Points: 1
// TODO: if you performed this task, please uncomment next line:
// console.log('I\'ve reviewed the l-03.js file and I understand it');

console.log('\nLesson 03 - Homework End.');
