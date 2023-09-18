// Описаний в документації
import flatpickr from "flatpickr";

// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return value < 10 ? String(value).padStart(2, '0') : value;
}

const startBtn = document.querySelector('button[data-start]');
const elDays = document.querySelector('span[data-days]');
const elHours = document.querySelector('span[data-hours]');
const elMinutes = document.querySelector('span[data-minutes]');
const elSeconds = document.querySelector('span[data-seconds]');

let selectedDate;

function countDown() {
    const differenceMs = selectedDate.getTime() - Date.now();
    const { days, hours, minutes, seconds } = convertMs(differenceMs);

    elDays.textContent = addLeadingZero(days);
    elHours.textContent = addLeadingZero(hours);
    elMinutes.textContent = addLeadingZero(minutes);
    elSeconds.textContent = addLeadingZero(seconds);
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);

      const difference = selectedDates[0].getTime() - Date.now();

      if (difference <= 0) {
          startBtn.disabled = true;

          alert("Please choose a date in the future");

          return;
      }

      selectedDate = selectedDates[0];
      startBtn.disabled = false;
    },
};

flatpickr('input#datetime-picker', options);

startBtn.disabled = true;
startBtn.addEventListener('click', function () {
    setInterval(countDown, 1000);
});
