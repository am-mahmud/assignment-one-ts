# Assignment One: TypeScript

এই assignment-এ আমি TypeScript-এর basic থেকে শুরু করে generics, class আর async/await পর্যন্ত **৮টা problem** solve করেছি। সব solution `solutions.ts` ফাইলে আছে।

## Blog Links

1. [Type Narrowing in TypeScript](./type-narrowing.md)
2. [Type vs Interface in TypeScript](./type-vs-interface.md)

## কীভাবে Run করবো

```bash
tsc solution.ts
node solution.js
```

অথবা compile করে run করতে:

```bash
tsc
node solutions.js
```

> Note: `tsc solutions.ts` লিখলে `tsconfig.json` ignore হয়। তাই শুধু `tsc` লিখতে হয়।

---

## Problem 1: `multiplyValue`

**কাজ:** `multiplier` দিলে `value * multiplier`, না দিলে `value * 2`। `0` দিলে result `0` হতে হবে।

```typescript
const multiplyValue = (a: number, b?: number) => {
    if (typeof b === 'undefined') {
        return a * 2;
    } else if (a === 0 || b === 0) {
        return 0;
    } else {
        return a * b;
    }
}
```

**কী শিখেছি**

- `b?: number` মানে `b` optional। না দিলে তার value হয় `undefined`।
- `typeof b === 'undefined'` দিয়ে আমি পরিষ্কারভাবে check করেছি `b` দেওয়া হয়েছে কি না। `if (!b)` লিখলে `0` দিলেও default `2` দিয়ে গুণ হয়ে যেত, কারণ `0` একটা **falsy** value।
- **Bitwise `|` আর logical `||` এক জিনিস না।** Condition-এ সবসময় `||` ব্যবহার করতে হয়।
- **Operator precedence:** `a || b === 0` আসলে `a || (b === 0)`। দুইটা value-ই check করতে চাইলে `a === 0 || b === 0` লিখতে হয়, যেটা আমি করেছি।
- আমার `a === 0 || b === 0` branch টা আসলে না লিখলেও চলত, কারণ `a * b` নিজেই `0` দেয়। কিন্তু এতে code-এর উদ্দেশ্য পরিষ্কার হয়।
- `||` শুধু `0`-কে খালি ধরে। `0` valid value হলে default দেওয়ার জন্য `??` ভালো।

---

## Problem 2: `processInput`

**কাজ:** string হলে trim করে lowercase, number হলে `* 10`, boolean হলে `"Active"` / `"Inactive"`।

```typescript
const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === 'string') {
        return input.trim().toLowerCase();
    } else if (typeof input === 'number') {
        return input * 10;
    } else {
        if (input === true) {
            return 'Active';
        } else {
            return 'Inactive';
        }
    }
}
```

**কী শিখেছি**

- **Union type** (`string | number | boolean`) মানে value এই তিনটার যেকোনো একটা হতে পারে। এখানে `|` হলো type-এর union, bitwise OR না।
- Union type-এ সব method সরাসরি চলে না। `input.trim()` শুধু string-এ চলে। তাই আগে `typeof` দিয়ে check করতে হয়, একে **type narrowing** বলে।
- `if (typeof input === 'string')` block-এর ভেতরে TypeScript জানে `input` একটা string।
- সবশেষে `else if (typeof input === 'boolean')` না লিখে শুধু `else` লিখলে TypeScript বুঝে যায় বাকি থাকা type শুধু `boolean`। আর সব path-এ return থাকে বলে return type `string | number` লিখলে error আসে না।
- Problem-এর requirement ভালো করে পড়তে হয়। এখানে **lowercase** চেয়েছে, তাই `toLowerCase()`, `toUpperCase()` না।
- Parameter আর return, দুই জায়গাতেই type লিখতে হয়েছে: `(input: string | number | boolean): string | number`।

---

## Problem 3: `formatCoordinate`

**কাজ:** `readonly` tuple `[latitude, longitude, locationName]` নিয়ে `"Location: Dhaka (23.81, 90.41)"` ফেরত দেওয়া।

```typescript
const formatCoordinate = (coordinate: readonly [latitude: number, longitude: number, locationName: string]) => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}
```

**কী শিখেছি**

- **Tuple** হলো fixed length আর fixed type-এর array। Position দিয়ে value পড়তে হয়: `[0]`, `[1]`, `[2]`।
- Parameter লেখার নিয়ম সবসময় `name: type`। আমার ক্ষেত্রে `coordinate` হলো নাম, আর `readonly [...]` হলো type। প্রথমে আমি `const formatCoordinate: readonly [...]` লিখেছিলাম, যেটা ভুল, কারণ colon-এর বাম দিকের জিনিসটার type বলা হয়। তাতে মানে দাঁড়াত function নিজেই একটা tuple।
- Tuple-এর ভেতরের `latitude`, `longitude`, `locationName` শুধু **label**। এগুলো variable না, তাই `${latitude}` লেখা যায় না। Value পড়তে `coordinate[0]` লিখতে হয়।
- `readonly` লিখলে function-এর ভেতরে tuple বদলানো যায় না।
- Output format একদম মিলতে হয়: `(23.81, 90.41)`। মাঝখানে comma, dash না। একটা extra চিহ্ন থাকলেও ভুল।
- Number round করা নিষেধ ছিল, তাই `toFixed()` ব্যবহার করিনি।
- Code আরও পরিষ্কার করতে চাইলে destructuring ব্যবহার করা যায়:

