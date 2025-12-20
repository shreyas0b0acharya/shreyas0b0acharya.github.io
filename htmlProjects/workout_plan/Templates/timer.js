
// functio to create timer div and timer animatin div
function formateTime(id,seconds) {
    
    let formateMinutes = parseInt(seconds/60);
    let formateSeconds = seconds % 60;

    let timer = document.getElementById(`timer-${id}`);

    timer.innerHTML = `${String(formateMinutes).padStart(2,0)}:${String(formateSeconds).padStart(2,0)}`;
    console.log(`${String(formateMinutes).padStart(2,0)}:${String(formateSeconds).padStart(2,0)}`)
}

var running = false;
var intervalId;
var height =0;

// function to start the timer and animation
function setTimer(id,seconds) {

    var timerAnimateDiv = document.getElementById(`timer-animation-${id}`);
    console.log(`timer-animation-${id}`);
    timerAnimateDiv.style.height ="80px"; 
    timerAnimateDiv.style.transition=`height ${seconds}s linear`;
    
    running = false;
    clearInterval(intervalId);

    if (!running) {
        running =true;
        intervalId =setInterval(() =>{ 
            seconds--;
            formateTime(id,seconds);
            if(seconds<1){
                let timer = document.getElementById(`timer-${id}`);
                timer.innerHTML = "Time Up...!";
                let audio = document.getElementById(`audio-${id}`);
                console.log(audio.id);
                audio.play();
                running=false;
                clearInterval(intervalId);
            }
        },1000)  
    }
}

//timer to stop the timer and the animation
function stopTimer(id){
    running=false;
    var timerAniDiv = document.getElementById(`timer-animation-${id}`);
    timerAniDiv.style.height ='0px';
    timerAniDiv.style.transition=`height 1.5s linear`;
    let timer = document.getElementById(`timer-${id}`);
    timer.innerHTML = "00:00";
    let audio = document.getElementById(`audio-${id}`);
    audio.pause();
    audio.currentTime = 0;
    clearInterval(intervalId);
}
