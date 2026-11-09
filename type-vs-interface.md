# Type Alias vs Interface in TypeScript

## Introduction

In TypeScript, both `type` and `interface` are used to describe the
shape of data. At first, they look almost the same because both can
define object properties. However, they have some differences, and
choosing the right one can make code easier to maintain.

## Type Alias

A `type` alias can describe more than an object. It can define primitive
types, unions, tuples, function types, and object shapes.

``` ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
type ID = string | number;
```

Here, `Status` only accepts two possible values, while `ID` can be
either a string or a number. This is one reason I use `type` when I need
union or intersection types.

## Interface

An `interface` is mainly used to describe the structure of an object or
class.

``` ts
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}
```

An interface can extend another interface. It can also be declared more
than once, and TypeScript merges those declarations. This is called
declaration merging.

``` ts
interface User {
  email: string;
}
```

Now `User` also has an `email` property.

## Conclusion

For normal object structures, both options work. I would choose
`interface` when defining object shapes that may be extended, especially
in class-based code. I would choose `type` when working with unions,
intersections, tuples, or other combinations. There is no need to treat
one as always better; the important thing is to use the one that fits
the situation and keep the code consistent.
