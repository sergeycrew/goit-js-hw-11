import Swal from 'sweetalert2';


const refs = {
dateInput: document.getElementById('date-selector'),
startBtn: document.querySelector('[data-start]'),
outputDays: document.querySelector('[data-days]'),
outputHours: document.querySelector('[data-hours]'),
outputMinutes: document.querySelector('[data-minutes]'),
outputSeconds: document.querySelector('[data-seconds]')
} ;

refs.startBtn.setAttribute('disabled', true);

refs.dateInput.addEventListener('change', (event) => {
    refs.startBtn.removeAttribute('disabled');
const enteredData = event.target.value;
const currentDate = Date.now();
const targetDate = new Date(enteredData);
const targetTime = targetDate.getTime();
if (targetTime <= currentDate) {

    refs.startBtn.setAttribute('disabled', true);
          Swal.fire({
            title: 'Error!',
            text: 'Please choose a date in the future',
            icon: 'error',
            confirmButtonText: 'Return'
    })
     }
 })

class Timer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
}
start() {
    if (this.isActive) {
      return;
    }
    const currentDate = Date.now();
    const targetDate = Date.parse(refs.dateInput.value)
    const restTime = targetDate - currentDate;
    // restTime is const
    this.isActive = true;
    this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        // this currentTime constantly changing every 1000
        // deltaTime is counting Up
        const deltaTime = currentTime - currentDate;
        //currentDate is const
        const ms = restTime - deltaTime;
        const time = this.convertMs(ms);
        this.onTick(time);
        if (ms === 0) {
            clearInterval(this.intervalId)
        }
    }, 1000)

}

pad(value) {
    return String(value).padStart(2, '0');
}
convertMs(ms) {
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
  }
  const timer = new Timer({
    onTick: updateClockface,
  });

  refs.startBtn.addEventListener('click', timer.start.bind(timer));

  function updateClockface({ days, hours, minutes, seconds }) {
      refs.outputDays.textContent = `${days}`;
      refs.outputHours.textContent = `${hours}`;
      refs.outputMinutes.textContent = `${minutes}`;
      refs.outputSeconds.textContent = `${seconds}`;}





















