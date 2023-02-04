# JS Destructuring

- It's used to easily extract data from object and array

### Destructuring an Array

```js
let colors = ["blue", "red", "purple"];

// Destructure here

let [color1, color2, color3] = colors;

console.log(color1, color2, color3);
```

### Destructuring an Object

```js
let planets = { x: "Saturn", y: "Mars", z: "Neptune" };

// Destructure here

const { x, y, z } = planets;

console.log(x, y, z);
```

```js
let truck = {
  model: "1977 Mustang convertible",
  maker: "Ford",
  city: "Detroit",
  year: "1977",
  convertible: true,
};

const printCarInfo = ({ model, maker, city }) => {
  console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};

printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.
```
