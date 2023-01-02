# Build Interactive website

We are going to use JS to build an interactive website. It’s cool innit? 

# JavaScript and DOM

## The Script Element

### JavaScript and HTML

Just HTML and CSS are not enough for programmers to use JS to add interactivity as well as making the site dynamic.

### The script tag

script tag us to encapsulate the JavaScript file

### The src attribute

It's use to link to external JS code or CDN.

### How are script loaded?

HTML parser does not load the HTML element until it finish running the script file.
JS script file are run sequentially.

### Defer attribute

Defer attrubute tell the script to run after HTML successfully parsed which avoid show load time.

`<script src="example.js" defer></script>`

### Async attribute

Unlike defer async doesn't wait until the entire page are parsed what it does is it immediately execute after it has been downloaded.

### Review

- By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file, the HTML parser waits to load the entire script before from proceeding to parse the rest of the page elements.

- The defer attribute ensures that the entire HTML file has been parsed before the script is executed.

- The async attribute will allow the HTML parser to continue parsing as the script is being downloaded, but will execute immediately after it has been downloaded.

## The Document Object Model (Lesson)

### What is the DOM
- To easier understand take the abbreviation reverse thus it MODEL OBJECT DOCUMENT
- allows HTML to interact with script languages e.g javascript
- “Browsers implement the DOM to allow JavaScript to access, modify, and update the structure of an HTML web page in an organized way.” Codecademy

### The DOM as a tree structure
We may be familiar with the family tree in DOM is also same the top is called root representing the document of HTML and the descendants are the HTML tags. 

### Parent Child Relationships in the DOM

- The parent node are ancestor of another node.
- The child node are the descendant of another node.

### Nodes and Elements in the DOM

In DOM there are `element` node and `text` node.

### Attributes of Element Node

Like in HTML document element node in DOM allow us to access its attribute to modify stuff as we like.

## JavaScript and the DOM

### The Document Keyword

`document` allow you to access the root of the DOM and open us to access another HTML tag or attribute.

### Tweak an Element

DOM allows us to access the element, and attribute of the HTML document thus it means that we can change the attribute and properties of that element.

```js
document.body.innerHTML = 'The cat loves the dog.';
// also
document.body.innerHTML = '<h2>This is a heading</h2>'; 
```

### Select and Modify Elements

DOM allows us to access the element, and attribute of the HTML document thus it means that we can change the attribute and properties of that element.

```jsx
document.body.innerHTML = 'The cat loves the dog.';
// also
document.body.innerHTML = '<h2>This is a heading</h2>';
```

### Select and Modify Elements

If we wanna access something besides the body we can apply CSS selector as well(tag, id, class)

`.querySelector()` allow to access the first match element as a string.

e.g

```jsx
document.querySelector('p');
```

beside querySelector there are also .getElementById() , .getElementsByClassName() and .getElementsByTagName() which its two can take the array element instead of one element

e.g
```js
// Set first element of .student class as 'Not yet registered'
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';
 
// Set second <li> tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;`

```

### Style an Element
`.style` Property allows changing the inline style of the HTML tag

```js
let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';
```

Unlike in CSS we use - for properties like `background-color`

but instead in JS we use camelcase.

### Traversing the DOM
We’re going to learn `.children` and `.parentNode`  

Let’s see the example

`HTML`
```js
<ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul>
```
`JavaScript`
```js
let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements
```
### Create and Insert Elements
Besides tweaking, we also can create elements using DOM as well. Then we can insert it into our HTML document as the child of some parent elements.

We use this `.createElement()` to create a new element

```js
let paragraph = document.createElement('p');
paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';
```
After creating we can insert our element into the document so

```jsx
document.body.appendChild(paragraph);
```

The above code we insert the paragraph(p) to our body element

### Remove or Hide an Element

- We can use `.removeChild()` to remove an element. We also can use .hidden = true to hide an element.

### Add Click Interactivity

We can add interactivity to DOM by inserting a function into an element.

`.onclick` use to trigger the function to run when the user clicks on the element.

```js
let element = document.querySelector('button');
 
element.onclick = function() { 
  element.style.backgroundColor = 'blue' 
};
```
We also can

```js
let element = document.querySelector('button');
 
function turnBlue() {
   element.style.backgroundColor = 'blue';
}
 
element.onclick = turnBlue;

