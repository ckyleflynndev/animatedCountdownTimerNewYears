const daysEl = document.getElementById('days');
const minutesEl = document.getElementById('minutes');
const hoursEl = document.getElementById('hours');
const secondsEl = document.getElementById('seconds');

const newYears = '1 Jan 2022';

setInterval(countdown, 1000);
setInterval(createSnowFlake, 100);

function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const seconds = Math.floor(totalSeconds % 60);

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const days = Math.floor(totalSeconds / 3600/ 24);


  daysEl.innerHTML = days;
  minutesEl.innerHTML = minutes;
  hoursEl.innerHTML = hours;
  secondsEl.innerHTML = seconds;
}

function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}

