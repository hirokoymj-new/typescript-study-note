"use strict";
var add = function (a, b, showResult, phrase) {
    var result = a + b;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
var num1 = 5;
var num2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
var result = add(num1, num2, printResult, resultPhrase);
var helloWorld;
helloWorld = "hello World";
console.log(helloWorld);
