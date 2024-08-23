function loadContent(selectedData) {
    var contentElem = document.getElementById("content_body");
    console.log(`nav_html_files/${selectedData}.txt`);
    fetch(`nav_html_files/${selectedData}.txt`)
    .then(response => response.text())  // Corrected to response.text()
    .then(data => contentElem.innerHTML = data)  // Use innerHTML to insert the HTML content
    .catch(error => console.error("Error:", error));  // Fixed the parenthesis and added a colon after "Error"
}
