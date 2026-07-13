const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const addBtn = document.querySelector("#add-btn");//DAY 5
const itemsLeft = document.querySelector("#items-left");
const emptyState = document.querySelector("#empty-state");
const clearCompletedBtn = document.querySelector("#clear-completed");

const filterTabs = document.querySelectorAll(".filter-tab");


let todos = [];

let currentFilter = "all";


// Save todos in localStorage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}


// Load todos from localStorage
function loadTodos() {

    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
        todos = JSON.parse(savedTodos);
    }

}


// Draw the list
function renderTodos() {

    // clear old list
    list.innerHTML = "";


    // filter todos
    let filteredTodos = todos;

    if (currentFilter === "active") {

        filteredTodos = todos.filter(todo => todo.completed === false);

    } else if (currentFilter === "completed") {

        filteredTodos = todos.filter(todo => todo.completed === true);

    }



    // create each li
    filteredTodos.forEach(todo => {

        const li = document.createElement("li");

        li.className = "todo-item";

        if (todo.completed) {
            li.className = "todo-item completed";
        }


        li.dataset.id = todo.id;


        li.innerHTML = `

           <button class="todo-check ${todo.completed ? "checked" : ""}"aria-label="Complete task">
                ${todo.completed ? "✓" : ""}
            </button>


            <span class="todo-text">
                ${todo.text}
            </span>


            <button class="todo-delete"aria-label="Delete task">
                Delete
            </button>

        `;


        list.appendChild(li);

    });



    // count unfinished tasks
    const left = todos.filter(todo => todo.completed === false).length;

    itemsLeft.textContent = left;



    // show empty message
    if (todos.length === 0) {

        emptyState.removeAttribute("hidden");

    } else {

        emptyState.setAttribute("hidden", "");

    }

}
input.addEventListener("input", () => {
    addBtn.disabled = input.value.trim().length === 0;
});


// CREATE : add new todo
form.addEventListener("submit", (event) => {

    event.preventDefault();


    const text = input.value.trim();


    if (text === "") {
        return;
    }


    todos.push({

        id: Date.now().toString(),

        text: text,

        completed: false

    });


    saveTodos();

    renderTodos();


    input.value = "";
    addBtn.disabled = true;

});




// UPDATE + DELETE using event delegation

list.addEventListener("click", (event) => {


    const todoElement = event.target.closest(".todo-item");


    if (!todoElement) {
        return;
    }


    const id = todoElement.dataset.id;



    // Check / uncheck
    if (event.target.classList.contains("todo-check")) {


        const todo = todos.find(todo => todo.id === id);


        todo.completed = !todo.completed;


        saveTodos();

        renderTodos();

    }



    // Delete
    if (event.target.classList.contains("todo-delete")) {


        todos = todos.filter(todo => todo.id !== id);


        saveTodos();

        renderTodos();

    }


});




// EDIT todo
list.addEventListener("dblclick", (event) => {


    if (event.target.classList.contains("todo-text")) {


        const todoElement = event.target.closest(".todo-item");

        const id = todoElement.dataset.id;


        const todo = todos.find(todo => todo.id === id);



        const inputEdit = document.createElement("input");

        inputEdit.className = "todo-edit-input";

        inputEdit.value = todo.text;



        event.target.replaceWith(inputEdit);


        inputEdit.focus();



        function saveEdit() {

            const newText = inputEdit.value.trim();


            if (newText !== "") {

                todo.text = newText;

                saveTodos();

            }


            renderTodos();

        }



        inputEdit.addEventListener("keydown", (e) => {


            if (e.key === "Enter") {

                saveEdit();

            }


            if (e.key === "Escape") {

                renderTodos();

            }

        });



        inputEdit.addEventListener("blur", saveEdit);


    }


});




// FILTERS

filterTabs.forEach(tab => {


    tab.addEventListener("click", () => {


        currentFilter = tab.dataset.filter;



        filterTabs.forEach(t => {

            t.classList.remove("active");

        });


        tab.classList.add("active");


        renderTodos();


    });


});




// CLEAR COMPLETED

clearCompletedBtn.addEventListener("click", () => {


    todos = todos.filter(todo => todo.completed === false);


    saveTodos();

    renderTodos();


});




// Start app

loadTodos();

renderTodos();
