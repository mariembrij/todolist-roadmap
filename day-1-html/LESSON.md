# Day 1: HTML — Building the Skeleton

Today you learn HTML and build the frame of your todo app. Think of
today like building the **frame of a house** — no paint, no furniture
yet, just the walls and rooms in the right place.

## 1. What is HTML?

HTML stands for HyperText Markup Language. It's not a programming
language — it doesn't calculate anything. It just describes **what is on
the page**: "this is a title", "this is a button", "this is a list".

## 2. The basic skeleton of every page

Every HTML page starts with the same shape:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <!-- everything visible goes here -->
</body>
</html>
```

- `<!DOCTYPE html>` tells the browser "this is a modern HTML page".
- `<head>` holds information ABOUT the page (its title, fonts, styles) —
  nothing in here is directly visible.
- `<body>` holds everything the user actually SEES.

## 3. Semantic tags — labeled rooms in a house

A house isn't just four walls — it has labeled rooms: kitchen, bedroom,
bathroom. HTML has "semantic" tags that work the same way — they say what
each part of the page is FOR:

- `<header>` — the top area, like the entrance of a house.
- `<main>` — the main content, like the living room.
- `<footer>` — the bottom area, like a basement or utility room.
- `<section>` — a labeled section inside a bigger area.

Using the right tag for the right job helps browsers, search engines, and
people using screen readers understand your page.

## 4. Attributes — a name tag with extra details

An attribute adds extra information to a tag, like a name tag at a
conference that also lists your job title. Attributes go inside the
opening tag:

```html
<button id="add-btn" class="add-btn">Add</button>
```

- `id="add-btn"` — a unique name for THIS ONE element (only one element
  on the page should ever have a given id). Later, JavaScript uses the id
  to find this exact element.
- `class="add-btn"` — a label you can reuse on many elements, mainly used
  by CSS to style them the same way.
- Other common attributes: `type`, `placeholder`, `href`, `src`.

## 5. Forms and inputs — like a form at the doctor's office

When you visit a doctor for the first time, you fill out a paper form:
name, text boxes to write in, a button to submit it. HTML forms work the
same way:

```html
<form>
  <input type="text" placeholder="Your name">
  <button type="submit">Send</button>
</form>
```

- `<input type="text">` — a box where the user types text.
- `placeholder="..."` — light grey hint text shown before they type
  anything (it disappears once they start typing).
- `<button type="submit">` — pressing it submits the form.

## 6. Lists — like a shopping list

A shopping list is just an ordered set of items. HTML has the same idea:

```html
<ul>
  <li>Milk</li>
  <li>Eggs</li>
  <li>Bread</li>
</ul>
```

- `<ul>` = "unordered list" (a list with bullet points, no numbers).
- `<li>` = "list item" — one entry in the list.

Our todo list will be one `<ul>`, and every task will be one `<li>`.

## 7. The DOM (just a preview — JavaScript comes on Day 3)

When a browser loads your HTML, it builds a tree in memory called the
**DOM** (Document Object Model). Think of your HTML as the blueprint, and
the DOM as the actual built house, that JavaScript can later walk into
and rearrange furniture in (add elements, remove elements, change text).
You don't need to do anything with the DOM today — just know it exists,
and that `id`s and `class`es you add today are the "door handles"
JavaScript will grab onto later.

## 8. Accessibility basics — clear signs for everyone

A well-designed building has clear signs so EVERYONE can find their way,
including people who can't see well. Websites need the same thing:

- Every input should have a `label` or an `aria-label` describing what
  it's for, so someone using a screen reader knows what to type.
- Buttons that only show an icon (no text) need an `aria-label`, e.g.
  `<button aria-label="Delete task">✕</button>`.

## Recap

Today you learned: the page skeleton, semantic tags (`header`/`main`/
`footer`), attributes (`id`/`class`), forms (`input`/`button`), lists
(`ul`/`li`), what the DOM is, and basic accessibility. Now go build the
skeleton of your todo app in `CHALLENGE.md`.
