// setTimeout(function, delay, ...args)
const progressBar = document.getElementsByClassName("circular-progress")[0];
const valueContainer = document.getElementsByClassName("value-container")[0];

let counter = 0;

const idInterval = setInterval(() => {
  counter++;
  if (counter <= 100) {
    valueContainer.textContent = `${counter}%`;
  } else {
    clearInterval(idInterval);
  }

  progressBar.style.background = `conic-gradient(#D01D2C ${
    counter * 3.6
  }deg, #F2EEE3 ${counter * 7.2}deg)`;
}, 1000);

// #D01D2C
//  #F2EEE3