```

## DOM Event with JavaScript

### What is Event?
When there are manipulate or interactions on a page that are called events it can trigger the functionality.

- When clicking button
- When Swap images
- When Drag and drop…

### "Firing" Events
- The Process is like this
    - Event Trigger → Event Detected → Event Handle
When event trigger on a DOM elements and event handler function can be created to run a response.

### Event Handler Registration

When we want DOM to listen to a specific event we use `.addEventListener()` method

### Adding Event Handler

- There are alternaltive ways than `.addEventHandler`
- We can use .onEvent where Event can be `click` …
- e.g `onclick`
```js
eventTarget.onclick = eventHandlerFunction;
```
Normallly people use `.addEventListener` than `.onevent` because `.addEventListener` can add multiple event handler functions  

### removeEventListener

The `.removeEventListener()` is meant to reverse `.addEventListener()` 

```js
eventTarget.removeEventListener('click', eventHandlerFunction);
```

### Event Object Properties

When the event is trigger the ******event object****** can passed as argument  to the event handler function.

“It’s useful to store information about the event target, the event type, associcated listeners in properties.” *Codecademy*

### Event Types

There are more event than just `click`

Also important to know that some event need 

- Human interation
- Some not (load)

This MDN docs is a [reference](https://developer.mozilla.org/en-US/docs/Web/Events)

### Mouse Events

There are more mouse event than `click` , `wheel` There are more like

- `mousedown`
- `mouseup`
- `mouseover`
- `mouseout`

We can use common sense to predict it action by its name.

## Form

### Regular Expressions

- Humans can interpret the String.
- Computers have to use something called **regular expressions** aka regex or regexp. It's basically a sequence of characters representing a pattern.

### Client-side Validation: HTML

- HTML have some validation feature to validate user input. e.g `require`

### Client-side Validation: JavaScript

- Validate from the front-end side is a good idea because as users we don't want to wait long.
- We can use JS to validate by just using vanilla JS or using its library.

### Back-end Validation

- With just client-side is not enough because it's there are potential risks (easy to bypass). If users close JS in their browser.

## HTML Form

- The action attribute determines where the information is sent.
- The method attribute is assigned a HTTP verb that is included in the HTTP request.

### Text input

```html
<form action="/example.html" method="POST">
  <input type="text" name="first-text-field" value="already pre-filled">
</form>
```

"first-text-field=important details" is sent to /example.html because the value of the nameattribute is "first-text-field" and the value of value is "important details".

### Label

label we have for that match the id in the input

```html
<form action="/example.html" method="POST">
  <label for="meal">What do you want to eat?</label>
  <br>
  <input type="text" name="food" id="meal">
</form>
```
### Password

```html
<form>
  <label for="user-password">Password: </label>
  <input type="password" id="user-password" name="user-password">
</form>
```

### Number

```html
 <section class="patties">
          <label for="amount">How many patties would you like?</label>
	        <!--Add your code below-->
					<input type="number" id="amount" step="1" name="amount">
          
  </section>
```

### Range
```html
<form>
  <label for="volume"> Volume Control</label>
  <input id="volume" name="volume" type="range" min="0" max="100" step="1">
</form>
```

### Checkbox
```html
<form>
  <p>Choose your pizza toppings:</p>
  <label for="cheese">Extra cheese</label>
  <input id="cheese" name="topping" type="checkbox" value="cheese">
  <br>
  <label for="pepperoni">Pepperoni</label>
  <input id="pepperoni" name="topping" type="checkbox" value="pepperoni">
  <br>
  <label for="anchovy">Anchovy</label>
  <input id="anchovy" name="topping" type="checkbox" value="anchovy">
</form>
```

### Radio Button Input

```html
<form>
  <p>What is sum of 1 + 1?</p>
  <input type="radio" id="two" name="answer" value="2">
  <label for="two">2</label>
  <br>
  <input type="radio" id="eleven" name="answer" value="11">
  <label for="eleven">11</label>
</form>
```

### Dropdown list 

```html
<form>
  <label for="lunch">What's for lunch?</label>
  <select id="lunch" name="lunch">
    <option value="pizza">Pizza</option>
    <option value="curry">Curry</option>
    <option value="salad">Salad</option>
    <option value="ramen">Ramen</option>
    <option value="tacos">Tacos</option>
  </select>
</form>

```

### Datalist Input

```html
<form>
  <label for="city">Ideal city to visit?</label>
  <input type="text" list="cities" id="city" name="city">
 
  <datalist id="cities">
    <option value="New York City"></option>
    <option value="Tokyo"></option>
    <option value="Barcelona"></option>
    <option value="Mexico City"></option>
    <option value="Melbourne"></option>
    <option value="Other"></option>  
  </datalist>
</form>
```

### Textarea element
```html
<form>
  <label for="blog">New Blog Post: </label>
  <br>
  <textarea id="blog" name="blog" rows="5" cols="30">
  </textarea>
</form>
```
### Submit Form

```html
<form>
  <input type="submit" value="Send">
</form>
```