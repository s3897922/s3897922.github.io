const audio = document.querySelector("#custom-audio-player");
const audioPlayPauseBtn = document.querySelector("#audio-play-pause-btn");
const audioPlayPauseImg = document.querySelector("#audio-play-pause-img");
const audioReplayBtn = document.querySelector("#audio-replay-btn");
const audioProgressBar = document.querySelector("#audio-progress-bar-fill");
audio.removeAttribute("controls");

audioPlayPauseBtn.addEventListener("click", toggleAudioPlayPause);
audioReplayBtn.addEventListener("click", replayAudio);
audio.addEventListener("timeupdate", updateAudioProgressBar);
function toggleAudioPlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    audioPlayPauseImg.src =
      "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    audioPlayPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateAudioProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  audioProgressBar.style.width = value + "%";
}
function replayAudio() {
  audio.currentTime = 0;
  audio.play();
  audioPlayPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; // Update play/pause button to show pause icon
}

// Add other functionalities here
const video = document.querySelector("#custom-video-player");
const videoPlayPauseBtn = document.querySelector("#video-play-pause-btn");
const videoPlayPauseImg = document.querySelector("#video-play-pause-img");
const videoReplayBtn = document.querySelector("#video-replay-btn");
const videoProgressBar = document.querySelector("#video-progress-bar-fill");
video.removeAttribute("controls");

videoPlayPauseBtn.addEventListener("click", toggleVideoPlayPause);
videoReplayBtn.addEventListener("click", replayVideo);
video.addEventListener("timeupdate", updateVideoProgressBar);
function toggleVideoPlayPause() {
  if (video.paused || video.ended) {
    video.play();
    videoPlayPauseImg.src =
      "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    videoPlayPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateVideoProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  videoProgressBar.style.width = value + "%";
}
function replayVideo() {
  video.currentTime = 0;
  video.play();
  videoPlayPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png"; // Update play/pause button to show pause icon
}
