import pyautogui
import time

# Define the delay between each character (in seconds)
typing_speed = 0.04  # Adjust this for faster or slower typing

# HTML code to be typed
html_code = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubble Sort</title>
    <link rel="stylesheet" href="bubbleSort.css">

</head>
<body>
    <header>Bubble Sort</header>

    <main>
        <div id="graph_id"></div>
        <div id="op_id">
            <button class="btn" onclick="start_sorting()">Start</button>
            <button class="btn" onclick="blocks()">Create</button>

            <div>
                <label for="list_size_volume">List Size</label>
                <input type="range" id="list_size_volume" min="0" max="100" value="20">  
                <div id="size_display"></div>
            </div>

            <div>
                <label for="speed_volume">Speed</label>
                <input type="range" id="speed_volume" min="0" max="500" value="500">  
                <div id="speed_display"></div>
            </div>

        </div>

    </main>
    <script src="bubbleSort.js"></script>
</body>
</html>
"""

# Wait for 3 seconds to give you time to focus the cursor where you want to type
print("Position your cursor in the text field. Typing will start in 3 seconds...")
time.sleep(5)  # Corrected to 3 seconds

# Simulate typing the HTML code
for char in html_code:
    pyautogui.write(char)  # Type the character
    time.sleep(typing_speed)  # Delay between characters
