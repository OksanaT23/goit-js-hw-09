function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let switcherId = null;

function changeColor() {
    const color = getRandomHexColor();

    document.body.style.backgroundColor = color;
}

startBtn.addEventListener('click', function () {
    startBtn.disabled = true;
    switcherId = setInterval(changeColor, 1000);
});
stopBtn.addEventListener('click', function () {
    clearInterval(switcherId);
    startBtn.disabled = false;
});