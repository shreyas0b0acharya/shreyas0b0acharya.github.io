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
let imageList = ["images/jump-rope.gif" ,"images/jumping-jacks.gif"];
let nameList = ["Jump Rope" ,"Jumping Jacks"];

function contentLoader() {
    let mainDiv = document.getElementById("main-content");
    for (let i = 0; i < imageList.length; i++) {

        // Create a new div for the exercise
        let exerciseDiv = document.createElement("div");
        exerciseDiv.id = `exercise-${i+1}`;
        exerciseDiv.classList.add('exercise');
        mainDiv.appendChild(exerciseDiv);

        // Create a new div for image and name
        let imageAndNameDiv = document.createElement("div");
        imageAndNameDiv.classList.add("image-and-name");
        exerciseDiv.appendChild(imageAndNameDiv);

        // Create an img element and set its attributes
        let imgDiv = document.createElement('img');
        imgDiv.src = imageList[i];
        imgDiv.classList.add("exercise-gif");  
        imageAndNameDiv.appendChild(imgDiv);

        // Create an name for the img
        let imgName = document.createElement("span");
        imgName.innerHTML = nameList[i];
        imageAndNameDiv.appendChild(imgName);

        // create checkbox main div
        let checkboxMainDiv = document.createElement("div");
        checkboxMainDiv.classList.add("checkbox-main-div");
        exerciseDiv.appendChild(checkboxMainDiv);

        // create loop of checkboxes

        for (let i = 1; i < 5; i++) {
            // Create a label element
            let labelDiv = document.createElement("label");
            labelDiv.setAttribute("for", `set${i}`);
            labelDiv.innerHTML = `Set-${i}`;
            checkboxMainDiv.appendChild(labelDiv);
        
            // Create a checkbox input element
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            checkbox.id = `set${i}`;
            labelDiv.appendChild(checkbox);
        }

        let timerDiv = document.createElement("div");
    }
    
}

// Ensure the contentLoader function is called after defining it
contentLoader();
