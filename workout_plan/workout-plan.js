function loadContent(selectedData) {
    var contentElem = document.getElementById("content_body");
    console.log(`nav_html_files/${selectedData}.txt`);

    fetch(`nav_html_files/${selectedData}.txt`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.text();
    })
    .then((text) => {
        contentElem.innerHTML = text;
    })
    .catch((e) => console.error(e));
}
