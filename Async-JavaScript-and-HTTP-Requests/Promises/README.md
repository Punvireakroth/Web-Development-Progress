## Introduction

- **_asynchronous operation_** is the operation that allows the computer to **move on** to another task while waiting for the asynchronous operation to complete.
- This means no part of our program has to be stopped.
  - e.g when we wash cloth in the washing machine in the meantime we can take that free time to do something else.
  - e.g in Web Dev when requesting an API or backend database it has to take time so asynchronous code allows us to execute another task while waiting for that request to complete.
- We’ll use **promise** it an ES6 to handle asynchronous code.

## What are Promises?

- Promises are **objects** that represent the outcome of an asynchronous operation.
- It has this 3 scenarios:

  - **Pending**: Still doing
  - **Fulfilled**: Successfully completed (Resolved)
  - **Rejected**: Failed (Error)

## The Node setTimeout() Function

- It’s used to decide how many seconds later we want to execute the call back function

```dart
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code

const usingSTO = () => {
  console.log("Hi there!!!!");
};

setTimeout(usingSTO, 2000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
```

Output

```dart
This is the first line of code in app.js.
This is the last line of code in app.js.
Hi there!!!!
```
