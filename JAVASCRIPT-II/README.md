# Arrays

## Arrays

- Array allows us to organize data and it can store any datatype.
- Array has order

```js
let whatMakeMeHappy = ["ReadJapanBook", "LookAtOldPhoto", "reviewOldMemory"];

console.log(whatMakeMeHappy);
```

## Create an Array

- One way to create an Array is to use an array _literal_ it mean putting the elements inside [ ]
- We can have elements with the same data type or mix data within the [ ]

## Update Elements

- We can access then update the element values inside an Arrays.

## Arrays with let and const

- cosnt in arrays can change the content but cannot reassign new array or different values.

```js
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";

console.log(condiments);

condiments = ["Mayo"];

console.log(condiments);

utensils[3] = "Spoon";

console.log(utensils);
```

## The .length property

- .length return the amount of elements in an array.

## The .push() Method

```js
const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("walk around", "read book");

console.log(chores);
```

## The .pop() Method

We use .pop() to remove the last items in the list.

## More Array Methods

Read about array methods more in the docs
<a href="https://www.codecademy.com/resources/docs/javascript/arrays">JavaScript Arrays.</a>

## Arrays with function

We can mutated an array with function.

```js
const flowers = ["peony", "daffodil", "marigold"];

function addFlower(arr) {
  arr.push("lily");
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
```

this concept explained as pass-by-reference since what we’re actually passing to the function is a reference to where the variable memory is stored and changing the memory.

# Loops

When we wanna repeat instruction over and over again we use loops.

## The For Loop

```js
for (let i = 5; i < 11; i++) {
  console.log(i);
}
```
