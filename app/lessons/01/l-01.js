/*
    JavaScript Lesson 01
    JS Language and its Types.

    How to execute this lesson:
    # like: cd ~/dev/jsqa/src/app/lessons/01
    cd [project root]~/dev/jsqa/src/app/lessons/01
   node l-01.js
*/

// JavaScript consists of executable code and comments:

// 1. Executable Code:
var a = 0;
// 2. This is a single-line comment

// This way, we tell interpreter to use strict mode (use it please)
'use strict';

var helloWorld = 'Hello World';
helloWorld = 2016;

// variable = var
// Simple Data Types
var myNumber = 2016; // Number
var myString = 'Hello Again'; // String
var myBoolean = true; // Boolean - Logical type
var myNull = null; // Null
var myUndefined; // 'undefined', Type: Undefined
// var mySymbol = new Symbol();

// Complex Data Types:
// Object
var myObject = {
    myProperty: 'Only Mine',
    myOtherProp: 19,
    myObjProp: {
        myParent: {
            myParent: null
        }
    }
};

// Array
var myArray = [1,2,3,4,5, 'a string', true, { name: 'My Name'}];

// Function
function myFunction (parameter) {
    var myLocalVar = parameter;
    return myLocalVar * 2;
}

var fiveTimesTwo = myFunction(5); // returns 10 = 5 * 2;

// Date
var today = new Date(); //

// RegExp
// 1. Validation: Name.Email@domain.com
// 2. Find and Replace

// TODO ROST: Tell maximum size of Object and
// max children count for object.

function myFunction (parameter) {
    var myLocalVar = parameter;
    return myLocalVar * 2;
}

// TypeScript is "Typed Javascript"

// Jeff Atwood Law (http://stackoverflow.com/):
// "any application that can be written in JavaScript,
// will eventually be written in JavaScript."

//
// Why JS?
//

// JS Pluses:
// 1. Low entrance barrier: only need only browser (or NodeJS, or Minecraft)
// 2. Free! Editors: Sublime Text, Notepad++, Aptana (Eclipse), JSFiddle
// 3. Easy to Debug.
// 4. Community and Rapid Dev: http://stackoverflow.com/ , https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// 5. Libraries and Frameworks: (jQuery) (AngularJS, Backbone etc)
// 6. Desktop (NodeJS) Web Server
// 7. Build (NPM, Bower, Gulp)
// 8. Mobile (PhoneGap, Appcelerator Titanium)
// 9. Bridge to other languages. JS is a C-like lang.

//
// There are two types of comments:
//

/* - Block comment */
// - Line comment

//
// Right way to learn JavaScript:
//

// 1. Answer the question: why, or for what reason I do it?
// 2. Learn it every day. E-ve-ry.
// 3. Consistent and systematic learning:
//  3.1 Move from Simple to Complex
//  3.2 Language first (JS Core). Environment then (DOM).
// 4. Left nothing unclear.
// 5. Produce clean & well-structured code.
// 6. Track what's happening in modern programming today (JS especially)
// 7. Analyze web, read twitter (JS Daily), blogs, stackoverflow, books etc.
// 8. Practice, practice, and practice again.
// 9. Interpret (compile) code in your head.
// 10. English. One more English, please!

// Let's start with it each time:
'use strict';

// So:

// Let's recall JS data types:
/* Six primitive ones:
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol (new in ECMAScript 6)
*/

// Complex ones: Object (Array, Date, Function, RegExp)

//
// Dynamic typing in JavaScript:
//
var foo = 42; // foo has type 'Number'
var foo = 'bar'; // foo has type 'String'
var foo = false; // foo has type 'Boolean'

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
var foo2 = 'bar2';

// Constructor syntax:
var foo3 = new String('bar3');

// Preferred quotes: single ones vs. double:
var foo = 'bar';
// var foo = "bar"; // try to avoid it

//
// String.length
//

// Ця властивість дає взнати довжину рядка (кількість символів):

var fooLength = foo.length; // 3
var lastChar = foo.charAt( fooLength - 1);

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

foo.indexOf( 'a' ); // 1

var foo4 = 'bara';
foo4.indexOf( 'a', 2 ); // 3 - знайшли друге 'а', бо почали пошук з індексу 2

//
// String.substring( [startIndex] [, endIndex] );
//

// - поверне під-рядок, починаючи з позиції startIndex до позиції endIndex,
// не включаючи endIndex, або до кінця рядка, якщо endIndex не вказано.

var helloWorld = 'Hello World!';
helloWorld.substring( 6 ); // 'World!'
helloWorld.substring( 6, 7 ); // 'W'
helloWorld.substring( 6, 8 ); // 'Wo'
helloWorld.substring( 6, 9 ); // 'Wor'
helloWorld.substring( 6, 90 ); // 'World!'

