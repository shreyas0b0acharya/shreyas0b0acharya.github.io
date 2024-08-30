function loadContent(selectedData) {
    console.log(`nav_html_files/${selectedData}.js`);

    fetch(`nav_html_files/${selectedData}.js`)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.text();
    })
    .then((text) => {
        eval(text);
    })
    .catch((e) => console.error(e));
}
