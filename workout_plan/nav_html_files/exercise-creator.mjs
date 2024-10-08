export function contentLoader(imageList,nameList) {

    const buttonDiv = document.querySelectorAll(".button");
    buttonDiv.forEach(button => {
    button.style.display = 'flex';
    });

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
        console.log(imageList[i])
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

        for (let j = 1; j < 5; j++) {
            // Create a label element
            let labelDiv = document.createElement("label");
            labelDiv.setAttribute("for", `set${j}`);
            labelDiv.innerHTML = `Set-${j}`;
            checkboxMainDiv.appendChild(labelDiv);
        
            // Create a checkbox input element
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            checkbox.id = `set${j}`;
            labelDiv.appendChild(checkbox);
        }

        let timerDiv = document.createElement("div");
        timerDiv.classList.add("timer-div");
        exerciseDiv.appendChild(timerDiv);

        let timerAnimationDiv = document.createElement("div");
        timerAnimationDiv.classList.add("timer-animation-div");
        timerDiv.appendChild(timerAnimationDiv);

        let timerAnimation= document.createElement("div");
        timerAnimation.classList.add("timer-animation");
        timerAnimation.id = `timer-animation-${i+1}`;
        
        timerAnimationDiv.appendChild(timerAnimation);

        let timerCount = document.createElement("div");
        timerCount.classList.add("timer-count");
        timerCount.innerHTML = "00:00";
        timerCount.id = `timer-${i+1}`;
        timerDiv.appendChild(timerCount);

        let timerInput =document.createElement("div");
        timerInput.classList.add("timer-input");
        timerDiv.appendChild(timerInput);

        let audio = document.createElement("audio");
        audio.id = `audio-${i+1}`;
        audio.src = "audio/audio-file.mp3"; 
        timerInput.appendChild(audio);

        var timerList = ["0:30","1:00","1:30","2:00"];
        var secondsList = ["30","60","90","120"];
        for (let k = 0; k < 4; k++) {
            let buttonDiv = document.createElement("button");
            buttonDiv.innerHTML = timerList[k];
            buttonDiv.classList.add("button");

            buttonDiv.onclick = function() {
                console.log(i+1);
                setTimer(i+1,secondsList[k]);
                
            };
            console.log(`setTimer('${secondsList[k]}')`)
            timerInput.appendChild(buttonDiv);
        }

        let buttonDiv = document.createElement("button");
        buttonDiv.innerHTML = "Reset";
        buttonDiv.classList.add("button");
        buttonDiv.onclick = () => {
            stopTimer(i+1);
        }
        timerDiv.appendChild(buttonDiv);
    }  
    let exerciseDivs = document.querySelectorAll(".exercise");

console.log(`Total exercise elements: ${exerciseDivs.length}`);

}

export function exerciseListLoader(imageList,nameList) {

    const buttonDiv = document.querySelectorAll(".button");
    buttonDiv.forEach(button => {
    button.style.display = 'none';
    });



    let mainDiv = document.getElementById("main-content");

    let mainDivlist = document.createElement("div");
    mainDivlist.id='main-content-list';
    mainDiv.appendChild(mainDivlist);

    for (let i = 0; i < imageList.length; i++) {

        
        // Create a new div for the exercise
        let exerciseDiv = document.createElement("div");
        exerciseDiv.id = `exercise-${i+1}`;
        
        exerciseDiv.classList.add('exercise-list');
        mainDivlist.appendChild(exerciseDiv);

        // Create a new div for image and name
        let imageAndNameDiv = document.createElement("div");
        imageAndNameDiv.classList.add("image-and-name-list");
        exerciseDiv.appendChild(imageAndNameDiv);

        // Create an img element and set its attributes
        let imgDiv = document.createElement('img');
        console.log(imageList[i])
        imgDiv.src = imageList[i];
        
        imgDiv.classList.add("exercise-gif-list");  
        imageAndNameDiv.appendChild(imgDiv);

        // Create an name for the img
        let imgName = document.createElement("span");
        imgName.innerHTML = nameList[i];
        imageAndNameDiv.appendChild(imgName);

    }  

}

// Ensure the contentLoader function is called after defining it

