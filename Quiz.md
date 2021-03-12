# Quiz

Q1:

```js
const add = (a, b) => {
  return a + b;
};
```

A1:

```js
const add = (a: number, b: number) => {
  return a + b;
};
```

<hr />

Q2:

```js
let helloWorld = "hello World!";
```

A2:

```js
let helloWorld: string;
helloWorld = "hello World";
```

<hr />

Q3

```js
// Define Typescript
myArray = ["mon", "tue", "wed"];

// Define Typescript
months = [1, 2, 3, 4];

// Define Typescript
anyMonths = ["jan", 2, 3, "April"];
```

A3:

```js
let myArray: string[];
myArray = ["mon", "tue", "wed"];

let months: number[];
// months = [1, 2, 3, 4, "december"]; - ERROR
months = [1, 2, 3, 4];

let anyMonths: any[];
anyMonths = ["jan", 2, 3, "April"];
```

<hr />

Q4: What is tuple type?

A4:

```text
Fixed-length Array
```

```js
const person: {
  name: string,
  age: number,
  hobbies: string[] role: [number, string], //!!!Tuple - A special array with exactly two elements!!! - FIXED-LENGTH,

} = {
  name: "hiroko",
  age: 30,
  hobbies: ["Sport", "Cooking", "Watch TV"],
  role: [2, "author"], // Tuple //組
};
```

<hr />

Q5:
Replace below to use Typescript Enum

```js
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
```

A5:

```js
enum Role {
  ADMIN = 100,
  READ_ONLY = "READ_ONLY",
  AUTHOR = 300,
}
```

<hr />

Q6 - Literal Type:

- Use literal type for resultConversation params

```js
const combine = (
  a: string | number,
  b: string | nimber,
  resultConversion: //Use literal type here!!
) => {};

console.log(combine(30, 26, "as-number")); //--- ERROR!! missing r
console.log(combine("Max", "Ana", "as-text"));
```

A6:

```js
const combine = (
  a: string | number,
  b: string | nimber,
  resultConversion: "as-number" | "as-text"
) => {};
```

<hr />

Q7 - Custom Type:

```js
const combine = (
  a: string | number, // Create custom type
  b: string | nimber, // Create custom type
  resultConversion: "as-number" | "as-text"
) => {};
```

A7:

```js
type CombineParam = number | string;
type ResultParam = "as-number" | "as-text";

const combine = (
  a: CombineParam,
  b: CombineParam,
  resultConversion: ResultParam
) => {};
```

<hr />

Q8: Create User type and simplify below functions.

```js
const greet = (user: { name: string, age: number }) => {
  console.log("Hi, I am " + user.name);
};

const isOlder = (user: { name: string, age: number }, checkAge: number) => {
  return checkAge > user.age;
};
```

A8:

```js
type User = { name: string, age: number };
const u1: User = { name: "Hiroko", age: 35 };
const greet = (user: User) => {
  console.log("Hi, I am " + user.name);
};

const isOlder = (user: User, checkAge: number) => {
  return checkAge > user.age;
};
greet(u1); //Hi, I am Hiroko
isOlder(u1, 25); //older
```

<hr />

<!--
Q4:
A4:
<hr />
-->
