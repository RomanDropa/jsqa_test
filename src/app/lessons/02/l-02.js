/**
 * JavaScript Lesson 2 - Deeper into data types.
 * 
 * To run this file: node src/app/lessons/02/l-02.js
 */

// Let's start with it each time:
'use strict';

// This is how dynamic typing in JavaScript works:
let foo = 42;
console.log(typeof foo); // foo has type 'Number'

foo = 'bar';
console.log(typeof foo); // foo has type 'Number'

foo = false;
console.log(typeof foo); // foo has type 'Number'

// 
// String - рядок
// 

// Термінологічне: "рядок чи стрічка"?
// http://linux.org.ua/cgi-bin/yabb/YaBB.pl?num=1353672326/21
// "multiline string" = "багаторядковий рядок" (звучить не дуже красиво, але)
// https://uk.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B4%D0%BE%D0%BA_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)

// 
// Two ways to create string in JS:
// 

// Literal syntax:
const foo2 = 'bar2';

// Constructor syntax:
const foo3 = new String('bar3');

// Preferred quotes: single ones vs. double:
foo = 'bar';
// let foo = "bar"; // try to avoid it

// 
// String.length
// 

// Ця властивість дає взнати довжину рядка (кількість символів):

const fooLength = foo.length; // 3
const lastChar = foo.charAt(fooLength - 1);

// 
// Функції для роботи з рядками:
// 

// String.charAt( index );
// String.indexOf( string );
// String.substring( startIndex, endIndex );
// String.substr( startIndex, quantity );

// 
// String.charAt( index );
// 
// 'char' = 'character';

// Повертає символ, що має у рядкові індекс index. 
// Нумерація символів рядка починаєтся з нуля:

foo.charAt(0); // 'b'
foo.charAt(1); // 'a'
foo.charAt(2); // 'r'

// 
// String.indexOf( subString [, startIndex] );
//

// 1. Повертає номер під-рядка у рядку, починаючи пошук з startIndex
// 2. Повертає -1, якщо символ не знайдено.

foo.indexOf('a'); // 1

const foo4 = 'bara';
foo4.indexOf('a', 2); // 3 - знайшли друге 'а', бо почали пошук з індексу 2 

// 
// String.substring( [startIndex] [, endIndex] );
// 

// - поверне під-рядок, починаючи з позиції startIndex до позиції endIndex, 
// не включаючи endIndex, або до кінця рядка, якщо endIndex не вказано.

let helloWorld = 'Hello World!';

helloWorld.substring(6); // 'World!'
helloWorld.substring(6, 7); // 'W'
helloWorld.substring(6, 8); // 'Wo'
helloWorld.substring(6, 9); // 'Wor'
helloWorld.substring(6, 90); // 'World!'

// 
// String.substr( startIndex [, quantity] );
// 
// - поверне під-рядок, починаючи з позиції startIndex і у кількості quantity 
// (або до кінця рядка, якщо quantity не вказано).

helloWorld.substr(6); // 'World!'
helloWorld.substr(6, 1); // 'W'
helloWorld.substr(6, 2); // 'Wo'
helloWorld.substr(6, 3); // 'Wor'

// 
// Перетворення чисел у рядки і навпаки. 
// 

// Часто воно проводиться автоматично, по мірі необхідності. 
// Наприклад, якщо число використовується в операції конкатенації рядків, 
// воно буде перетворено в рядок:

const num = 100;
const str = num + ' items.'; // '100' + ' items.' = '100 items.'

// 
// + - Конкатенація рядків
// 

// Можна поєднувати, тобто конкатенувати рядки за допомогою оператора +, 
// який зазвичай застосовується до чисел, але може й поєднувати рядки:

helloWorld = 'Hello, ' + 'world';

// 
// Щоб перетворити число в рядок, можна просто скласти його з порожнім рядком: 
// 
let numAsString = num + '';

// 
// Для явного перетворення числа в рядок використовується функція String(): 
// 
numAsString = String(num);

const n2 = numAsString + 1; // !!! '1001'

