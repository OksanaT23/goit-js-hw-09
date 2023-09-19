const firstDelayEl = document.querySelector('input[name="delay"]');
const delayStepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
const submitBtn = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
    return new Promise(resolve => {
      setTimeout(() => resolve({ position, delay }), delay);
    });
  } else {
    // Reject
    return new Promise((resolve, reject) => {
      setTimeout(() => reject({ position, delay }), delay);
    });
  }
}

function generatePromises(firstDelay, delayStep, amount) {
  for (let step = 0; step < amount; step++) {
    const position = step + 1;
    const delay = firstDelay + step * delayStep;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

submitBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const firstDelay = parseInt(firstDelayEl.value, 10);
  const delayStep = parseInt(delayStepEl.value, 10);
  const amount = parseInt(amountEl.value, 10);

  generatePromises(firstDelay, delayStep, amount);
});