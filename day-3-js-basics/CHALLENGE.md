# Day 3 Challenge: Make "Add Task" Work

**Goal:** create `project/script.js`, link it, and make it so typing a
task and pressing "Add" (or Enter) shows it in the list. This is
in-memory only for now — refreshing the page will lose your tasks. That's
OK, that's exactly why Day 4 exists (saving data).

## Steps

1. At the bottom of `project/index.html`'s `<body>`, add:
   ```html
   <script src="script.js"></script>
   ```
2. In `project/script.js`, grab the elements you need:
   ```js
   const form = document.querySelector("#todo-form");
   const input = document.querySelector("#todo-input");
   const list = document.querySelector("#todo-list");
   ```
3. Listen for the form being submitted:
   ```js
   form.addEventListener("submit", (event) => {
     event.preventDefault();
     // your code goes here
   });
   ```
4. Inside that listener:
   - Read `input.value` and remove extra spaces from the start/end
     (hint: strings have a `.trim()` method).
   - If the trimmed text is empty, do nothing (`return;`).
   - Otherwise, build a new `<li>` matching this exact shape (use
     `document.createElement` and `.innerHTML`, or build it piece by
     piece — your choice):
     ```html
     <li class="todo-item">
       <button class="todo-check" aria-label="Mark complete"></button>
       <span class="todo-text">Buy milk</span>
       <button class="todo-delete" aria-label="Delete task">✕</button>
     </li>
     ```
     (replace "Buy milk" with the text the user typed)
   - Append it to `list` with `list.appendChild(...)`.
   - Clear the input afterwards: `input.value = "";`

Don't worry about making the checkbox or delete button actually DO
anything yet — that's Day 4. Just get new tasks appearing in the list.

## Definition of Done

- [ ] Typing text and clicking "Add" (or pressing Enter) adds a new task
  to the visible list.
- [ ] Adding an empty or blank (spaces-only) task does nothing.
- [ ] The input box clears itself after adding a task.
- [ ] The new `<li>` uses the exact same classes as the reference design
  (`.todo-item`, `.todo-check`, `.todo-text`, `.todo-delete`), so it
  already looks styled correctly (thanks to your Day 2 CSS).

## Commit checkpoint

```sh
git add project/index.html project/script.js
git commit -m "Add in-memory add-task functionality"
git push origin main
```

Check your Day 3 box in the root `README.md`, then move to
`day-4-js-crud/LESSON.md`.
