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
