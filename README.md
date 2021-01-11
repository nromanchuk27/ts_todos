## CSS Units

### 1. Purpose and users

The purpose of this document is:

- Explain how all possible units work
- In which case it is worth and in which it is not worth using this or that unit
- Practical examples for better understanding

### 2. Introduction

CSS Units contains different units which are ways to express the length.

The properties like width, height, font-size, margin, padding, border, color, background-size etc must have a valid unit to describe its length.

_On a higher level, Units can have:_

1. **Numeric Values** – Length has a number followed by a unit like 10px, 5mm, 8in etc. There must not be any space between the number and the unit i.e. 4 px is wrong because there is a space between 4 & px
2. **Percentages** – Value will be in percent like 70%, 30% etc

On a lower level, units consists of –

1. _Absolute length_ – Fixed Length value
2. _Relative length_ – Length relative to the device

Let us understand both of these in detail.

### 3.1 Absolute Length

Absolute lengths are those length units whose value is fixed across all the devices.

These lengths are not good for low-resolution display screens like computers as most of the computers have low-resolution comparatively and ideally you should avoid using them on your website(except “px” which is a decent length unit)

#### The widely used absolute length units are –

##### 1. px – Stands for Pixels

##### 2. pt – Full form is Points

##### 3. pc – Shorthand for Picas

##### 4. in – Stands for Inches

##### 5. cm – Full form for Centimeters

##### 6. mm – Shorthand for millimeters

##### 7. q – Stands for Quarter millimeters (Rarely used in websites)

_Warning/Note/Info_

> Absolute units like pt, pc, in, cm, mm and q might vary little in low-resolution screens(less than 200dpi) but they will not vary in high-resolution screens(more than 200dpi).
> While px is specially designed for CSS font-size and this is an exception in absolute lengths. It's length depends on the type of device and thus it is suitable for display like computer screens.

#### Pixels(px) length

The number of pixels is set in the screen resolution settings, one px is just one such pixel on the screen. The browser will eventually convert all values ​​to pixels.

Pixels can be fractional, for example the size can be set to 16.5px. This is completely normal, the browser itself uses fractional pixels for internal calculations. For example, there is an element 100px wide, it needs to be divided into three parts - willy-nilly 33.333 ... px appear. In the final rendering, fractional pixels are of course rounded and made whole.

For mobile devices that have a lot of pixels on the screen, but the screen itself is small, the browser will automatically apply scaling to ensure readability.

The Syntax of ‘px’ length:
property_type: mpx ;

Where “m” can be any numeric value with decimal or without decimal.

_For example:_
width: 5px;
height:10px;
margin:3px;

**Example of length in pixels(px)**

```javascript
.p-px {
 font-size: 15px;
 color:green;
}
```

#### Length in (Points)pt

The pt stands for points.

_W3C does not recommend the Points length unit for display screen._

The Syntax of ‘pt’ length:
property_type: xpt ;

Where “x” can be any numeric value with decimal or without decimal.

_For example:_
width: 72pt;
height: 12pt;

**Example of length in points(pt)**

```javascript
.p-pt {
 font-size: 20pt;
 color:green;
}
```

#### Length in Pica(pc)

The pc stands for pica or picas.

_W3C does not recommend the Pica/s length unit for display screen._

1pc = 12pt
6pc = 2.54cm
6pc = 1in

The Syntax of ‘pc’ length:
property_type: npc ;

Where “n” can be any numeric value with decimal or without decimal.

_For example:_
width: 6pc;
height:1pc;

**Example of length in Pica(pc)**

```javascript
.p-pica {
 font-size: 3pc;
 color:green;
}
```

#### Centimeter(cm) length

The cm stands for centimeter. It is widely used for daily use purposes but is used less in website development.

_W3C does not recommend the Centimeter length unit for display screen._

1cm = 10mm
2.54cm = 1in

The Syntax of ‘cm’ length:
property_type: acm ;

Where “a” can be any numeric value with decimal or without decimal.

_For example:_
width: 3cm;
height:2.5cm;

**Example of length in centimeter(cm)**

```javascript
.p-cm {
 font-size: 1cm;
 color:green;
}
```

#### Length in millimeter(mm)

The mm stands for millimeter. It is 1/10th of a centimeter

_W3C does not recommend the millimeter length unit for display screen._

