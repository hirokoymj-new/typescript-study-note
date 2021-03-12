"use strict";
var dummyTest = function (a1, a2) {
    console.log(a1 + a2);
    return a1 + a2;
};
var dummyTest2 = function (a1, a2) {
    console.log(a1.toString() + a2.toString());
    return a1.toString() + a2.toString();
};
var dummyTest3 = function (a1, a2) {
    console.log(a1.toString() + a2.toString());
    return;
};
dummyTest(1, 1);
dummyTest2(3, 4);
dummyTest3(5, 5);
var userInput;
var userName;
userInput = 5;
userName = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, code: code };
};
generateError("cannot save data", 500);