// 
// Number.toString([radix]): перетворення з числа у рядок з вказанням системи числення
// 

const numAsStringBinary = num.toString(2); // 1100100

const ten = 10;
const tenInDecimalSysten = ten.toString(10); // результат: "10"
const tenInBinarySystem = ten.toString(2); // результат: "1010"
const tenInHexadecimalSystem = ten.toString(16); // результат: "a"

// 
// Зворотнє перетворення: з рядка у число: parseInt( value, radix )
// 

// Перетворити рядок у число, вказавши при цьому систему числення, можна за допомогою parseInt:

parseInt(tenInBinarySystem, 2); //результат: 10
parseInt(tenInHexadecimalSystem, 16); //результат: 10
parseInt(tenInDecimalSysten, 10); //результат: 10

// Коли рядок використовується в числовому контексті, 
// він автоматично перетворюється на число: 

const a = '10' * '10'; // 100

// На практиці, часто щоб перетворити рядок в число, 
// потрібно просто відняти з рядка значення 0: 

const n = helloWorld - 0; // NaN - 'Hello World!' - no number

//
// Числовий тип: Number
// 

// NaN = Not a Number

const num2 = 3.14;

// У JavaScript є декілька спеціальних числових значень.

Number.POSITIVE_INFINITY; // Infinity;
Number.NEGATIVE_INFINITY; // -Infinity;

// Коли дійсне число перевищує найбільше можливе значення, 
// то результату присвоюється спеціальне значення нескінченності, 
// яке в JavaScript позначається як Infinity. 
// А коли від'ємне число стає менше найменшого представимо негативного числа, 
// то результатом є негативна нескінченність, 
// що позначається як -Infinity.

const infinity = 100 / 0; // Результат: Infinity

// 
// Number.NaN; // Not a Number
// 

// Ще одне спеціальне числове значення. Воно повертається, коли операція 
// призводить до невизначеного результату.
// У цьому випадку результатом є спеціальне значення «нечисло», 
// що позначається як NaN(Not a Number) 

// Воно поводиться незвично: воно не дорівнює жодному іншому числу, в тому числі й самому собі, 
// тому для перевірки на це значення є спеціальна функція Number.isNaN() 

// - не плутати з глобальною функцією isNaN().

// Функція Number.isNaN() перевіряє виключно на рівність з спеціальним значенням Number.NaN, тому:
const isNaNIsNaN = Number.isNaN(Number.NaN); // true - Number.NaN є єдиним значенням, яке дасть true
const tenIsNaN = Number.isNaN(10); // false - усі інші значення дають false

// Глобальна функція isNaN() перевіряє, чи є її аргумент числом:
const globalNumberIsNaN = isNaN(10); // false
const globalStringIsNaN = isNaN('hello'); // true

// Детальніше про це:
// http://stackoverflow.com/questions/25176459/is-number-isnan-more-broken-than-isnan

// +, -, *, /, %, ++, --

// 
// Тип Null - використовується, коли треба надати пусте, "нульове значення"
// 

// 
// Undefined - це значення мають змінні, які було оголошено, але не було надано значення:
// 

let num3; // undefined

//
// Тип об'єкту - Object
//

// 
// Створення об'єктів:
// 

// 1. Object literal
let myObj = {};

// 2. Object Constructor
myObj = new Object();

const lesson = {
	name: 'Lesson 02 - Data Types (continued)',
	id: 2,
	folder: null,
	checkHomework: function (students) {
		// body...
	}
};

//
// Homework:
//

console.log('\nLesson 02 - Homework');

console.log('\nTask 02.01: TODO: Review the contents of this file and make sure you understand it.');
// Task 02.01
// 1 point
// TODO: if you performed this task, please uncomment next line:
// console.log('I\'ve reviewed the l-02.js file and I understand it');

console.log('\nTask 02.02:');
// Task 02.02
// 1 point
// Using String.substring method, log to the console characters 5-8 of the 'helloWorld' string.
// TODO: write code here

console.log('\nLesson 02 - Homework End.');
