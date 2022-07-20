# ABOUT JAVASCRIPT

In 1990 when the internet was boomed computers try to make websites. Two companies Microsoft (Internet Explorer) and Netscape have a browser war. Netscape was won by building a lightweight language in 10 days first the founder called it a mocha. More and more companies have used JavaScript to create their site over time

Nowadays JavaScript is the essential web technology that most browsers are supported. JavaScript will continue to grow as an indispensable language for web development.

## JavaScript on the Web

The main component of the web is HTML CSS and JS(JavaScript)
We can think of HTML as noun CSS as adjective and JavaScript as Verb

## Popularity of JavaScript

Why a programming language that builds in 10 days and by just a guy. Well because with javaScript we can write an application platform on the browser

- It’s can run on the front and back end
- Update frequently
- Integrated to work well with HTML and CSS
- JavaScript allows websites to have interactivity like scroll transitions and object movement
- JavaScript offers a wide range of frameworks and libraries that help developers create complex applications with low overhead. Programmers can import libraries and frameworks into their code to augment their application’s functionality.

## JavaScript for the server

JavaScript is not just used for the front-end it also works for the back-end. Node-js is a popular server-side for JavaScript.

## What else can JavaScript do?

Beyond the web, JavaScript has a large presence amongst cross-platform applications. We use some popular standalone desktop apps like Slack, GitHub, Skype, and Tidal. These applications are developed with the JavaScript framework called Electron.js. Electron is excellent for making desktop applications that need to work across different devices regardless of the operating system.

In addition, JavaScript has the potential of expanding into other innovative technologies such as virtual reality and gaming. JavaScript can be used for animating, rendering and scaling. JavaScript even has contributed to the internet of things, the technology that makes simple objects, like your fridge, smarter. Everyday devices can become interactive and collect data using JavaScript libraries.

### JavaScript Versions: ES6 and Before

<img src="https://github.com/Punvireakroth/Web-Development-Progress/blob/main/JAVASCRIPT%20I/images/JavaScript_version.png">

- Some developers even refer to ES6 as “Modern JavaScript”
- There are great features added to help JavaScript that is included
  - new keywords like **`let`** and **`const`** to declare variables,
  - new function syntax using Arrow functions,
  - creation of Classes,
  - parameters with default values,
  - promises for asynchronous actions,
  - and many more!

# Introduction to JavaScript

## What is JavaScript?

- Javascript is the language for the modern web browser
- It continues to improve and update
- JavaScript is a powerful flexible language that is now used in a complex web development and beyond

- Since it is the core of web development it is the first language that self-taught developers learn
- JavaScript power the dynamic behavior website

## Console

- The console is a panel that displays the information or error to the user
- the keyword console is what we called an object in JS ( It’s a collection of data and action we can use in our code )
- A keyword is a special word that is built-in JS so that the Computer will recognize them and treat them especially.
- One action or what we called a method, in that case, .log( ) is a method or action.
- We connect console.log( ) what we write in the parentheses will print out to the console.

```js
console.log(5);
```

## Comments

- We write code often we work in a team so it can be messy quickly
- What we can do is leave a comment to explain what the code is doing
- or comment out a specific section of code to avoid deleting that line of code.

```js
//
/* */
```

## Data Types

- Data types are the classification of data we give to a different kind of data
- There are seven different kinds of data types that have
  - Number
  - String
  - Boolean
  - Null
  - Undefined
  - Symbol: useful in more complex coding
  - Object: Collection of data
- The first 6 data type are called _primary data type_

## Arithmetic Operators

- Operators are symbols that perform tasks in our code
- We have several builds arithmetic operators in javascript which has
  1. Add: `+`
  2. Subtract: `-`
  3. Multiply: `*`
  4. Divide: `/`
  5. Remainder: `%`

## String Concatenation

- `+`operator is not just used for calculation it is also used to concatenate two strings together.

```js
console.log("Hello " + "Vireak roth");
```

## Properties

- properties store the information from the data type
- if we want to retrieve the information from the data type we use the. it is called dot operator

```js
console.log("Hello".length);
```

## Methods

- Remember that method is actions we can perform
- to write a method we use the dot operator + name of the method + ( )
- We notice that when we use console.log( ) .log( ) is a method
- In string, we have a number of methods we can use

```js
"hello".toUpperCase();
"Hey".startsWith("H"); //true
"     Hey     ".trim(); // It's help remove white space
```

## Built-in Objects

- If we want to perform something we use an object like a console thing that comes with the object is a method in this case we have .log( )
- There are quite a number of built-in objects like Math that have methods like .random(), floor( )
- Later on, we can create objects on our own

## Review

Let’s take one more glance at the concepts we just learned:

- Data is printed, or logged, to the console, a panel that displays messages, with `console.log()`.
- We can write single-line comments with `//` and multi-line comments between `/*` and `/`.
- There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
- Numbers are any number without quotes: `23.8879`
- Strings are characters wrapped in single or double quotes: `'Sample String'`
- The built-in arithmetic operators include `+`, `, `, `/`, and `%`.
- Objects, including instances of data types, can have properties, stored information. The properties are denoted with a `.` after the name of the object, for example: `'Hello'.length`.
- Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: `'hello'.toUpperCase()`.
- We can access properties and methods by using the `.`, dot operator.
- Built-in objects, including `Math`, are collections of methods and properties that JavaScript provides.
