# Type Narrowing in TypeScript

## Introduction

Sometimes a variable can hold more than one type of value. For example, a function parameter might accept either a string or a number. TypeScript needs to know which type it is dealing with before allowing type specific operations. Type narrowing is the process of checking a value and reducing its possible types and this process is done by applying conditional loop.

## Using typeof

The `typeof` operator is useful for checking primitive types such as strings, numbers, and booleans. This is useful to typeGuard. 

### Example 1:

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

Inside the first block, TypeScript knows that `value` is a string and in the other block, it knows that the value is a number.

## Using instanceof

The `instanceof` operator checks whether an object was created from a particular class.

## Example 2:
function showDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value.toUpperCase());
  }
}

This lets us safely use methods that belong to the `Date` object.

## Using the in Operator

The `in` operator checks whether a property exists in an object.

### Example 3:
type Admin = { name: string; permissions: string[] };
type Customer = { name: string; email: string };

function showUser(user: Admin | Customer) {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.email);
  }
}

TypeScript uses the checked property to identify which object type is being used.

## Conclusion

Type narrowing helps avoid unnecessary type assertions and makes code safer. We need to  use `typeof` for primitive values, `instanceof` for class instances, and `in` when different object types have different properties. These checks make it easier to work with union types without losing TypeScript's type safety.
