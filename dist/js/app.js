// Set the date to countdown to (Year, Month (0-indexed), Day, Hour, Minute, Second)
const targetDate = new Date('2023-08-24T23:59:59');

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = formatTime(days);
    document.getElementById('hours').innerText = formatTime(hours);
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
  } else {
    // Countdown has ended, do something here
    document.getElementById('countdown').innerText = "Countdown expired!";
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);