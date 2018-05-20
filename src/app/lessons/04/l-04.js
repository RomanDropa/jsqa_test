/** 
 * Lesson 04 - Arrays
 * To execure this file:
 * node src/app/lessons/04/l-04.js
 */

console.log('\nLesson 04 - Start');

// 
// Масиви у Javascript
// 

// Масив - це тип даних, що зберігає пронумеровані значення. Кожне пронумероване значення називається елементом масиву, 
// а число, з яким зв'язується елемент, називається його індексом. Оскільки JavaScript — це нетипізована мова, 
// то елемент масиву може мати будь-який тип, причому різні елементи одного масиву можуть мати різні типи. 

// Продовжимо розглядати методи масивів, повторимо метод sort

// 
// Array.sort()
// 

// Cортує елементи масиву і повертає відсортований масив. 
// Якщо метод сортування викликається без аргументів, то він сортує елементи 
// масиву в алфавітному порядку

a = new Array('banana', 'cherry', 'apple').sort().join(', ');

console.log( a );

// Для сортування в якому-небудь іншому порядку, відмінному від алфавітного, 
// можна передати методу sort() як аргумент функцію порівняння. 

// Ця функція встановлює, який із двох її аргументів повинен бути присутнім 
// раніше в відсортованому списку. Якщо перший аргумент повинен передувати другому, 
// функція порівняння повертає негативне число. 
// Якщо перший аргумент в відсортованому масиві повинен слідувати за другим, 
// то функція повертає число, більше нуля. 
// А якщо два значення еквівалентні (тобто порядок їх розташування не важливий), 
// функція порівняння повертає 0.

a = [33, 4, 1111, 222];

// 1. 33, 4 -> 29 => 4, 33
// 2. 4, 1111 -> -1107 => 4, 1111
function aLessThanB (a, b) {
	// var result = 0;
	// if ( a < b ) {
	// 	result = -1;
	// } else if (a > b) {
	// 	result = 1;
	// }

	// return result;

	return a - b;
}

function bLessThanA (a, b) {
	return b - a;
}

// Comparator Function
a.sort( aLessThanB );
console.log( 'sorted by aLessThanB = ' + a );

a.sort( bLessThanA );
console.log( 'sorted by bLessThanA = ' + a );

// 
// Array.concat()
// 

// Поєднує масив з іншими елементами. Створює і повертає новий масив, 
// що містить елементи вихідного масиву, для якого був викликаний метод concat(), 
// послідовно доповнений значеннями всіх аргументів, переданих методом concat(). 
// Якщо який-небудь з цих аргументів сам є масивом, 
// в результуючий масив додаються його елементи.
var nums = [1, 2];
function trace( arr ) {
	console.log('Array = ', arr );
}

a = a.concat(795, 796);

trace();

a = a.concat('HELLO', nums, nums, a.sort( aLessThanB ));

trace();

var f = [1,2,3];
f.concat(4, 5); // [1,2,3,4,5]
f.concat([4,5]); // [1,2,3,4,5]
f.concat([4,5],[6,7]); // [1,2,3,4,5,6,7]
f.concat(4, [5,[6,7]]) // [1,2,3,4,5,[6,7]]

// 
// Array.slice(start, end) - відрізати скибку
// 

// Повертає фрагмент, або підмасив зазначеного масиву. 
// Два аргументи методу визначають початок і кінець фрагменту. 
// Повернутий масив містить елемент, номер якого вказаний в якості першого аргументу, 
// плюс всі наступні елементи, аж до (але не включаючи) елемента, 
// номер якого вказаний у другому аргументі. 

// Якщо вказано тільки один аргумент, то повертаються всі елементи від початкової позиції 
// до кінця масиву. Якщо який-небудь з аргументів негативний, 
// він задає номер елемента щодо кінця масиву. 

// Так, аргумент, рівний -1, задає останній елемент масиву, 
// а аргумент, рівний -3, - третій елемент масиву з кінця.

var d = [1,2,3,4,5];
var dd = d.slice(0,3); // [1,2,3]
var ddd = d.slice(3); // [4,5]
var dddd = d.slice(1,-1); // [2,3,4]
var ddddd = d.slice(-3,-2); // [3]

trace( d );
trace( dd );
trace( ddd );
trace( dddd );
trace( ddddd );

// 
// Array.splice(startIndex, quantity, elementsToAdd) - з'єднання, або зрощування масивів
// 

// Потужний метод для вставки або видалення елементів масиву. 
// Він змінює масив на місці, а не повертає новий масив, 
// як це роблять методи slice() і concat().

