/**
 * Вивчення JavaScript. Урок 9. Шаблони
 *  Object Creation Patterns
 *  - Namespace Pattern
 *  - Private Properties and Methods
 *  - Module Pattern
 *  Design Patterns
 *  - Singleton
 *  - Factory
 * 
 *  node src/app/lessons/09/l-09.js
 */

'use strict';

(function () {

    // 
    // Шаблони створення об'єктів
    //

    // Створення об'єктів в JavaScript виконується досить просто - для цього
    // достатньо скористатися літералом об'єкта або викликати функцію-конструктор.
    // Ці шаблони допоможуть вам організувати і структурувати програмний код в додатках
    // і послабити вплив глобальних змінних.
    // Далі розглянуто кілька прийомів, використовуваних при створенні об'єктів.

    // 
    // Шаблон "Простір імен"
    // 

    // Простори імен допомагають зменшити кількість глобальних змінних, необхідних нашим програмам, 
    // і одночасно уникнути конфліктів імен та надмірного вживання префіксів.

    // Замість того, щоб засмічувати глобальний простір імен великою кількістю функцій, об'єктів та інших змінних, 
    // можна створити один (в ідеалі тільки один) глобальний об'єкт, який буде служити простором імен для програми або бібліотеки.

    // Без цього шаблону код є небезпечним - наприклад, тут JSQA_APP перепише існуючий JSQA_APP:

    let JSQA_APP = {};
    JSQA_APP.someMethod = function () { /*...*/ };
    JSQA_APP.var_a = 1;
    JSQA_APP.modules = {};
    JSQA_APP.modules.someChildModule = {};

    // Універсальна функція для створення простору імен:

    JSQA_APP = JSQA_APP || {};
    JSQA_APP.namespace = function (ns_string) {
        let parts = ns_string.split('.');
        let parent = JSQA_APP;
        if (parts[0] === "JSQA_APP") parts = parts.slice(1);
        for (let i = 0; i < parts.length; i++) {
            if (typeof parent[parts[i]] === 'undefined') parent[parts[i]] = {};
            parent = parent[parts[i]];
        }
        return parent;
    };

    // Простий приклад використання:

    const module2 = JSQA_APP.namespace('JSQA_APP.modules.module2');
    JSQA_APP.namespace('modules.module51');


    // 
    // Приватні властивості і методи
    //

    // В JavaScript немає спеціальних засобів оголошення приватних (private), захищених (protected)
    // або загальнодоступних (public) властивостей та методів. Всі члени об'єктів в є загальнодоступними.

    // Щоб забезпечити приховування даних, їх необхідно обгорнути функцією. 
    // Так, в разі літералів об'єктів замикання можна створити за допомогою додаткової анонімної функції, що викликається негайно.

    const myobj = (function () {
        const myPrivate = "some text";
        return { // public 
            getPrivate: function () {
                return myPrivate;
            }
        };
    }());
    myobj.getPrivate(); // some text


    // 
    // Шаблон «модуль»
    // 

    // Шаблон «модуль» набув широкого поширення завдяки можливості структурувати і організувати програмний код 
    // в міру збільшення його обсягу.

    const myNamespace = (function () {
        let myPrivateVar, myPrivateMethod;
        // A private counter variable 
        myPrivateVar = 0;
        // A private function which logs any arguments 
        myPrivateMethod = function (foo) {
            console.log(foo);
        };
        return {
            // A public variable 
            myPublicVar: "foo",
            // A public function utilizing privates 
            myPublicFunction: function (bar) {
                // Increment our private counter 
                myPrivateVar++;
                // Call our private method using bar 
                myPrivateMethod(bar);
            }
        };
    })();

    // 
    // Шаблони проектування
    // 

    // Книга: Дизайн-патерни - просто, як двері Андрія Будая
    // https://sites.google.com/site/designpatternseasy/

    // 
    // The Singleton Pattern
    // 

    // Суть шаблону єдиного об'єкта полягає в тому, щоб забезпечити можливість створити тільки один екземпляр певного класу. 
    // Це означає, що при спробі створити другий примірник того ж класу ви зувати програма повинна отримати об'єкт, 
    // створений при першій спробі.

    // Застосування: конфіг, в якому зберігаються настройки всієї програми, звертатися до нього необхідно з різних модулів додатку.

    const mySingleton = (function () {
        // Instance stores a reference to the Singleton 
        let instance;

        function init() {
            // Singleton 
            // Private methods and variables 
            function privateMethod() {
                console.log("I am private");
            }
            const privateVariable = "Im also private";
            const privateRandomNumber = Math.random();
            return {
                // Public methods and variables 
                publicMethod: function () {
                    console.log("The public can see me!");
                },
                publicProperty: "I am also public",
                getRandomNumber: function () {
                    return privateRandomNumber;
                }
            };
        };
        return {
            // Get the Singleton instance if one exists or create one if it doesn't 
            getInstance: function () {
                if (!instance) {
                    instance = init();
                }
                return instance;
            }
        };
    })();

    const singleA = mySingleton.getInstance();
    const singleB = mySingleton.getInstance();
    console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true


    // 
    // Factory
    //

    // Призначення фабрики в тому, щоб створювати об'єкти.
    // Цей шаблон зазвичай реалізується у вигляді класів або у вигляді статичних методів класів.

    // Виконання повторюваних операцій, необхідних при створенні схожих об'єктів
    // Запропонувати користувачам фабрики спосіб створення об'єктів без необхідності знати їх тип (клас) на етапі компіляції.
    // Об'єкти, які створюються фабричним методом (або класом), зазвичай успадковують один і той же батьківський об'єкт;
    // вони є підкласами, що реалізують спеціалізовані функціональні можливості. Іноді спільним предком є той же клас, 
    // який містить фабричний метод.

    // Застосування: Створення об'єктів, що мають однаковий інтерфейс. Наприклад, фабрика, яка створює об'єкти типу Car,
    // що мають однакові властивості color, model, carBody etc.

    // Далі буде...

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

    // 
    // Домашня робота
    //

    console.h1('Lesson 09 - Homework');

    console.h2('Task 09.01');
    console.log('Please implement this task');
    // Points: 1
    // Вище у цьому файлі за допомогою функції JSQA_APP.namespace() глобальний об'єкт JSQA_APP наповнено внутрішніми просторами імен
    // Виведи у консоль значення об'єкта JSQA_APP і проаналізуй побачене. Чи розумієш ти, як утворилася такка структура?

    console.h2('Task 09.02');
    console.log('Please implement this task');
    // Points: 2
    // За допомогою вже згаданого методу JSQA_APP.namespace() створи новий модуль 'mainModule' в JSQA_APP за таким шляхом:
    // JSQA_APP.modules.mainModule
    // Знову виведи у консоль значення об'єкта JSQA_APP і переконайся, що новий модуль з'явився у об'єкті
    // Tip: для зручності і краси, можна виводити так: 
    // console.log(JSON.stringify(JSQA_APP, null, '  '));

    console.h2('Task 09.03');
    console.log('Please implement this task');
    // Points: 3
    // Користуючись прикладом шаблону "Приватні властивості і методи" вище, створи новий об'єкт student з приватною властивіcтю id,
    // що буде доступною тільки для читання через публічний метод getId()

    console.h2('Task 09.04');
    console.log('Please implement this task');
    // Points: 4
    // Користуючись прикладом шаблону "Модуль" вище, додай до об'єкта student приватний метод analyzeHomeworkTask(homework_id),
    // що буде доступний через публічний метод doHomework(homework_id)

    console.h1('Lesson 09 - Homework End');

})();