```typescript
const [latitude, longitude, locationName] = coordinate;
```

---

## Problem 4: `concatenateArrays`

**কাজ:** একাধিক array নিয়ে একটা array বানানো, যেখানে সব element ক্রমানুসারে থাকবে। Rest parameter আর generic ব্যবহার করতে হবে।

```typescript
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
}
```

**কী শিখেছি**

- **Generic `<T>`** মানে type পরে ঠিক হবে। একই function string array আর number array দুটোর সাথেই কাজ করে। `any` লাগে না।
- `T[]` মানে `T` type-এর array।
- **Spread operator** (`...arr1`) array-র ভেতরের item গুলো খুলে দেয়। `[...arr1, ...arr2]` দিয়ে দুইটা array জোড়া লাগে।
- `arr3 || []` দিয়ে optional parameter না দিলে খালি array ধরা যায়।
- আমার প্রথম চেষ্টায় `arr1`, `arr2`, `arr3?` আলাদা parameter ছিল। এতে শুধু তিনটা array পর্যন্ত কাজ করে, চারটা দিলে error। তাছাড়া problem-এ **rest parameter** ব্যবহার করতে বলা ছিল।
- **Rest parameter** (`...arrays`) যত খুশি argument নিয়ে একটা array বানায়। প্রতিটা argument নিজেই একটা array, তাই type হয় `T[][]` (array-এর array)।
- `.flat()` ভেতরের array গুলো খুলে একটা array বানায়।
- Spread (`...`) যখন function call-এ বা array-র ভেতরে লিখি তখন খোলে, আর parameter-এ লিখলে জড়ো করে (rest)। চিহ্ন এক, কাজ উল্টো।

---

## Problem 5: `getPopularCourses`

**কাজ:** `isPublished` true আর `students >= minStudents` এমন course গুলো নতুন array-তে ফেরত দেওয়া।

```typescript
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

type MinStudents = number;

const getPopularCourses = (courses: Course[], minStudents: MinStudents): Course[] => {
    return courses.filter(course => course.students >= minStudents && course.isPublished);
}
```

**কী শিখেছি**

- **`interface`** দিয়ে object-এর shape (কোন property আছে, কোনটার type কী) ঠিক করা যায়।
- **`type` alias** (`type MinStudents = number`) দিয়ে একটা type-কে নতুন নাম দেওয়া যায়।
- `courses` হলো পুরো **array** (বাক্স), আর `course` হলো তার ভেতরের **একটা item**। প্রথমে আমি `courses.students` লিখেছিলাম, যেটা ভুল, কারণ array-র নিজের `.students` নেই। আগে array-র ভেতরে ঢুকতে হয়।
- **`filter`** প্রতিটা item একটা একটা করে নেয় আর তোমার দেওয়া function-কে দেয়। Function `true` দিলে item থাকে, `false` দিলে বাদ যায়।
- `course => ...` একটা **arrow function**। `course` হলো সেই function-এর parameter, মানে "এখন যে item-টা দেখছি তার নাম"।
- `&&` মানে দুইটা শর্তই সত্য হতে হবে।
- `filter` সবসময় **নতুন array** বানায়, original array বদলায় না। তাই "mutate করা যাবে না" শর্ত আপনা আপনি পূরণ হয়।
- **Return type** (`: Course[]`) লিখলে function-এর ভেতরে ভুল করে অন্য কিছু return করলে TypeScript সাথে সাথে ধরে ফেলে। না লিখলেও চলে, কারণ TypeScript নিজেই বুঝে নেয়।

---

## Problem 6: `pluckValues`

**কাজ:** object-এর array থেকে একটা নির্দিষ্ট key-এর value গুলো আলাদা array-তে বের করা।

```typescript
const pluckValues = <T, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(item => item[key]);
}
```

**কী শিখেছি**

| অংশ | মানে |
|---|---|
| `T` | array-র একটা item-এর type |
| `keyof T` | `T`-এর সব key-এর নাম (যেমন `"id" \| "name" \| "role"`) |
| `K extends keyof T` | `K` অবশ্যই `T`-এর একটা বৈধ key হতে হবে |
| `T[K]` | ওই key-এর value-র type |
| `T[K][]` | সেই value গুলোর array |

