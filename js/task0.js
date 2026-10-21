const studentName = "Yersaiyn Taubay";
const studentGroup = "SE-2524";

function printStudent() {
    console.log("Student: " + studentName);
    console.log("Group: " + studentGroup);
}

printStudent();
alert("Hello, JavaScript World!");

document.getElementById("alertButton").addEventListener("click", function () {
    alert("Hello, JavaScript World!");
});

document.getElementById("logButton").addEventListener("click", printStudent);
