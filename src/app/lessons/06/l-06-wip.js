/*
 Lesson 6 

 node src/app/lessons/06/l-06-wip.js
*/

'use strict';

const glo = 'glo site';

(function () {

    console.log('My module, global glo:', glo);

    function augmentConsole() {

        console.log('My module inner func, global glo:', glo);
        console.log('My module inner func, augmentConsole:', augmentConsole);
    
        const consoleUpdate = {
            h1: function (arg) {
                console.log(`\n\n=== ${arg} ===`);
            },
            h2: function (arg) {
                console.log(`\n\n=== ${arg} ===`);
            },
            s: function () {
                console.log('--------------------------------------');
            }
        };
        // Immutability API:
        Object.assign(console, consoleUpdate);
    }

    augmentConsole();

    console.h1('My first header');
    console.h2('My second header');
    console.s();
    console.log('hello');


    console.h1('Check arguments and use stop-pattern for exit');

    function calcWithCaution(a, b) {
        if (isNaN(a) || isNaN(b)) {
            console.log('not a number:', a, b);
            return -1;
        }
        console.log('arguments:', arguments, arguments.length);

        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args[i] = arguments[i];
        }

        console.log('args:', args, args.length);

        return a * b;
    }

    // console.log(calcWithCaution(2, 10));
    console.log(calcWithCaution(200, 10));

    console.h1('Hoisting');

    // function як вираз

    // Записано:

    // foo; // 'undefined' 
    // foo(); // викличе TypeError: foo is not a function
    // var foo = function() { return 'ololo '}; 
    // foo();

    // Насправді:

    var foo;
    foo; // 'undefined' 
    // foo(); // викличе TypeError: foo is not a function
    foo = function () {
        return 'ololo '
    };
    foo();

    console.h1('Call me back');

    function phoneService(callbackFunction, orderVolume) {
        var i = Math.random();
        const response = i > 0.5 ? 'Yes' : 'No';
        if (typeof callbackFunction === 'function') {
            setTimeout(callbackFunction, orderVolume)
            // callbackFunction(response);
        }
    }

    function clientOne(response) {
        console.log('Client 1 Response:', response);
    }

    function clientTwo(response) {
        console.log('Client 2 Response:', response);
    }

    function callService() {
        phoneService(clientOne, 10);
        phoneService(clientTwo, 30);
    }

    callService();

})();