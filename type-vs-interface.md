# Type Alias vs Interface in TypeScript

## Introduction

In TypeScript, both `type` and `interface` are used to describe the shape of data. If we want to remember easily then we can say `interface` is more connected to object and on the other hand `type alias` is more connected to literals, unions, tuples, primitives. However, they have some differences, and choosing the right one can make code easier to maintain.

## Type Alias

A `type` alias can describe more than an object. It can define primitive types, unions, tuples, function types, and object shapes.

### Example 1:
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
type ID = string | number;


Here, `Status` only accepts two possible values, while `ID` can be either a string or a number. This is one reason of use `type` alias when working with union or intersection types.

## Interface

An `interface` is mainly used to describe the structure of an object or class.

### Example 2:
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}


An interface can extend another interface. It can also be declared more than once, and TypeScript merges those declarations.

### Example 3:
interface User {
  email: string;
}

We use the same name for the interface here. Now `User` also has an `email` property.

We can imagine current User interface as below:

interface User {
  name: string;
  age: number;
  email: string
}

## Conclusion

For normal object structures, both options work. We need to choose `interface` when defining object shapes that may be extended, especially in class based code. On the other hand choose `type` when working with unions, intersections, tuples, or other combinations. There is no need to treat one as always better; the important thing is we need to use the one that fits the situation and keep the code consistent.
