# Grid Notes - WesBos Grid Course

cssgrid.io

## Fundamentals

- First you display grid, then slice and dice into columns and rows, which are called tracks.
- Then space them apart using grid gap.
- If you do not explicitly define the columns you want, iit wil be just one.

## Dev Tools

- Tracks are numbered not by the number of columns, but by the lines that start and stop them.
- Always going to have one more number then number of columns.

## Line Meanings

- Solid line, start and stop of the explicit grid
- Dashed diagonal lines, means the gap
- Dashed lines, means it is an explict track, because we have defined that track
- Dotted lines, we didn't create those, implicit, without us saying do, browswer created them

  ![Line Meanings](https://www.evernote.com/l/AALGjqwAvqdHmKsLa8JzFW-Hc3g2V5beeNMB/image.png "Line Meanings")

## Implicit vs. Explicit

- Explicit (Solid Dashed lines), When you define what the columns will be, `grid-template-columns: 200px 400px`.
- Solid line is where the Explicit line starts and stops.
- Implicit (Lighter Dotted lines), If you do not create them, meaning the browser says, what do I do with these extra elements, what do I do. It will make antoher line.
- When you more elements `<div class="items"></div>` then defined in your grid, the browser will interpret that as Implicit and place it for you.
- How do you size the `Implicit` items? `grid-auto-rows: 500px` Any extra rows created Implicit will use that size.

## Grid Auto Flow

- `grid-auto-flow: column`, Determine whether or not it will tack it onto a row or a column
- `grid-auto-column: 200px`, specify the size of that column

## Sizing Tracks

- px is the easiest to use
- `%'s` trying to add up your values, it's a headache, you end up with horizontal scrolling
- instead, use `fr` unit, fractional unit
- Fractional Unit, represents the amount of space left after all the elements are laid out.
- `grid-template-columns: 200px 200px 1fr` 1fr is going to say, this much is extra, so I am going to take up however much room is left.
- `fr` is just in proportion to how much free space is left.
- `2fr`, you can double up the free space
- For the rows, you have to specify a hard height, `grid-template-rows: 1fr
- DO NOT try and add up to 100%, rather just reach for your `fr` units
- You can mix differnt sizing, `px, rem, em`
- `auto` keyword, auto will just adjust to the max size of the content. Tehe content will decide the width.

## Repeat Function

- `repeat(4, 1fr)`, takes two arguments, 1st, how many times you want to repeat it. And what you would like to repeat.
- you can pass more then one thing to repeat, `repeat(4, 1fr, 2fr)`, and this will alternate between the two sizes. Take whatever you have as first argument and multiplies it.
- you can also mix and match, use it anywhere inside of your `grid-template-columns` or `grid-template-row`, for example; `grid-template-columns: 100px repeat(2, 1fr auto) 200px repeat(2, 5fr)`

## Sizing Items

- Spanning, `grid-column: span 2;`, if you wish for an item to take up multiple spots in a grid, you can tell it to span 2. Or whatever.
- Can span rows just the same with `grid-row: span 2;`
- What if you span more columns then you have? It will create additional implicit rows or columns.

## Placing Grid Items

- You can start at track values, `grid-column-start: 2;` and tell it where to end `grid-column-end: 5;`
- The shorthand, `grid-column: 1 / 5;`
- You can tell it it where to start and where to stop. OR you can tell it where to start and how much to span
- IF you want to span it accross all tracks, because you don't know how many tracks you will have, use `grid-column: 1 / -1;`
- Can do same for row, `grid-row: 3 / span 2;`, BUT you have to define an explicit row grid, `grid-template-rows: repeat(5, 1fr);`

## Auto Fit and Auto Fill

- SOmetimes you don't really know what will fit in your item
- Auto fill and Auto Fit, `grid-template-columns: repeat(auto-fill, 150px)`
- `auto-fill` you don't tell how many columns you want, auto-fill figures it out, how many can fill.
- When you resize, it will automatically break to the next line.
- `auto-fit`, stops the item ends the grid at the end of the items.

## Responsive Grids, minmax()

- Using a compbo of minmax and autofill and autofit replaces a lot of media queries you would have to write for responsive grids
- `minmax(150px, 1fr)`, first value is `min` and the second value is `max` duh that's why is says minmax
- `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));` As you resize the browswer, it will just figure it out based on the min and the max values.

- If you used `auto-fit`, it makes this nice even grid.`grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`

- `fit-content()`, give it a max value, clamps it at that value. Can help with some edge case scenarios for fitting content.

## Grid Teplate Areas

- You can name your areas, header, sidebar, footer for example

- `grid-template-areas: "sidebar-1 content sidebar-2";`

```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-rows: 150px 150px 100px;
  grid-template-areas:
    "sidebar-1 content sidebar-2"
    "sidebar-1 content sidebar-2"
    "footer    footer  footer";
}
```

- Now you can place your items with the name of the item, it will both place it and size it.

```css
.footer {
  grid-area: footer;
}

.item1 {
  grid-area: sidebar-1;
}

.item2 {
  grid-area: content;
}

.item3 {
  grid-area: sidebar-2;
}
```

- Then you can use media queries to just redefine your template areas

```css
@media (max-width: 700px) {
  .container {
    grid-template-areas:
      "content  content  content"
      "sidebar-1  sidebar-1  sidebar-2"
      "footer     footer    footer";
  }
}
```

- You can use areas that you have created in your `grid-template-areas` using `-start` and `-end` tacked on to whatever you name your grid template areas.

```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "💩 💩 💩 💩 🍔 🍔 🍔 🍔"
    "💩 💩 💩 💩 🍔 🍔 🍔 🍔"
    "💩 💩 💩 💩 🍔 🍔 🍔 🍔"
    "💩 💩 💩 💩 🍔 🍔 🍔 🍔";
}

