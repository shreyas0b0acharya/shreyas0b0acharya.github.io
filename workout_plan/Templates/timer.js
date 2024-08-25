

function formateTime(id,seconds,height) {
    var timerAnimateDiv = document.getElementById(`timer-animation-${id}`);
    var currentHeight = parseFloat(window.getComputedStyle(timerAnimateDiv).height); // Get the current height in pixels
    timerAnimateDiv.style.height = (currentHeight + height) + 'px'; // Add the desired height and set it in pixels


    let formateMinutes = parseInt(seconds/60);
    let formateSeconds = seconds % 60;

    let timer = document.getElementById(`timer-${id}`);

    timer.innerHTML = `${String(formateMinutes).padStart(2,0)}:${String(formateSeconds).padStart(2,0)}`;
    console.log(`${String(formateMinutes).padStart(2,0)}:${String(formateSeconds).padStart(2,0)}`)
}

var running = false;
var intervalId;
var height =0;

function setTimer(id,seconds) {
    var timerAnimateDiv = document.getElementById(`timer-animation-${id}`);
    console.log(`timer-animation-${id}`);
    timerAnimateDiv.style.height =0; 
    var height = 150/seconds;
    running = false;
    clearInterval(intervalId);
    if (!running) {
        running =true;
        intervalId =setInterval(() =>{
            
            seconds--;
            formateTime(id,seconds,height);
            if(seconds<1){

                let timer = document.getElementById(`timer-${id}`);
                timer.innerHTML = "Time Up...!";
                let audio = document.getElementById(`audio-${id}`);
                console.log(audio.id);
                audio.play();
                running=false;
                clearInterval(intervalId);
                var timerAnimateDiv = document.getElementById(`timer-animation-${id}`);
                timerAnimateDiv.style.height ='150px';

            }
        },100)  
    }
}

function stopTimer(id){
    running=false;
    var timerAnimateDiv = document.getElementById(`timer-animation-${id}`);
    timerAnimateDiv.style.height =0;
    let timer = document.getElementById(`timer-${id}`);
    timer.innerHTML = "00:00";
    let audio = document.getElementById(`audio-${id}`);
    audio.pause();
    audio.currentTime = 0;
    clearInterval(intervalId);
}
