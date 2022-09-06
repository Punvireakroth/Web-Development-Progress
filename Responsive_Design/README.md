# GRID AND SPACING

## Grid Anatomy

There are three main part of the Grid system

- column
- gutter
- margin

For Grid column there usaully 12 to 16 column per page.

## Grid Columns

Column are the verticle line it usaully consist of 12 and can be change throughout the program.

## Grid Rows

The row is the horizontal line on the grid. It’s used to wrap the element in order to organize and order also allows to have whitespace.

## Grid Gutters

Gutters make up the negative space between columns.

## Responsive Grid

Responsive design is a set of techniques allow the content to change base on devices.
In Column Grid it may change from 12 Grid to 4 grid base on the screen size.

## Whitespace

We should use whitespace to enhance the usabiltiy and prioritize the content.
There are two type of whitespace which are passive and active
we can use CSS properties such as `line-height` or `margin` to improve white space.

# Flexbox

## What is Flexbox

Flexbox simplifies the positioning element.

There are two main elements in flexbox which are flex container and flex item. flex container flex item.

Once we set the element to flex we can adjust the layout by using some useful properties.

## display flex

any element can become a flex container by set display value to flex. It helps flex items’ size and position change based on the flex container.

```
display: flex;
```

## inline-flex

If we want an line element to be flex we can use inline flex.

## Justify-content

We can specify how items spread out from the left and right.

To position the items from left to right, we use a property called `justify-content`.

It takes value like `flex-end` which brings items to the right.

- `flex-start` — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them.
- `flex-end` — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.
- `center` — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.
- `space-around` — items will be positioned with equal space before and after each item, resulting in double the space between elements.
- `space-between` — items will be positioned with equal space between them, but no extra space before the first or after the last elements.

## Align-items

When we use justify content we align items from left to right. but if we wanna align vertically we can use `align-items`

These are some useful value

- `flex-start` — all elements will be positioned at the top of the parent container.
- `flex-end` — all elements will be positioned at the bottom of the parent container.
- `center` — the center of all elements will be positioned halfway between the top and bottom of the parent container.
- `baseline` — the bottom of the content of all items will be aligned with each other.
- `stretch` — if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).

## flex-grow

When flex container is so big the flex items will not stretch by default. This is what flex-grow come to help.

## flex-shrink

This flex-shink will the flex-items. Its defult value is 1 that why when the flex container is too small it shrink down. Conversely, default value of flex-grow is 0 that why unless we specify it will grow.

## flex-basis

In addition, to specify dimension with width and height we can adjust width dimensions of the flex items using `flex-basis`

```html
<div class="container">
  <div class="side">
    <h1>Left side!</h1>
  </div>
  <div class="center">
    <h1>Center!</h1>
  </div>
  <div class="side">
    <h1>Right side!</h1>
  </div>
</div>
```

```css
.container {
  display: flex;
}

.side {
  flex-grow: 1;
  flex-basis: 100px;
}

.center {
  flex-grow: 2;
  flex-basis: 150px;
}
```

## flex

The `flex` property allows you to declare `flex-grow`, `flex-shrink`, and `flex-basis` all in one line.

```css
.big {
  flex: 2 1 150px; // grow , shrink, basis
}

.small {
  flex: 1 2 100px; // grow , shrink, basis
}
```

## flex-wrap

When the flex items are too big and we don’t want it to cramp in the container ( Make it go to the next line ) We can use `flex-wrap`

`flex-wrap` take 3 values

- wrap
  - make flex items go to the next line when it too big
- wrap-reverse
  - The same functionality as `wrap` but the order of row will be reverse.
- nowrap
  - default value

```css
.container {
  display: inline-flex;
  flex-wrap: wrap;
  width: 250px;
}
```

```css
.item {
  width: 100px;
  height: 100px;
}
```

## align-content

- If we have multiple rows and we want to space rows from top to bottom we can use `align-content` It’s take the value of
  - flex-start
  - flex-end
  - space-between
  - space-around
  - stretch

## flex-direction

flex containers have two axis **main-axis**(horizontal) **cross-axis**(verticle)

The **main axis** is used to position flex items with the following properties:

1. `justify-content`
2. `flex-wrap`
3. `flex-grow`
4. `flex-shrink`

The **cross axis** is used to position flex items with the following properties:

1. `align-items`
2. `align-content`

If we apply `flex-direction` we can change it axis and it can take `row` or `column` values.

It’s can take values such as

1. `row`
2. `column`
3. `row-reverse`
4. `column-reverse`

## flex-flow

`flex-flow` used to shorthand `flex-wrap` and `flex-directions`

## Nested Flexboxes

Nested flexboxes is we position flex-container inside another flex-container

## Review Flex-box

1. `display: flex` changes an element to a block-level container with flex items inside of it.
2. `display: inline-flex` allows multiple flex containers to appear inline with each other.
3. `justify-content` is used to space items along the main axis.
4. `align-items` is used to space items along the cross axis.
5. `flex-grow` is used to specify how much space (and in what proportions) flex items absorb along the main axis.
6. `flex-shrink` is used to specify how much flex items shrink and in what proportions along the main axis.
7. `flex-basis` is used to specify the initial size of an element styled with `flex-grow` and/or `flex-shrink`.
8. `flex` is used to specify `flex-grow`, `flex-shrink`, and `flex-basis` in one declaration.
9. `flex-wrap` specifies that elements should shift along the cross axis if the flex container is not large enough.
10. `align-content` is used to space rows along the cross axis.
11. `flex-direction` is used to specify the main and cross axes.
12. `flex-flow` is used to specify `flex-wrap` and `flex-direction` in one declaration.
13. Flex containers can be nested inside of each other by declaring `display: flex` or `display: inline-flex` for children of flex containers.

# Grid

## Intro

Grid can use to layout entire web pages
Why Grids

- Flex-box positioning items one-dimensional
- Grids positioning items two-demensional

## Create a grid

To set up a grid you must have **grid container** and **grid items**

You can use these properties

- `grid` — for a block-level grid.
- `inline-grid` — for an inline grid.

## Creating Columns

By defualt our grid has one column but we can modify it by using `grid-template-columns`

```css
.grid {
  display: grid;
  width: 500px;
  grid-template-columns: 100px 200px;
}
```

## Creating Rows

It's use the property `grid-template-rows` the way it works is nearly the same as columns.

## Grid Template

It's the shorthand of grid rows and columns.

```css
.grid {
  display: grid;
  width: 1000px;
  height: 500px;
  /* row/col */
  grid-template: 200px 300px / 20% 10% 70%;
}
```

## Fraction

We have seen responsive design units like % rem or em in Grid we have `fr` it uses to avoid overflowing the contents.

## Repeat

`repeat` is a function that allow us not write the rows or columns value manually.

```css
.grid {
  display: grid;
  width: 300px;
  grid-template-columns: repeat(3, 100px);
}
```

## minmax

```css
.grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
}
```

The second column will always be between 100 and 500 pixels wide.