- ভুল key দিলে (যেমন `"email"`) TypeScript আগেই error দেখায়।
- `"name"` দিলে result type হয় `string[]`, `"id"` দিলে `number[]`। Type নিজে নিজেই ঠিক হয়ে যায়।
- `map` প্রতিটা item থেকে একটা করে value তুলে নতুন array বানায়।
- Function-এর parameter-এর shape আর call করার ধরন মিলতে হয়। আমার আগের চেষ্টায় `interface` দিয়ে `{ data: T[] }` চাওয়া হয়েছিল, কিন্তু call করেছিলাম সরাসরি array দিয়ে। তাই মিলছিল না। শেষে সরাসরি `T[]` নেওয়া সহজ হয়েছে।
- Interface আর parameter-এর নাম এক রাখলে (দুটোই `items`) পড়তে গুলিয়ে যায়।

---

## Problem 7: `Employee` আর `Manager`

**কাজ:** `Employee` class আর তার subclass `Manager` বানানো।

```typescript
class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
```

**কী শিখেছি**

| Modifier | class-এর ভেতরে | subclass-এ | বাইরে |
|---|---|---|---|
| `private` | হ্যাঁ | না | না |
| `protected` | হ্যাঁ | হ্যাঁ | না |
| `public` (default) | হ্যাঁ | হ্যাঁ | হ্যাঁ |

- `Manager`-এ `this.name` কাজ করে কারণ `name` `protected`। কিন্তু `this.baseSalary` লিখলে error, কারণ সেটা `private`।
- **`extends`** দিয়ে parent class-এর সব কিছু পাওয়া যায়। তাই `manager.getDetails()` ডাকা যায়, যদিও `Manager`-এ লেখা নেই।
- **`super(name, baseSalary)`** parent-এর constructor ডাকে। এটা অবশ্যই `this` ব্যবহার করার **আগে** লিখতে হয়।
- Constructor-এর parameter-এর order সমস্যায় যেভাবে বলা আছে সেভাবেই রাখতে হয়।
- Constructor-এর parameter-এ সরাসরি `protected name: string` লিখলে property declare আর assign একসাথে হয়ে যায়। এটা shortcut, আমি লম্বা ভার্সন লিখেছি বুঝে বুঝে শেখার জন্য।

---

## Problem 8: `validateAgeAsync`

**কাজ:** বয়স ১৮ বা বেশি হলে ১ সেকেন্ড পর `"Access Granted"`, কম হলে **সাথে সাথে** error।

```typescript
const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
};
```

**কী শিখেছি**

- **Promise** মানে "ফলাফল এখনই নেই, পরে পাবে" এই প্রতিশ্রুতি। `resolve` মানে সফল, `reject` মানে ব্যর্থ।
- **সাথে সাথে reject করতে হলে বয়স আগে check করতে হয়**, `setTimeout`-এর আগে। আমার প্রথম চেষ্টায় `if/else` ছিল `setTimeout`-এর ভেতরে, তাই error-ও ১ সেকেন্ড পর আসত।
- `if (age < 18) { reject(...); return; }`-এ `return` থাকায় আলাদা `else` লাগে না। `return` function-কে সেখানেই থামিয়ে দেয়, তাই নিচের `setTimeout` আর চলে না।
- `setTimeout`-এর callback-এর ভেতরে `throw` করলে Promise সেটা ধরতে পারে না। সেখানে `reject` ব্যবহার করতে হয়।
- `new Promise` ব্যবহার করলে `async` keyword লাগে না। আমি আগে `async` আর `new Promise` একসাথে লিখেছিলাম, যেটা অপ্রয়োজনীয়।
- `async/await` দিয়েও লেখা যায়। সেখানে `return` মানে সফল আর `throw` মানে ব্যর্থ:

```typescript
const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise<void>(resolve => setTimeout(resolve, 1000));
    return "Access Granted";
};
```

- `await` মানে "Promise শেষ না হওয়া পর্যন্ত এখানে থামো"। `await` শুধু Promise-এর জন্য কাজ করে, তাই `setTimeout`-কে `new Promise`-এর ভেতরে রাখতে হয়।
- `Promise<void>` মানে ছোট timer Promise কোনো value দেয় না। বড় function-এর return type আলাদা: `Promise<string>`।
- Reject হওয়া Promise-কে `await` করলে error ছোড়ে, তাই `try/catch` দিয়ে ধরতে হয়।
- File-এর উপরের স্তরে `await` (top-level await) চালাতে হলে file-কে module বানাতে হয় (`export { ... }` দিয়ে) এবং `tsconfig.json`-এ `"target": "es2022"` ও `"module": "esnext"` দিতে হয়। নাহলে `async` function-এর ভেতরে `await` লিখতে হয়।
- `tsc solutions.ts` লিখলে `tsconfig.json` ignore হয়, তাই শুধু `tsc` লিখতে হয়।

---

## Project Files

```
assignment-one-ts/
├── solutions.ts          # সব problem-এর solution
├── solutions.js          # compile করা JavaScript
├── tsconfig.json         # TypeScript settings
├── type-narrowing.md     # Blog 1
├── type-vs-interface.md  # Blog 2
└── README.md
```