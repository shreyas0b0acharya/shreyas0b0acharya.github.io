import pyautogui
import time

# Define the delay between each character (in seconds)
typing_speed = 0.04  # Adjust this for faster or slower typing

# HTML code to be typed
html_code = """Full URL to fetch from Unsplash:
https://api.unsplash.com/search/photos?query=${cityNameInput}&client_id=53bf591792cadb5afc28d94074a14dc4

Base URL:https://api.unsplash.com/search/photos.

Query Parameters:

	query=${cityNameInput}:
		Input search term (e.g., "New York").

	client_id=XBTkHjyzPIKk85ztWIOdyTainOWCC7sX09YLeKw6e5A:
		API key for authentication (obtain it by creating an Unsplash developer account).

link to the full JSON documentation for the Unsplash API:	https://unsplash.com/documentation
	
NOTE: The appid shown here is not a real one. Please use your own valid API key.

Links also in description.
"""

# Wait for 3 seconds to give you time to focus the cursor where you want to type
print("Position your cursor in the text field. Typing will start in 3 seconds...")
time.sleep(30)  # Corrected to 3 seconds

# Simulate typing the HTML code
for char in html_code:
    pyautogui.write(char)  # Type the character
    time.sleep(typing_speed)  # Delay between characters