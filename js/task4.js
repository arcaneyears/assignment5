const list = document.getElementById("itemList");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const counter = document.getElementById("counter");

let nextNumber = list.children.length + 1;

function updateCounter() {
    const total = list.children.length;
    counter.textContent = "Items in the list: " + total;
    removeButton.disabled = total === 0;
}

addButton.addEventListener("click", function () {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.textContent = "Item " + nextNumber;
    list.appendChild(item);
    nextNumber = nextNumber + 1;
    updateCounter();
});

removeButton.addEventListener("click", function () {
    const last = list.lastElementChild;

    if (last) {
        list.removeChild(last);
        nextNumber = nextNumber - 1;
    }

    updateCounter();
});

updateCounter();
