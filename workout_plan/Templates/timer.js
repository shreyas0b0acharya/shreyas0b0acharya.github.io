

function formateTime(seconds,height) {
    var timerAnimateDiv = document.getElementById('timer-animation-1');
    var currentHeight = parseFloat(window.getComputedStyle(timerAnimateDiv).height); // Get the current height in pixels
    timerAnimateDiv.style.height = (currentHeight + height) + 'px'; // Add the desired height and set it in pixels


    let formateMinutes = parseInt(seconds/60);
    let formateSeconds = seconds % 60;

    let timer = document.getElementById("timer-1");

    timer.innerHTML = `${String(formateMinutes).padStart(2,0)}:${String(formateSeconds).padStart(2,0)}`;
    console.log(`${String(formateMinutes).padStart(2,0)}:${String(formateSeconds).padStart(2,0)}`)
}

var running = false;
var intervalId;
var height =0;

function setTimer(seconds) {
    var timerAnimateDiv = document.getElementById('timer-animation-1');
    timerAnimateDiv.style.height =0; 
    var height = 150/seconds;
    running = false;
    clearInterval(intervalId);
    if (!running) {
        running =true;
        intervalId =setInterval(() =>{
            
            seconds--;
            formateTime(seconds,height);
            if(seconds<1){
                running=false;
                clearInterval(intervalId);
            }
            
        },200)  
    }
}

function stopTimer(){
    running=false;
    clearInterval(intervalId);
}
