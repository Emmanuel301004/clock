function setTime() {
    const timeInput = document.getElementById('time').value;
    const [hours, minutes, seconds] = timeInput.split(':').map(Number);
    setClockHands(hours, minutes, seconds);
  }
  
  function setClockHands(hours, minutes, seconds) {
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
  
    const hoursDeg = (hours % 12) * 30 + (minutes / 60) * 30;
    const minutesDeg = (minutes * 6) + (seconds / 60) * 6;
    const secondsDeg = seconds * 6;
  
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  }
  
  function updateClock() {
    const now = new Date();
    setClockHands(now.getHours(), now.getMinutes(), now.getSeconds());
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  