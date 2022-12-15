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