//
// String.substr( startIndex [, quantity] );
//
// - поверне під-рядок, починаючи з позиції startIndex і у кількості quantity
// (або до кінця рядка, якщо quantity не вказано).

helloWorld.substr( 6 ); // 'World!'
helloWorld.substr( 6, 1 ); // 'W'
helloWorld.substr( 6, 2 ); // 'Wo'
helloWorld.substr( 6, 3 ); // 'Wor'

//
// Перетворення чисел у рядки і навпаки.
//

// Часто воно проводиться автоматично, по мірі необхідності.
// Наприклад, якщо число використовується в операції конкатенації рядків,
// воно буде перетворено в рядок:

var num = 100;
var str = num + ' items.'; // '100' + ' items.' = '100 items.'

//
// + - Конкатенація рядків
//

// Можна поєднувати, тобто конкатенувати рядки за допомогою оператора +,
// який зазвичай застосовується до чисел, але може й поєднувати рядки:

var helloWorld = 'Hello, ' + 'world';

//
// Щоб перетворити число в рядок, можна просто скласти його з порожнім рядком:
//
var numAsString = num + '';

//
// Для явного перетворення числа в рядок використовується функція String():
//
var numAsString = String(num);

var n2 = numAsString + 1; // !!! '1001'

//
// Number.toString([radix]): перетворення з числа у рядок з вказанням системи числення
//

var numAsStringBinary = num.toString(2); // 1100100

var ten = 10;
var tenInDecimalSysten = ten.toString( 10 );        // результат: "10"
var tenInBinarySystem = ten.toString( 2 );          // результат: "1010"
var tenInHexadecimalSystem = ten.toString( 16 );    // результат: "a"

//
// Зворотнє перетворення: з рядка у число: parseInt( value, radix )
//

// Перетворити рядок у число, вказавши при цьому систему числення, можна за допомогою parseInt:

parseInt(tenInBinarySystem, 2);         //результат: 10
parseInt(tenInHexadecimalSystem, 16);   //результат: 10
parseInt(tenInDecimalSysten, 10);       //результат: 10

// Коли рядок використовується в числовому контексті,
// він автоматично перетворюється на число:

var a = '10' * '10'; // 100

// На практиці, часто щоб перетворити рядок в число,
// потрібно просто відняти з рядка значення 0:

var n = helloWorld - 0; // NaN - 'Hello World!' - no number

// NaN = Not a Number

// Корисні посилання:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseFloat

//
// Числовий тип: Number
//

var num2 = 3.14;

// У JavaScript є декілька спеціальних числових значень.

Number.POSITIVE_INFINITY; // Infinity;
Number.NEGATIVE_INFINITY; // -Infinity;

// Коли дійсне число перевищує найбільше можливе значення,
// то результату присвоюється спеціальне значення нескінченності,
// яке в JavaScript позначається як Infinity.
// А коли від'ємне число стає менше найменшого представимо негативного числа,
// то результатом є негативна нескінченність,
// що позначається як -Infinity.

var infinity = 100 / 0; // Результат: Infinity

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
var isNaNIsNaN = Number.isNaN( Number.NaN ); // true - Number.NaN є єдиним значенням, яке дасть true
var tenIsNaN = Number.isNaN( 10 ); // false - усі інші значення дають false

// Глобальна функція isNaN() перевіряє, чи є її аргумент числом:
var globalNumberIsNaN = isNaN(10); // false
var globalStringIsNaN = isNaN('hello'); // true

// Детальніше про це:
// http://stackoverflow.com/questions/25176459/is-number-isnan-more-broken-than-isnan

// +, -, *, /, %, ++, --

//
// Тип Null - використовується, коли треба надати пусте, "нульове значення"
//

//
// Undefined - це значення мають змінні, які було оголошено, але не було надано значення:
//

var num3; // undefined

//
// Тип об'єкту - Object
//

//
// Створення об'єктів:
//

// 1. Object literal
var myObj = {};

// 2. Object Constructor
var myObj = new Object();

var lesson = {
    name: 'Lesson 01 - Data Types (continued)',
    id: 2,
    folder: null,
    checkHomework: function ( students ) {
        // body...
    }
};

console.log('\nLesson 01 - Homework:\n\n!!! Please answer the questions in this file !!!\n');

// Lesson 01 Homework - Start

// Task 01.02 - 2 points
// Question: How we can tell the JS interpreter to use strict mode?
// Answer: "use strict";

// Task 01.03 - 2 points
// Q: What simple data types are used in JS?
// A: Number, String, Boolean

// Task 01.04 - 2 points
// Q: What complex data types are used in JS?
// A: Object, Array

// Task 01.05 - 3 points
// Q: Please write a function which calculates the difference between two numbers
// A: function diff (a,b) {
//      return a-b;   
//}
// Lesson 01 Homework - End
