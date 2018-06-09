/**
 * Вивчення JavaScript. Урок 8.
 *  - Рекурсія
 *  - Callback
 * 	- Стрілочні функції (Arrow Functions)
 *  - DOM, BOM
 *  - JSON
 * 
 *  node src/app/lessons/08/l-08.js
 */

'use strict';

// Загортаємо увесь код в анонімну IIFE-функцію, що викликає сама себе:

(function () {

    // 
    // Closures - замикання
    // 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Closures

    // Closures are functions that refer to independent (free) variables (variables
    // that are used locally, but defined in an enclosing scope). In other words, these
    // functions 'remember' the environment in which they were created.

    // Замикання є функціями, які посилаються на незалежні (вільні) змінні (тобто
    // змінні, які використовуються локально, але визначені в рамках замикаючої області
    // видимости). Іншими словами, ці функції "пам'ятають" навколишнє середовище, в якому
    // вони були створені.    

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

    console.h1('Memoization:')

    // Мемоїзація - запам'ятовування

    function calculation(x, y) {
        var startTime = new Date().getTime();

        var key = x.toString() + "|" + y.toString();
        var result = 0;
        if (!calculation.cache[key]) {
            for (var i = 0; i < y; ++i) result += x;
            console.log('\tcalculation for', key)
            calculation.cache[key] = result;
        }
        console.log('\time of calculation:' + (new Date().getTime() - startTime));
        return calculation.cache[key];
    }
    calculation.cache = {};

    console.log('calc', calculation(1, 1));
    console.log('calc', calculation(2, 2));
    console.log('calc', calculation(2, 2000));
    console.log('calc', calculation(2, 2000));
    console.log('calc', calculation(2, 2000));
    console.log('calc', calculation(2, 2000));

    console.h1('Arrow func')

    // Стрілочні функції

    const arrowFunc = a => a * 2;
    const nonArrowF = function (a) {
        return a * 2;
    }

    console.log(arrowFunc(2));
    console.log(nonArrowF(2));

    //
    // Рекурсія - Recursion
    //

    // Рекурсія - це коли функція викликає сама себе
    // І має умови виходу з рекурсіі

    function power(base, exponent) {
        if (exponent == 0) {
            return 1;
        } else {
            return base * power(base, exponent - 1);
        }
    }

    console.log(power(2, 3)); // STEP 0: 8

    // STEP 1: base: 2, exponent: 3 => 2 * 4; // 4 is result from step2()
    // STEP 2: base: 2, exponent: 2 => 2 * 2; // 2 is result from step3()
    // STEP 3: base: 2, exponent: 1 => 2 * 1; // 1 is result from step4()
    // STEP 4: base: 2, exponent: 0 => 1

    // 2! = 1 * 2 = 2
    // 3! = 1 * 2 * 3 = 6
    // 4! = 1 * 2 * 3 * 4 = 24
    // 5! = 1 * 2 * 3 * 4 * 5 = 120

    console.h1('Recursion - Factorial')

    function factorial(n) {
        if (n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    // Arrow
    let f = n => n === 1 ? 1 : n * f(n - 1);

    console.log(f(2));
    console.log(f(3));
    console.log(f(4));

    console.h2('No Recursion - Factorial')

    function factorialN(n) {
        let result = 1;
        for (let c = 1; c <= n; c++) {
            result *= c;
        }
        return result;
    }

    // Arrow
    let fn = n => {
        let result = 1;
        for (let c = 1; c <= n; c++) {
            result *= c;
        }
        return result;
    }

    console.log(fn(2));
    console.log(fn(3));
    console.log(fn(4));



    // More on recursion:
    // http://natureofcode.com/book/chapter-8-fractals/
    // https://www.youtube.com/watch?v=s3Facu6ZVeA

    //
    // Callback - функція
    //

    // 1. Повертаємо змінну із замикання без колбеку:

    function counter() {
        var count = 0;
        var internalFunction = function () {
            console.log(count++);
        }
        return internalFunction;
    }

    // 2. Повертаємо змінну із замикання через колбек:

    console.h1('Повертаємо змінну із замикання через колбек:')

    function loadData(success, fail) {
        //var result = AJAX.load('http://gl.org/userData');
        var result = true;

        if (result !== undefined) {
            success(result, 'LOADED DATA');
        } else {
            fail(result, 'LOAD ERROR');
        }
    }

    function onSuccess(result, response) {
        console.log('load successful: ' + result + ', ' + response);
    };

    function onError(result, error) {
        console.log('load failed: ' + result + ', ' + error);
    }

    loadData(onSuccess, onError);





    // ================================================================


    //
    // JSON - JavaScript Object Notation
    //

    // Текстовий формат обміну даними, заснований на JavaScript і зазвичай вживаний
    // саме з цією мовою. Як і багато інших текстових форматів,
    // JSON легко читається людьми. Формат JSON був розроблений Дугласом Крокфордом.

    // У сучасних браузерах є методи, що роблять операції з JSON простими і комфортними.

    // Дані у форматі JSON (RFC 4627) є JavaScript-об'єктом {...} або масивом [...],
    // що містять значення одного з типів:

    // - рядки в подвійних лапках,
    // - число,
    // - логічне значення true/false,
    // - null.

    // Об'єкти JSON відрізняються від звичайних JavaScript-об'єктів більш строгими
    // вимогами до рядків - вони повинні бути саме в подвійних лапках.

    // Як перевірити JSON на правильність
    // Можна завжди перевірити валідність JSON на сервісі JSONLint. Наприклад,
    // ось зразки валідного JSON:

    // JSON як об'єкт:
    /* 
    {
         "a": "a"
    }

    // JSON як масив:
    [
        2,
        3,
        5,
        7
    ]

    [
        "a",
        "b",
        "c",
        "d"
    ]

    // Вкладені об'єкти та масиви:
    [
        "a",
        "b",
        [
            1,
            2,
            3
        ],
        {
            "key 1": "value 1",
            "key 2": "value 2"
        }
    ]
    */
    // Приклад невалідного JSON:

    // Невалідний, тому що не починається з символа об'єкту {} або масиву []
    // 1

    // JSON як об'єкт - але невалідний, тому що ключ 1 не взятий у лапки:
    // {
    //     1: "one"
    // }


    //
    // Методи JSON.stringify і JSON.parse
    //

    // Метод JSON.stringify (value, props, space) перетворює значення value в JSON-рядок.
    // Це називається серіалізацією об'єкту і використовується для того, щоб передавати об'єкти,
    // зберігаючи їх структуру.

    // Підтримується у всіх браузерах, включаючи IE8+. Для старіших IE є бібліотека JSON-js,
    // що додає аналогічну функціональність.

    // У другому параметрі props методу JSON.stringify можна вказати масив властивостей,
    // що підлягають серіалізації.

    // Третій параметр - space, використвується для форматування рядка.

    // Якщо space є числом, то рівні вкладеності в JSON показуються вказаною кількістю прогалин,
    // а якщо рядком - то вставляється цей рядок.

    console.h1('Методи JSON.stringify і JSON.parse')

    var user = {
        name: 'Taras',
        surname: 'S',
        job: 'Poet'
    };

    console.log(JSON.stringify(user));
    // Дасть:
    // "{"name":"Taras","surname":"S","job":"Poet"}"

    console.log(JSON.stringify(user, ['name']));

    // Дасть:
    // "{"name":"Taras"}"

    var userString = JSON.stringify(user, null, 2);

    console.log(userString); // наглядно серіалізовані вибрані властивості об'єкту:

    // Дасть:
    // "{
    //     "name": "Taras"
    // }"

    //
    // Метод JSON.parse (str, replacer) читає об'єкт-значення з рядка str.
    //

    // Це називається "десеріалізація" і використовується для того, щоб відновлювати
    // значення і структуру (!) об'єкту з рядка.

    var objAgain = JSON.parse(userString);

    console.logObj = function (objectToLog) {
        for (var propName in objectToLog) {
            if (objectToLog.hasOwnProperty(propName)) {
                console.log('Prop: ' + propName + ' = ' + objectToLog[propName]);
            }
        }
    };

    let u = new Object();
    u.hello = 'World';
    console.logObj(u);

    //
    // DOM та BOM
    //

    //
    // Об'єктна модель документу (DOM) - Document Object Model
    // Доступна через document. Дає доступ до вмісту сторінки.
    //

    // Об'єктна модель браузера (BOM)
    // BOM - це об'єкти для роботи з чим завгодно, крім документа. Доступ до фреймів,
    // запити до сервера, функції alert / confirm / prompt - все це BOM.

    // SOM - Shell Object Model
    // Core: {
    // 	Print: 'function (argument) {
    // 		[native code]
    // 	}',
    // 	Exit: null
    // }

    // navigator: платформа і браузер

    // Об'єкт navigator містить загальну інформацію про браузері і операційну систему.

    // navigator.userAgent - містить інформацію про браузер.
    // navigator.platform - містить інформацію про платформу, дозволяє розрізняти
    // Windows / Linux / Mac і т.п.

    //
    // screen
    //

    //
    // Об'єкт screen містить загальну інформацію про екран, включаючи його дозвіл,
    // кольоровість і т.п. Воно може бути корисно для визначення, що код виконується
    // на мобільному пристрої з маленьким дозволом. Поточне дозвіл екрана відвідувача
    // по горизонталі / вертикалі знаходиться в screen.width / screen.height.
    //

    // Об'єкт location надає інформацію про поточний URL і дозволяє JavaScript
    // перенаправити відвідувача на інший URL. Значним цієї властивості є об'єкт типу
    // Location.

    //
    // frames
    //

    // Колекція, що містить фрейми і іфрейми. Можна звертатися до них як за номером,
    // так і по імені. У frames містяться window-об'єкти дочірніх фреймів.

    //
    // history
    //

    // Об'єкт history дозволяє міняти URL без перезавантаження сторінки
    // (в межах того ж домена) за допомогою History API, а також перенаправляти
    // відвідувача назад-вперед по історії.

    // Об'єкт history не надає можливості читати історію відвідувань.
    // Можна відправити відвідувача назад викликом history.back() або вперед
    // викликом history.forward(), але самі адреси браузер не дає з міркувань безпеки.

    // 
    // Домашня робота
    //

    console.h1('Lesson 08 - Homework');

    console.log('\nTask 08.01');
    // Points: 2
    // Напиши функцію useAnonymousCallback, що приймає параметр callback, і виклич її, 
    // передавши анонімну функцію в якості параметра.
    // TODO: пиши тут:

    console.log('Please implement this task');

    console.log('\nTask 08.02');
    // Points: 2
    // Напиши функцію useAnonymousCallback, що приймає параметр callback, і виклич її, 
    // передавши їй в якості параметра іменовану функцію.

    console.log('Please implement this task');
    

    console.log('\nTask 08.03');
    // Points: 3
    // Напиши функцію workingCallback, що приймає у якості параметра іменовану функцію
    // і викликає її, передаючи їй у якості параметра свою внутрішню змінну enclosed.
    // Напиши код, що використовує цю конструкцію для того, щоб вивести у консоль
    // значення змінної enclosed через замикання.
    // TODO: пиши тут:

    console.log('Please implement this task');    

    console.h1('Lesson 08 - Homework End');

})();