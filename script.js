let display = document.getElementById('display');

// Append value to the display
function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch (error) {
    display.value = "Error";
  }
}
