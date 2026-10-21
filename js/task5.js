const hoverBox = document.getElementById("hoverBox");
const eventLog = document.getElementById("eventLog");

const originalColor = "#0d6efd";
const hoverColor = "#198754";
const originalText = hoverBox.textContent;

hoverBox.style.backgroundColor = originalColor;

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = hoverColor;
    hoverBox.textContent = "The mouse is over the box";
    eventLog.textContent = "Event: mouseover, color " + hoverColor;
});

hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = originalColor;
    hoverBox.textContent = originalText;
    eventLog.textContent = "Event: mouseout, color " + originalColor;
});
