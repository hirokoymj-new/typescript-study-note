"use strict";
var combine = function (a, b, resultConversion) {
    var result = typeof a === "number" &&
        typeof b === "number" &&
        resultConversion === "as-number"
        ? a + b
        : a.toString() + b.toString();
    return result;
};
console.log(combine("Max", "Ana", "as-text"));
var u1 = { name: "Hiroko", age: 30 };
console.log(u1);
var greet = function (user) {
    console.log("Hi, I am " + user.name);
};
var isOlder = function (user, checkAge) {
    var reuslt = user.age > checkAge ? "older" : "younger";
    console.log(reuslt);
};
greet(u1);
isOlder(u1, 25);
var greet1 = function (user) {
    console.log("Hi, I am " + user.name);
};
var isOlder1 = function (user, checkAge) {
    return checkAge > user.age;
};
