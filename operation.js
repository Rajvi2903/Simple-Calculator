let display = document.getElementById("display");
let isResultDisplayed = false;
function appendValue(value) {
    if (isResultDisplayed) {
        clearDisplay();
        isResultDisplayed = false;
    }
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
        isResultDisplayed = true;
    } catch (error) {
        display.value = "Error";
        isResultDisplayed = true;
    }
}
