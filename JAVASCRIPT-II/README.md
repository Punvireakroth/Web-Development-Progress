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

## Looping in Reverse

```js
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}
```

## Looping through Arrays

```js
const vacationSpots = ["Japan", "Paris", "US"];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}
```

## Nested Loops

```js
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log("Both arrays have the number: " + yourArray[j]);
    }
  }
}
```

## The While Loop

```js
const cards = ["diamond", "spade", "heart", "club"];

// Write your code below

let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
```

## Do...While Statements

```js
let cupsOfSugarNeeded = 1;

let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
```
