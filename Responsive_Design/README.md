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
