let imageList = ["images/jump-rope.gif",
    "images/jumping-jacks.gif",
    "images/arm-circles.gif",
    "images/shoulder-rotations.gif",
    "images/pull-ups.gif",
    "images/single-arm-inverted-rows.webp",
    "images/bar-dips.gif",
    "images/pushup.gif",
    "images/front-lever-progression.gif",
    "images/v-ups.gif"];

let nameList = ["Jump Rope",
    "Jumping Jacks"];

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
}

// Ensure the contentLoader function is called after defining it
contentLoader();
var total_slides=document.getElementsByClassName("exercise").length;
console.log(total_slides);
var present_slide = 0;
function next_btn() {
    console.log("Next button clicked");
    present_slide+=1;
    if (present_slide > total_slides-1){
        present_slide =0;
    }
    
    let exercise_div = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercise_div.length; i++) {
        exercise_div[i].style.transform = `translateX(-${present_slide * 100}%)`;
    }
    
}

function prev_btn() {
    console.log("Next button clicked");
    present_slide-=1;
    if (present_slide < 0){
        present_slide =total_slides-1;
    }
    
    let exercise_div = document.getElementsByClassName("exercise");
    for (let i = 0; i < exercise_div.length; i++) {
        exercise_div[i].style.transform = `translateX(-${present_slide * 100}%)`;
    }
    
}