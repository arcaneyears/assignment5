const paragraph = document.getElementById("demoParagraph");
const changeButton = document.getElementById("changeButton");
const restoreButton = document.getElementById("restoreButton");

const originalText = paragraph.textContent;

const sentences = [
    "The text was changed by JavaScript.",
    "The textContent property replaces the content of an element.",
    "Every click shows the next sentence from the array.",
    "This is the last sentence, the next click starts again."
];

let index = 0;

changeButton.addEventListener("click", function () {
    paragraph.textContent = sentences[index];
    index = (index + 1) % sentences.length;
});

restoreButton.addEventListener("click", function () {
    paragraph.textContent = originalText;
    index = 0;
});
