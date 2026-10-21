const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoError = document.getElementById("todoError");
const todoCounter = document.getElementById("todoCounter");

const tasks = [];

function updateCounter() {
    if (tasks.length === 0) {
        todoCounter.textContent = "No tasks yet.";
        return;
    }

    const done = tasks.filter(function (task) {
        return task.done;
    }).length;

    todoCounter.textContent = "Completed " + done + " of " + tasks.length + " tasks.";
}

function render() {
    todoList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const item = document.createElement("li");
        item.className = "list-group-item todo-item";

        const text = document.createElement("span");
        text.className = task.done ? "todo-text todo-done" : "todo-text";
        text.textContent = task.text;
        text.addEventListener("click", function () {
            tasks[index].done = !tasks[index].done;
            render();
        });

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-sm btn-outline-danger";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            tasks.splice(index, 1);
            render();
        });

        item.appendChild(text);
        item.appendChild(deleteButton);
        todoList.appendChild(item);
    });

    updateCounter();
}

todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const value = todoInput.value.trim();

    if (value === "") {
        todoError.classList.remove("d-none");
        return;
    }

    todoError.classList.add("d-none");
    tasks.push({ text: value, done: false });
    todoInput.value = "";
    todoInput.focus();
    render();
});

render();
