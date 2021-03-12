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

# TypeScript for JavaScript Programmers

## References

https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.udemy.com/course/understanding-typescript/learn/lecture/16888058?start=15#overview