// Перший аргумент splice() задає позицію в масиві, 
// з якої починається вставка і/або видалення. 
// Другий аргумент задає кількість елементів, 
// які мають бути видалені з масиву. 

// Якщо другий аргумент опущений, видаляються всі елементи масиву 
// від початкового до кінця масиву. 
// Метод splice() повертає масив видалених елементів або, 
// якщо жоден з елементів не було видалено — 
// порожній масив.

// Перші два аргументи splice() задають елементи масиву, що підлягають видаленню. 
// За цими аргументами може слідувати будь-яку кількість додаткових аргументів, 
// які задають елементи, які будуть вставлені в масив, починаючи з позиції, 
// заданої першим аргументом.

function p ( s ) {
	console.log(s);
}

p('----------------SPLICE-----------------');

// Тільки відняти елементи
var e = [1,2,3,4,5,6,7,8];
trace( e );

var ee = e.splice(4); // [5,6,7,8], equal [1,2,3,4]

trace( ee );
trace( e );

var eee = e.splice(1,2); // [2,3], equal [1,4]

trace( eee );
trace( e );

var eeee = e.splice(1,1); // [4], equal [1]

trace( eeee );
trace( e );

// Тільки додати елементи
var eeeee = e.splice(0, 0, 101, 102, 103);

trace( eeeee );
trace( e );

// І відняти, і додати
var eeeeee = e.splice(1, 1, 'A', 'B', 'C');

trace( eeeeee );
trace( e );

// e.splice(2,0,'a','b'); // [], equal [1,2,'a','b',3,4,5]
// e.splice(2,2,[1,2],3); // ['a','b'], equal [1,2,[1,2],3,3,4,5]

// 
// Array.push() і Array.pop()
//

// Методи push() і pop() дозволяють працювати з масивами як зі стеками. 
// Метод push() додає один або кілька нових елементів в кінець масиву 
// і повертає його нову довжину. Метод pop() виконує зворотну операцію — 
// видаляє останній елемент масиву, зменшує довжину масиву і повертає видалений елемент. 
// Зверніть увагу: обидва ці методи змінюють масив на місці, а не створюють його модифіковану копію.

p( '----------- PUSH -----------');

var eLength = e.length;

p( eLength );

var eLength = e.push('1001');

p( eLength );

trace( e );

var poppedOut = e.pop();

p( '----------- POP -----------');

p( poppedOut );

// 
// Array.unshift() і Array.shift() - зсув вліво
// 

// Вставляють і видаляють елементи на початку масиву.

// Array.unshift() вставляє елемент на початку і повертає нову довжину масиву.
// Array.shift() виштовхує елемент з початку масиву і повертає цей елемент.

var primes = [1,3,5,7,11];

a = primes.shift(); // pop виштовхує з кінця, а цей - з початку

console.log(a); // 1

console.log(primes); // [3,5,7,11]

a = primes.shift();

console.log(a); // 3

console.log(primes); // [5,7,11]

// 
var b = primes.unshift(a);

console.log(b); // 4

console.log(primes); // [3,5,7,11]

// 
// Метод toString()
// 

// Перетворює кожен з елементів масиву на рядок, викликаючи в разі необхідності методи toString() 
// для елементів масиву і виводить список цих рядків через кому.

console.log( [1,2,3].toString() );
console.log( [1,2,3] );


// 
// Просунуті методи масивів
// 

// 
// Array.forEach()
//

// Послідовно проходить по кожному елементу масиву, щоразу викликаючи функцію, 
// яка передається як перший і єдиний параметр методу. 
// У свою чергу, ця передана функція приймає три параметри: 
// значення поточного елемента, його індекс та посилання на сам масив.

// arr.forEach(function(value) { });
// arr.forEach(function(v, i, a) {  });

// Приклад:

var data = [1, 2, 3, 4, 5];
var sum = 0;

function doNiceThings(value, index, array) {
	sum += value;
	console.log('sum = ' + sum);
}

data.forEach(doNiceThings);

sum = 0;
var i;
for (i = 0; i < data.length; i++) {
	sum += data[i];
	console.log('sum = ' + sum);
}

// На жаль, якщо нам знадобиться передчасно вийти з циклу, то інструкція break тут не спрацює 
// і ми отримаємо помилку "unlabeled break must be inside loop or switch" "непозначене переривання 
// має бути всередині циклу або інструкції-перемикача", тобто break працює тільки в циклах і 
// перемикачах, а forEach не є ні тим ні іншим, а методом масиву.

