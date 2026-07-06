# Day 3: JavaScript Basics — Making the Page Interactive

HTML is the skeleton, CSS is the paint — JavaScript (JS) is what makes
the page actually DO something: react to clicks, remember things, change
what's on screen.

## 1. Variables — a labeled box

A variable is like a labeled box you can put something into, and change
later.

```js
let taskName = "Buy milk";
console.log(taskName); // "Buy milk"
taskName = "Buy milk and eggs"; // you can change what's in the box
```

Use `let` when the value can change later. Use `const` when it should
never change (e.g. `const taskList = document.querySelector("#todo-list");`
— you're not changing WHICH element that is, even if its contents change).

## 2. Functions — a coffee machine

A function is like a coffee machine: you put something in (beans,
water), it does a fixed job (brewing), and it gives you something back
(coffee). You can use it over and over.

```js
function greet(name) {
  return "Hello, " + name + "!";
}

greet("Sara"); // "Hello, Sara!"
greet("Ali");  // "Hello, Ali!"
```

There's also a shorter way to write small functions, called an "arrow
function":

```js
const greet = (name) => {
  return "Hello, " + name + "!";
};
```

Both versions work the same way.

## 3. Conditionals — a fork in the road

A conditional is like a sign at a fork in the road: "If it's raining,
take the umbrella. Otherwise, take sunglasses."

```js
let isRaining = true;

if (isRaining) {
  console.log("Take the umbrella");
} else {
  console.log("Take sunglasses");
}
```

## 4. Arrays — a shopping list

An array is an ordered list of items, just like a shopping list.

```js
let shoppingList = ["milk", "eggs", "bread"];
shoppingList[0]; // "milk" (lists start counting from 0, not 1!)
```

Arrays have built-in tools ("methods") to work with the list:

- **`.push(item)`** — add an item to the end of the list.
  ```js
  shoppingList.push("butter"); // ["milk", "eggs", "bread", "butter"]
  ```
- **`.filter(...)`** — make a NEW list with only the items that pass a
  test, e.g. "only fruits":
  ```js
  let numbers = [1, 2, 3, 4, 5, 6];
  let evens = numbers.filter((n) => n % 2 === 0); // [2, 4, 6]
  ```
- **`.map(...)`** — make a NEW list where every item is transformed the
  same way, e.g. "make every name uppercase":
  ```js
  let names = ["ana", "leo"];
  let shouting = names.map((n) => n.toUpperCase()); // ["ANA", "LEO"]
  ```
- **`.find(...)`** — find and return the FIRST item that passes a test:
  ```js
  let people = [{ name: "Ana" }, { name: "Leo" }];
  let found = people.find((p) => p.name === "Leo"); // { name: "Leo" }
  ```
- **`.forEach(...)`** — do something with EVERY item, one at a time (used
  a lot for drawing a list on the screen):
  ```js
  shoppingList.forEach((item) => {
    console.log("I need to buy: " + item);
  });
  ```

## 5. Template literals — filling in the blanks

A template literal lets you build a string with variables inside it,
using backticks (`` ` ``) instead of quotes:

```js
let name = "Sara";
console.log(`Hello, ${name}!`); // "Hello, Sara!"
```

This is easier to read than `"Hello, " + name + "!"` once strings get
longer.

## 6. Talking to the page — `querySelector` and `addEventListener`

`querySelector` is like pointing your finger at exactly the element you
want on the page, using the same kind of selector you used in CSS:

```js
const input = document.querySelector("#todo-input");
const form = document.querySelector("#todo-form");
```

`addEventListener` is like telling the page: "when this happens, ring
this bell" — run a function whenever an event (like a click, or a form
submit) happens:

```js
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading
  console.log("Form was submitted!");
});
```

`event.preventDefault()` stops the browser's normal behavior (reloading
the page when a form is submitted) so YOUR code can handle it instead.

## Recap

Today you learned: variables, functions, conditionals, arrays (and
`push`/`filter`/`map`/`find`/`forEach`), template literals, and how to
grab elements and listen for events. First, warm up with
`practice.js`. Then do `CHALLENGE.md`.
