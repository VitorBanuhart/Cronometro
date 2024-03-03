const minutesStop = document.querySelector(".min-stopwatch");
const secondsStop = document.querySelector(".sec-stopwatch");
const thousandthsStop = document.querySelector(".mil-stopwatch");

const start_btn = document.querySelector("#start-stopwatch");
const pause_btn = document.querySelector("#pause-stopwatch");
const reset_btn = document.querySelector("#reset-stopwatch");
const resume_btn = document.querySelector("#resume-stopwatch");

const colorChanged = document.querySelector("#stopwatch");
const colorChangedBody = document.querySelector("#container")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let paused = false;

// functions
start_btn.addEventListener("click", startTimer);
pause_btn.addEventListener("click", pauseTime);
resume_btn.addEventListener("click", resumeTime);
reset_btn.addEventListener("click", resetTime);
    
    function startTimer() {
        paused = false;

        interval = setInterval(() => {
                if(!paused) {
                miliseconds += 10

                if(miliseconds === 1000) {
                    seconds++;
                    miliseconds = 0;
                }

                if(seconds === 60){
                    minutes++;
                    seconds = 0;
                }

                minutesStop.textContent = formatTimer(minutes);
                secondsStop.textContent = formatTimer(seconds);
                thousandthsStop.textContent = formatMiliseconds(miliseconds);
            }
        }, 10)
        
        colorChanged.style.backgroundColor = "#0c9308";
        colorChangedBody.style.backgroundColor  = "#008000";

        start_btn.style.display = "none";
        resume_btn.style.display = "none";
        reset_btn.style.display = "none";
        pause_btn.style.display = "block";
    }

    function pauseTime() {
        paused = true;
        pause_btn.style.display = "none";
        resume_btn.style.display = "block";
        reset_btn.style.display = "block";

        colorChanged.style.backgroundColor = "#008000";
        colorChangedBody.style.backgroundColor  = "#0c9308";
    }

    function resumeTime() {
        paused = false;
        pause_btn.style.display = "block";
        resume_btn.style.display = "none";
        reset_btn.style.display = "none";

        colorChanged.style.backgroundColor = "#0c9308";
        colorChangedBody.style.backgroundColor  = "#008000";
    }

    function resetTime() {
        clearInterval(interval);
        minutes = 0;
        seconds = 0;
        miliseconds = 0;
        
        minutesStop.textContent = '00';
        secondsStop.textContent = '00';
        thousandthsStop.textContent = '000';

        start_btn.style.display = "block";
        resume_btn.style.display = "none";
        reset_btn.style.display = "none";

        colorChanged.style.backgroundColor = "#008000";
        colorChangedBody.style.backgroundColor  = "#0c9308";
    }

    function formatTimer(time) {
        return time < 10 ? `0${time}` : time;
    }

    function formatMiliseconds(time) {
        return time < 100 ? `${time}`.padStart(3, "0") : time;
    }