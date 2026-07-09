const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = input.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");

    li.className = "todo-item";

    li.innerHTML = `
        <button class="todo-check" aria-label="Mark complete"></button>
        <span class="todo-text">${task}</span>
        <button class="todo-delete" aria-label="Delete task">✕</button>
    `;

    list.appendChild(li);

    input.value = "";
});