10mm = 1cm
25.5mm = 1in

The Syntax of length in mm:
property_type: bmm ;

Where “b” can be any numeric value with decimal or without decimal.

_For example:_
width: 20mm;
height:15mm;

**Example of length in millimeter(mm)**

```javascript
.p-mm {
 font-size: 4mm;
 color:green;
}
```

#### Length in Inches(in)

The in stands for inches.

_W3C does not recommend the Inch unit for display screen._

1in = 96px
1in = 2.54cm

The Syntax of ‘in’ length:
property_type: zin ;

Where “z“ can be any numeric value with decimal or without decimal.

_For example:_
width: 0.5in;
border-width: 0.1in

**Example of Length in Inches(in)**

```javascript
.p-in {
 font-size: 0.5in;
 color:green;
}
```

Relation between in, cm, mm, pt, pt and px
1in = 2.54cm = 25.4mm = 72pt = 6pc = 96px

### 3.2 Relative Length

As the name suggests, Relative length units are those lengths which are relative to another length.

Relative lengths are those length units whose values are NOT fixed across all the devices.

The widely used relative length units are –

##### 1. em – Relative to the font-size of the current element

##### 2. ex – Relative to the font’s x-height

##### 3. % – Relative to the enclosing parent element in percent

##### 4. ch – Relative to the width of the digit “0”

##### 5. rem – Break it like r+em i.e. Root em. Relative to the font-size of the root element of the HTML document

##### 6. vw – Relative to 1% of the width of the viewport (Size of the browser)

##### 7. vh – Relative to 1% of the height of the viewport (Size of the browser)

##### 8. vmin – Relative to 1% of the width or height of the viewport whichever is smaller between vw & vh

##### 9. vmax – Relative to 1% of the width or height of the viewport whichever is bigger between vw & vh

#### CSS em unit

Em is a flexible scalable unit that is converted by the browser to pixels. If the default font size in Chrome is 16px, then 1 em = 16px. The main misconception about em is that it depends on the font size of the parent element. Following the W3 specification, em is relative to the font size of the element on which they are used. Em is widely used for typography such as headings, text, paragraphs, and associated elements such as padding and padding.

The Syntax of ’em’ unit:
property_type: aem ;

Where “a“ can be any numeric value with decimal or without decimal.

_For example:_
text-indent: 3em;

**Example of 'em' unit**

```javascript
div {
 font-size: 40px;
 background: red;
}
.a {
 font-size: 1em;
 width: 8em;
 background: yellow;
}
.b {
 font-size: 0.5em;
 background: blue;
}
```

_Warning/Note/Info_

> If you do not code the font-size for your current element, then 1em = 16px

**Example of 'em' unit when font-size of the current element is not set**

```javascript
.p-cm {
 font-size: 1cm;
 color:green;
}
.p-em {
 font-size: 2.37em;
 color:green;
}
.p-px {
 font-size: 37.92px; /*2.37 * 16px */
 color:green;
}
```

#### CSS ex length

The ex unit is relative to the x-height of a font.

The x-height is like the height of lowercase letters like x, a, c, m, or o which are of the same size.

This is rarely used and W3C does not recommend this for display screens as well as for printers.

The Syntax of ‘ex’ length:
property_type: bex ;

Where “b“ can be any numeric value with decimal or without decimal.

_For example:_
width: 2ex;

**Example of 'ex' length**

```javascript
p {
 line-height:16px;
 font-size: 40px;
 margin: 15px;
}

mark {
 font-size: 1ex;
}

span {
 font-size: 2ex;
}
```

#### Length in Percentage(%)

The % unit is relative to the enclosing parent element in percent.

Suppose, the width of the parent element of the current element is 100px. Now, if you define the width of the current element as 80%, then the value of the width will be 0.8\*100px = 80px.

you can use this unit in multiple CSS properties as there is no fixed rule but one place where it is used excessively is %keyframes of animations.

The Syntax of ‘%’ length:
property_type: x% ;

Where “x” can be any numeric value with decimal or without decimal.

_For example:_
width: 20%;

**Example of '%' length**

```javascript
.parent {
 font-size: 50px;
 background: yellow;
}

.child {
 font-size: 60%;
 background: green;
}
```

#### CSS ch Unit

The ch unit is relative to the width of the number “0”.

