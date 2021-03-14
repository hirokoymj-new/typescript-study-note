"use strict";
class A {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get getX() {
        return this.x;
    }
    set setX(value) {
        this.x = value;
    }
    get getY() {
        return this.y;
    }
    set setY(value) {
        this.y = value;
    }
}
const myNewClass = new A(1, 2);
console.log(myNewClass.getX);
console.log(myNewClass.getY);
console.log("---------");
myNewClass.setX = 10;
myNewClass.setY = 20;
console.log(myNewClass.getX);
console.log(myNewClass.getY);
class Base {
    constructor() {
        this.k = 4;
    }
}
class Derived extends Base {
    constructor() {
        super();
        console.log(this.k);
    }
}
class MyInfo {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.name = name;
        this.id = id;
    }
}
