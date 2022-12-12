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