// Пропонується рішення через збудження винятку. Якщо функція, яка передається в forEach(), 
// збуджує виключення foreach.break, то виконання припиняється.

// Приклад:

// var ar = [1, 2, 3];

// function myForEachTest(array, func) {
// 	try {
// 		array.forEach(func);
// 	} catch (e) {
// 		if (e == myForEachTest.break) {
// 			return;
// 		} else throw e;
// 	}
// }

// myForEachTest.break = new Error('StopIteration');

// myForEachTest(ar, function(value) {
// 	p(value);
// 	if (value == 2) {
// 		throw myForEachTest.break;
// 	}
// });

// 
// Array.map( callback )
//

// Порядок виклику аналогічний forEach, але функція зворотного виклику
// (callback) мусить повернути значення. 

// Тобто ми проходимся по кожному елементу, наша функція проробляє якісь 
// операції і повертає нове значення, 
// але не для цього масиву, а для нового, старий масив не змінюється! 

// Якщо масив був з дірками, тобто мав індекси з розривами між ними 
// (а[0], а[5], а[78]), то результуючий масив матиме точно такий же вигляд (b[0], b[5], b[78])

var a = [1, 2, 3];
var b = a.map(function(x) {
	return x * x * x;
});

p(a);
p(b);

p('--');

for (i = 0; i < a.length; i++) {
	b[i] = a[i] * a[i] * a[i];
}

p(a);
p(b);

// 
// Array.filter( callbackFunction)
// 

// Корисна для фільтрації елементів, функція зворотного виклику 
// (та, яку ми передаємо в Array.filter, 
// Array.forEach, Array.map і т.д.) мусить повертати true або false. 
// У першому випадку поточний елемент 
// поміщається в новий масив, у другому — йдемо далі по масиву.

// Як і у випадку з Array.map() ми отримуємо на виході новий масив, старий не змінюється.

a = [5, 4, 3, 2, 1];
var smallvalues = a.filter(function(element) {
	return element < 3;
}); // [2, 1]

function myEveryOther(element, index, array) {
	return index % 2 === 0;
}

var everyother = a.filter(myEveryOther);

p('Array.filter:');
p(a);
p(smallvalues);
p(everyother);

function xCubic(x) {
	return x * x * x;
}

var everyOtherInCube = a.filter(myEveryOther).map(xCubic);

p('\neveryOtherInCube');

p(everyOtherInCube);

// 
// 
// 

noSpacesPlease = function(element) {
	return element !== ' ';
}

var a = 'Як і у випадку з Array.map() ми отримуємо на виході новий масив'.split('');
var b = a.filter(noSpacesPlease).join('');
var c = a.filter(function(element,index) {
	return index % 3 === 0;
})

// 
// Array.every(callback) і Array.some(callback)
// 

// Ці два методи повертають не масив, а true або false.

// every() повертає істину тоді і тільки тоді, коли колбек-функція 
// повернула true після всіх викликів дял кожного елемента.

var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var everyArrayElementIsLessThanTen = ar.every(function(value) {
	return value < 10;
}); // true, всі значення менші з 10

p(everyArrayElementIsLessThanTen);

var everyArrayElementIsEven = ar.every(function(x) {
	return x % 2 === 0;
}); // => false: бо не всі парні

p(everyArrayElementIsEven);

// some() ж повертає true, якщо хоча б один раз функція зворотного виклику повернула true.

a = [1, 2, 3, 4, 5];

var someArrayElementIsEven = a.some(function(x) {
	return x % 2 === 0;
}); // => true — бо є деякі парні числа.

//a.some(isNaN)

p(someArrayElementIsEven);

// 
// Array.reduce( callbackFunction, startValue ) і Array.reduceRight( callbackFunction, startValue )
// 

// Функція зворотного виклику приймає два значення: 
// перше є результатом попередньої роботи функції, друге - черговим елементом масиву.

a = [1, 2, 3, 4, 5];

// Сума
var sum = a.reduce(function(previousResult, currentElement) {
	return previousResult + currentElement;
}, 0);

p(sum);

// Спочатку перший параметр х = 0. 
// Крок 1: x = 0, y = ar[0] = 4; x + y = 4; 
// Крок 2: x = 4, y = ar[1] = 3; x + y = 7; 
// Крок 3: x = 7, y = ar[2] = 2; x + y = 9; 
// Крок 2: x = 9, y = ar[1] = 1; x + y = 10;

