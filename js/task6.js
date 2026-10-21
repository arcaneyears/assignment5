const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");
const lengthOutput = document.getElementById("lengthOutput");
const keyOutput = document.getElementById("keyOutput");

liveInput.addEventListener("keyup", function (event) {
    const text = liveInput.value;

    liveOutput.textContent = text === "" ? "nothing yet" : text;
    lengthOutput.textContent = text.length;
    keyOutput.textContent = event.key;
});
