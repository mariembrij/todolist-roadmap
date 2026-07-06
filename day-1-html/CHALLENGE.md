# Day 1 Challenge: Build the Todo App Skeleton

**Goal:** create `project/index.html` — the HTML skeleton of your todo
app. No colors, no fonts, no JavaScript yet — just the correct structure.
It will look plain and ugly today. That's expected! Day 2 makes it pretty.

## What to build

Create the file `project/index.html`. Inside `<body>`, build this
structure. **Use these exact `id` and `class` names** — later lessons
(CSS, then JavaScript) depend on them being exactly right:

- A `<main class="app-card">` wrapping everything below.
- Inside it, a `<header class="app-header">` containing:
  - An `<h1>` with your app's title (e.g. "My Tasks").
  - A `<p class="app-subtitle">` with a short subtitle (e.g. "Stay on top
    of your day").
- A `<form id="todo-form" class="todo-form">` containing:
  - An `<input type="text" id="todo-input" class="todo-input">` with a
    `placeholder` and an `aria-label` (e.g. `aria-label="New task"`).
  - A `<button type="submit" id="add-btn" class="add-btn">Add</button>`.
- A `<div class="filter-tabs">` containing 3 buttons:
  - `<button class="filter-tab active" data-filter="all">All</button>`
  - `<button class="filter-tab" data-filter="active">Active</button>`
  - `<button class="filter-tab" data-filter="completed">Completed</button>`
- An empty `<ul id="todo-list" class="todo-list"></ul>` — leave it empty,
  JavaScript will fill it with tasks on Day 3/4.
- A `<p id="empty-state" class="empty-state" hidden>No tasks yet. Add your
  first one above!</p>` — the `hidden` attribute hides it for now.
- A `<footer class="app-footer">` containing:
  - `<span id="items-left">0 items left</span>`
  - `<button id="clear-completed" class="clear-btn">Clear completed</button>`

Don't forget the page skeleton around it (`<!DOCTYPE html>`, `<html
lang="en">`, `<head>` with a `<meta charset="UTF-8">` and a `<title>`).

## Definition of Done

- [ ] `project/index.html` exists and opens in a browser without errors.
- [ ] Every id/class listed above is present, spelled exactly as shown.
- [ ] The page shows: a title, a subtitle, a text box + Add button, 3
  filter buttons, an empty list area, and a footer with a count + a
  "Clear completed" button (even though nothing works yet — that's fine).
- [ ] You used at least one semantic tag correctly (`header`, `main`,
  `footer`, `form`).

## Commit checkpoint

Once the page looks structurally right in your browser (even unstyled):

```sh
git add project/index.html
git commit -m "Add HTML skeleton for todo app"
git push origin main
```

Check your checklist box for Day 1 in the root `README.md`, then move to
`day-2-css/LESSON.md`.
