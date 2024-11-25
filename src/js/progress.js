let progressBar = document.getElementsByClassName("circular-progress")[0];
let valueContainer = document.getElementsByClassName("value-container")[0];

let progressValue = 0;
let progressEndValue = 100;
const timer = 1;
let timerToProgress = ((timer * 60) / 100) * 1000;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #D01D2C ${progressValue * 3.6}deg, 
    #F2EEE3 ${progressValue * 3.6}deg  
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, timerToProgress);
