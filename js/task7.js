const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");
const operationButtons = document.querySelectorAll("button[data-operation]");

function calculate(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return NaN;
    }
}

function round(value) {
    return Math.round(value * 1000000) / 1000000;
}

operationButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const a = parseFloat(firstNumber.value);
        const b = parseFloat(secondNumber.value);
        const operation = button.dataset.operation;

        if (isNaN(a) || isNaN(b)) {
            result.textContent = "Please enter both numbers";
            return;
        }

        if (operation === "/" && b === 0) {
            result.textContent = "Division by zero is not possible";
            return;
        }

        result.textContent = a + " " + operation + " " + b + " = " + round(calculate(a, b, operation));
    });
});

document.getElementById("clearButton").addEventListener("click", function () {
    firstNumber.value = "0";
    secondNumber.value = "0";
    result.textContent = "Result will appear here";
});
