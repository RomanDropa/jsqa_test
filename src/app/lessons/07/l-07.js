/**
 * Вивчення JavaScript. Заняття 7.
 * 	- Функції - це замикання, замикання, і ще раз замикання (Closure)
 *  - IIFE - Функція, що викликається безпосредньо після оголошення
 * 
 * 	- Виконати код уроку: node src/app/lessons/07/l-07.js
 */

'use strict';

(function () {

	// Загортаємо увесь код в анонімну IIFE-функцію, що викликає сама себе:

	// (function () {

	// Допоміжний код:

	/**
	 * Розширюємо стандартну консоль власними методами - для зручності
	 *  - Зверни увагу на використання стрілочних функцій
	 *  - Зверни увагу, що тепер ця функція викликає себе сама:
	 */
	(function augmentConsole() {
		const consoleUpdate = {
			h1: arg => console.log(`\n\n=== ${arg} ===`),
			h2: arg => console.log(`\n\n== ${arg} ==`),
			h3: arg => console.log(`\n\n= ${arg} =`),
			s: () => console.log('--------------------------------------')
		};
		Object.assign(console, consoleUpdate);
	})();

	// Це більше не потрібно, адже функція вже викликала себе сама:
	// augmentConsole();

	console.h1('Замикання')

	//
	// Замикання - Closure
	//

	// Замикання на прикладі завдання з домашьої роботи:

	// Завдання: напиши функцію insider, що знаходиться всередині функції blackBox і
	// повертається як результат її виконання.

	// Якщо викликати функцію insider, то вона повертає параметр hidden, який було
	// передано функції blackBox.

	// Напиши код, який викликає blackBox, у якості параметра передаючи 'secret'

	function blackBox(hidden) {
		return function insider() {
			return hidden;
		};
	}

	const blackBoxResult = blackBox('secret');
	const insiderResult = blackBoxResult();

	console.log(blackBoxResult);
	console.log(insiderResult);

	console.h2('Ще один приклад використання замикання: "функція-домножувач" multiplier')

	// Ще один приклад використання замикання: "функція-домножувач" multiplier.
	// Принцип дії: "помножувач" приймає у якості аргумента перший множник (factor),
	// і повертає внутрішню функцію-"домножувач" multiplyBy, яка приймає у якості
	// аргумента другий множник (number).

	// Внутрішня функція-"домножувач" (multiplyBy), внаслідок лексичної видимости
	// "бачить" змінні, оголошені у зовнішній функції multiplier, і тому може
	// використовувати її параметр factor, бо він є змінною, оголошеною в функції
	// multiplier

	// Отже, внутрішня функція може взяти перший множник-параметр зовнішньої функції
	// і, помноживши його на власний параметр number, повернути результат множення.

	function multiplier(factor) {
		function multiplyBy(number) {
			return number * factor;
		};
		return multiplyBy;
	}

	const twice = multiplier(2);

	// Принциповим є те, що функцію-домножувач можна використовувати багато разів
	// для домножування змінної factor на будь-яке число. Наприклад, на число 2:

	console.log(twice(5)); // 5 * 2
	console.log(twice(10)); // 10 * 2
	console.log(twice(3)); // 3 * 2

	// Або на число 3:
	var triple = multiplier(3);

	console.log(triple(5)); // 5 * 3
	console.log(triple(10)); // console.log(multiplier(3)(10));
	console.log(triple(3)); // 3 * 3

	// А можна множити два числа, не зберігаючи внутрішню функцію у змінній,
	// а одразу викликаючи її з другим множником, як тут:
	const fiveMultipliedBySeven = multiplier(5)(7);
	console.log(fiveMultipliedBySeven);


	/* В програмуванні, замиканням (англ. closure) називається підпрограма,
	що виконується в середовищі, що містить одну або більше зв'язаних змінних.
	Під час виконання, підпрограма має доступ до цих змінних.

	Застосування замикань асоціюється з функціональним програмуванням.
	Такі конструкції, як об'єкти в інших мовах програмування,
	в функціональному програмуванні можуть моделюватись із допомогою замикань.

	В деяких мовах програмування замикання створюється для підпрограм,
	що визначаються всередині інших підпрограм, і внутрішня підпрограма
	має доступ до локальних змінних зовнішньої підпрограми.
	Під час виконання, коли обчислюється зовнішня підпрограма,
	утворюється замикання, до якого потрапляє код внутрішньої підпрограми,
	та посилання на ті змінні зовнішньої підпрограми,
	що використовуються у внутрішній підпрограмі.

	Посилання на змінні зовнішньої підпрограми залишаються дійсними всередині
	вкладеної внутрішньої підпрограми до тих пір, поки існує ця вкладена підпрограма,
	навіть коли зовнішня підпрограма закінчила виконання і вийшла з області видимості.
	*/

	// https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D0%B8%D0%BA%D0%B0%D0%BD%D0%BD%D1%8F_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)

	// Всі функції в JavaScript це замикання, коли задається функція — задається замикання.
	// Так що замикання створюється при визначенні функції.
	// Але треба розуміти різницю між створенням замикання і створенням нового scope-об'єкту:
	// замикання[1] (функція + посилання на поточний ланцюжок scope-об'єктів)
	// створюється при визначенні функції, але новий scope-об'єкт створюється
	// (і використовується для модифікації ланцюжка scope-об'єктів замикання) при виклику функції.

	// Ще один приклад замикання, з реального життя:
	// 1. Петро подає на британську Візу у спецЦентрУКиєві -> МВСБританії(анкетаПетра)
	// 2. Петро отримує відповідь від МВСБританії(): "Ваша заявка розглянута.
	// Результат надіслано листом до спецЦентрУКиєві, де ви зможете цей результат взнати.
	// 3. Петро забирає лист у спец. центрі і взнає результат.

	//  У вигляді коду:

	var traveller = {
		name: 'Oles',
		hasUKVisa: false,
		hasBusinessPartnerInUK: true,
		hasNecessaryDocs: true
	};

	// Closure Function
	function makeVisaDecision(traveller) {
		var decision = 'rejected';
		if (traveller.hasBusinessPartnerInUK && !traveller.hasUKVisa) {
			decision = 'approved';
		}
		// Internal Function
		return function deployTheDecision() {
			return decision;
		}
	}

	// Apply For A Visa:
	var myVisaDecisionLetter = makeVisaDecision(traveller);
	// Reveal the decision:
	var myVisaDecision = myVisaDecisionLetter();

	console.log(traveller.name + '`s Visa is ' + myVisaDecision);

	//
	// Ще приклад замикання
	//

	function counter() {
		var count = 0;
		var internalFunction = function () {
			console.log(count++);
		}
		return internalFunction;
	}

	// Замикання:
	var iterator = counter();

	iterator();
	iterator();
	iterator();
	iterator();
	iterator();
	iterator();

	// Q: Чи використовують більше ніж 1 рівень вкладеності замикань?
	// A: Так, але розумно, щоб не заплутати код занадто сильно

	// Приклад

	function counterLevel1() {
		var cLevel1 = 0;
		var iteratorLevel1 = function () {
			var cLevel2 = 0;
			console.log(cLevel1++);
			var iteratorLevel2 = function () {
				console.log(cLevel1++, cLevel2++);
			}
			return iteratorLevel2;
		}
		return iteratorLevel1;
	}

	var iLevel1 = counterLevel1(); // === iteratorLevel1;

	var iLevel2Instance1 = iLevel1(); // === iteratorLevel1 - Instance 1;
	var iLevel2Instance2 = iLevel1(); // === iteratorLevel2 - Instance 2;
	var iLevel2Instance3 = iLevel1(); // === iteratorLevel3 - Instance 3;

	iLevel2Instance1();
	iLevel2Instance1();
	iLevel2Instance1();
	iLevel2Instance2();
	iLevel2Instance1();



	//
	// Анонімні функції
	//

	// Not anonymous:
	// Оголошена іменована функція
	function myNamedFunction() {}

	// anonymous:
	// функція-вираз, що не має ім'я
	var myNamedFunction = function () {}

	//
	// IIFE - Функція, що викликається безпосредньо після оголошення:
	// 
	// An immediately-invoked function expression (or IIFE, pronounced "iffy"[1])
	// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
	//

	// (function () {})();

	// (function () {
	// 	// All your code goes here:
	// 	console.log(this)
	// })();

	/*
	 * Почитати про функції:
	 * http://eloquentjavascript.net/03_functions.html
	 */



	// 
	// Домашня робота
	//

	console.log('\nTask 07.01');
	console.log('\n\t Please implement this task');

	// Points: 1
	// Чи є замиканнями обидві наведені нижче функції? Чому?
	function func1() {
		var var1;
	}

	function func1() {
		var var1;
		return function func1InternalFunc() {}
	}

	// TODO: дай відповідь тут:

	console.log('\nTask 07.02');
	console.log('\n\t Please implement this task');

	// Points: 1
	// Напиши функцію-замикання -- будь-яку.
	// TODO: пиши код тут:

	function sillyClosure() {
		return this;
	}

	console.log(sillyClosure())

	console.log('\nTask 07.03');
	console.log('\n\t Please implement this task');

	// Points: 2
	// Є замикання iAmClosure із внутрішньою змінною iAmEnclosed.
	// Як можна отримати доступ до цієї змінної?
	function iAmClosure() {
		var iAmEnclosed = 'secret';
		return false;
	}

	// TODO: пиши відповідь словами тут:
	// WRONG 1:
	function iAmClosureTwo() {
		var iAmEnclosed = 'secret';
		return iAmEnclosed; // 'secret'
	}

	console.log(iAmClosureTwo()) // 'secret'

	// WRONG 2:
	function iAmClosureThree() {
		var iAmEnclosed = {
			property: 'secret',
			propertyAlso: 'also secret'
		};
		return iAmEnclosed;
	}
	// [[scope]] - створюється щоразу при виконанні функції
	var disclosedInternal = iAmClosureThree();

	// [[scope]] - створюється щоразу при виконанні функції
	var brokenDisclosedInternal = iAmClosureThree();
	// var brokenDisclosedInternal = disclosedInternal;

	// READ
	console.log(disclosedInternal);
	console.log(brokenDisclosedInternal);

	// WRITE -- OVERWRITTEN OBJECT
	// BAD BAD BAD
	disclosedInternal.property = 'secret2';

	console.log(disclosedInternal);
	console.log(brokenDisclosedInternal);



	console.log('\nTask 07.04');
	console.log('\n\t Please implement this task');

	// Points: 2
	// Напиши функцію, до внутрішньої змінної якої можна
	// отримати доступ через внутрішню функцію,
	// що повертається як функція-замикання.
	// TODO: пиши тут:

	function iAmClosureFour() {
		var iAmEnclosed = {
			property: 'secret',
			propertyAlso: 'also secret'
		};

		function accessEnclosed() {
			return iAmEnclosed
		}

		return accessEnclosed;
	}

	var accessEnclosed = iAmClosureFour();
	var disclosedInternalFour = accessEnclosed();

})();
// Завершення глобальної анонімної функції