.item3 {
  grid-column: 💩-start/ 💩-end;
  grid-row-end: 💩-end;
}
```

## Naming Lines

- You can name your lines, using `[]` when you define your columns. `grid-tmeplate-columns`

```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns:
    [sidebar-start site-left] 1fr [sidebar-end]
    [content-start] 500px [content-end] 1fr
    [site-right];
  grid-template-rows: [content-top] repeat(10, auto) [content-bottom];
}

.item3 {
  background: slateblue;
  grid-column: content-start;
  grid-row: content-top / content-bottom;
}
```

## Dense

- `grid-auto-flow: dense`, allows items to automatically fill in spaces.

- if you don't care about the order of your items, it will just try and fit everything automatatically.

- css will layout the items that need to go in a specific spot first, then it will automatically find spots for others.

- kinda a masonary layout

```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(10, 1fr);
  grid-auto-flow: dense;
}

.item:nth-child(6n) {
  background: cornflowerblue;
  grid-column: span 6;
}

.item:nth-child(8n) {
  background: tomato;
  grid-column: span 2;
}

.item:nth-child(9n) {
  grid-row: span 2;
}

.item18 {
  background: greenyellow !important;
  grid-column-end: -1 !important;
}
```

## Grid Alignment + Centering

- 17 - CSS Grid Alignment + Centering
- 6 properties you can use for alignment

```css
    justify-items:
    align-items:

    justify-content:
    align-content:

    justify-self:
    align-self:

    justify-* is row axis
    align-* is column axis
```

- these get easily mixed up, we just keep trying things until something works

### \*-items

- applies to the items themselves, child items inside a container div for example

```html
<div class="container">
  <div class="itm itm1">1</div>
  <div class="itm itm2">2</div>
  <div class="itm itm3">3</div>
  <div class="itm itm4">4</div>
</div>
```

- `justify-items` _main axis, horizontal axis, row, x axis_

  - The default is `stretch`, will stretch the item accross the grid you have
  - `center` will ony make the grid as large as the content
  - `start` which will bring it to the start
  - `end` which will take it to the end

- `align-items` _cross axis, vertical axis, column, y axis_

  - have to specify a height `grid-template-rows`
  - same properties as above `center, start, end, stretch`

- super easy to center center an item
- if you want to do shorthand for centering, `place-items: center center`

```css
.container {
  align-items: start | end | center | stretch;
}
```

- CSS Tricks, just go here, <https://css-tricks.com/snippets/css/complete-guide-grid/>, to see an example of all the properties

### \*-content

- if your grid is larger then the items, what do we do with all that extra space?
- use properties to position the content inside the grid
- `justify-content` _horizontal axis, row, x axis_

  - if you ahve extra space in your grid, your container is wider then your grid needs to be, hard value, you can use `justify-content` to tell it where to go
  - `start, center, end, space-around, space-between` same as above
  - `space-around` will take your items, and distribute it evenly, with exception of the space at the start and end
  - `space-between` will do the same as `space-around` but without the space at the beginning and end, take the extra space and put it inbetween each one

- `align-content`, _vertical axis, column, y axis_
  - if you have a fixed height, allow you to position items with the properties below.
  - a fixed height is not as common as a row

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between
    | space-evenly;
}
```

### \*-self

- Allows us to overwrite on a case by case basis within an item
- `justify-self`, horizontal axis, x axis

```css
.item {
  justify-self: start | end | center | stretch;
}
```

- `align-self`, vertical axis, y axis

```css
.item {
  align-self: start | end | center | stretch;
}
```

## Reorder Grid Items

- `order: 2` property, can change the order of items.
- not good for A11y, messes up the DOM screen reader

## Nested Grid

- you can nest a grid item inside a grid
- without any media queries, the grid adapts with `auto-fit` and `minmax()`

```css
.albums {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
}

.album {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 10px;
  align-items: center;
  color: white;
  font-weight: 100;
}
```

## Image Gallery

## Flexbox vs Grid

- In general, grid can do everything flexbox can do
- Grid, much more consistent accross browswers, learn one thing
- Grid, if you are designing something on a single axis, and you want to go to rows, you can easily do that.
- Flexbox makes it easy to reverse the order, you can do it with the order property on Grid, but it tedious

### Axis Flip

- In grid, you can easily change the number of columns, just add a modifier class and change the `grid-template-columns`

```css
.flipper {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
}

.flipper.flip {
  grid-template-columns: 1fr 1fr;
}
```

### Controls on the right

- If you items you want to automatically place and you don't know the total number
- `grid-auto-flow: column;`

```html
<div class="tracks">
  <div class="track">
    <h2>The Future (Ft. The R.O.C.)</h2>
    <button>⭐</button>
    <button>❤️</button>
    <button>❌</button>
  </div>
</div>
<style>
  .track {
    background: white;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
  }
</style>
```

### Perfectly Centered

- Flexbox

```css
.hero {
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

- Grid

```css
.hero {
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  display: grid;
  justify-items: center;
  align-content: center;
}
```

### Unknown number of items

```css
.unknown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 20px;
}
```

## VS Code Flex Cheatsheet

- Install this cheatsheet to help with alignment properties
- <https://marketplace.visualstudio.com/items?itemName=dzhavat.css-flexbox-cheatsheet>