// Продукт (множення)
var product = a.reduce(function(x, y) {
	return x * y;
}, 1);

// Homework

// Найбільше
var max = a.reduce(function(x, y) {
	return (x > y) ? x : y;
});

var ar = [4, 3, 2, 1];

var result = ar.reduce(function(x, y) {
	return x + y;
}, 0);

// Arrary.reduceRight іде з кінця масиву.


// 
// Array.indexOf() і Array.lastIndexOf()
// 

// Повертає індекс першого і останнього входження елемента в масив.

a = [0, 1, 2, 1, 0];
a.indexOf(1); // => 1: a[1] is 1
a.lastIndexOf(1); // => 3: a[3] is 1
a.indexOf(3); // => -1: no element has value 3

// function checkIfElementInArray (arr, val) {
// 	var result = false;
// 	if ( arr.indexOf(val) !== -1 ) {
// 		result = true;
// 	}
// 	return result;
// }

function checkIfElementInArray(arr, val) {
	return arr.indexOf(val) !== -1;
}

p(checkIfElementInArray(a, 4));
p(checkIfElementInArray(a, 0));

console.log('\nLesson 04 - End');


//
// Домашня робота
// Важливо: все, що потрібно знати для виконання завдань, є у даному файлі
//

console.log('\nLesson 04 - Homework');

// Вправи з масивами



console.log('\nTask 04.01'); 
// Points: 1
// Прочитай файл уроку. Створи новий масив primeNumbers, що складається з перших десяти простих чисел. 
// Використай метод push, щоб додати до масиву ще одне просте число.
// TODO: пиши код тут:

let primeNumbers;

// Цей код тестує завдання:
if (primeNumbers && primeNumbers.length === 11) {
	console.log('Task 04.01 is DONE! ');
} else {
	console.log('Please make Task 04.01');
}



console.log('\nTask 04.02'); 
// Points: 2
// Напиши функцію sortNumbers і використай її у методі sort масиву primeNumbers для того, 
// щоб відсортувати його елементи у зворотньому порядку.
// TODO: пиши код тут:
// Цей код тестує завдання:
if (primeNumbers && primeNumbers[0] && primeNumbers[0] === 31) {
	console.log('Task 04.02 is DONE! ');
} else {
	console.log('Please make Task 04.02');
}





console.log('\nTask 04.03'); 
// Points: 2
// За допомогою методу splice виріж з масиву елементи з другого по третій і при цьому заміни їх на рядок 'foo'.
// TODO: пиши код тут:
if (primeNumbers && primeNumbers[2] === 'foo') {
	console.log('Task 04.03 is DONE! ');
} else {
	console.log('Please make Task 04.03');
}





console.log('\nTask 04.04');
// Points: 2 
// Використай метод Array.forEach для того, 
// щоб додати до кожного елементу масиву [21, 63, 84] число '42'
// TODO: пиши свій код тут:
console.log('Please make Task 04.04');





console.log('\nTask 04.05');
// Points: 3
// Дано масив crazyMix, до якого увійшли елементи різних типів:
var crazyMix = [1, '1', true, 2, '02', 3, '0', '10', 11, [], {}, function() {}];

// Використай метод Array.filter у функції arrayCleanUp так,
// щоб вона повертала масив, до якого входять тільки числа з вхідного масиву 'arrayToCleanUp':

function arrayCleanUp(arrayToCleanUp) {
	var cleanedUp = arrayToCleanUp;
	// TODO: пиши свій код тут:
	return cleanedUp;
}

var cleanedUp = arrayCleanUp(crazyMix).every(function(element) {
	return typeof element === 'number';
});

// Цей код тестує завдання:
if (cleanedUp) {
	console.log('Task 04.05 is DONE! ');
} else {
	console.log('Please make Task 04.05');
}




console.log('\nTask 04.06');
// Points: 3
// Даний код. Допиши у ньому функцію findMaxInMatrix, 
// яка знаходить максимальний елемент (найбільше число) у матриці.

var matrix = [
	[21, 3, 4, 5],
	[4, 5, 29, 3],
	[2, 12, 4, 7]
];

function findMaxInMatrix(mtx) {
	// TODO: пиши свій код тут:
}

var res = findMaxInMatrix(matrix);

// Цей код тестує завдання:

if (res === 29) {
	console.log('Task 04.06 is Done: ' + res);
} else {
	console.log('Please make Task 04.06');
}

console.log('\nLesson 04 - Homework End');

// Дякую!
