import pyautogui
import time

# Define the delay between each character (in seconds)
typing_speed = 0.04  # Adjust this for faster or slower typing

# HTML code to be typed
html_code = """// Clear the display
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
"""

# Wait for 3 seconds to give you time to focus the cursor where you want to type
print("Position your cursor in the text field. Typing will start in 3 seconds...")
time.sleep(8)  # Corrected to 3 seconds

# Simulate typing the HTML code
for char in html_code:
    pyautogui.write(char)  # Type the character
    time.sleep(typing_speed)  # Delay between characters
