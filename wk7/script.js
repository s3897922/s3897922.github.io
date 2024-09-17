const notify = document.querySelector("#notify");
console.log(notify);

const playButton = document.querySelector("#play-button");
console.log(playButton);
playButton.addEventListener("click", playAudio);
function playAudio() {
  notify.play();
}

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);
pauseButton.addEventListener("click", pauseAudio);
function pauseAudio() {
  notify.pause();
}
