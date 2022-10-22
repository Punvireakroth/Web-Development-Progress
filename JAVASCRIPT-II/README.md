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

## The break Keyword

`break` use to stop the loops.

```js
const strangeBirds = ["Shoebill", "Cockatrice", "Basan", "Terrorbird", "Parotia", "Kakapo"];

for (const bird of strangeBirds) {
  if (bird === "Basan") {
    break;
  }
  console.log(bird);
}
```

## continue

Used to skip one iteration of the loop.

```js
const strangeBirds = ["Shoebill", "Cockatrice", "Basan", "Cow", "Terrorbird", "Parotia", "Kakapo"];

for (const bird of strangeBirds) {
  if (bird === "Cow") {
    continue;
  }
  console.log(bird);
}
```

# Objects

## Intro to Objects

- A lot of things in JS are object
- There are seven fundamental data in JS
- Six of those are the primitive data types: string, number, boolean, null, undefined, and symbol. With the seventh type, objects, we open our code to more complex possibilities
- JavaScript objects are containers storing related data and functionality.

## Creating Object Literals

Obect store its key and value pair in { }

```js
// An object literal with two key-value pairs
let spaceship = {
  "Fuel Type": "diesel",
  color: "silver",
};
```

## Accessing Properties

There are two way of accessing an object's property

- dot notation

```js
let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
```

## Bracket Notation

- Bracket notation

`objectName[propertyName]`

It's also useful with fucntion

```js
let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, "homePlanet");
```

## Property Assignment

- Object are mutable
- we can use [ ] or . notation to change or update a value and key.

```js
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

// Write your code below

spaceship.color = "glorious gold";

spaceship.numEngines = 7;

delete spaceship["Secret Mission"];
```

## Methods

Method in Object is what it does it like a fucntion in an Object

- Normal syntax

```js
const alienShip = {
  invade: function () {
    console.log("Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.");
  },
};
```

- ES6

```js
const alienShip = {
  invade() {
    console.log("Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.");
  },
};
```

## Nested Objects

We can have object inside another object as a property .

```js
const spaceship = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
```

to revoke

```js
spaceship.nanoelectronics["back-up"].battery; // Returns 'Lithium'
```

## Pass By Reference

- When pass by reference , Function is called by directly passing the reference/address of the variable as an argument.
- So the change in function my affect the original value.
- parameters passed as an arguments does not create its own copy, it refers to the original value so changes made inside the function affect the original value.

```js
function PassbyReference(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;

  console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
  a: 10,
  b: 20,
};
console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj);

console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
```

Output

```js
Before calling Pass By Reference Function -> a = 10 b = 20
Inside Pass By Reference Function -> a = 20 b = 10
After calling Pass By Reference Function -> a = 20 b = 10
```

Another Example

```js
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

// Write your code below
let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship);

// Output
/*
{ 'Fuel Type': 'avocado oil',
  homePlanet: 'Earth',
  disabled: true }

  */
```

## Looping through Object

We can iterate through Object using `for...in`

```js
let footBallTeam = {
  crew: {
    defender: {
      name: "Jinit chan",
      age: 19,
    },
    midfiel: {
      name: "Hong Robea",
      age: 20,
    },
    attacker: {
      name: "VireakRoth",
      age: 20,
    },
  },
};

for (let member in footBallTeam.crew) {
  console.log(`${member}: ${footBallTeam.crew[member].name}`);
}

// output
defender: Jinit chan
midfiel: Hong Robea
attacker: VireakRoth
```

Another Example

```js
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

// Iterate through Objects
for (let member in spaceship.crew) {
  console.log(`${member}: ${spaceship.crew[member].name}`);
}

for (let role in spaceship.crew) {
  console.log(`${spaceship.crew[role].name}: ${spaceship.crew[role].degree}`);
}

// Output
captain: Lily
chief officer: Dan
medic: Clementine
translator: Shauna
Lily: Computer Engineering
Dan: Aerospace Engineering
Clementine: Physics
Shauna: Conservation Science
```

# Advanced Objects

## The this Keyword

In Object we have properties (Variables) and method (functionallity).
What if we want to use a property in the same object. The answer is it will lead to Reference error.

```js
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(dietType);
  },
};
goat.diet();
// Output will be "ReferenceError: dietType is not defined"
```

- That’s because inside the scope of the `.diet()`method, we don’t automatically have access to other properties of the `goat`
   object.
- But `this` keyword can help

```js
const goat = {
  dietType: "herbivore",
  makeSound() {
    console.log("baaa");
  },
  diet() {
    console.log(this.dietType);
  },
};

goat.diet();
// Output: herbivore
```

- By using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.

## Arrow Functions and this

I understand from this that “We cannot use this keyword in arrow functions”

```js
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robot.checkEnergy();
```

In the code above we cannot use ⇒ function with this keyword.

## Getters

It’s use to get and return a value of properties more than that it useful

- Getters can perform an action on the data when getting a property.
- Getters can return different values using conditionals.
- In a getter, we can access the properties of the calling object using `this`.
- The functionality of our code is easier for other developers to understand.

```js
const person = {
  _firstName: "John",
  _lastName: "Doe",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Missing a first name or a last name.";
    }
  },
};

// To call the getter method:
person.fullName; // 'John Doe'
```

## Setter

It’s used to reassign properties within an Object

