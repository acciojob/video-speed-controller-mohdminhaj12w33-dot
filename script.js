const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');

// Play / pause toggle
toggle.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
});

// Rewind 10s
rewind.addEventListener('click', () => {
  video.currentTime -= 10;
});

// Forward 25s
forward.addEventListener('click', () => {
  video.currentTime += 25;
});

// Volume control
volume.addEventListener('input', () => {
  video.volume = volume.value;
});

// Playback speed control
playbackSpeed.addEventListener('input', () => {
  video.playbackRate = playbackSpeed.value;
});

// Update toggle button if video is paused/played via other methods
video.addEventListener('play', () => toggle.textContent = '❚ ❚');
video.addEventListener('pause', () => toggle.textContent = '►');
