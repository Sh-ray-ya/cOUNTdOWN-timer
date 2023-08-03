let timerInterval;
let timerRunning = false;
let timeInSeconds = 300; // Change this to set the countdown time in seconds (e.g., 300 seconds = 5 minutes)

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    if (timerRunning) return;

    timerInterval = setInterval(updateTimer, 1000);
    timerRunning = true;
    updateTimer();
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 300;
    updateTimer();
}

function updateTimer() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
    timerDisplay.textContent = formattedTime;

    if (timeInSeconds <= 0) {
        stopTimer();
    } else {
        timeInSeconds--;
    }
}

function padNumber(number) {
    return number.toString().padStart(2, '0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

