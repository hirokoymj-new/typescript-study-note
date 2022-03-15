# TypeScript

## Variable definition

```js
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a"];
```

## Enum

- Enums allow a developer to define a set of named constants.
- [Enum](https://www.typescriptlang.org/docs/handbook/enums.html)

```js
enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let backgroundColor = Color.Red;
```

## Function with return values

**Example 1:**

```js
const sum = (a: number, b: number): number => a + b;
```

**Example 2**

```js
export interface IChartMappedData {
  chartData: number[];
  chartLabels: string[];
  chartUpdated: string;
}

const mappedData = (): IChartMappedData => {
  const selecteddata = data.map((d) => {
    return { state: d.state, cases: d.cases, updated: d.updated };
  });

  const chartLabels = selecteddata.map((d) => d.state);
  const chartData = selecteddata.map((d) => d.cases);
  const chartUpdated = moment(updated).format("MMMM DD, YYYY");

  return {
    chartLabels,
    chartData,
    chartUpdated,
  };
};
```

## const

- you must not specify any type annotation on the const, and let the compiler infer the type of the constants
- [stackoverflow: How to define string literal union type from constants in Typescript](https://stackoverflow.com/questions/56263200/how-to-define-string-literal-union-type-from-constants-in-typescript)

```js
const myCity = "Los Angeles";
const myNumber = 1;
console.log(typeof myNumber); // number
console.log(typeof myCity); // string
```

## const assertions

- They're constants. They cannot be changed after they've been declared.
- no literal types in that expression should be widened (e.g. no going from "hello" to string)
- object literals get readonly properties
- array literals become readonly tuples
- [const assertions ](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

```js
// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
```

## Union Types

- A union type is a type formed from two or more other types, representing values that may be any one of those types.
- [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

```js
type MyBool = true | false;
type ID = number | string;

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
```

## React - useState

```js
// String
const [county, setCounty] = useState<string>("los angeles");
// Boolean
const [loading, setLoading] = useState<boolean>(false);
// Numbert
const [age, setAge] = useState<number>(0);
// Array
const [statesList, setStatesList] = useState<string[]>([]);
// Object
interface IFormValues {
  us_state: string;
  us_county: string;
}
const [formValues, setFormValues] = useState<IFormValue>({
  us_state: "",
  us_county: "",
});
```

## React - handleChange

```js
const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>
  ) => {
    const newVal = e.target.value as string;
    const name = e.target.name as string;
    setFormValues({ ...formValues, [name]: newVal });
  };
```

## ReturnType<Type>

- [Utility Types: ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)
- ReturnType constructs a type of the return type of the function Type:

**Example 1**

```js
const getUser = () => ({
  name: "John",
  surname: "Doe",
  age: 18,
});

// { name: string; surname: string; age: number; }
type FunctionReturnType = ReturnType<typeof getUser>;
```

**Example 2**

```js
export type TCalculateDiff = ReturnType<typeof calculateDiff>;

export const calculateDiff = (array: number[]) => {
  const result = array.reduce(
    (acc: number[], curr: number, i: number, src: number[]) => {
      if (i !== 0) acc.push(curr - src[i - 1]);
      return acc;
    },
    []
  );
  return result;
};
// How to use "TCalculateDiff"
const ChartView = () => {
  const chartData: TCalculateDiff = calculateDiff(values);
};
```

**Example 3 (Redux)**

```js
const rootReducer = combineReducers({
  form: formReducer,
  counter: countReducer,
  navigation: navigationReducer,
  title: titleReducer,
  theme: themeReducer,
  categoryFilter: categoryFilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
```

## Pick<Type, Keys>

- [Utility Types: Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
- Constructs a type by picking the set of properties Keys from Type.

**Example 1**

```js
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

**Example 2**

```js
export type ICategoryFormData = Pick<ICategory, "name" | "abbr">;
```
