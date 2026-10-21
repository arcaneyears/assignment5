let firstName = "Yersaiyn";
let lastName = "Taubay";
let group = "SE-2524";
let course = 2;
let age = 19;
let isStudent = true;

const sum = course + age;
const difference = age - course;
const product = age * course;
const quotient = age / course;
const remainder = age % course;
const power = course ** 3;

const fullName = firstName + " " + lastName;
const introduction = fullName + " from group " + group;
const template = `${fullName} is ${age} years old and studies on course ${course}.`;

const variables = [
    "firstName = " + firstName + " (" + typeof firstName + ")",
    "group = " + group + " (" + typeof group + ")",
    "course = " + course + " (" + typeof course + ")",
    "age = " + age + " (" + typeof age + ")",
    "isStudent = " + isStudent + " (" + typeof isStudent + ")"
];

const math = [
    age + " + " + course + " = " + sum,
    age + " - " + course + " = " + difference,
    age + " * " + course + " = " + product,
    age + " / " + course + " = " + quotient,
    age + " % " + course + " = " + remainder,
    course + " ** 3 = " + power
];

const strings = [
    fullName,
    introduction,
    template
];

function printAll() {
    console.log("--- Variables ---");
    variables.forEach(function (line) {
        console.log(line);
    });

    console.log("--- Arithmetic operations ---");
    math.forEach(function (line) {
        console.log(line);
    });

    console.log("--- String concatenation ---");
    strings.forEach(function (line) {
        console.log(line);
    });
}

function fillList(id, lines) {
    const list = document.getElementById(id);

    lines.forEach(function (line) {
        const item = document.createElement("li");
        item.textContent = line;
        list.appendChild(item);
    });
}

fillList("variableList", variables);
fillList("mathList", math);
fillList("stringList", strings);

printAll();

document.getElementById("runButton").addEventListener("click", printAll);
