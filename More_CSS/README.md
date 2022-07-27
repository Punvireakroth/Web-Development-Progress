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
