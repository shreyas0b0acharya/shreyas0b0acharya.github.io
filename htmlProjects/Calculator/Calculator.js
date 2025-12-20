// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Calculate the result and handle errors
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch {
        display.value = 'Error'; // Display error message if there's an error
    }
}