The Syntax of ‘ch’ length:
property_type: ych ;

Where “y“ can be any numeric value with decimal or without decimal.

_For example:_
width: 2ch;

**Example of 'ch' Unit**

```javascript
body {
 font-size:40px;
 background: gray;
}

.a {
 font-size:1ch;
 background: green;
}

.b {
 font-size:2ch;
 background: blue;
}

.c {
 font-size:3ch;
 background: orange;
}
```

##### CSS rem

rem is relative to the font size of the root element (html element). If the font size of the html element is 16px then 1rem = 16px. Rem will ALWAYS be relative to the root element, not relying on nested elements. However, using rem without em alone can cause problems in terms of typography, as it can get too large or small, leading to scalability issues.

The Syntax of ‘rem’ unit:
property_type: krem ;

Where “k“ can be any numeric value with decimal or without decimal.

_For example:_
width: 5rem;

**Example of 'rem' unit**

```javascript
html {
 font-size:18px;
 background: yellow;
}

.a {
 font-size:1rem;
 background: green;
}

.b {
 font-size:2rem;
 background: blue;
}

.c {
 font-size:3rem;
 background: orange;
}
```

_Warning/Note/Info_

> If you do not code the font-size for your root element, then 1rem will be approximately equal to 16px i.e. 1rem = 16px

**Example of 'rem' when font-size of the root is not set**

```javascript
.a {
 font-size:1rem;
}

.b {
 font-size:16px;
}

.c {
 font-size:2rem;
}

.d {
 font-size:3rem;
}
```

#### CSS vw length

The vw unit is the relative unit which is 1% of the width of the viewport and the viewport is the size of the browser window. It differs from browsers to browsers.

In simple terms, it is 1/100th of the width of the viewport.

This means that vw unit value will keep on changing once you keep changing the width of the browser window.

The Syntax of ‘vw’ length:
property_type: xvw ;

Where “x“ can be any numeric value with decimal or without decimal.

_For example:_
width: 10vw;

**Example of 'vw' length**

```javascript
.p-vw {
 font-size: 8vw;
 color:green;
}
```

#### vh length

The vh unit is the relative unit which is 1% of the height of the viewport (size of the browser window).

In simple terms, it is 1/100th of the height of the viewport.

vh is not supported in some old browsers.

The Syntax of ‘vh’ length:
property_type: xvh ;

Where “x“ can be any numeric value with decimal or without decimal.

_For example:_
width: 10vh;

**Example of 'vh' length**

```javascript
.p-vh {
 font-size: 14vh;
 color:green;
}
```

_Responsive web design techniques are based on the use of percentages. But percentages are far from the best solution for every case, since they are calculated relative to the size of the nearest parent element. Therefore, if you want to use the height and width of the browser window, it is better to use the vh and vw units. For example, if the browser window height is 900px, then 1vh will be 9px. Likewise, if the browser window width is 1600px, then 1vw will be 16px._

#### vmin & vmax length

The vmin is a relative length which will be the minimum of vw & vh so it will be 1% of the width of the viewport (vw) if vw is smaller than vh else it will be 1% of the height of the viewport (vh).

Similarly, the vmax is a relative length which will be the maximum of vw & vh so it will be 1% of the width of the viewport (vw) if vw is larger than vh else it will be 1% of the height of the viewport (vh).

While vh and vw units are always calculated relative to their respective browser window sizes, vmin and vmax are determined by the minimum or maximum height or width. For example, if the browser window is 1200px wide and 700px high, then vmin will be 7px and vmax will be 12px.

The Syntax of ‘vmin’ length:
property_type: avmin ;

The Syntax of ‘vmax’ length:
property_type: bvmax ;

Where “a“ & “b” can be any numeric values with decimal or without decimal.

_For example:_
width: 10vmin;
height: 10vmax;

**Example of 'vmin' & 'vmax' length**

```javascript
.vmin {
 font-size: 6vmin;
 color:green;
}

.vmax {
 font-size: 6vmax;
 line-height:12px;
}
```

### A note about which unit to use

There is no fix rule that you must use absolute units or relative units but W3C does recommend below:

**For Display Screens** – W3c recommends using em or px or %. You can also use ex occasionally.
**For Print Devices** – W3c recommends using em, cm, mm, in, pt, pc, %. Occasionally, you can also use px, ex.