```js
const person = {
  _age: 37,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("You must assign a number to age");
    }
  },
};
person.age = 40;
console.log(person._age); // Logs: 40
person.age = "40"; // Logs: You must assign a number to age
```

## Factory function

When we want to create instances of object quickly we use factory functions . Factory function is a function that return an object and can be reuse to create multiple instances of an object.

```js
const footBallPlayerFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    },
  };
};
const pogba = footBallPlayerFactory("Pogba", 29, "ball control", "BOO!");
ghost.scare(); // 'BOO!'
```

Another example

```js
let robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);

tinCan.beep();
console.log(tinCan.model);
```

## Property Value Shorthand

Instead of do this

```js
const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age,
  };
};
```

You can do this

```js
const monsterFactory = (name, age) => {
  return {
    name,
    age,
  };
};
```

## Destructured Assignment

When we want to extract key-values from object we can do the following.

```js
const vampire = {
  name: "Dracula",
  residence: "Transylvania",
  preferences: {
    day: "stay inside",
    night: "satisfy appetite",
  },
};

const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'

// to extract nested value
const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'
```

# Higher order function

## introduction

- In the real-world we often abstract away and still understand thing for example like when we speak.
- In computer world it different we need to give detail instruction
- but in some case we can also abstract something as well

## Function as data

If a function with a very long name we surely don’t want to called it again and again with that name but instead what we can do is to assign it to a variable.

```js
const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
```

Notice that when we assign a function to a variable we do not need to specified ( ) we just assign a variable to the function name.

## Functions as Parameters

- Higher order function is a function that **accept other function as parameter** or **return a function** or **both.**
- Call back function is a function as a parameter of another function.

```js
const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  } else {
    return "inconsistent results";
  }
};

console.log(checkConsistentOutput(addTwo, 2));
```

# Iterators

Subplement to for loop to iterate through an array we also have iterator that is specail method we can iterate through the array.

## forEach

```js
const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below

fruits.forEach((items) => console.log(`I want to eat a ${items}`));
```

## .map() method

.map() method work in similar way to forEach() the major different is it return an array back.

```js
const numbers = [1, 2, 3, 4, 5];

const bigNumbers = numbers.map((number) => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
```

Another example

```js
const animals = ["Hen", "elephant", "llama", "leopard", "ostrich", "Whale", "octopus", "rabbit", "lion", "dog"];
let firstChar;
// Create the secretMessage array below
const secretMessage = animals.map((animal) => {
  return animal[0];
});

console.log(secretMessage.join("")); // HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map((number) => {
  return number / 100;
});

console.log(smallNumbers); // [ 1, 2, 3, 4, 5 ]
```

## The .filter() Method

`.filter()` is also return an array but it return the element that already filtered. If the call back function return True it gonna return the array of that element.

Example

```js
const words = ["chair", "music", "pillow", "brick", "pen", "door"];

const shortWords = words.filter((word) => {
  return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door'
```

## The .findIndex() Method

`.findIndex()` will find the first location of the index in an array.

```js
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex((num) => {
  return num < 10;
});
```

If it can't find any it going to output -1

Another example

```js
const animals = ["hippo", "tiger", "lion", "seal", "cheetah", "monkey", "salamander", "elephant"];

const foundAnimal = animals.findIndex((index) => {
  if (index === "elephant") {
    return index;
  }
});

console.log(foundAnimal);

const startsWithS = animals.findIndex((index) => {
  if (index[0] === "s") {
    return index;
  }
});

console.log(startsWithS);
```

## The .reduce() Method

Look at the example

```js
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
});
console.log(newSum);
```

## Iterator Documentation

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank">MDN</a>

# About Error

- Yep, the red means danger or bad stuff happened, and also in code, it signifies that code has errors.
- But don’t be discouraged by it even the season programming still confronts a lot of errors in their day-to-day life.
- The more complex your code is the more bugs you are likely to face.
- Finding bugs in software mean finding weaknesses and trying to fix them in a way to meet the standard.

## Step to tackle the error

**Dissect the Error**

- There might be a lot error text shown when the error occor but being aware of where the important one is located is good.
- Mostly it at the top of our error.

**Is the Solution in the error**

- Sometime compiler doesn’t point 100% correctly where the error was so you need to use your dev skill.

**Search your error on the web search**

- Include keywords and make erorr more generic

Instead of this

`TypeError: students.filter is not a function`

Do this

`TypeError: object filter() is not a function JavaScript`

**Compare different use cases to yours**

The result that we have been search may not exacly the same but there maybe some line of thier code similar to us that make it thrown the error.

**Tweaking around your code**

After solving our error successfully we can make changes to other way whether it is possible or not if it is you are just learned something new.

# Debug JS Code

- Error is common in development.
- We’ll learn how to debug in term of JavaScript code.

## Error Stack Traces

- After error was thrown to the console we need to answer these questions
  From what file was this error thrown?
  1 - Answer:
  On what line of that file was this error thrown?
  2 - Answer:
  What type of error was thrown in this stack trace?
  3 - Answer:
  What is the description of the error in this stack trace?
  4 - Answer:

## JavaScript Error Types

- Read MDN 😂

## Trace the silence error

We can use `console.log()` to print out whether this is what we expected or not?

To use console log we can follow these steps:

- Print out the varaible and argument to see whether it is as what we expected
- Then if values are correct but still error we can move to the logic part
- If we find the error solve those error.

## Finding Documentation
