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
