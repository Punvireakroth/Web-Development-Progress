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

# The Virtual DOM

- Traditionally when the DOM is update the browser need to repaint the entire web page.
- With Virtual DOM it represent as object. So when something happend on the page it make a copy of that JS and make the change of that copy and compare the two JS object what has changed then it inform those changes to the browser and only those part of the page is going to be change. As a result this perform faster than the traditional method.

# JSX

## Into to JSX

### Why React ?

- fast
- modular
- scalable
- flexible
- popular

### Hello World

```jsx
const h1 = <h1>Hello World</h1>;
```

- This code is called JSX

### What is JSX ?

- Eventhough JSX written in JS file but it is not a valid JS code which mean we have to compile to a regular JS code first in other for browser to understand (It's often called syntax extension)

### JSX Elements

- It's somewhat look exactly like HTML element

```jsx
<h1>Hello There</h1>
```

### JSX Elements And Their Surroundings

- JSX is treated as JS expression which mean we can store it where ever we like.

```jsx
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>,
};
const navBar = <nav>I am a nav bar</nav>;
```

### Attributes In JSX

- It's similar to HTML

### Nested JSX

- It's just like html

```jsx
<a href="https://www.example.com">
  <h1>Click me!</h1>
</a>
```

- If JSX take up more than one lines you need to wrap it with ()

```jsx
<a href="https://www.example.com">
  <h1>Click me!</h1>
</a>;
const theExample = (
  <a href="https://www.example.com">
    <h1>Click me!</h1>
  </a>
);
```

### JSX Outer Elements

- if we have multiple lines of jsx simpily wrap it with div

```jsx
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```

### Rendering JSX

- To make it appare on the screen

```jsx
import React from "react";
import ReactDOM from "react-dom";

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"));
```

### ReactDOM.render() I

- ReactDOM is a library that contain a variaty of method we can use e.g ReactDOM.render() and it deal with DOM.

### ReactDOM.render() II

- The second aurgurent `document.getElementById('app')` is to point where the jsx should render. In this case it render in a HTML call index.html that has #app id in it.

### Passing a Variable to ReactDOM.render()

- We can pass varaible to ReactDOM.render() as long as it is JSX

```js
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

ReactDOM.render(toDoList, document.getElementById("app"));
```

### The Virtual DOM

ReactDOM.render() only update DOM elements that have changed

## Advanced JSX

### class vs className

- There are minor differ in syntax between JSX and html one of those is `className` that is equivalent to `class` in html.
- The reason for this is because when JSX compile to JS the class keyword is a reserve keyword in JS.

### Self-Closing Tags

- In JSX self-closing tags you will need to put forward slash

```jsx
<br />
```

### JavaScript In Your JSX In Your JavaScript

- We can write JS code inside JSX code which mean we write JS code in JS file and in JSX code lolz.

### Curly Braces in JSX

- By Wrapping the js code in {} in JSX code the code in that {} will we treated as JS code

### Variables in JSX

- We can also inject JS variable to JSX code eventhough it declare outside the JSX

```jsx
const name = "vireakroth";
const greeting = <p>Hello, {name}</p>;
```

### Variable Attributes in JSX

- Variable are often use to give value in attribute as well.

```js
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img
    src="images/panda.jpg"
    alt="panda"
    height={sideLength}
    width={sideLength}
  />
);
```

- Also object also commonly use to give value as well

```jsx
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}

const panda = {
  <img
    src={pics.panda}
    alt="lazy panda"
  / >
}
```

### Event Listeners in JSX
