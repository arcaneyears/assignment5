const box = document.getElementById("styleBox");
const info = document.getElementById("styleInfo");

const colors = ["#ffd7a8", "#c7e5c0", "#cfe2ff", "#f3c9df", "#e2d3f5"];
const startColor = "#e9ecef";
const startSize = 16;

let colorIndex = 0;
let fontSize = startSize;

function showInfo() {
    info.textContent = "Background: " + box.style.backgroundColor + ", font size: " + fontSize + "px";
}

box.style.backgroundColor = startColor;
box.style.fontSize = fontSize + "px";
showInfo();

document.getElementById("colorButton").addEventListener("click", function () {
    box.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    showInfo();
});

document.getElementById("biggerButton").addEventListener("click", function () {
    if (fontSize < 32) {
        fontSize = fontSize + 2;
        box.style.fontSize = fontSize + "px";
    }

    showInfo();
});

document.getElementById("smallerButton").addEventListener("click", function () {
    if (fontSize > 10) {
        fontSize = fontSize - 2;
        box.style.fontSize = fontSize + "px";
    }

    showInfo();
});

document.getElementById("resetButton").addEventListener("click", function () {
    colorIndex = 0;
    fontSize = startSize;
    box.style.backgroundColor = startColor;
    box.style.fontSize = fontSize + "px";
    showInfo();
});
