const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleUpdate() {
  const y = this.offsetY;
  const percent = y / this.offsetHeight;

  const min = 0.5;
  const max = 4;

  const playbackRate = percent * (max - min) + min;

  speedBar.style.height = `${percent * 100}%`;
  speedBar.textContent = playbackRate.toFixed(2) + '×';
  video.playbackRate = playbackRate;
}

// Attach the "mousemove" event to the speed control div
speed.addEventListener('mousemove', handleUpdate);
