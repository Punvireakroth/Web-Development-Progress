# COLOR

We can describe color in three different ways

- Name colors
- RGB
- HSL ( mix of hue, saturation, land ightness )

## Foreground vs Background

There are two distinct colors in design aspect

- foreground color: It uses the property `color`
- background-color: It uses the property `background-color`

## Hexadecimal

often called hex color it consists of # followed by 3 or 6 values that represent RGB color. the value can be uppercase or lowercase.

## RGB

often refer to “RGB value” the syntax look like this

```css
h1 {
  color: rgb(23, 45, 23);
}
```

first value represents the amount of red followed by green and blue for the next value.

## RGB and Hex

With Hex or RGB each can represent 256 values thus `256 * 256 * 256 = 16,777,216` That a lot of color.

## Hue, Saturation, and Lightness

There another color system called HSL
first value is hue than saturation and light

```css
color: hsl(120, 60%, 70%);
```

## Opacity and Alpha

Opacity is how much we can see through that element.
It can apply to hls rgb and hex values. and the value is between 0 - 1

```css
color: hsla(34, 100%, 50%, 0.1);
```

```css
color: rgba(234, 45, 98, 0.33);
```

# TYPOGRAPHY

textual is the content most user see by making it engaging is important for user experience

## Font-family

There something you need to consider when setting fonts

- multi-word values : You need to put quotation marks ‘ ’ around font-name

```css
h1 {
  font-family: "Times New Roman";
}
```

- Web safe font
  There are some selected fonts that will display the same across platforms
  [here](https://www.cssfontstack.com/)
- Fallback Font and Font Stacks
  Use to prevent if the font doesn’t have in the system.

```css
h1 {
  font-family: Caslon, Georgia, "Times New Roman";
}
```

- Serif and Sans-Serif
  Unlike sans-serif, serif font have extra details on the end.

## Font-Weight

`font-weight` can take keyword value or Numberical values

**Keyword value**

- `bold`: Bold font weight.
- `normal`: Normal values weight. This is the default valNumerical
- `lighter`: font-weight lighter than element’s parent value.
- `bolder`: One font weight bolder than the element’s parent value

**Numerical Values**

it can take 1 to 1000

but it commly take from 100. 400 is the default font weight 700 is the bold font weight.

## Text Transformation

With text transform, you can format the text to uppercase or lower case without touching the text in HTML file.

## Text Layout

We can set text layout such as

**line height**: How much space we wanna give between each line.

**word spacing**: How much space between words

**letter-spacing:** How much space between each letter

**text-align**: How we wanna display the text ( left center or right or justify)

## Web Fonts

We can include font from outside system like Google Fonts
and Adobe Fonts, host fonts that you can link to from your HTML document with a provided `<link>` element.

## Web Fonts Using <link>

You can use google font

Watch this video

[Click here](https://www.youtube.com/watch?v=Z3JR6mEWEEo)

## Web Fonts Using @font-face

Instead of using the font from google link we also can download it to use as well.

It’s can come in file format such as

- OTF (OpenType Font)
- TTF (TrueType Font)
- WOFF (Web Open Font Format)
- WOFF2 (Web Open Font Format 2)

To use it we can do as the following

- After you downlaoded it and drag it into a file folder in our project we are ready to use it

```css
@font-face {
  font-family: "MyParagraphFont";
  src: url("fonts/Roboto.woff2") format("woff2"), url("fonts/Roboto.woff") format("woff"), url("fonts/Roboto.ttf") format("truetype");
}
```

```css
p {
  font-family: "MyParagraphFont", sans-serif;
}
```

# Links and Buttons

## Introduction

You should have design emphasis for the novice user. You should have a signifier in order for user to know where to navigate on your site.

## Browser Link Styles

The browser has a user agent style sheet it’s a set of default styles included in the browser for use on all web pages. But it is often override by the developer.

Did you notice that the lhas han an underline and color in blue it is what I’m talking about user agent style sheet.

The take away from this is we should maintainig a consistent user experience pattern.

## Link Styles

Link Should style differently from the surrounding text.
The color of the link should contrast and different style from the text in order pages.
Properties that use to style links are often with `text-decoration` and `color`

## Tooltips and Titles

Sometimes it is helpful to provide additional context to anchor text in the case like images, icons, and order nontext element

We usethe `title` attribute to provide tooltips (a descriptive box which contains the text of an element’s `title` attribute and appears near the user’s cursor.)

```html
<p>
  <a
    href="https://en.wikipedia.org/wiki/Angkor_Wat"
    title="Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares. Breaking from Shaiva tradition of previous kings, Angkor Wat was dedicated to Vishnu for the Khmer Empire."
    >Ankor Wat
  </a>
</p>
```

## Hover States and Cursors

In addition to styling a link by putting color and underline we can use hover to make it change its appearance when the mouse curser hover on that element.

```css
a {
  color: blue;
}

a:hover {
  color: orange;
}
```

Be aware not to use onstand-alone a stand alone signifier for a link becuaes in phone browser do not have the hover curser and it is not a good idea to do so as well.

## Link States

Links have four main states: normal (not clicked), hover, active (clicked), and visited. These four states have associated CSS pseudo-classes: `:link`, `:hover`, `:active`, and `:visited`.

## Skeuomorphism and Flat Design

The concept of UI elements that replicate or imitate real-life counterparts is known as *skeuomorphism.* It’s provide the user feeling that they can do just as with the real object for example button is for press.

But nowaday designer seem to use flat design more becuase it is less clutter and simple.

## Buttons: Skeuomorphic styling

To create Skeuomorphic styling we can use image file or CSS rule but CSS is encouraged because it more responsive and faster load than image.

```css
.button {
  padding: 5px;
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0px 5px;
}

.button:hover {
  cursor: pointer;
}

.button:active {
  margin-top: 5px;
  color: black;
  box-shadow: 0px 0px;
}
```

## Buttons: Flat Design

Flat design buttons commonly appear as rectangles, rounded rectangles, or circles. Button text is very important for avoid confusion to the user.

## Buttons: Hover States

Just like links button also encourage to use hover and cursor:pointer as well.
