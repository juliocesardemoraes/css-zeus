// setTimeout(function, delay, ...args)
let counter = 0;

const incrementCounter = (message) => {
  counter++;
  console.log(message + counter);

  if (counter > 3) {
    clearTimeout(idCounterTimeout);
  }
};

const idCounterTimeout = setTimeout(incrementCounter, 1000);

clearTimeout(idCounterTimeout);

const idCounterInterval = setInterval(incrementCounter, 1000, "Timeout 1: ");
