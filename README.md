# TypeScript Type System and Runtime Errors

This repository demonstrates a common issue in TypeScript where the type system does not fully prevent runtime errors.  The `printAnything` function attempts to handle strings and numbers, but fails to handle other data types gracefully.

## Bug Description
The `printAnything` function uses `typeof` to check the data type, but `typeof` is limited and can lead to unexpected behavior with non-primitive data types such as booleans or objects.

## Solution
The solution uses type guards to accurately determine the type of the input argument and prevents runtime errors.   A type guard is a function that narrows down the type of a variable.