# Install Typescript

```js
npm install -g typescript
tsc --version

// hiroko@owners-MacBook-Pro learn-typescript % tsc --version
// Version 4.2.3
```

# Type Casing

- Important: It is **string** and **number** (etc.), NOT String, Number etc.
- The core primitive types in TypeScript are **all lowercase**!

**Example 1**

```js
const add = (a: number, b: number, showResult: boolean, phrase: string) => {
  const result = a + b;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
};

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(num1, num2, printResult, resultPhrase);
```

**Example 2**

```js
const person: { name: string, age: number } = {
  name: "hiroko",
  age: 20,
};
```

**Example 3**

```js
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}

{
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
}
```

**Example 4 - Array**

```js
let myArray: string[];
myArray = ["mon", "tue", "wed"];

let months: number[];
// months = [1, 2, 3, 4, "december"]; - ERROR
months = [1, 2, 3, 4];

let anyMonths: any[];
anyMonths = ["jan", 2, 3, "April"];
```

**Example 4 - Tuple**

- A special array of elements
- `person.role` is an exactly two elements.
- `push()` is still available.

```js
const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string], //!!!Tuple - A special array with exactly two elements!!!
} = {
  name: "hiroko",
  age: 30,
  hobbies: ["Sport", "Cooking", "Watch TV"],
  role: [2, "author"], // Tuple //組
};

person.role.push("admin"); //　OK
// person.role[1] = 10; //--- ERROR
```

**Core Types**
number,
string,
boolean,
object
Array,
Enum
any

**Example 5 - Literal Types**

- Literal (一語一句ずつ)

```js
const combine = (
  a: number | string,
  b: number | string,
  // resultConversion: "as-number" | "as-text"
  resultConversation: string
) => {};

console.log(combine(30, 26, "as-number")); //--- ERROR!! missing r
console.log(combine("Max", "Ana", "as-text"));
```

**Example 6 - Custom Type**

```js
const combine = (
  a: CombineParam,
  b: CombineParam,
  resultConversion: ResultParam
) => {};
```

**Example 6 - Custom Type Object**

```js
type User = { name: string, age: number };
const u1: User = { name: "Hiroko", age: 30 }; // this works!
console.log(u1);
```

**Example 7 - Returning Type**

```js

```

# Section 3 The TypeScript Compiler

- watch mode

```js
tsc app.ts --watch
```

- watch mode exit

  ```js
  ctrl + c;
  ```

- Generate tsconfig.json

```js
tsc --init
```

- Compile all ts files

```js
tsc;
```

- watch mode with `tsc`

```js
tsc --watch
```

- tsconfig.json

```js
  "exclude": ["node_modules"],
  "include": ["app.ts", "analytics.ts"]
```

### 43. Strict Mode in tsconfig.js

- strict mode in tsconfig.js

```js
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": true, // variable is OK but for parameters it is NOT OK
```

```js
let result;

const sendAnalytics = (data) => {
  // ERROR!! - parameters needs to type.
  console.log(data);
  result = 5; // variable is OK
};
```

```js
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": false,
```

```js
// Both parameter and variable are OK!
const sendAnalytics = (data) => {
  console.log(data);
  result = 5;
};
```

### Classes and Interfaces

- Classes are blueprints for JavaScript objects.

```js
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department("accounting");
```

### private vs protected

- Private methods/members are accessible only from inside the class.
- Protected methods/members are accessible from inside the class and extending class as well.

```js
class A {
    private x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
}

class B extends A {
    multiply(): number {
        return this.x * this.y;
    }
}
```

> Notice that in class A there's access to both (private) this.x and (protected) this.y.
> But in class B there's only access to this.y and this.x has this error:

> Property 'x' is private and only accessible within class A

### Getters / Setters

```js
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
const myClass = new C();
myClass.length = 20;
console.log(`len: ${myClass.length}`);
```

### Static method, static member

- Math.pow()
- Math.max()
- statoc method is the method that can access directly on the class itself.

```js
class Department {
  static ficscalYear = 2020;

  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name, fiscalYear: Department.ficscalYear };
  }
}

const employee1 = Department.createEmployee("Hiroko");
console.log(employee1);
console.log(Department.ficscalYear);
```

### abstract Classes

- Cannot create an instance of an abstract class.

```js
abstract class Base {
  abstract getName(): string;

  printName() {
    console.log("Hello, " + this.getName());
  }
}

const b = new Base();
//Cannot create an instance of an abstract class.
```

### abstract Method

- abstract method has to be implemented by inheritance class.

```js
abstract class Department {
  abstract describe(this: Department): void;
}
```

### Singleton Class

- private constructor()

```js
class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "d2");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}
```

- Call a singleton class

```js
// const accounting = new AccoutingDepartment("d2", []); // NEW to create instance
const accounting = AccountingDepartment.getInstance(); // getInstance() to create instance
```

### Summary

- public - anywhere
- private - inside class ONLY
- protected - base class and subclasses ONLY. can NOT access on instance.
<hr />

- static method - can access directly
- abstract method - MUST override into subclasses
- regular method - with **extends** keyword, methods can override in subclasses.
<hr />

- abstract class - can use directly. Do Not **new**. Math.pow()
- singleton class - private constructor, private statice instance: Accounting Department, getInstance()

## References

**TypeScript for JavaScript Programmers**

- https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- https://www.udemy.com/course/understanding-typescript/learn/lecture/16888058?start=15#overview
- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

- [TypeScript - Difference between Private and Protected Variables](https://stackoverflow.com/questions/36843357/typescript-difference-between-private-and-protected-variables)

https://www.typescriptlang.org/docs/handbook/2/objects.html
